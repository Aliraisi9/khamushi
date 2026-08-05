const mainDecks = {
  "Red": {
    "label": "قرمز",
    "questions": [
      { "id": "r1", "text": "تماس آخر شب؛ با یکی از مخاطباتت تماس بگیر و تظاهر کن خیلی مستی!" },
      { "id": "r2", "text": "حس لامسه؛ با چشمای بسته یک چیزی بخور و حدس بزن چیه" },
      { "id": "r3", "text": "داستان سرایی؛ موضوع آخرین فیلم پورنی که دیدی" },
      { "id": "r4", "text": "زخم بستر نگیری؛ پاشو شیک بزن" },
      { "id": "r5", "text": "سوپرایزش کن؛ با یکی از دوستات تماس بگیر و تظاهر کن برای آخر هفته یک پلن سنگین دارید!" },
      { "id": "r6", "text": "روم به دیوار؛ به انتخاب خودت یکی رو لپ دنس مهمون کن" },
      { "id": "r7", "text": "در اتاق خواب بازه؟؛ پوزیشن مورد علاقه‌ات تو سکس رو نشون بده" },
      { "id": "r8", "text": "ستاره پورن شدی؛ صدای کارت رو اجرا کن" },
      { "id": "r9", "text": "خاطره‌بازی؛ یک عکس قدیمی از خودت نشون بده" },
      { "id": "r10", "text": "چجوری نخ بدم؛ یکی رو به انتخاب خودت ببوس" },
      { "id": "r11", "text": "هوا خیلی گرم شد!؛ یکی از لباس‌هات رو کم کن" },
      { "id": "r12", "text": "سوپر من امید شهر بود؛ یک شرت روی شلوارت بپوش" },
      { "id": "r13", "text": "غمگین به نظر میای؛ بغل‌دستی‌هات ۲۰ ثانیه قلقلکت میدن" },
      { "id": "r14", "text": "شهری بدون دست؛ بدون کمک از دستات یک چیزی بخور" },
      { "id": "r15", "text": "پول مهشید تموم شد؛ آبی شو تو کنسرت" },
      // سوالات جدید قرمز
      { "id": "r16", "text": "ماساژور اختصاصی؛ ۲ دقیقه شونه‌های فرد سمت راستت رو ماساژ بده" },
      { "id": "r17", "text": "پیامک اشتباهی؛ به آخرین کسی که بهت پیام داده بگو «هنوز به اون شب فکر می‌کنم...»" },
      { "id": "r18", "text": "مزایده بغل؛ به مدت ۱ دقیقه زیر بغل بغل‌دستی‌ت بشین و جوری رفتار کن انگار بالشتته!" },
      { "id": "r19", "text": "چالش لیس زدن؛ قطره شکلات یا سس روی انگشت یکی از افراد جمع بگذار و لیسش بزن" },
      { "id": "r20", "text": "چشم‌بند و تماس؛ با چشم بسته صورت سه نفر رو لمس کن و حدس بزن کی هستن" },
      { "id": "r21", "text": "تغییر ظاهر؛ تا ۲ دور بعدی کپشن یا بیو اینستاگرامت رو به پیشنهادی جمع تغییر بده" },
      { "id": "r22", "text": "اسلاید شو؛ گالری گوشیت رو باز کن و بگذار بغل‌دستی‌ت ۳ تا عکس به انتخاب خودش به جمع نشون بده" },
      { "id": "r23", "text": "رقص میله خیالی؛ ۱ دقیقه دور یک صندلی رقص صریح/سکسی انجام بده" },
      { "id": "r24", "text": "تلفن گویا؛ زنگ بزن به یک مغازه شبانه‌روزی و با لحن جذاب/عاشقانه سفارش جنس بده!" },
      { "id": "r25", "text": "میکروفون واقعی؛ یک تکه یخ رو از گردن تا خط کمر یکی از حاضرین پایین ببر" }
    ]
  },
  "Blue": {
    "label": "آبی",
    "questions": [
      { "id": "b1", "text": "یکشنبه است؟؛ به یکی از فتیش‌هات اعتراف کن" },
      { "id": "b2", "text": "بعد از تو آرامش هم رفت؛ تا حالا مامان باباتو رو کار گرفتی؟" },
      { "id": "b3", "text": "ماه پشت ابر؛ تاحالا شده رو کسی کراش بزنی یا عاشق کسی بشی که نباید" },
      { "id": "b4", "text": "قصدت چی بوده؛ آخرین دروغت به جنس مخالف برای چی بوده" },
      { "id": "b5", "text": "نامرئی شدی؛ اولین کاری که میکنی چیه؟" },
      { "id": "b6", "text": "آب شدم تو زمین؛ شرم‌آورترین خاطره‌ات تو رابطه" },
      { "id": "b7", "text": "ابرقهرمان شدی؛ چه قدرتی رو برای خودت انتخاب میکنی" },
      { "id": "b8", "text": "شلیک آخر؛ یک گلوله بدون پیگیری رو به کی شلیک میکنی" },
      { "id": "b9", "text": "برای یک مشت دلار؛ توی جمع با کی اکانت اونلی‌فنز تشکیل میدی" },
      { "id": "b10", "text": "ای آدم زرنگ؛ آخرین باری که توی یک جمع ادای مستارو در آوردی برای چی بوده" },
      { "id": "b11", "text": "این آخرین باره؛ کی خودارضایی کردی" },
      { "id": "b12", "text": "آهنربا؛ جذاب‌ترین شخص توی جمع غیر از خودت" },
      { "id": "b13", "text": "اکتشاف ذهن؛ همین الان داری به کی فکر میکنی" },
      { "id": "b14", "text": "افشاگری؛ عجیب‌ترین چیزی که تو گوشی رفیقت دیدی" },
      { "id": "b15", "text": "ای آدم متظاهر؛ تاحالا تو سکس تظاهر به ارضاشدن کردی" },
      // سوالات جدید آبی
      { "id": "b16", "text": "لیست سیاه؛ اگر مجبوری با یکی از افراد این جمع قطع ارتباط کنی، کیه؟" },
      { "id": "b17", "text": "فانتزی تاریک؛ عجیبت‌ترین لوکیشن یا جایی که دوست داری توش سکس داشته باشی چیه؟" },
      { "id": "b18", "text": "خیانت روحی؛ تا حالا تو رابطه بودی و دلت پیش یکی دیگه باشه؟ شفاف بگو کی!" },
      { "id": "b19", "text": "قضاوت اولیه؛ اولین باری که یکی از اعضای حاضر تو جمع رو دیدی، چه فکر منفی‌ای درباره‌اش کردی؟" },
      { "id": "b20", "text": "بازرسی گالری؛ خجالت‌آورترین سرچی که تو ۵ روز گذشته تو مرورگرت داشتی چی بوده؟" },
      { "id": "b21", "text": "رد مرز؛ اگه قرار باشه فقط با یک نفر از حاضران تو یک جزیره متروکه گیر بیفتی، کی رو انتخاب می‌کنی؟" },
      { "id": "b22", "text": "راز مخفی؛ کاری که انجام دادی و اگر خانواده‌ات بفهمند از خانه پرتت می‌کنند بیرونه چی بوده؟" },
      { "id": "b23", "text": "استالکر حرفه‌ای؛ اکس کدوم یک از دوستات رو هنوز قایمکی چک می‌کنی؟" },
      { "id": "b24", "text": "قیمت صمیمیت؛ حاضری در ازای ۱۰۰ هزار دلار جلوی جمع حاضران کاملاً برهنه بشی؟" },
      { "id": "b25", "text": "پشیمانی بزرگ؛ کثیف‌ترین یا ناعادلانه‌ترین کاری که برای به دست آوردن یک نفر کردی چی بوده؟" }
    ]
  },
  "Green": {
    "label": "سبز",
    "questions": [
      { "id": "g1", "text": "یک چیز یاد گرفتم؛ کتاب یا فیلم محبوبت" },
      { "id": "g2", "text": "ترسیدم؛ از چه چیزی بیشتر از همه میترسی" },
      { "id": "g3", "text": "خجالت نکش؛ یک داستان خجالت‌آور تعریف کن" },
      { "id": "g4", "text": "بربری؛ چی باعث میشه از کوره در بری" },
      { "id": "g5", "text": "سوشی و ساکی؛ بدترین چیزی که به‌عنوان غذا خوردی" },
      { "id": "g6", "text": "یکم بخندیم؛ یک خاطره خنده‌دار تعریف کن" },
      { "id": "g7", "text": "ستاره‌ها نشون میدن؛ به فال و طالع‌بینی اعتقاد داری" },
      { "id": "g8", "text": "هسویام؛ با پول و زمان بینهایت چکار میکردی" },
      { "id": "g9", "text": "ماشین زمانت رو امتحان کن؛ با دلیل قانع‌کننده یکی از افراد جمع رو به گذشته بفرست" },
      { "id": "g10", "text": "به چه مناسبتی؛ با ارزش‌ترین هدیه‌ای که گرفتی" },
      { "id": "g11", "text": "یک شروع تازه؛ برای زندگی کجا رو انتخاب میکردی" },
      { "id": "g12", "text": "الگوت کیه؛ شخصیت تاریخی که دوست داشتی ببینیش" },
      { "id": "g13", "text": "دیت نایت؛ با کی توی جمع حاضری شام بری بیرون" },
      { "id": "g14", "text": "روباه مکار؛ تاحالا کسی رو به عمد به اشتباه انداختی" },
      { "id": "g15", "text": "پاچیدم رو زمین؛ خنده‌دارترین خاطره روز مستی رو تعریف کن" },
      // سوالات جدید سبز
      { "id": "g16", "text": "میراثرسی؛ دوست داری مردم بعد از مرگت تو رو با چه ویژگی‌ای یادشون بمونه؟" },
      { "id": "g17", "text": "قانون جدید؛ اگر بتونی یک قانون کشوری یا جهانی رو همین امروز عوض کنی، چیه؟" },
      { "id": "g18", "text": "موسیقی متن متن زندگی؛ چه آهنگی پخش بشه انگار داره فیلم زندگی تو رو نشون میده؟" },
      { "id": "g19", "text": "شغل رویایی؛ اگه فاکتور پول مطرح نبود، الان چه‌کاره بودی؟" },
      { "id": "g20", "text": "نقطه عطف؛ چه اتفاقی تو زندگیت بیشترین تغییر رو روی شخصیتت گذاشت؟" },
      { "id": "g21", "text": "درس تلخ؛ باارزش‌ترین درسی که از یک شکست خوردن یاد گرفتی چی بوده؟" },
      { "id": "g22", "text": "قدردانی صمیمانه؛ از یکی از افراد جمع به خاطر یک ویژگی مثبتش قلباً تشکر کن" },
      { "id": "g23", "text": "پرونده عجیب؛ باورنکردنی‌ترین شایعه‌ای که پشت سرت شنیدی چی بوده؟" },
      { "id": "g24", "text": "سفر به فردا؛ اگه می‌تونستی یک پیام به ۱۰ سال بعدِ خودت بفرستی چی می‌گفت؟" },
      { "id": "g25", "text": "خانواده دوم؛ کدوم ویژگیِ جمعِ الان رو بیشتر از همه دوست داری؟" }
    ]
  },
  "Yellow": {
    "label": "زرد",
    "questions": [
      { "id": "y1", "text": "راننده کامیون خسته چی گوش میده؛ یک موزیک قدیمی بخون" },
      { "id": "y2", "text": "چشماتو ببینم؛ یک دقیقه کامل تو چشمای یکی نگاه کن، اگه خندید شات میخوره!" },
      { "id": "y3", "text": "ورزش دشمن اعتیاده؛ ۱۰ تا بشین‌پاشو سرعتی" },
      { "id": "y4", "text": "فرار از باغ وحش؛ صدای بهترین حیوونی که میتونی تقلید کنی" },
      { "id": "y5", "text": "دیگه صداتو نمیشنویم؛ یک دور بازی اصلاً حرف نزن، از ایما و اشاره استفاده کن" },
      { "id": "y6", "text": "ادابازی؛ ادای یک شخص مشهور یا آشنا رو تقلید کن" },
      { "id": "y7", "text": "پیتزا زیر برج؛ یک دور بازی ایتالیایی حرف بزن" },
      { "id": "y8", "text": "یا شانس یا اقبال؛ اگه لباس زیر رنگی پوشیدی یک شات بخور" },
      { "id": "y9", "text": "دعوت شدی خندوانه؛ یک دقیقه وقت داری یکی از تو جمع به جک‌هات بخنده" },
      { "id": "y10", "text": "استعداد درخشان؛ یکی از استعدادهای نهفته‌ات رو نشونمون بده" },
      { "id": "y11", "text": "خوش‌شانس‌ترین کیه؛ یکی قراره از تو کولی بگیره" },
      { "id": "y12", "text": "طوطی شو؛ حرف‌های بقیه رو تا یک دور تکرار کن" },
      { "id": "y13", "text": "خیال‌بازی؛ با یک نفر داستانی بساز و تا جایی که ممکنه ادامه بده" },
      { "id": "y14", "text": "مستند ساز شو؛ اتفاقات دور و برت رو مثل گوینده‌های مستند تعریف کن" },
      { "id": "y15", "text": "که کی کو؛ بین سه نفر هرکی تک بیاره شات میخوره" },
      // سوالات جدید زرد
      { "id": "y16", "text": "گوینده اخبار؛ اخبار داغ و مجعولی درباره دو نفر از حاضرین جمع با لحن رسمی بگو!" },
      { "id": "y17", "text": "دیوار شهر؛ بگذار نفر سمت چپت روی پیشونیت با ماژیک یا مداد ابرو یک کلمه بامزه بنویسه" },
      { "id": "y18", "text": "استندآپ بداهه؛ ۳ دقیقه سرپا وایسا و ادای معلم دوران دبیرستانت رو دربیار" },
      { "id": "y19", "text": "صداگذاری زنده؛ ویدئوی یک کلیپ اینستاگرامی رو بدون صدا بذارید و تو روش صداگذاری کن" },
      { "id": "y20", "text": "مجسمه شو؛ تا دور بعدی بازی نباید هیچ فیگوری از بدنت رو تغییر بدی!" },
      { "id": "y21", "text": "زبان من درآوردی؛ تا ۲ دور بعدی با یک زبان ساختگی و نامفهوم صحبت کن" },
      { "id": "y22", "text": "شعر در لحظه؛ یک شعر ۴ بیتی بداهه درباره شخص سمت راستت بگو" },
      { "id": "y23", "text": "چالش دیپلماسی؛ سعی کن با اکشن و حالت چهره بدون دست زدن به کسی، یکی رو بخندونی" },
      { "id": "y24", "text": "تغییر هویت؛ تا دور بعدی اسم خودت رو بذار «پادشاه» و هرکس اسمت رو درست نگه باید شات بخوره" },
      { "id": "y25", "text": "مدلینگ؛ مثل مدل‌های فشن‌شو از این سر اتاق تا اون سر راه برو و فیگور بگیر" }
    ]
  }
};

const addOnPacks = [
  {
    "id": "couples",
    "name": "بازی کاپلی",
    "desc": "مخصوص زوج‌ها — سوالاتی که رابطه رو عمیق‌تر می‌کنه",
    "questions": [
      { "id": "cp1", "text": "اولین باری که دیدمت؛ اولین چیزی که توجهت رو جلب کرد چی بود" },
      { "id": "cp2", "text": "رمانتیک‌ترین لحظه؛ بهترین خاطره مشترکتون رو تعریف کن" },
      { "id": "cp3", "text": "اگه یه روز فراموش میشد؛ کدوم روز رو انتخاب میکردی" },
      { "id": "cp4", "text": "حسادت؛ آخرین باری که به پارتنرت حسادت کردی" },
      { "id": "cp5", "text": "عشقم بدون؛ یه چیزی بگو که هیچ‌وقت بهشون نگفتی" },
      { "id": "cp6", "text": "فانتزی مشترک؛ یه چیزی هست که هر دوتون دوست دارید امتحان کنید؟" },
      { "id": "cp7", "text": "وقتی دعوا میکنیم؛ بدترین عادتت تو دعواها چیه" },
      { "id": "cp8", "text": "سه کلمه؛ بهترین توصیف پارتنرت با سه کلمه" },
      // سوالات جدید کاپلی
      { "id": "cp9", "text": "نگاه عمیق؛ ۱ دقیقه بدون زدن حرف و پلک زدن تو چشمای پارتنرت نگاه کن" },
      { "id": "cp10", "text": "زبان بدن؛ یک ویژگی فیزیکی پارتنرت که دیوونه‌اش می‌شی چیه؟" },
      { "id": "cp11", "text": "راز خوشحالی؛ سریع‌ترین راهی که پارتنرت می‌تونه آرومت کنه وقتی عصبانی هستی چیه؟" },
      { "id": "cp12", "text": "قرار رویایی؛ اگه محدودیت مالی و زمانی نداشته باشید، دیت ایده‌آلتون کجاست؟" },
      { "id": "cp13", "text": "لباس محو؛ کدوم تیپ یا لباس پارتنرت رو بیشتر از همه دوست داری؟" },
      { "id": "cp14", "text": "آهنگ ما؛ کدوک موزیک شما رو یاد اولین روزهای رابطه‌تون می‌ندازه؟" },
      { "id": "cp15", "text": "چالش سوپرایز؛ یک عادت عجیب پارتنرت کهاوایل نمی‌دونستی و بعداً فهمیدی چی بوده؟" }
    ]
  },
  {
    "id": "girls",
    "name": "بازی دخترانه",
    "desc": "مخصوص شب‌های دخترونه — صادقانه و بدون سانسور",
    "questions": [
      { "id": "gi1", "text": "دراما کوئین؛ آخرین باری که گریه کردی برای چی بود" },
      { "id": "gi2", "text": "باید بدونن؛ یه راز که فقط بهترین دوستت میدونه" },
      { "id": "gi3", "text": "گزینه بد؛ آخرین اشتباه رمانتیکت رو تعریف کن" },
      { "id": "gi4", "text": "بدون فیلتر؛ صادقانه‌ترین نظرت درباره یه نفر تو جمع" },
      { "id": "gi5", "text": "جای خالی؛ چیزی که الان بیشتر از همه دلت میخواد" },
      { "id": "gi6", "text": "تله‌ی سوشیال؛ آخرین پروفایل غریبه‌ای که استالک کردی" },
      { "id": "gi7", "text": "بدترین دیت؛ بدترین قرار عاشقانه‌ای که تجربه کردی" },
      { "id": "gi8", "text": "خط قرمز؛ چیزی که هیچ‌وقت توی رابطه تحمل نمیکنی" },
      // سوالات جدید دخترانه
      { "id": "gi9", "text": "کراش مشهور؛ کراش آبروبرت بین سلبریتی‌ها کیه؟" },
      { "id": "gi10", "text": "شاپینگ گیلت؛ گرون‌ترین خرید هیجانی و بی‌دلیلی که تا حالا کردی چی بوده؟" },
      { "id": "gi11", "text": "رد فلگ متحرک؛ بزرگ‌ترین ردفلگی که تو نگاه اول از پسرا می‌فهمی چیه؟" },
      { "id": "gi12", "text": "میکاپ اعتراف؛ عجیب‌ترین کاری که برای خوشگل‌تر به نظر رسیدن انجام دادی چی بوده؟" },
      { "id": "gi13", "text": "چت خصوصی؛ شات اسکرین از آخرین پیامی که به دوست‌پست/کراشت دادی به بچه‌ها نشون بده" },
      { "id": "gi14", "text": "حس ششم؛ تا حالا حدست درباره خیانت یا دروغ کسی درست درآمده؟" },
      { "id": "gi15", "text": "دروغ مصلحتی؛ آخرین باری که برای نرفتن به یک قرار بهانه آوردی چی گفتی؟" }
    ]
  },
  {
    "id": "boys",
    "name": "بازی پسرانه",
    "desc": "مخصوص جمع‌های پسرونه — بی‌پرده و سرراست",
    "questions": [
      { "id": "bo1", "text": "غرور زخمی؛ آخرین باری که جلوی بقیه خجالت کشیدی" },
      { "id": "bo2", "text": "رقیب؛ کسی هست که همیشه میخوای ازش بهتر باشی" },
      { "id": "bo3", "text": "بدون لایه؛ چیزی که هیچ‌وقت به دوستات نگفتی" },
      { "id": "bo4", "text": "باهوش‌ترین حرکت؛ بهترین کاری که برای جلب توجه کسی کردی" },
      { "id": "bo5", "text": "اگه شجاع بودم؛ چیکاری بود که میخواستی بکنی ولی نکردی" },
      { "id": "bo6", "text": "حسادت پسرونه؛ چیزی که یه نفر داره و دوست داری تو هم داشتی" },
      { "id": "bo7", "text": "پشیمونی؛ یه تصمیم که اگه دوباره میشد متفاوت میگرفتی" },
      { "id": "bo8", "text": "آدرنالین؛ جنون‌آمیزترین کاری که انجام دادی" },
      // سوالات جدید پسرانه
      { "id": "bo9", "text": "دعوای رفقا؛ سنگین‌ترین دعوایی که با یکی از رفقای صمیمیت داشتی سر چی بود؟" },
      { "id": "bo10", "text": "سیمپ سنج؛ عجیب‌ترین کاری که برای مخ زدن یا جلب توجه یک دختر کردی چی بوده؟" },
      { "id": "bo11", "text": "تست رفاقت؛ اگه رفیقت خطایی بکنه، حاضری جاش پای قانون و شر بری؟" },
      { "id": "bo12", "text": "ماشین رویایی؛ اگه کلاً یک ماشین تو دنیا بتونی داشته باشی چیه؟" },
      { "id": "bo13", "text": "لحظه کسر شأن؛ تابلوترین ضایع‌شدنت جلوی جمع چی بوده؟" },
      { "id": "bo14", "text": "قانون رفاقت؛ کدوم رفتار تو مرام رفاقتی از نظرت بخشودنی نیست؟" },
      { "id": "bo15", "text": "راز مالی؛ بدهی یا خسارت مالی‌ای که قایمش کردی و به کسی نگفتی چی بوده؟" }
    ]
  },
  {
    "id": "family",
    "name": "بازی خانوادگی",
    "desc": "مناسب جمع خانوادگی — شاد و سبک",
    "questions": [
      { "id": "fa1", "text": "کودک درون؛ بامزه‌ترین خاطره بچگیت رو تعریف کن" },
      { "id": "fa2", "text": "مسابقه دانش؛ یه سوال سخت از بقیه بپرس" },
      { "id": "fa3", "text": "هنرمند خانواده؛ یه نقاشی از یه نفر تو جمع بکش" },
      { "id": "fa4", "text": "خواننده مخفی؛ آهنگ مورد علاقه‌ات رو با صدای بلند بخون" },
      { "id": "fa5", "text": "تاریخ خانوادگی؛ قدیمی‌ترین خاطره‌ای که از خونه یادته چیه" },
      { "id": "fa6", "text": "آرزوی کودکانه؛ وقتی بچه بودی میخواستی چیکاره بشی" },
      { "id": "fa7", "text": "بازی بچگی؛ بازی محبوبت تو دوران مدرسه چی بود" },
      { "id": "fa8", "text": "دست پختی؛ بهترین غذایی که بلدی بپزی چیه" },
      // سوالات جدید خانوادگی
      { "id": "fa9", "text": "شیرین‌کاری؛ ادای یکی از اعضای خانواده رو بدون آوردن اسمش دربیار تا بقیه حدس بزنن" },
      { "id": "fa10", "text": "سوتی تاریخی؛ بامزه‌ترین سوتی‌ای که تو جمع‌های خانوادگی دادی چی بوده؟" },
      { "id": "fa11", "text": "مربی آشپزی؛ دستور پخت یا راز خوشمزه‌تر شدن یک غذا رو به بقیه بگو" },
      { "id": "fa12", "text": "دفترچه خاطرات؛ یک شیء یا وسیله تو خانه که برات ارزش معنوی داره رو معرفی کن" },
      { "id": "fa13", "text": "آلبوم عکس زنده؛ قیافه و حالت چهره خودت رو مثل زمانی که ۶ سالت بود بساز!" },
      { "id": "fa14", "text": "مهربانی ساده؛ یک ویژگی که تو همه اعضای خانواده خیلی دوست داری رو بگو" },
      { "id": "fa15", "text": "چیستان روز؛ یک چیستان یا معمای بامزه مطرح کن که بقیه حلش کنن" }
    ]
  }
];

// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
let players = [], currentPlayerIndex = 0, boardColors = [];
let activePackIds = new Set(); // بسته‌های الحاقی فعال‌شده برای همین بازی

const enabledMainQs = {};
Object.keys(mainDecks).forEach(k => { enabledMainQs[k] = new Set(mainDecks[k].questions.map(q => q.id)); });

const enabledAddonQs = {};
addOnPacks.forEach(p => { enabledAddonQs[p.id] = new Set(p.questions.map(q => q.id)); });

// ═══════════════════════════════════════
//  AGE GATE
// ═══════════════════════════════════════
function confirmAgeGate() {
  document.getElementById('ageGate').style.display = 'none';
}

// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
function goToPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === id));
  if (id === 'settings') renderSettings();
  if (id === 'game') renderActivePacksBar();
  window.scrollTo(0, 0);
}
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', e => { e.preventDefault(); goToPage(a.dataset.page); })
);

// ═══════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════
function showToast(msg, dur = 2800) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ═══════════════════════════════════════
//  BOARD
// ═══════════════════════════════════════
function generateBoard() {
  boardColors = [];
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];
  for (let i = 0; i < 60; i++) {
    if (i === 0) { boardColors.push({ color: 'Start', value: 0 }); continue; }
    const c = colors[Math.floor(Math.random() * 4)];
    const v = ['Red', 'Blue'].includes(c) ? Math.floor(Math.random() * 3) + 4 : Math.floor(Math.random() * 3) + 1;
    boardColors.push({ color: c, value: v });
  }
}

// ═══════════════════════════════════════
//  PLAYERS
// ═══════════════════════════════════════
function addPlayer() {
  const inp = document.getElementById('playerNameInput');
  const name = inp.value.trim();
  if (!name) return;
  if (players.find(p => p.name === name)) { showToast('این اسم قبلاً هست'); return; }
  players.push({ name, position: 0 });
  inp.value = ''; inp.focus();
  renderPlayers();
}
function removePlayer(i) {
  players.splice(i, 1);
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
        ${escapeHtml(p.name)}<span class="remove-player" onclick="removePlayer(${i})">✕</span>
      </div>`
    ).join('');
  }
  const btn = document.getElementById('btnRoll');
  if (btn) btn.disabled = players.length < 2;

  // نمایش نوبت رو با بازیکن جاری هماهنگ نگه می‌داریم (چه هنوز بازی شروع نشده باشه، چه بین نوبت‌ها)
  const turnNameEl = document.getElementById('turnName');
  if (turnNameEl && players[currentPlayerIndex]) {
    turnNameEl.textContent = players[currentPlayerIndex].name;
  }
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ═══════════════════════════════════════
//  CARD DRAW (کاملاً محلی، بدون سرور)
// ═══════════════════════════════════════
function drawCard(color) {
  const mainPool = (mainDecks[color]?.questions || []).filter(q => enabledMainQs[color]?.has(q.id));

  let packPool = [];
  addOnPacks.forEach(p => {
    if (activePackIds.has(p.id)) {
      packPool.push(...p.questions.filter(q => enabledAddonQs[p.id]?.has(q.id)));
    }
  });

  // ۲۵٪ شانس انتخاب از بستهٔ الحاقی، اگه فعال باشه
  let pool = mainPool;
  let isAddon = false;
  if (packPool.length > 0 && Math.random() < 0.25) { pool = packPool; isAddon = true; }
  if (!pool.length) { pool = [...mainPool, ...packPool]; }
  if (!pool.length) return { text: 'همهٔ سوالات این بخش غیرفعال هستن! از تنظیمات یکی رو فعال کن 😅', isAddon: false };

  const q = pool[Math.floor(Math.random() * pool.length)];
  return { text: q.text, isAddon: packPool.includes(q) };
}

// ═══════════════════════════════════════
//  GAME TURN
// ═══════════════════════════════════════
const DICE = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
function rollDice() { return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1; }

function nextTurn() {
  if (players.length < 2) { showToast('حداقل دو بازیکن وارد کن'); return; }
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
      const tile = boardColors[player.position];
      showTileResult(tile, player, dice);

      // نوبت رو به بازیکن بعدی می‌بریم، و بلافاصله همه‌جا (لیست + نمایشگر نوبت)
      // با هم هماهنگ می‌کنیم — این همون جایی بود که قبلاً به‌خاطر عدم هماهنگی
      // بین renderPlayers و turnDisplay، به‌نظر می‌رسید نوبت زودتر از موعد پریده.
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      renderPlayers();
      btn.disabled = false;
    }
  }, 75);
}

function showTileResult(tile, player, dice) {
  const res = document.getElementById('cardResult');

  if (tile.color === 'Start') {
    document.getElementById('cardBadge').textContent = 'شروع';
    document.getElementById('cardBadge').className = 'card-color-badge badge-start';
    document.getElementById('cardText').textContent = 'به خونهٔ شروع رسیدی، مبارک باشه!';
    document.getElementById('cardPenalty').textContent = '';
    document.getElementById('cardMeta').textContent = '';
    animateCard(res);
    return;
  }

  const result = drawCard(tile.color);
  const labels = { Red: 'قرمز', Blue: 'آبی', Green: 'سبز', Yellow: 'زرد' };
  const badge = document.getElementById('cardBadge');
  badge.textContent = result.isAddon ? 'بستهٔ الحاقی' : labels[tile.color];
  badge.className = 'card-color-badge ' + (result.isAddon ? 'badge-pack' : 'badge-' + tile.color);
  document.getElementById('cardText').textContent = result.text;
  document.getElementById('cardPenalty').textContent = `امتناع = ${tile.value} شات`;
  document.getElementById('cardMeta').textContent = `خونهٔ ${player.position} • تاس: ${dice}`;

  animateCard(res);
}

function animateCard(res) {
  res.classList.add('show'); void res.offsetWidth; res.classList.add('anim');
  setTimeout(() => res.classList.remove('anim'), 400);
}

// ═══════════════════════════════════════
//  SETTINGS PAGE
// ═══════════════════════════════════════
function renderSettings() {
  const grid = document.getElementById('packsGrid');
  grid.innerHTML = addOnPacks.map(renderPackCard).join('');

  const freeWrap = document.getElementById('mainDecksWrap');
  freeWrap.innerHTML = Object.entries(mainDecks).map(([color, deck]) => renderDeckSection(color, deck)).join('');
}

function packInitial(name) { return (name || '؟').trim().charAt(0); }

function renderPackCard(pack) {
  const isActive = activePackIds.has(pack.id);
  return `<div class="pack-card ${isActive ? 'enabled' : ''}" id="packcard-${pack.id}">
    <div class="pack-header" onclick="togglePackExpand('${pack.id}')">
      <div class="pack-header-left">
        <span class="pack-avatar">${packInitial(pack.name)}</span>
        <div>
          <div class="pack-name">${pack.name}</div>
          <div class="pack-desc">${pack.questions.length} سوال</div>
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
          <div class="q-item ${!enabledAddonQs[pack.id].has(q.id) ? 'disabled' : ''}" id="qi-${q.id}">
            <input type="checkbox" class="q-checkbox" ${enabledAddonQs[pack.id].has(q.id) ? 'checked' : ''}
              onchange="toggleAddonQ('${pack.id}','${q.id}',this.checked)">
            <span class="q-color-dot dot-pack"></span>
            <span class="q-text">${escapeHtml(q.text)}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderDeckSection(color, deck) {
  const en = enabledMainQs[color];
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

function toggleActivePack(id, val) {
  val ? activePackIds.add(id) : activePackIds.delete(id);
  document.getElementById('packcard-' + id).classList.toggle('enabled', val);
  renderActivePacksBar();
}
function toggleAddonQ(pid, qid, val) {
  val ? enabledAddonQs[pid].add(qid) : enabledAddonQs[pid].delete(qid);
  document.getElementById('qi-' + qid).classList.toggle('disabled', !val);
}
function toggleMainQ(color, qid, val) {
  val ? enabledMainQs[color].add(qid) : enabledMainQs[color].delete(qid);
  document.getElementById('mqi-' + qid).classList.toggle('disabled', !val);
  document.getElementById('deckcount-' + color).textContent = enabledMainQs[color].size + ' فعال';
}
function bulkToggleAddon(pid, val) {
  addOnPacks.find(p => p.id === pid).questions.forEach(q => {
    val ? enabledAddonQs[pid].add(q.id) : enabledAddonQs[pid].delete(q.id);
    const el = document.getElementById('qi-' + q.id);
    if (el) { el.classList.toggle('disabled', !val); el.querySelector('input').checked = val; }
  });
}
function bulkToggleMain(color, val) {
  mainDecks[color].questions.forEach(q => {
    val ? enabledMainQs[color].add(q.id) : enabledMainQs[color].delete(q.id);
    const el = document.getElementById('mqi-' + q.id);
    if (el) { el.classList.toggle('disabled', !val); el.querySelector('input').checked = val; }
  });
  document.getElementById('deckcount-' + color).textContent = enabledMainQs[color].size + ' فعال';
}
function renderActivePacksBar() {
  const bar = document.getElementById('activePacksBar');
  const active = addOnPacks.filter(p => activePackIds.has(p.id));
  bar.innerHTML = active.map(p => `<span class="active-pack-tag">${p.name}</span>`).join('');
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
(function init() {
  generateBoard();
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
