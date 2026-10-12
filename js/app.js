// ═══════════════════════════════════════
//  STATE
//  applied = تنظیمات ذخیره‌شده که بازی ازش استفاده می‌کنه
//  draft   = پیش‌نویس موقتِ صفحهٔ بسته‌ها تا وقتی «ذخیره» نزدی
// ═══════════════════════════════════════
// سوال‌ها از questions.json لود می‌شن (قبل از init)
let mainDecks = {}, addOnPacks = [];

const STORAGE_KEY = 'khamushi_settings_v1';
const COLORS = ['Red', 'Blue', 'Green', 'Yellow'];
const COLOR_LABELS = { Red: 'قرمز', Blue: 'آبی', Green: 'سبز', Yellow: 'زرد' };

let players = [], currentPlayerIndex = 0, boardColors = [];
let rolling = false;
let lastTileIndex = -1;                 // آخرین خونه‌ای که بازیکن روش نشسته (برای هایلایت)
const drawn = new Set();                // سوال‌هایی که تو این دور دیده شدن (برای جلوگیری از تکرار)
const PLAYER_COLORS = ['#ff5c8a', '#4dd0e1', '#ffd54f', '#b388ff', '#69f0ae', '#ff9e40', '#80b4ff', '#e0e0e0'];
const toFa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

function defaultSettings() {
  const main = {};
  Object.keys(mainDecks).forEach(k => { main[k] = new Set(mainDecks[k].questions.map(q => q.id)); });
  const addon = {};
  addOnPacks.forEach(p => { addon[p.id] = new Set(p.questions.map(q => q.id)); });
  return { main, addon, packs: new Set() };
}
function cloneSettings(s) {
  const c = { main: {}, addon: {}, packs: new Set(s.packs) };
  Object.keys(s.main).forEach(k => c.main[k] = new Set(s.main[k]));
  Object.keys(s.addon).forEach(k => c.addon[k] = new Set(s.addon[k]));
  return c;
}
function serialize(s) {
  const out = { main: {}, addon: {}, packs: [...s.packs].sort() };
  Object.keys(s.main).sort().forEach(k => out.main[k] = [...s.main[k]].sort());
  Object.keys(s.addon).sort().forEach(k => out.addon[k] = [...s.addon[k]].sort());
  return JSON.stringify(out);
}
function saveSettings(s) {
  try { sessionStorage.setItem(STORAGE_KEY, serialize(s)); } catch (e) { /* حالت خصوصی/غیرفعال */ }
}
function loadSettings() {
  const s = defaultSettings();
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return s;
    const d = JSON.parse(raw);
    // فقط شناسه‌هایی که هنوز وجود دارن پذیرفته می‌شن (اگه سوالی بعداً حذف/عوض شده باشه)
    Object.keys(s.main).forEach(k => {
      if (Array.isArray(d.main?.[k])) {
        const valid = new Set(mainDecks[k].questions.map(q => q.id));
        s.main[k] = new Set(d.main[k].filter(id => valid.has(id)));
      }
    });
    addOnPacks.forEach(p => {
      if (Array.isArray(d.addon?.[p.id])) {
        const valid = new Set(p.questions.map(q => q.id));
        s.addon[p.id] = new Set(d.addon[p.id].filter(id => valid.has(id)));
      }
    });
    if (Array.isArray(d.packs)) s.packs = new Set(d.packs.filter(id => addOnPacks.some(p => p.id === id)));
  } catch (e) { return defaultSettings(); }
  return s;
}

let applied = null, draft = null;   // بعد از لود شدن questions.json مقدار می‌گیرن

function isDirty() { return serialize(draft) !== serialize(applied); }

// ═══════════════════════════════════════
//  AGE GATE
// ═══════════════════════════════════════
function confirmAgeGate() {
  document.getElementById('ageGate').style.display = 'none';
  try { sessionStorage.setItem('khamushi_age_ok', '1'); } catch (e) {}
}
try { if (sessionStorage.getItem('khamushi_age_ok') === '1') document.getElementById('ageGate').style.display = 'none'; } catch (e) {}

// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
const PAGES = ['home', 'game', 'settings', 'rules', 'about', 'privacy'];
let currentPage = 'home';

function goToPage(id, opts = {}) {
  if (!applied) return;   // هنوز سوال‌ها لود نشدن
  if (!PAGES.includes(id)) id = 'home';
  // اگه تغییرات ذخیره‌نشده تو صفحهٔ بسته‌ها هست، قبل از رفتن بپرس
  if (currentPage === 'settings' && id !== 'settings' && !opts.force && isDirty()) {
    if (!confirm('تغییرات بسته‌ها ذخیره نشده. بدون ذخیره خارج بشی؟')) {
      if (opts.fromHash) history.replaceState(null, '', '#settings');
      return;
    }
    draft = cloneSettings(applied);
  }
  currentPage = id;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === id));
  if (id === 'settings') renderSettings();
  if (id === 'game') { renderActivePacksBar(); renderBoard(); }
  if (!opts.fromHash && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  window.scrollTo(0, 0);
}
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', e => { e.preventDefault(); goToPage(a.dataset.page); })
);
// دکمهٔ «برگشت» مرورگر/گوشی
window.addEventListener('hashchange', () => goToPage(location.hash.slice(1) || 'home', { fromHash: true }));
window.addEventListener('beforeunload', e => {
  if (currentPage === 'settings' && isDirty()) { e.preventDefault(); e.returnValue = ''; }
});

// ═══════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════
let toastTimer;
function showToast(msg, dur = 2800) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), dur);
}

// ═══════════════════════════════════════
//  POOLS (کدوم سوال‌ها الان فعالن)
// ═══════════════════════════════════════
function activePackQuestions(s = applied) {
  const out = [];
  addOnPacks.forEach(p => {
    if (s.packs.has(p.id)) {
      p.questions.forEach(q => { if (s.addon[p.id].has(q.id)) out.push({ q, packName: p.name }); });
    }
  });
  return out;
}
function colorsWithQuestions(s = applied) {
  return COLORS.filter(c => s.main[c] && s.main[c].size > 0);
}
function totalActiveQuestions(s) {
  return colorsWithQuestions(s).reduce((n, c) => n + s.main[c].size, 0) + activePackQuestions(s).length;
}

// ═══════════════════════════════════════
//  BOARD — فقط رنگ‌هایی که سوال فعال دارن وارد زمین می‌شن
// ═══════════════════════════════════════
function generateBoard() {
  boardColors = [];
  let colors = colorsWithQuestions();
  const packOnly = colors.length === 0 && activePackQuestions().length > 0;
  for (let i = 0; i < 60; i++) {
    if (i === 0) { boardColors.push({ color: 'Start', value: 0 }); continue; }
    if (packOnly) { boardColors.push({ color: 'Pack', value: Math.floor(Math.random() * 6) + 1 }); continue; }
    if (!colors.length) { boardColors.push({ color: 'Empty', value: 0 }); continue; }
    const c = colors[Math.floor(Math.random() * colors.length)];
    const v = ['Red', 'Blue'].includes(c) ? Math.floor(Math.random() * 3) + 4 : Math.floor(Math.random() * 3) + 1;
    boardColors.push({ color: c, value: v });
  }
}

const TILE_CLASS = { Red: 'tile-Red', Blue: 'tile-Blue', Green: 'tile-Green', Yellow: 'tile-Yellow', Pack: 'tile-Pack', Empty: 'tile-Empty', Start: 'tile-Start' };
const COLS = 6;

function playerColor(i) { return PLAYER_COLORS[i % PLAYER_COLORS.length]; }

// زمین ۶۰ خونه‌ای به‌صورت مارپیچ (۶ ستون × ۱۰ ردیف)؛ خونهٔ ۰ شروع و ۵۹ آخره، بعدش دوباره از شروع
function renderBoard() {
  const el = document.getElementById('board');
  if (!el || !boardColors.length) return;
  el.innerHTML = boardColors.map((t, i) => {
    const row = Math.floor(i / COLS);
    const colInRow = i % COLS;
    const col = row % 2 === 0 ? colInRow + 1 : COLS - colInRow;   // ردیف‌های زوج/فرد جهت مخالف
    const here = players.map((p, pi) => ({ p, pi })).filter(x => x.p.position === i);
    const markers = here.map(x =>
      `<span class="marker" style="background:${playerColor(x.pi)}" title="${escapeHtml(x.p.name)}">${toFa(x.pi + 1)}</span>`).join('');
    return `<div class="tile ${TILE_CLASS[t.color] || ''} ${i === lastTileIndex ? 'last' : ''}" style="grid-row:${row + 1};grid-column:${col}">
      <span class="tile-num">${i === 0 ? '★' : toFa(i)}</span>
      ${markers ? `<span class="markers">${markers}</span>` : ''}
    </div>`;
  }).join('');
  const legend = document.getElementById('boardLegend');
  if (legend) {
    legend.innerHTML = players.length
      ? players.map((p, i) => `<span class="legend-item"><span class="marker" style="background:${playerColor(i)}">${toFa(i + 1)}</span>${escapeHtml(p.name)}</span>`).join('')
      : '<span class="empty-hint">با اضافه شدن بازیکن‌ها، مهره‌هاشون روی زمین دیده می‌شه</span>';
  }
}

function resetGameProgress() {
  drawn.clear();
  lastTileIndex = -1;
  players.forEach(p => p.position = 0);
  currentPlayerIndex = 0;
  generateBoard();
  document.getElementById('cardResult').classList.remove('show');
  document.getElementById('turnDisplay').classList.remove('show');
  document.getElementById('diceDisplay').classList.remove('show');
  renderPlayers();
  renderActivePacksBar();
  renderBoard();
}

// ═══════════════════════════════════════
//  PLAYERS
// ═══════════════════════════════════════
function addPlayer() {
  if (rolling) return;
  const inp = document.getElementById('playerNameInput');
  const name = inp.value.trim();
  if (!name) return;
  if (players.find(p => p.name === name)) { showToast('این اسم قبلاً هست'); return; }
  players.push({ name, position: 0 });
  inp.value = ''; inp.focus();
  renderPlayers();
}
function removePlayer(i) {
  if (rolling) return;
  players.splice(i, 1);
  if (i < currentPlayerIndex) currentPlayerIndex--;
  if (currentPlayerIndex >= players.length) currentPlayerIndex = 0;
  renderPlayers();
}
function renderPlayers() {
  const el = document.getElementById('playersList');
  if (!players.length) {
    el.innerHTML = '<span class="empty-hint">هنوز کسی اضافه نشده</span>';
  } else {
    el.innerHTML = players.map((p, i) =>
      `<div class="player-chip ${i === currentPlayerIndex ? 'current' : ''}">
        <span class="marker sm" style="background:${playerColor(i)}">${toFa(i + 1)}</span>${escapeHtml(p.name)}<span class="remove-player" onclick="removePlayer(${i})">✕</span>
      </div>`
    ).join('');
  }
  const btn = document.getElementById('btnRoll');
  if (btn) btn.disabled = players.length < 2 || rolling;

  renderBoard();

  const turnNameEl = document.getElementById('turnName');
  if (turnNameEl && players[currentPlayerIndex]) {
    turnNameEl.textContent = players[currentPlayerIndex].name;
  }
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ═══════════════════════════════════════
//  CARD DRAW (کاملاً محلی، بدون سرور)
// ═══════════════════════════════════════
// انتخاب بدون تکرار: تا همهٔ سوال‌های یک مجموعه نیومده، سوالی دوباره نمیاد
function pickNoRepeat(pool) {
  let fresh = pool.filter(x => !drawn.has(x.id));
  if (!fresh.length) { pool.forEach(x => drawn.delete(x.id)); fresh = pool; }   // همه دیده شدن → از نو
  const pick = fresh[Math.floor(Math.random() * fresh.length)];
  drawn.add(pick.id);
  return pick;
}

function drawCard(color) {
  const mainPool = (mainDecks[color]?.questions || []).filter(q => applied.main[color]?.has(q.id));
  const packPool = activePackQuestions().map(x => ({ id: x.q.id, text: x.q.text, packName: x.packName }));

  let fromPack = false;
  if (!mainPool.length) fromPack = packPool.length > 0;                    // رنگ بدون سوال (یا زمین فقط-بسته)
  else if (packPool.length > 0 && Math.random() < 0.25) fromPack = true;   // ۲۵٪ شانس بستهٔ الحاقی

  if (fromPack) {
    const pick = pickNoRepeat(packPool);
    return { text: pick.text, isAddon: true, packName: pick.packName };
  }
  if (!mainPool.length) return { text: 'سوال فعالی نمونده! از بخش «بسته‌ها» یکی رو فعال کن 😅', isAddon: false, empty: true };
  return { text: pickNoRepeat(mainPool).text, isAddon: false };
}

// ═══════════════════════════════════════
//  GAME TURN
// ═══════════════════════════════════════
const DICE = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
// جریمه به‌صورت کسری: ۶/۶ (شش‌ششم)، ۱/۶ (یک‌ششم)
const SIXTH_NAMES = ['', 'یک‌ششم', 'دو‌ششم', 'سه‌ششم', 'چهار‌ششم', 'پنج‌ششم', 'شش‌ششم'];
function penaltyText(v) { return `امتناع = ${toFa(v)}/۶ (${SIXTH_NAMES[v]})`; }
function rollDice() { return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1; }

function nextTurn() {
  if (rolling) return;
  if (players.length < 2) { showToast('حداقل دو بازیکن وارد کن'); return; }
  if (totalActiveQuestions(applied) === 0) { showToast('هیچ سوال فعالی نیست؛ از «بسته‌ها» فعال کن'); return; }
  rolling = true;
  const btn = document.getElementById('btnRoll');
  btn.disabled = true;

  const player = players[currentPlayerIndex];
  document.getElementById('turnDisplay').classList.add('show');
  document.getElementById('turnName').textContent = player.name;

  const diceEl = document.getElementById('diceDisplay');
  diceEl.classList.add('show'); diceEl.classList.remove('anim');

  let n = 0;
  const iv = setInterval(() => {
    const d1 = Math.floor(Math.random() * 6) + 1, d2 = Math.floor(Math.random() * 6) + 1;
    diceEl.textContent = DICE[d1] + ' ' + DICE[d2];
    if (++n >= 10) {
      clearInterval(iv);
      const dice = rollDice();
      player.position = (player.position + dice) % boardColors.length;
      lastTileIndex = player.position;
      showTileResult(boardColors[player.position], player, dice);
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      rolling = false;
      renderPlayers();   // شامل رندر دوبارهٔ زمین با جای جدید مهره‌ها
    }
  }, 75);
}

function showTileResult(tile, player, dice) {
  const res = document.getElementById('cardResult');
  const badge = document.getElementById('cardBadge');

  if (tile.color === 'Start') {
    badge.textContent = 'شروع';
    badge.className = 'card-color-badge badge-start';
    document.getElementById('cardText').textContent = 'به خونهٔ شروع رسیدی، مبارک باشه!';
    document.getElementById('cardPenalty').textContent = '';
    document.getElementById('cardMeta').textContent = '';
    animateCard(res);
    return;
  }

  const result = drawCard(tile.color);
  if (result.isAddon) {
    badge.textContent = result.packName;           // اسم خود بسته، نه عبارت کلی «بستهٔ الحاقی»
    badge.className = 'card-color-badge badge-pack';
  } else {
    badge.textContent = COLOR_LABELS[tile.color] || 'خالی';
    badge.className = 'card-color-badge badge-' + tile.color;
  }
  document.getElementById('cardText').textContent = result.text;
  document.getElementById('cardPenalty').textContent = result.empty ? '' : penaltyText(tile.value);
  document.getElementById('cardMeta').textContent = `خونهٔ ${player.position} • تاس: ${dice}`;
  animateCard(res);
}

function animateCard(res) {
  res.classList.add('show'); void res.offsetWidth; res.classList.add('anim');
  setTimeout(() => res.classList.remove('anim'), 400);
}

// ═══════════════════════════════════════
//  SETTINGS PAGE (روی draft کار می‌کنه)
// ═══════════════════════════════════════
function renderSettings() {
  document.getElementById('packsGrid').innerHTML = addOnPacks.map(renderPackCard).join('');
  document.getElementById('mainDecksWrap').innerHTML =
    Object.entries(mainDecks).map(([color, deck]) => renderDeckSection(color, deck)).join('');
  updateSaveBar();
}

function packInitial(name) { return (name || '؟').trim().charAt(0); }

function renderPackCard(pack) {
  const isActive = draft.packs.has(pack.id);
  const en = draft.addon[pack.id];
  return `<div class="pack-card ${isActive ? 'enabled' : ''}" id="packcard-${pack.id}">
    <div class="pack-header" onclick="togglePackExpand('${pack.id}')">
      <div class="pack-header-left">
        <span class="pack-avatar">${packInitial(pack.name)}</span>
        <div>
          <div class="pack-name">${pack.name}</div>
          <div class="pack-desc" id="packcount-${pack.id}">${en.size} از ${pack.questions.length} سوال فعال</div>
        </div>
      </div>
      <label class="toggle-switch" onclick="event.stopPropagation()">
        <input type="checkbox" ${isActive ? 'checked' : ''} onchange="toggleActivePack('${pack.id}', this.checked)">
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="pack-questions" id="packq-${pack.id}">
      <div class="pack-questions-inner">
        <h4>${pack.questions.length} سوال در این بسته</h4>
        <div class="bulk-actions">
          <button class="btn-bulk" onclick="bulkToggleAddon('${pack.id}',true)">انتخاب همه</button>
          <button class="btn-bulk" onclick="bulkToggleAddon('${pack.id}',false)">حذف همه</button>
        </div>
        ${pack.questions.map(q => `
          <div class="q-item ${!en.has(q.id) ? 'disabled' : ''}" id="qi-${q.id}">
            <input type="checkbox" class="q-checkbox" ${en.has(q.id) ? 'checked' : ''}
              onchange="toggleAddonQ('${pack.id}','${q.id}',this.checked)">
            <span class="q-color-dot dot-pack"></span>
            <span class="q-text">${escapeHtml(q.text)}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderDeckSection(color, deck) {
  const en = draft.main[color];
  return `<div class="deck-section">
    <div class="deck-header" onclick="toggleDeckExpand('${color}')">
      <div style="display:flex;align-items:center;gap:8px">
        <span class="color-pill pill-${color}">${deck.label}</span>
        <span style="font-size:.85rem;color:var(--ivory-mute)">${deck.questions.length} سوال</span>
      </div>
      <span class="deck-count" id="deckcount-${color}">${en.size} فعال</span>
    </div>
    <div class="deck-questions" id="deckq-${color}">
      <div class="bulk-actions" style="margin-top:10px">
        <button class="btn-bulk" onclick="bulkToggleMain('${color}',true)">انتخاب همه</button>
        <button class="btn-bulk" onclick="bulkToggleMain('${color}',false)">حذف همه</button>
      </div>
      ${deck.questions.map(q => `
        <div class="q-item ${!en.has(q.id) ? 'disabled' : ''}" id="mqi-${q.id}">
          <input type="checkbox" class="q-checkbox" ${en.has(q.id) ? 'checked' : ''}
            onchange="toggleMainQ('${color}','${q.id}',this.checked)">
          <span class="q-color-dot dot-${color}"></span>
          <span class="q-text">${escapeHtml(q.text)}</span>
        </div>`).join('')}
    </div>
  </div>`;
}

function togglePackExpand(id) { document.getElementById('packq-' + id).classList.toggle('open'); }
function toggleDeckExpand(c) { document.getElementById('deckq-' + c).classList.toggle('open'); }

function updatePackCount(pid) {
  const pack = addOnPacks.find(p => p.id === pid);
  document.getElementById('packcount-' + pid).textContent = `${draft.addon[pid].size} از ${pack.questions.length} سوال فعال`;
}
function updateDeckCount(color) {
  document.getElementById('deckcount-' + color).textContent = draft.main[color].size + ' فعال';
}

function toggleActivePack(id, val) {
  val ? draft.packs.add(id) : draft.packs.delete(id);
  document.getElementById('packcard-' + id).classList.toggle('enabled', val);
  updateSaveBar();
}
function toggleAddonQ(pid, qid, val) {
  val ? draft.addon[pid].add(qid) : draft.addon[pid].delete(qid);
  document.getElementById('qi-' + qid).classList.toggle('disabled', !val);
  updatePackCount(pid); updateSaveBar();
}
function toggleMainQ(color, qid, val) {
  val ? draft.main[color].add(qid) : draft.main[color].delete(qid);
  document.getElementById('mqi-' + qid).classList.toggle('disabled', !val);
  updateDeckCount(color); updateSaveBar();
}
function bulkToggleAddon(pid, val) {
  addOnPacks.find(p => p.id === pid).questions.forEach(q => {
    val ? draft.addon[pid].add(q.id) : draft.addon[pid].delete(q.id);
    const el = document.getElementById('qi-' + q.id);
    if (el) { el.classList.toggle('disabled', !val); el.querySelector('input').checked = val; }
  });
  updatePackCount(pid); updateSaveBar();
}
function bulkToggleMain(color, val) {
  mainDecks[color].questions.forEach(q => {
    val ? draft.main[color].add(q.id) : draft.main[color].delete(q.id);
    const el = document.getElementById('mqi-' + q.id);
    if (el) { el.classList.toggle('disabled', !val); el.querySelector('input').checked = val; }
  });
  updateDeckCount(color); updateSaveBar();
}

// ── نوار ذخیره ──
function updateSaveBar() {
  const dirty = isDirty();
  const total = totalActiveQuestions(draft);
  const status = document.getElementById('saveStatus');
  const saveBtn = document.getElementById('btnSaveSettings');
  const applyBtn = document.getElementById('btnSaveAndPlay');
  if (!status) return;
  status.textContent = total === 0
    ? 'هیچ سوالی فعال نیست!'
    : (dirty ? 'تغییرات ذخیره نشده' : 'همه‌چیز ذخیره شده ✓');
  status.className = 'save-status ' + (total === 0 ? 'warn' : dirty ? 'dirty' : 'ok');
  saveBtn.disabled = !dirty || total === 0;
  applyBtn.disabled = total === 0;
}

function saveSettingsAndApply(goPlay) {
  if (totalActiveQuestions(draft) === 0) { showToast('حداقل یک سوال باید فعال باشه'); return; }
  const changed = isDirty();
  if (changed) {
    applied = cloneSettings(draft);
    saveSettings(applied);
    resetGameProgress();   // زمین جدید با رنگ‌های فعال + برگشت همه به خونهٔ شروع
  }
  updateSaveBar();
  if (goPlay) {
    goToPage('game', { force: true });
    if (changed) showToast('تنظیمات ذخیره شد و بازی با بسته‌های جدید شروع شد');
  } else if (changed) {
    showToast('ذخیره شد؛ بازی با تنظیمات جدید رفرش شد');
  }
}

function resetSettingsToDefault() {
  if (!confirm('همهٔ سوال‌های اصلی فعال و بسته‌های الحاقی خاموش بشن؟')) return;
  draft = defaultSettings();
  renderSettings();
}

// ═══════════════════════════════════════
//  نوار دسته‌ها و بسته‌های فعال (صفحهٔ بازی)
// ═══════════════════════════════════════
function renderActivePacksBar() {
  const bar = document.getElementById('activePacksBar');
  const cats = colorsWithQuestions().map(c =>
    `<span class="cat-tag"><span class="q-color-dot dot-${c}"></span>${COLOR_LABELS[c]}<small>${applied.main[c].size}</small></span>`
  ).join('');
  const packs = addOnPacks.filter(p => applied.packs.has(p.id) && applied.addon[p.id].size > 0).map(p =>
    `<span class="active-pack-tag">${p.name}<small>${applied.addon[p.id].size}</small></span>`
  ).join('');
  bar.innerHTML =
    `<div class="bar-row"><span class="bar-label">دسته‌ها</span>${cats || '<span class="empty-hint">هیچ دسته‌ای فعال نیست</span>'}</div>` +
    `<div class="bar-row"><span class="bar-label">بسته‌ها</span>${packs || '<span class="empty-hint">بدون بستهٔ الحاقی</span>'}</div>`;
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
async function init() {
  const loading = document.getElementById('loadingMsg');
  try {
    const res = await fetch('questions.json');
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    mainDecks = data.mainDecks; addOnPacks = data.addOnPacks;
  } catch (e) {
    if (loading) loading.innerHTML = 'لود سوال‌ها ناموفق بود 😕<br>اگه فایل رو مستقیم باز کردی، با یه سرور محلی اجراش کن (مثلاً <code>python3 -m http.server</code>) یا صفحه رو رفرش کن.';
    return;
  }
  applied = loadSettings();
  draft = cloneSettings(applied);
  generateBoard();
  renderActivePacksBar();
  renderBoard();
  if (loading) loading.remove();
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const start = location.hash.slice(1);
  if (PAGES.includes(start) && start !== 'home') goToPage(start, { fromHash: true });
}
init();
