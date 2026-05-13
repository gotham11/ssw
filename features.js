/* ============================================================
   STANFORD O'QUV MARKAZI — features.js

   Features:
   1. Telegram Floating Button
   2. Language Toggle (UZ / RU / EN) — translates FULL site
   3. Free Trial Booking Modal

   HOW TO ADD A NEW TRANSLATION:
   1. Add data-i18n="your.key" to the HTML element
   2. Add "your.key": "text" to ALL 3 language objects below
   3. Done — it will switch automatically
============================================================ */


/* ============================================================
   FULL SITE TRANSLATIONS
   Every key matches a data-i18n="key" in index.html.
   Edit any value to change the translation.
============================================================ */
const TRANSLATIONS = {

  /* ────────────────── ENGLISH ────────────────── */
  en: {
    /* Brand */

    /* Navbar */
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.courses':  'Courses',
    'nav.teachers': 'Teachers',
    'nav.results':  'Results',
    'nav.contact':  'Contact',
    'nav.apply':    'Apply Now',

    /* Hero */
    'hero.badge':    'Now Enrolling — Summer 2025 · Namangan',
    'hero.headline': 'Achieve <span class="highlight">IELTS 7.0+</span><br/>with Expert Teachers',
    'hero.sub':      "Stanford O'quv Markazi is Namangan's most trusted English & exam preparation centre. Proven methods, certified teachers, real results.",
    'hero.cta1':     'Apply Now →',
    'hero.cta2':     'View Courses',
    'hero.stat1':    'Students',
    'hero.stat2':    'Top Band',
    'hero.stat3':    'Pass Rate',

    /* Trial badge */
    'trial.next':  'Next free trial:',
    'trial.spots': '6 spots left',
    'trial.btn':   'Book it',

    /* Hero floating cards */
    'card1.label': 'Top Score',
    'card1.value': 'IELTS 8.5',
    'card2.label': 'Avg Improvement',
    'card2.value': '+1.5 Bands',
    'card3.value': 'IDP & BC Partner',

    /* Stats band */
    'stats.s1': 'Students Taught',
    'stats.s2': 'Top IELTS Band',
    'stats.s3': 'Target Score Rate',
    'stats.s4': 'Expert Teachers',

    /* About */
    'about.tag':   'Our Story',
    'about.title': 'Built to Get You Results',
    'about.p1':    'Stanford O\'quv Markazi was founded in <strong>2015</strong> with one goal: give every student in Uzbekistan access to world-class English education.',
    'about.p2':    'We specialise in <strong>IELTS, CEFR, and DTM</strong> preparation as well as pre-school English. Proven international methods, local expertise.',
    'about.p3':    'As an official <strong>IDP IELTS & British Council partner</strong>, we meet the highest global standards — and our results prove it.',
    'about.v1t':   'Results-Focused',
    'about.v1d':   'Every lesson is built to move your score up.',
    'about.v2t':   'Small Groups',
    'about.v2d':   'Max 12 students — personal attention guaranteed.',
    'about.v3t':   'Global Standards',
    'about.v3d':   'IDP & British Council certified methodology.',
    'about.v4t':   'Supportive Culture',
    'about.v4d':   'We celebrate every win, big and small.',
    'about.c1n':   '2015',
    'about.c1l':   'Year Founded',
    'about.c2n':   '5,000+',
    'about.c2l':   'Students Taught',
    'about.c3n':   '10+',
    'about.c3l':   'Certified Teachers',
    'about.partner': 'Official Partner: IDP IELTS & British Council',

    /* Courses */
    'courses.tag':    'Programs',
    'courses.title':  'Find Your Course',
    'courses.sub':    'From beginner English to advanced IELTS — a course for every level, age, and goal.',
    'courses.enroll': 'Enroll',
    'c1.badge': 'IELTS',   'c1.title': 'IELTS Intensive',
    'c1.desc':  'Score 6.5–8.5 with targeted prep. Full mock tests, band-raising strategies, and expert feedback.',
    'c1.meta':  'All levels · 3–6 months',
    'c2.badge': 'General', 'c2.title': 'General English',
    'c2.desc':  'Build a strong foundation. Grammar, vocabulary, reading, writing, listening and speaking in one course.',
    'c2.meta':  'Beginner – Advanced',
    'c3.badge': 'CEFR',    'c3.title': 'CEFR A1 → C2',
    'c3.desc':  'Internationally recognised proficiency pathway. Build real communication skills from A1 through C2.',
    'c3.meta':  'A1 to C2 · All ages',
    'c4.badge': 'Pre-school', 'c4.title': 'Early Learners',
    'c4.desc':  'Play-based English for children aged 4–10. Songs, stories, games and gentle structured learning.',
    'c4.meta':  'Ages 4–10',

    /* Teachers */
    'teachers.tag':   'The Team',
    'teachers.title': 'Meet Your Teachers',
    'teachers.sub':   'Certified, experienced, and genuinely invested in your success.',
    't.score': 'IELTS:', 't.cert': 'Cert:', 't.exp': 'Exp:', 't.from': 'From:',
    't1.name': 'Malika Yusupova', 't1.role': 'Head of IELTS Department',
    't1.score': 'Band 8.5', 't1.cert': 'CELTA, IDP', 't1.exp': '8+ years',
    't1.bio':  'Specialist in Writing & Reading. Helped 300+ students reach band 7+.',
    't1.tag1': 'IELTS', 't1.tag2': 'Writing', 't1.tag3': 'CELTA',
    't2.name': "James O'Brien", 't2.role': 'Native English Instructor',
    't2.from': 'Dublin 🇮🇪', 't2.cert': 'DELTA, CELTA', 't2.exp': '6 years',
    't2.bio':  'Specialises in Speaking & Listening. Praised for patience and clarity.',
    't2.tag1': 'Speaking', 't2.tag2': 'Listening', 't2.tag3': 'Native',
    't3.name': 'Dilnoza Hamidova', 't3.role': 'Pre-school & Junior Lead',
    't3.score': 'Band 7.5', 't3.cert': 'Early Childhood', 't3.exp': '7 years',
    't3.bio':  'Makes English magical for ages 4–10 through play, songs, and storytelling.',
    't3.tag1': 'Pre-school', 't3.tag2': 'Junior', 't3.tag3': 'Kids',
    't4.name': 'Bobur Toshmatov', 't4.role': 'DTM & CEFR Specialist',
    't4.score': 'Band 8.0', 't4.cert': 'Cambridge TKT', 't4.exp': '12 years',
    't4.bio':  'University lecturer, expert in DTM structure and CEFR A1–C2 pathway.',
    't4.tag1': 'DTM', 't4.tag2': 'CEFR', 't4.tag3': 'Grammar',

    /* Results */
    'results.tag':   'Proof',
    'results.title': 'Real Students. Real Scores.',
    'results.sub':   'Results from students who walked through our door and committed to the process.',
    'score.before': 'Before', 'score.after': 'After',
    'r1.name': 'Aziz Karimov',    'r1.course': 'IELTS Intensive · 4 months', 'r1.tag': '+2.5 bands',
    'r2.name': 'Sarvar Rakhimov', 'r2.course': 'IELTS Intensive · 3 months', 'r2.tag': '+2.5 bands',
    'r3.name': 'Malika Nazarova', 'r3.course': 'CEFR Pathway · 8 months',   'r3.tag': '2 levels up',
    'r4.name': 'Jasur Toshmatov', 'r4.course': 'IELTS Intensive · 5 months','r4.tag': '+2.5 bands',
    'r5.name': 'Zulfiya Ismoilova','r5.course': 'CEFR Pathway · 6 months',  'r5.tag': '2 levels up',
    'r6.name': 'Bobur Umarov',    'r6.course': 'IELTS Intensive · 6 months','r6.tag': '+2.5 bands',
    'ach.s1': 'Students Taught', 'ach.s2': 'Success Rate',
    'ach.s3': 'Universities Abroad', 'ach.s4': 'Top IELTS Score',

    /* Testimonials */
    'testi.tag':   'Testimonials',
    'testi.title': 'What Students Say',
    'q1.quote': '"I came in at band 5.0 and left with 7.5. The teachers really know how to target your weak areas. Stanford changed my life."',
    'q1.name': 'Aziz Karimov',    'q1.role': 'IELTS 7.5 · Now in Germany',
    'q2.quote': '"My daughter started age 5. Her English is now better than some adults. These teachers are incredible with children."',
    'q2.name': 'Nodira Jurayeva', 'q2.role': 'Parent · Pre-school',
    'q3.quote': '"Scored 8.0 on my first attempt after 3 months here. The mock tests and feedback sessions were invaluable."',
    'q3.name': 'Sarvar Rakhimov', 'q3.role': 'IELTS 8.0 · Edinburgh Uni',
    'q4.quote': '"CEFR pathway gave me the structure I needed. A2 to B2 in 8 months — now using English confidently at work."',
    'q4.name': 'Bekzod Tursunov', 'q4.role': 'CEFR B2 · IT Professional',

    /* Location */
    'loc.tag':          'Find Us',
    'loc.title':        "We're in Namangan",
    'loc.sub':          'Come in for a free placement test — no appointment needed.',
    'loc.addr.label':   'Address',
    'loc.addr.val':     'Namangan, Uzbekistan',
    'loc.hours.label':  'Hours',
    'loc.hours.wd':     'Mon–Sat: 08:30 – 21:00',
    'loc.hours.wk':     'Sunday: 09:00 – 15:00',
    'loc.phone.label':  'Phone',
    'loc.tg.label':     'Telegram',
    'loc.directions':   '🗺️ Get Directions',

    /* Contact */
    'contact.tag':       'Get in Touch',
    'contact.title':     'Start Your Journey Today',
    'contact.sub':       "Fill in the form and we'll reach out within 24 hours. Free placement test included.",
    'contact.ch1.title': 'Call Us',      'contact.ch1.val': '+998 99 190 40 00',
    'contact.ch2.title': 'Telegram',     'contact.ch2.val': '@stanfordschooluz',
    'contact.ch3.title': 'Instagram',    'contact.ch3.val': '@stanford.lc',

    /* Form */
    'form.name':        'Full Name',
    'form.phone':       'Phone Number',
    'form.course':      'Course Interested In',
    'form.course.opt0': 'Select a course...',
    'form.course.opt1': 'IELTS Intensive',
    'form.course.opt2': 'CEFR Pathway (A1–C2)',
    'form.course.opt3': 'DTM Preparation',
    'form.course.opt4': 'Pre-school English',
    'form.course.opt5': 'General English',
    'form.msg':         'Message',
    'form.optional':    '(optional)',
    'form.submit':      'Send Message 🚀',
    'form.success':     "🎉 Sent! We'll contact you within 24 hours.",
    'form.reply':       'Average reply time:',
    'form.replytime':   'under 1 hour',
    'form.tgbtn':       '✈️ Message on Telegram Instead',
    'form.err.name':    'Please enter your name.',
    'form.err.phone':   'Please enter a valid phone number.',
    'form.err.course':  'Please select a course.',

    /* Footer */
    'footer.desc':         "Namangan's leading IELTS & English centre since 2015. Official IDP IELTS & British Council partner.",
    'footer.col1.title':   'Programs',
    'footer.col1.l1': 'IELTS Intensive',   'footer.col1.l2': 'CEFR Pathway',
    'footer.col1.l3': 'DTM Preparation',   'footer.col1.l4': 'Pre-school English',
    'footer.col1.l5': 'General English',
    'footer.col2.title':   'Company',
    'footer.col2.l1': 'About Us',           'footer.col2.l2': 'Our Teachers',
    'footer.col2.l3': 'Student Results',    'footer.col2.l4': 'Contact',
    'footer.col3.title':   'Contact',
    'footer.col3.addr':    'Namangan, Uzbekistan',
    'footer.copy':         '© 2025 Stanford O\'quv Markazi. All rights reserved.',
    'footer.badge':        '🤝 IDP IELTS & British Council Partner',

    /* Mobile CTA bar */
    'cta.call':  '📞 Call Us',
    'cta.apply': 'Apply Now →',

    /* Telegram tooltip */
    'tg.tooltip': 'Chat on Telegram',

    /* Modal */
    'modal.tag':           'Free Trial Class',
    'modal.title':         'Book Your Free Lesson',
    'modal.sub':           'No payment needed. Pick a time, come in, and see if Stanford is right for you.',
    'modal.step1':         'Your Info',
    'modal.step2':         'Course',
    'modal.step3':         'Time',
    'modal.submit':        'Confirm Booking 🎓',
    'modal.fallback':      'Or message us on',
    'modal.success.title': "You're Booked! 🎉",
    'modal.success.body':  "We'll confirm your free trial on Telegram within 2 hours. See you at Stanford!",
    'modal.success.tg':    'Open Telegram to Confirm',
  },


  /* ────────────────── O'ZBEK ────────────────── */
  uz: {

    'nav.home':     'Bosh sahifa',
    'nav.about':    "Haqimizda",
    'nav.courses':  'Kurslar',
    'nav.teachers': "O'qituvchilar",
    'nav.results':  'Natijalar',
    'nav.contact':  'Aloqa',
    'nav.apply':    'Ariza berish',

    'hero.badge':    "Yozgi qabul boshlandi — 2025 · Namangan",
    'hero.headline': '<span class="highlight">IELTS 7.0+</span> ball olish<br/>mutaxassis o\'qituvchilar bilan',
    'hero.sub':      "Stanford O'quv Markazi — Namanganning eng ishonchli ingliz tili va imtihon tayyorgarlik markazi. Isbotlangan metodlar, sertifikatlangan o'qituvchilar, haqiqiy natijalar.",
    'hero.cta1':     'Ariza berish →',
    'hero.cta2':     "Kurslarni ko'rish",
    'hero.stat1':    "O'quvchilar",
    'hero.stat2':    'Eng yuqori ball',
    'hero.stat3':    'Muvaffaqiyat darajasi',

    'trial.next':  'Keyingi bepul dars:',
    'trial.spots': '6 joy qoldi',
    'trial.btn':   'Yozilish',

    'card1.label': 'Eng yuqori ball',
    'card1.value': 'IELTS 8.5',
    'card2.label': "O'rtacha o'sish",
    'card2.value': '+1.5 band',
    'card3.value': 'IDP va BC hamkori',

    'stats.s1': "O'quvchilar soni",
    'stats.s2': 'Eng yuqori IELTS balli',
    'stats.s3': 'Maqsadli ball darajasi',
    'stats.s4': "Mutaxassis o'qituvchilar",

    'about.tag':   'Bizning tarix',
    'about.title': 'Natijalar uchun yaratilgan',
    'about.p1':    "Stanford O'quv Markazi <strong>2015</strong> yilda bitta maqsad bilan tashkil etilgan: O'zbekistondagi har bir o'quvchiga jahon darajasidagi ingliz tili ta'limini berish.",
    'about.p2':    "Biz <strong>IELTS, CEFR va DTM</strong> tayyorgarligi hamda maktabgacha ingliz tili bo'yicha ixtisoslashamiz. Xalqaro metodologiya, mahalliy tajriba.",
    'about.p3':    "Rasmiy <strong>IDP IELTS va British Council hamkori</strong> sifatida biz eng yuqori global o'qitish standartlariga javob beramiz.",
    'about.v1t':   'Natijaga yo\'naltirilgan',
    'about.v1d':   'Har bir dars sizning ballingizni oshirishga mo\'ljallangan.',
    'about.v2t':   'Kichik guruhlar',
    'about.v2d':   'Maksimal 12 o\'quvchi — shaxsiy e\'tibor kafolatlanadi.',
    'about.v3t':   'Xalqaro standartlar',
    'about.v3d':   'IDP va British Council sertifikatlangan metodologiya.',
    'about.v4t':   'Qo\'llab-quvvatlovchi muhit',
    'about.v4d':   'Har qanday yutuqni — katta yoki kichik — nishonlaymiz.',
    'about.c1n':   '2015',
    'about.c1l':   'Tashkil etilgan yil',
    'about.c2n':   '5,000+',
    'about.c2l':   "O'quvchilar soni",
    'about.c3n':   '10+',
    'about.c3l':   "Sertifikatlangan o'qituvchilar",
    'about.partner': 'Rasmiy hamkor: IDP IELTS va British Council',

    'courses.tag':    'Dasturlar',
    'courses.title':  'Kursni toping',
    'courses.sub':    "Boshlang'ich ingliz tilidan ilg'or IELTS tayyorgarligiga — har bir daraja, yosh va maqsad uchun kurs.",
    'courses.enroll': 'Yozilish',
    'c1.badge': 'IELTS',         'c1.title': 'IELTS Intensiv',
    'c1.desc':  "6.5–8.5 ball olish uchun maqsadli tayyorgarlik. To'liq mock testlar, band oshirish strategiyalari va ekspert fikr-mulohazalari.",
    'c1.meta':  "Barcha darajalar · 3–6 oy",
    'c2.badge': 'Umumiy',        'c2.title': 'Umumiy ingliz tili',
    'c2.desc':  "Kuchli poydevor quring. Grammatika, lug'at, o'qish, yozish, tinglash va gapirish — barchasi bir kursda.",
    'c2.meta':  "Boshlang'ich – Ilg'or",
    'c3.badge': 'CEFR',          'c3.title': 'CEFR A1 → C2',
    'c3.desc':  "Xalqaro darajada tan olingan ingliz tili malakasi yo'li. A1 dan C2 gacha haqiqiy muloqot ko'nikmalarini rivojlantiring.",
    'c3.meta':  "A1 dan C2 · Barcha yoshlar",
    'c4.badge': 'Maktabgacha',   'c4.title': "Yosh o'quvchilar",
    'c4.desc':  "4–10 yoshli bolalar uchun o'yin asosida ingliz tili. Qo'shiqlar, hikoyalar, o'yinlar va muloyim tizimli ta'lim.",
    'c4.meta':  "4–10 yosh",

    'teachers.tag':   'Jamoa',
    'teachers.title': "O'qituvchilar bilan tanishing",
    'teachers.sub':   "Stanford'dagi har bir o'qituvchi sertifikatlangan, tajribali va sizning muvaffaqiyatingizga chin dildan qiziqadi.",
    't.score': 'IELTS:', 't.cert': 'Sertifikat:', 't.exp': 'Tajriba:', 't.from': 'Qayerdan:',
    't1.name': 'Malika Yusupova', 't1.role': 'IELTS bo\'limi rahbari',
    't1.score': '8.5 band', 't1.cert': 'CELTA, IDP', 't1.exp': '8+ yil',
    't1.bio':  "Yozish va O'qish modullarida mutaxassis. So'nggi ikki yilda 300+ o'quvchiga 7+ band olishga yordam berdi.",
    't1.tag1': 'IELTS', 't1.tag2': 'Yozish', 't1.tag3': 'CELTA',
    't2.name': "James O'Brien", 't2.role': 'Ona tili inglizcha o\'qituvchi',
    't2.from': 'Dublin 🇮🇪', 't2.cert': 'DELTA, CELTA', 't2.exp': '6 yil',
    't2.bio':  "Gapirish va Tinglash bo'yicha ixtisoslashgan. O'quvchilar sabr-toqatliligi va ravshanligi uchun maqtashadi.",
    't2.tag1': 'Gapirish', 't2.tag2': 'Tinglash', 't2.tag3': 'Ona tili',
    't3.name': 'Dilnoza Hamidova', 't3.role': "Maktabgacha va kichik yoshlar rahbari",
    't3.score': '7.5 band', 't3.cert': 'Bolalik ta\'limi', 't3.exp': '7 yil',
    't3.bio':  "4–10 yoshlilar uchun ingliz tilini o'yin, qo'shiqlar va hikoyalar orqali sehrli qiladi.",
    't3.tag1': 'Maktabgacha', 't3.tag2': 'Kichiklar', 't3.tag3': 'Bolalar',
    't4.name': 'Bobur Toshmatov', 't4.role': 'DTM va CEFR mutaxassisi',
    't4.score': '8.0 band', 't4.cert': 'Cambridge TKT', 't4.exp': '12 yil',
    't4.bio':  "Universitet o'qituvchisi, DTM tuzilmasi va CEFR A1–C2 yo'nalishi bo'yicha mutaxassis.",
    't4.tag1': 'DTM', 't4.tag2': 'CEFR', 't4.tag3': 'Grammatika',

    'results.tag':   'Isbotlar',
    'results.title': "Haqiqiy o'quvchilar. Haqiqiy ballar.",
    'results.sub':   "Eshigimizdan kirgan va jarayonga sodiq qolgan o'quvchilarning natijalari.",
    'score.before': 'Oldin', 'score.after': 'Keyin',
    'r1.name': 'Aziz Karimov',     'r1.course': 'IELTS Intensiv · 4 oy',  'r1.tag': '+2.5 band',
    'r2.name': 'Sarvar Rakhimov',  'r2.course': 'IELTS Intensiv · 3 oy',  'r2.tag': '+2.5 band',
    'r3.name': 'Malika Nazarova',  'r3.course': 'CEFR · 8 oy',            'r3.tag': '2 daraja yuqori',
    'r4.name': 'Jasur Toshmatov',  'r4.course': 'IELTS Intensiv · 5 oy',  'r4.tag': '+2.5 band',
    'r5.name': 'Zulfiya Ismoilova','r5.course': 'CEFR · 6 oy',            'r5.tag': '2 daraja yuqori',
    'r6.name': 'Bobur Umarov',     'r6.course': 'IELTS Intensiv · 6 oy',  'r6.tag': '+2.5 band',
    'ach.s1': "O'quvchilar soni", 'ach.s2': 'Muvaffaqiyat darajasi',
    'ach.s3': 'Xorijiy universitetlar', 'ach.s4': 'Eng yuqori IELTS balli',

    'testi.tag':   'Fikrlar',
    'testi.title': "O'quvchilar nima deydi",
    'q1.quote': '"5.0 banddan keldim, 7.5 band bilan ketdim. O\'qituvchilar zaif tomonlaringizni aniq topishni bilishadi. Stanford hayotimni o\'zgartirdi."',
    'q1.name': 'Aziz Karimov',    'q1.role': 'IELTS 7.5 · Hozir Germaniyada',
    'q2.quote': '"Qizim 5 yoshida boshladi. Uning ingliz tili hozir ba\'zi kattalarnikidan yaxshiroq. Bu o\'qituvchilar bolalar bilan ishlashda ajoyib."',
    'q2.name': 'Nodira Jurayeva', 'q2.role': 'Ota-ona · Maktabgacha dastur',
    'q3.quote': '"3 oydan so\'ng birinchi urinishda 8.0 ball oldim. Mock testlar va fikr-mulohaza sessiyalari bebaho edi."',
    'q3.name': 'Sarvar Rakhimov', 'q3.role': 'IELTS 8.0 · Edinburg universiteti',
    'q4.quote': '"CEFR yo\'li menga kerakli tuzilmani berdi. 8 oyda A2 dan B2 ga — endi ishda ingliz tilida ishonch bilan muloqot qilaman."',
    'q4.name': 'Bekzod Tursunov', 'q4.role': 'CEFR B2 · IT mutaxassisi',

    'loc.tag':         'Bizni toping',
    'loc.title':       "Biz Namangandamiz",
    'loc.sub':         "Bepul joylashtirish testi uchun keling — oldindan ro'yxatdan o'tish shart emas.",
    'loc.addr.label':  'Manzil',
    'loc.addr.val':    'Namangan, O\'zbekiston',
    'loc.hours.label': 'Ish vaqti',
    'loc.hours.wd':    'Du–Sha: 08:30 – 21:00',
    'loc.hours.wk':    'Yakshanba: 09:00 – 15:00',
    'loc.phone.label': 'Telefon',
    'loc.tg.label':    'Telegram',
    'loc.directions':  '🗺️ Yo\'nalish olish',

    'contact.tag':       'Bog\'lanish',
    'contact.title':     'Bugun boshlang',
    'contact.sub':       "Formani to'ldiring, 24 soat ichida siz bilan bog'lanamiz. Bepul joylashtirish testi kiritilgan.",
    'contact.ch1.title': 'Qo\'ng\'iroq qiling', 'contact.ch1.val': '+998 99 190 40 00',
    'contact.ch2.title': 'Telegram',             'contact.ch2.val': '@stanfordschooluz',
    'contact.ch3.title': 'Instagram',             'contact.ch3.val': '@stanford.lc',

    'form.name':        'To\'liq ism',
    'form.phone':       'Telefon raqam',
    'form.course':      'Qaysi kurs qiziqtiradi',
    'form.course.opt0': 'Kurs tanlang...',
    'form.course.opt1': 'IELTS Intensiv',
    'form.course.opt2': 'CEFR (A1–C2)',
    'form.course.opt3': 'DTM tayyorgarligi',
    'form.course.opt4': 'Maktabgacha ingliz tili',
    'form.course.opt5': 'Umumiy ingliz tili',
    'form.msg':         'Xabar',
    'form.optional':    '(ixtiyoriy)',
    'form.submit':      'Xabar yuborish 🚀',
    'form.success':     "🎉 Yuborildi! 24 soat ichida siz bilan bog'lanamiz.",
    'form.reply':       "O'rtacha javob vaqti:",
    'form.replytime':   '1 soatdan kam',
    'form.tgbtn':       '✈️ Telegram orqali yozish',
    'form.err.name':    'Iltimos, ismingizni kiriting.',
    'form.err.phone':   'Iltimos, to\'g\'ri telefon raqam kiriting.',
    'form.err.course':  'Iltimos, kurs tanlang.',

    'footer.desc':       "Namanganning yetakchi IELTS va ingliz tili markazi, 2015 yildan beri. Rasmiy IDP IELTS va British Council hamkori.",
    'footer.col1.title': 'Dasturlar',
    'footer.col1.l1': 'IELTS Intensiv',       'footer.col1.l2': 'CEFR',
    'footer.col1.l3': 'DTM tayyorgarligi',    'footer.col1.l4': 'Maktabgacha ingliz tili',
    'footer.col1.l5': 'Umumiy ingliz tili',
    'footer.col2.title': 'Kompaniya',
    'footer.col2.l1': 'Haqimizda',            'footer.col2.l2': "O'qituvchilarimiz",
    'footer.col2.l3': "O'quvchilar natijalari",'footer.col2.l4': 'Aloqa',
    'footer.col3.title': 'Aloqa',
    'footer.col3.addr':  'Namangan, O\'zbekiston',
    'footer.copy':       "© 2025 Stanford O'quv Markazi. Barcha huquqlar himoyalangan.",
    'footer.badge':      '🤝 IDP IELTS va British Council hamkori',

    'cta.call':  '📞 Qo\'ng\'iroq',
    'cta.apply': 'Ariza berish →',
    'tg.tooltip': 'Telegram orqali yozish',

    'modal.tag':           'Bepul sinov darsi',
    'modal.title':         'Bepul darsga yoziling',
    'modal.sub':           "To'lov talab qilinmaydi. Vaqt tanlang, keling va Stanford siz uchun mos ekanligini bilib oling.",
    'modal.step1':         "Ma'lumotlar",
    'modal.step2':         'Kurs',
    'modal.step3':         'Vaqt',
    'modal.submit':        'Bronni tasdiqlash 🎓',
    'modal.fallback':      'Yoki bizga yozing',
    'modal.success.title': 'Siz yozildingiz! 🎉',
    'modal.success.body':  "Bepul sinov darsingizni 2 soat ichida Telegram orqali tasdiqlaymiz. Stanford'da ko'rishguncha!",
    'modal.success.tg':    'Telegramda tasdiqlash',
  },


  /* ────────────────── РУССКИЙ ────────────────── */
  ru: {

    'nav.home':     'Главная',
    'nav.about':    'О нас',
    'nav.courses':  'Курсы',
    'nav.teachers': 'Преподаватели',
    'nav.results':  'Результаты',
    'nav.contact':  'Контакты',
    'nav.apply':    'Подать заявку',

    'hero.badge':    'Летний набор открыт — 2025 · Наманган',
    'hero.headline': 'Получите <span class="highlight">IELTS 7.0+</span><br/>с опытными преподавателями',
    'hero.sub':      "Stanford O'quv Markazi — самый надёжный центр подготовки к IELTS в Намангане. Проверенные методы, сертифицированные преподаватели, реальные результаты.",
    'hero.cta1':     'Подать заявку →',
    'hero.cta2':     'Смотреть курсы',
    'hero.stat1':    'Студентов',
    'hero.stat2':    'Лучший балл',
    'hero.stat3':    'Процент сдачи',

    'trial.next':  'Следующий пробный урок:',
    'trial.spots': 'Осталось 6 мест',
    'trial.btn':   'Записаться',

    'card1.label': 'Лучший результат',
    'card1.value': 'IELTS 8.5',
    'card2.label': 'Среднее улучшение',
    'card2.value': '+1.5 балла',
    'card3.value': 'Партнёр IDP и BC',

    'stats.s1': 'Обучено студентов',
    'stats.s2': 'Лучший балл IELTS',
    'stats.s3': 'Процент успешности',
    'stats.s4': 'Опытных педагогов',

    'about.tag':   'Наша история',
    'about.title': 'Созданы для результата',
    'about.p1':    "Stanford O'quv Markazi основан в <strong>2015</strong> году с одной целью: дать каждому студенту в Узбекистане доступ к образованию мирового класса.",
    'about.p2':    'Мы специализируемся на подготовке к <strong>IELTS, CEFR и ДТМ</strong>, а также на английском для дошкольников. Международные методы, местная экспертиза.',
    'about.p3':    'Как официальный партнёр <strong>IDP IELTS и British Council</strong>, мы соответствуем высочайшим мировым стандартам обучения.',
    'about.v1t':   'Ориентация на результат',
    'about.v1d':   'Каждый урок направлен на повышение вашего балла.',
    'about.v2t':   'Маленькие группы',
    'about.v2d':   'Максимум 12 студентов — личное внимание гарантировано.',
    'about.v3t':   'Мировые стандарты',
    'about.v3d':   'Методология, сертифицированная IDP и British Council.',
    'about.v4t':   'Поддерживающая среда',
    'about.v4d':   'Мы отмечаем каждую победу — большую и маленькую.',
    'about.c1n':   '2015',
    'about.c1l':   'Год основания',
    'about.c2n':   '5,000+',
    'about.c2l':   'Обучено студентов',
    'about.c3n':   '10+',
    'about.c3l':   'Сертифицированных педагогов',
    'about.partner': 'Официальный партнёр: IDP IELTS и British Council',

    'courses.tag':    'Программы',
    'courses.title':  'Найдите свой курс',
    'courses.sub':    'От базового английского до продвинутой подготовки к IELTS — курс для любого уровня, возраста и цели.',
    'courses.enroll': 'Записаться',
    'c1.badge': 'IELTS',       'c1.title': 'Подготовка к IELTS',
    'c1.desc':  'Достигните 6.5–8.5 с целевой подготовкой. Полные пробные тесты, стратегии повышения балла и экспертная обратная связь.',
    'c1.meta':  'Все уровни · 3–6 месяцев',
    'c2.badge': 'Общий',       'c2.title': 'Общий английский',
    'c2.desc':  'Создайте прочную основу. Грамматика, словарный запас, чтение, письмо, аудирование и разговорная речь — всё в одном курсе.',
    'c2.meta':  'Начинающий – Продвинутый',
    'c3.badge': 'CEFR',        'c3.title': 'CEFR A1 → C2',
    'c3.desc':  'Международно признанный путь к уровню владения английским. Развивайте реальные навыки общения от A1 до C2.',
    'c3.meta':  'A1 – C2 · Все возрасты',
    'c4.badge': 'Дошкольный',  'c4.title': 'Для самых маленьких',
    'c4.desc':  'Английский через игру для детей 4–10 лет. Песни, истории, игры и мягкое структурированное обучение.',
    'c4.meta':  '4–10 лет',

    'teachers.tag':   'Наша команда',
    'teachers.title': 'Познакомьтесь с преподавателями',
    'teachers.sub':   'Сертифицированные, опытные и искренне заинтересованные в вашем успехе.',
    't.score': 'IELTS:', 't.cert': 'Серт.:', 't.exp': 'Опыт:', 't.from': 'Откуда:',
    't1.name': 'Малика Юсупова', 't1.role': 'Руководитель отдела IELTS',
    't1.score': 'Балл 8.5', 't1.cert': 'CELTA, IDP', 't1.exp': '8+ лет',
    't1.bio':  'Специалист по письму и чтению. Помогла 300+ студентам достичь балла 7+.',
    't1.tag1': 'IELTS', 't1.tag2': 'Письмо', 't1.tag3': 'CELTA',
    't2.name': "James O'Brien", 't2.role': 'Носитель английского языка',
    't2.from': 'Дублин 🇮🇪', 't2.cert': 'DELTA, CELTA', 't2.exp': '6 лет',
    't2.bio':  'Специализируется на разговорной речи и аудировании. Студенты ценят его терпение и ясность изложения.',
    't2.tag1': 'Говорение', 't2.tag2': 'Аудирование', 't2.tag3': 'Носитель',
    't3.name': 'Дилноза Хамидова', 't3.role': 'Руководитель дошкольного направления',
    't3.score': 'Балл 7.5', 't3.cert': 'Дошкольное образование', 't3.exp': '7 лет',
    't3.bio':  'Делает английский волшебным для детей 4–10 лет через игры, песни и сказки.',
    't3.tag1': 'Дошкольный', 't3.tag2': 'Младший', 't3.tag3': 'Дети',
    't4.name': 'Бобур Тошматов', 't4.role': 'Специалист по ДТМ и CEFR',
    't4.score': 'Балл 8.0', 't4.cert': 'Cambridge TKT', 't4.exp': '12 лет',
    't4.bio':  'Университетский преподаватель, эксперт по структуре ДТМ и программе CEFR A1–C2.',
    't4.tag1': 'ДТМ', 't4.tag2': 'CEFR', 't4.tag3': 'Грамматика',

    'results.tag':   'Доказательства',
    'results.title': 'Реальные студенты. Реальные баллы.',
    'results.sub':   'Результаты студентов, которые переступили наш порог и прошли весь путь.',
    'score.before': 'До', 'score.after': 'После',
    'r1.name': 'Азиз Каримов',      'r1.course': 'Подготовка к IELTS · 4 мес.',  'r1.tag': '+2.5 балла',
    'r2.name': 'Сарвар Рахимов',    'r2.course': 'Подготовка к IELTS · 3 мес.',  'r2.tag': '+2.5 балла',
    'r3.name': 'Малика Назарова',   'r3.course': 'Путь CEFR · 8 мес.',           'r3.tag': '2 уровня вверх',
    'r4.name': 'Жасур Тошматов',    'r4.course': 'Подготовка к IELTS · 5 мес.',  'r4.tag': '+2.5 балла',
    'r5.name': 'Зульфия Исмоилова', 'r5.course': 'Путь CEFR · 6 мес.',           'r5.tag': '2 уровня вверх',
    'r6.name': 'Бобур Умаров',      'r6.course': 'Подготовка к IELTS · 6 мес.',  'r6.tag': '+2.5 балла',
    'ach.s1': 'Обучено студентов', 'ach.s2': 'Процент успеха',
    'ach.s3': 'Зарубежных университетов', 'ach.s4': 'Лучший балл IELTS',

    'testi.tag':   'Отзывы',
    'testi.title': 'Что говорят студенты',
    'q1.quote': '"Пришёл с баллом 5.0 и ушёл с 7.5. Преподаватели знают, как работать с вашими слабыми местами. Stanford изменил мою жизнь."',
    'q1.name': 'Азиз Каримов',      'q1.role': 'IELTS 7.5 · Сейчас в Германии',
    'q2.quote': '"Дочь начала в 5 лет. Теперь её английский лучше, чем у некоторых взрослых. Эти педагоги просто невероятны с детьми."',
    'q2.name': 'Нодира Жураева',    'q2.role': 'Родитель · Дошкольная программа',
    'q3.quote': '"Сдал на 8.0 с первой попытки после 3 месяцев здесь. Пробные тесты и сессии обратной связи были бесценны."',
    'q3.name': 'Сарвар Рахимов',    'q3.role': 'IELTS 8.0 · Эдинбургский университет',
    'q4.quote': '"Путь CEFR дал мне нужную структуру. С A2 до B2 за 8 месяцев — теперь уверенно общаюсь по-английски на работе."',
    'q4.name': 'Бекзод Турсунов',   'q4.role': 'CEFR B2 · IT-специалист',

    'loc.tag':         'Найдите нас',
    'loc.title':       'Мы в Намангане',
    'loc.sub':         'Приходите на бесплатный тест для определения уровня — запись не требуется.',
    'loc.addr.label':  'Адрес',
    'loc.addr.val':    'Наманган, Узбекистан',
    'loc.hours.label': 'Часы работы',
    'loc.hours.wd':    'Пн–Сб: 08:30 – 21:00',
    'loc.hours.wk':    'Воскресенье: 09:00 – 15:00',
    'loc.phone.label': 'Телефон',
    'loc.tg.label':    'Telegram',
    'loc.directions':  '🗺️ Проложить маршрут',

    'contact.tag':       'Связаться с нами',
    'contact.title':     'Начните сегодня',
    'contact.sub':       'Заполните форму — мы свяжемся с вами в течение 24 часов. Бесплатный тест уровня включён.',
    'contact.ch1.title': 'Позвонить',   'contact.ch1.val': '+998 99 190 40 00',
    'contact.ch2.title': 'Telegram',    'contact.ch2.val': '@stanfordschooluz',
    'contact.ch3.title': 'Instagram',   'contact.ch3.val': '@stanford.lc',

    'form.name':        'Полное имя',
    'form.phone':       'Номер телефона',
    'form.course':      'Интересующий курс',
    'form.course.opt0': 'Выберите курс...',
    'form.course.opt1': 'Подготовка к IELTS',
    'form.course.opt2': 'Путь CEFR (A1–C2)',
    'form.course.opt3': 'Подготовка к ДТМ',
    'form.course.opt4': 'Английский для дошкольников',
    'form.course.opt5': 'Общий английский',
    'form.msg':         'Сообщение',
    'form.optional':    '(необязательно)',
    'form.submit':      'Отправить сообщение 🚀',
    'form.success':     '🎉 Отправлено! Мы свяжемся с вами в течение 24 часов.',
    'form.reply':       'Среднее время ответа:',
    'form.replytime':   'менее 1 часа',
    'form.tgbtn':       '✈️ Написать в Telegram',
    'form.err.name':    'Пожалуйста, введите ваше имя.',
    'form.err.phone':   'Пожалуйста, введите корректный номер телефона.',
    'form.err.course':  'Пожалуйста, выберите курс.',

    'footer.desc':       "Ведущий центр IELTS и английского языка в Намангане с 2015 года. Официальный партнёр IDP IELTS и British Council.",
    'footer.col1.title': 'Программы',
    'footer.col1.l1': 'Подготовка к IELTS',     'footer.col1.l2': 'Путь CEFR',
    'footer.col1.l3': 'Подготовка к ДТМ',       'footer.col1.l4': 'Английский для дошкольников',
    'footer.col1.l5': 'Общий английский',
    'footer.col2.title': 'Компания',
    'footer.col2.l1': 'О нас',                   'footer.col2.l2': 'Преподаватели',
    'footer.col2.l3': 'Результаты студентов',    'footer.col2.l4': 'Контакты',
    'footer.col3.title': 'Контакты',
    'footer.col3.addr':  'Наманган, Узбекистан',
    'footer.copy':       "© 2025 Stanford O'quv Markazi. Все права защищены.",
    'footer.badge':      '🤝 Партнёр IDP IELTS и British Council',

    'cta.call':  '📞 Позвонить',
    'cta.apply': 'Подать заявку →',
    'tg.tooltip': 'Написать в Telegram',

    'modal.tag':           'Бесплатный пробный урок',
    'modal.title':         'Запишитесь на бесплатный урок',
    'modal.sub':           'Без оплаты. Выберите время, приходите и убедитесь, что Stanford вам подходит.',
    'modal.step1':         'Данные',
    'modal.step2':         'Курс',
    'modal.step3':         'Время',
    'modal.submit':        'Подтвердить запись 🎓',
    'modal.fallback':      'Или напишите нам в',
    'modal.success.title': 'Вы записаны! 🎉',
    'modal.success.body':  'Мы подтвердим ваш пробный урок в Telegram в течение 2 часов. Ждём вас!',
    'modal.success.tg':    'Открыть Telegram',
  },
};


/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectTelegramButton();
  injectModal();
  initLanguageToggle();
  initModal();
});


/* ── FEATURE 1: Telegram Floating Button ── */
function injectTelegramButton() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="tg-float">
      <span class="tg-float__tooltip" data-i18n="tg.tooltip">Chat on Telegram</span>
      <a class="tg-float__btn" href="https://t.me/stanfordschooluz"
         target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <svg class="tg-float__icon" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </a>
    </div>
  `);
}


/* ── FEATURE 2: Full-Site Language Toggle ── */
function initLanguageToggle() {
  const navbar = document.querySelector('.navbar__inner');
  if (!navbar) return;

  const html = `
    <div class="lang-toggle" id="langToggle" role="group" aria-label="Language">
      <button class="lang-toggle__btn" data-lang="uz" aria-pressed="false">UZ</button>
      <button class="lang-toggle__btn" data-lang="ru" aria-pressed="false">RU</button>
      <button class="lang-toggle__btn active" data-lang="en" aria-pressed="true">EN</button>
    </div>`;

  const cta = navbar.querySelector('.navbar__cta');
  cta
    ? navbar.insertBefore(document.createRange().createContextualFragment(html), cta)
    : navbar.insertAdjacentHTML('beforeend', html);

  /* Restore saved language */
  const saved = localStorage.getItem('stanford_lang') || 'en';
  applyLanguage(saved);
  setActiveLangBtn(saved);

  document.getElementById('langToggle')?.addEventListener('click', e => {
    const btn = e.target.closest('.lang-toggle__btn');
    if (!btn) return;
    const lang = btn.dataset.lang;
    applyLanguage(lang);
    setActiveLangBtn(lang);
    localStorage.setItem('stanford_lang', lang);
  });
}

/**
 * Swap ALL translatable text on the page.
 * data-i18n      → textContent swap (plain text)
 * data-i18n-html → innerHTML swap  (contains HTML tags)
 */
function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  /* Plain text elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  /* HTML elements (headlines, paragraphs with <strong> etc.) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = dict[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  /* Update <select> option text separately
     (option elements need textContent, not innerHTML) */
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const val = dict[opt.dataset.i18n];
    if (val !== undefined) opt.textContent = val;
  });

  /* Update page language attribute for accessibility */
  document.documentElement.lang = lang;
}

function setActiveLangBtn(lang) {
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}


/* ── FEATURE 3: Booking Modal ── */
function injectModal() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay" id="trialModal" role="dialog" aria-modal="true">
      <div class="modal" id="modalCard">
        <div id="modalFormView">
          <div class="modal__header">
            <div>
              <span class="modal__tag"   data-i18n="modal.tag">Free Trial Class</span>
              <h2  class="modal__title"  data-i18n="modal.title">Book Your Free Lesson</h2>
              <p   class="modal__sub"    data-i18n="modal.sub">No payment needed.</p>
            </div>
            <button class="modal__close" id="modalClose">✕</button>
          </div>
          <div class="modal__steps">
            <div class="modal__step active" id="stepInd1">
              <div class="modal__step-dot">1</div>
              <span class="modal__step-label" data-i18n="modal.step1">Your Info</span>
            </div>
            <div class="modal__step-line"></div>
            <div class="modal__step" id="stepInd2">
              <div class="modal__step-dot">2</div>
              <span class="modal__step-label" data-i18n="modal.step2">Course</span>
            </div>
            <div class="modal__step-line"></div>
            <div class="modal__step" id="stepInd3">
              <div class="modal__step-dot">3</div>
              <span class="modal__step-label" data-i18n="modal.step3">Time</span>
            </div>
          </div>
          <div class="modal__body">
            <form class="modal__form" id="trialForm" novalidate>
              <div id="formStep1">
                <div class="form-row">
                  <div class="form-group" id="mNameGroup">
                    <label for="mName">Full Name</label>
                    <input type="text" id="mName" placeholder="Aziz Karimov" autocomplete="name" required />
                    <span class="form-group__error">Please enter your name.</span>
                  </div>
                  <div class="form-group" id="mPhoneGroup">
                    <label for="mPhone">Phone</label>
                    <input type="tel" id="mPhone" placeholder="+998 XX XXX XX XX" autocomplete="tel" required />
                    <span class="form-group__error">Enter a valid number.</span>
                  </div>
                </div>
                <button type="button" class="modal__submit" id="step1Next">Next →</button>
              </div>
              <div id="formStep2" style="display:none;">
                <div class="form-group" id="mCourseGroup">
                  <label for="mCourse">Which course?</label>
                  <select id="mCourse" required>
                    <option value="">Select a course...</option>
                    <option value="ielts">IELTS Intensive</option>
                    <option value="cefr">CEFR (A1–C2)</option>
                    <option value="dtm">DTM Preparation</option>
                    <option value="pre">Pre-school English</option>
                    <option value="gen">General English</option>
                  </select>
                  <span class="form-group__error">Please select a course.</span>
                </div>
                <div class="form-group">
                  <label for="mNote">Message <span class="optional">(optional)</span></label>
                  <textarea id="mNote" rows="2" placeholder="Your level, goals, questions..."></textarea>
                </div>
                <button type="button" class="modal__submit" id="step2Next">Next →</button>
              </div>
              <div id="formStep3" style="display:none;">
                <div class="form-group" id="mDateGroup">
                  <label for="mDate">Preferred Date</label>
                  <input type="date" id="mDate" min="${minDate}" required />
                  <span class="form-group__error">Please select a date.</span>
                </div>
                <div class="form-group">
                  <label>Preferred Time</label>
                  <div class="time-slots" id="timeSlots">
                    <button type="button" class="time-slot" data-time="09:00">09:00</button>
                    <button type="button" class="time-slot" data-time="10:00">10:00</button>
                    <button type="button" class="time-slot" data-time="11:00">11:00</button>
                    <button type="button" class="time-slot" data-time="12:00">12:00</button>
                    <button type="button" class="time-slot" data-time="14:00">14:00</button>
                    <button type="button" class="time-slot" data-time="15:00">15:00</button>
                    <button type="button" class="time-slot" data-time="16:00">16:00</button>
                    <button type="button" class="time-slot full" disabled>17:00 ✕</button>
                    <button type="button" class="time-slot" data-time="18:30">18:30</button>
                  </div>
                  <span class="form-group__error" id="timeError" style="display:none;">Please select a time.</span>
                </div>
                <button type="submit" class="modal__submit" data-i18n="modal.submit">Confirm Booking 🎓</button>
              </div>
            </form>
            <p class="modal__tg-fallback">
              <span data-i18n="modal.fallback">Or message us on</span>
              <a href="https://t.me/stanfordschooluz" target="_blank" rel="noopener">Telegram ✈️</a>
            </p>
          </div>
        </div>
        <div class="modal__success" id="modalSuccess">
          <div class="modal__success-icon">🎉</div>
          <h3 data-i18n="modal.success.title">You're Booked!</h3>
          <p  data-i18n="modal.success.body">We'll confirm on Telegram within 2 hours.</p>
          <a href="https://t.me/stanfordschooluz" target="_blank" rel="noopener"
             class="modal__success-tg" data-i18n="modal.success.tg">Open Telegram</a>
        </div>
      </div>
    </div>
  `);
}

function initModal() {
  const overlay = document.getElementById('trialModal');
  if (!overlay) return;

  document.addEventListener('click', e => {
    if (e.target.closest('[data-open="trial-modal"]')) openModal();
  });
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
  document.getElementById('step1Next')?.addEventListener('click', () => {
    if (validateStep1()) goToStep(2);
  });
  document.getElementById('step2Next')?.addEventListener('click', () => {
    if (validateStep2()) goToStep(3);
  });
  document.getElementById('timeSlots')?.addEventListener('click', e => {
    const slot = e.target.closest('.time-slot:not(.full)');
    if (!slot) return;
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
    slot.classList.add('selected');
    document.getElementById('timeError').style.display = 'none';
  });
  document.getElementById('trialForm')?.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStep3()) showModalSuccess();
  });
}

function openModal() {
  const o = document.getElementById('trialModal');
  if (!o) return;
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
  applyLanguage(localStorage.getItem('stanford_lang') || 'en');
}
function closeModal() {
  const o = document.getElementById('trialModal');
  if (!o) return;
  o.classList.remove('open');
  document.body.style.overflow = '';
}
function goToStep(step) {
  ['formStep1','formStep2','formStep3'].forEach((id,i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = i === step - 1 ? 'block' : 'none';
  });
  [1,2,3].forEach(n => {
    const d = document.getElementById(`stepInd${n}`);
    if (!d) return;
    d.classList.remove('active','done');
    if (n < step)  d.classList.add('done');
    if (n === step) d.classList.add('active');
  });
  document.getElementById('modalCard')?.scrollTo({top:0,behavior:'smooth'});
}
function validateStep1() {
  let ok = true;
  const n = document.getElementById('mName'), ng = document.getElementById('mNameGroup');
  if (!n?.value.trim() || n.value.trim().length < 2) { ng?.classList.add('error'); ok=false; }
  else ng?.classList.remove('error');
  const p = document.getElementById('mPhone'), pg = document.getElementById('mPhoneGroup');
  const pv = p?.value.trim().replace(/\s+/g,'');
  if (!pv || !/^[+\d][\d\-]{6,}$/.test(pv)) { pg?.classList.add('error'); ok=false; }
  else pg?.classList.remove('error');
  return ok;
}
function validateStep2() {
  const c = document.getElementById('mCourse'), cg = document.getElementById('mCourseGroup');
  if (!c?.value) { cg?.classList.add('error'); return false; }
  cg?.classList.remove('error'); return true;
}
function validateStep3() {
  let ok = true;
  const d = document.getElementById('mDate'), dg = document.getElementById('mDateGroup');
  if (!d?.value) { dg?.classList.add('error'); ok=false; } else dg?.classList.remove('error');
  const te = document.getElementById('timeError');
  if (!document.querySelector('.time-slot.selected')) {
    if (te) te.style.display='block'; ok=false;
  } else { if (te) te.style.display='none'; }
  return ok;
}
function showModalSuccess() {
  document.getElementById('modalFormView').style.display = 'none';
  document.getElementById('modalSuccess').style.display = 'flex';
  document.getElementById('modalCard')?.scrollTo({top:0,behavior:'smooth'});
}
