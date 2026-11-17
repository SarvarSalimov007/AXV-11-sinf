import { Module } from '../types';

export const module4: Module = {
  id: 'module-4',
  title: 'Freelance va Startap',
  description: 'IT bozorida daromad topish yo\'llari: Upwork va Fiverr da ishlash, mijozlar bilan muloqot, narx belgilash, o\'z startapingizni noldan boshlash, Lean Canvas, MVP yaratish va investitsiya uchun Pitch taqdimot.',
  icon: 'Briefcase',
  color: 'orange',
  gradient: 'from-amber-500 via-orange-600 to-red-500',
  project: {
    title: 'Maktab va Jamiyat Uchun Startup MVP',
    description: '11-sinf o\'quvchilari hayotidagi real muammoni (masalan: dars jadvali, kitob almashish, olimpiadaga tayyorgarlik yoki ovqatxona navbati) aniqlang, Lean Canvas modelini tuzing, ishlaydigan MVP prototipini ishlab chiqing va hakamlar hay\'atiga 3 daqiqalik Pitch taqdimot qiling.',
    tasks: [
      'Muammoni aniqlash va o\'quvchilar/ustozlar o\'rtasida so\'rovnoma (CustDev) o\'tkazish',
      'Startapning 1 sahifalik Lean Canvas biznes modelini to\'ldirish',
      'Value Proposition (Qimmatli taklif) ni shakllantirish',
      'Figma da MVP ning interaktiv prototipini yaratish',
      'Next.js va Tailwind yordamida MVP ning ishlaydigan versiyasini dasturlash',
      '3 daqiqalik Pitch Deck taqdimotini tayyorlash va himoya qilish'
    ],
    technologies: ['Figma', 'Next.js', 'Lean Canvas', 'Pitch Deck', 'Agile / Scrum', 'Trello', 'Customer Development'],
    criteria: [
      'Muammo real va uning yechimi aniq foyda keltirishi isbotlangan bo\'lishi',
      'Ishlaydigan funksional MVP prototipi mavjudligi',
      'To\'liq to\'ldirilgan Lean Canvas modeli',
      '3 daqiqa ichida biznes g\'oyani aniq va ishonarli yetkaza olish (Pitch)'
    ]
  },
  lessons: [
    {
      id: 'm4-l1',
      moduleId: 'module-4',
      title: 'Freelance ekotizimi',
      description: 'Masofadan mustaqil ishlash erkinligi: Upwork, Fiverr, buyurtmachilar bilan ishlash va qoidalar.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 1,
      icon: 'Laptop',
      content: {
        theory: `Frilans (Freelance) — biror kompaniyaga rasmiy ishchi bo'lib biriktirilmasdan, butun dunyo bo'ylab mustaqil ravishda buyurtmalar olib ishlash usulidir.

Asosiy global platformalar:
- Upwork — dunyodagi eng nufuzli platforma. Bu yerda soatbay (Hourly) yoki kelishilgan narxda (Fixed-price) jiddiy uzoq muddatli shartnomalar tuziladi.
- Fiverr — aniq kichik xizmatlar (Gig) taklif qilish maydoni (masalan: "3 kunda sizga zamonaviy landing sahifa tayyorlab beraman").
- Mahalliy bozor va Telegram kanallari — O'zbekiston ichidagi ilk amaliy tajriba uchun qulay.

Frilanserning 3 ta ustuni:
1. Kuchli Portfolio (ishlaringiz siz haqingizda gapirsin).
2. Vaqtga rioya qilish (Deadline) — kechiktirish mijoz ishonchini butunlay yo'qotadi.
3. Ingliz tili — xalqaro bozorda 5-10 barobar ko'proq daromad topish garovi.`,
        realWorldExample: `Siz O'zbekistonda uyingizda o'tirgan holda, AQSH, Germaniya yoki Dubaydagi kompaniyaga veb-sayt yoki bot yasab berib, daromadni bevosita xalqaro bank kartangizga qabul qilishingiz mumkin.`,
        practicalTask: `Upwork yoki Fiverr platformalariga kirib, o'z yo'nalishingiz bo'yicha eng yuqori reytingli 3 ta profilni va ularning portfolio taqdimotini tahlil qiling.`,
        codeExample: {
          language: 'markdown',
          code: `# Frilanser Profilining Standart Tuzilmasi:

1. Professional Foto: Tabassumli, yorug' fonda, rasmiy qiyofada.
2. Aniq Sarlavha (Title): "Junior Frontend Developer" EMAS, 
   "React & Next.js Developer | Responsive Modern Web Applications"
3. Umumiy Tavsif (Bio):
   "Salom! Men biznesingiz uchun tezkor, chiroyli va mijozlarni jalb qiluvchi veb-saytlar yarataman.
   - 10+ muvaffaqiyatli loyihalar
   - Toza kod va to'liq SEO moslashuv
   - 24/7 aloqa va qo'llab-quvvatlash"`,
          explanation: 'Mijoz sizning texnologiyangizga emas, uning muammosini qanday hal qilishingizga pul to\'laydi.'
        },
        quiz: [
          {
            id: 'm4l1-q1',
            question: 'Frilanserning odatiy ofis xodimidan asosiy farqi nima?',
            options: [
              'Frilanser umuman ishlamaydi',
              'Frilanser ish joyi, vaqti va mijozlarini o\'zi mustaqil tanlaydi',
              'Frilanserga maosh berilmaydi',
              'Frilanser faqat kechasi ishlaydi'
            ],
            correctAnswer: 1,
            explanation: 'Frilans — bu geografik va vaqt jihatdan to\'liq erkinlik hamda shaxsiy mas\'uliyat demakdir.'
          },
          {
            id: 'm4l1-q2',
            question: 'Global frilans bozorida (Upwork, Fiverr) ishlash uchun qaysi tilni bilish hal qiluvchi ahamiyatga ega?',
            options: ['Faqat lotin tili', 'Ingliz tili', 'Faqat o\'zbek tili', 'Fransuz tili'],
            correctAnswer: 1,
            explanation: 'Ingliz tili xalqaro biznes muloqotining umumiy tili bo\'lib, jahon bozoriga eshik ochadi.'
          },
          {
            id: 'm4l1-q3',
            question: 'Frilansda eng qimmatbaho aktiv nima?',
            options: ['Qimmat noutbuk', 'Mijozlarning ijobiy sharhlari (5-yulduzli reyting) va ishonch', 'Ko\'p o\'yinlar', 'Tez klaviatura'],
            correctAnswer: 1,
            explanation: 'Platformalardagi yuksak reyting va haqiqiy mijozlar sharhi yangi buyurtmalarni jalb qilishning kafolatidir.'
          }
        ],
        summary: 'Frilans — bu o\'z-o\'zini boshqarish san\'ati. O\'zbekistonda turib xalqaro valyutada daromad topish 11-sinf o\'quvchisi uchun ham mutlaqo real imkoniyatdir.'
      }
    },
    {
      id: 'm4-l2',
      moduleId: 'module-4',
      title: 'Portfolio yaratish',
      description: 'Sizning eng kuchli vizitkangiz: portfolio saytda nimalar bo\'lishi shart va nimalar bo\'lmasligi kerak?',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 2,
      icon: 'FolderHeart',
      content: {
        theory: `Mijozlar yoki ish beruvchilar diplomga emas, qilgan ishlaringizga (Portfolio) qaraydi. "Menga diplom emas, ishlaringni ko'rsat!" — IT olamining bosh shioridir.

Mukammal portfolio sahifasi tarkibi:
1. Hero Bo'limi — siz kimsiz va mijozga qanday yordam bera olasiz (aniq taklif).
2. Saralangan Loyihalar (Kamida 3-4 ta to'liq bitgan loyiha) — har bir loyihada: jonli havola (Demo), GitHub kodi, ishlatilgan texnologiyalar va loyiha yechgan muammo.
3. Ko'nikmalar (Tech Stack) — o'zingiz chindan biladigan vositalar ro'yxati.
4. Men haqimda — shaxsiy qiziqishlar, maqsadlar va yondashuv.
5. Kontakt Formasi — Telegram, LinkedIn, GitHub va elektron pochta havolalari.`,
        realWorldExample: `Tasavvur qiling, siz sartaroshga bordingiz: u sizga "Men zo'r qirqaman" desa ishonmaysiz, ammo o'zi soch turmagini chiroyli qilgan odamlarning rasmlari albomini ko'rsatsa, darhol ishonasiz. Portfolio — sizning muvaffaqiyatlar albomingizdir.`,
        practicalTask: `Shaxsiy portfolioingizga kiritish uchun o'zingiz yaratgan eng yaxshi 3 ta loyihaning skrinshotini oling va qisqa tavsif yozing.`,
        codeExample: {
          language: 'markdown',
          code: `# Loyiha Kartochkasi Namunasi (Portfolio uchun):

### "IT LAB 11 — Interaktiv Ta'lim Platformasi"
- **Muammo:** 11-sinf o'quvchilari uchun zamonaviy IT bilimlari yetishmovchiligi.
- **Yechim:** Nazariya, kod muharriri va mini-testlarni o'z ichiga olgan responsive platforma.
- **Texnologiyalar:** Next.js 14, TypeScript, Tailwind CSS, Zustand, Monaco Editor.
- **Natija:** 100+ o'quvchi tomonidan sinovdan o'tkazildi, 95% ijobiy fikr.
- **Havolalar:** [Jonli Sayt](https://itlab11.uz) | [GitHub Kodi](https://github.com/...)`,
          explanation: 'Faqat rasm qo\'ymasdan, loyihaning biznesga keltirgan foydasini ko\'rsating.'
        },
        quiz: [
          {
            id: 'm4l2-q1',
            question: 'IT sohasida yangi boshlovchi dasturchi uchun eng muhim hujjat nima?',
            options: ['Qog\'oz diplom', 'Real loyihalar joylangan shaxsiy Portfolio va GitHub profili', 'Sertifikatlar to\'plami', 'Tavsiyanoma'],
            correctAnswer: 1,
            explanation: 'Portfolio — sizning haqiqiy amaliy bilimlaringizning yagona inkor etib bo\'lmas isbotidir.'
          },
          {
            id: 'm4l2-q2',
            question: 'Portfoliodagi har bir loyiha uchun qaysi elementlar bo\'lishi shart?',
            options: [
              'Faqat bitta rasm',
              'Jonli sayt havolasi (Live Demo), ochiq GitHub kodi va hal qilingan muammo tavsifi',
              'Loyiha narxi',
              'Faqat matn'
            ],
            correctAnswer: 1,
            explanation: 'Jonli havola orqali mijoz saytni bir zumda sinab ko\'ra oladi.'
          },
          {
            id: 'm4l2-q3',
            question: 'Portfolioga 50 ta chala loyiha qo\'ygan ma\'qulmi yoki 3 ta ideal sifatli loyihami?',
            options: [
              '50 ta chala loyiha ko\'proq ko\'rinadi',
              '3-4 ta to\'liq yakunlangan, xatosiz, chiroyli va real foydali loyihalar',
              'Umuman loyiha qo\'ymaslik',
              'Faqat boshqalarning kodini ko\'chirish'
            ],
            correctAnswer: 1,
            explanation: 'Sifat har doim son-sanoqsiz qoralama ishlardan ustun turadi.'
          }
        ],
        summary: 'Kuchli portfolio siz uxlab yotganingizda ham siz uchun yangi mijozlar va ish takliflarini topib beradi.'
      }
    },
    {
      id: 'm4-l3',
      moduleId: 'module-4',
      title: 'GitHub va Case Study',
      description: 'GitHub profilini professional qilish, chiroyli README.md va loyihalarni "Case Study" sifatida taqdim etish.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 3,
      icon: 'GitPullRequest',
      content: {
        theory: `Ish beruvchi dasturchini ishga olishdan oldin uning GitHub profiliga kiradi. Agar profil "yashil kvadratlar" (faollik) bilan to'la bo'lsa, bu uning har kuni kod yozishini ko'rsatadi.

Chiroyli GitHub profili sirlari:
1. Maxsus Profile README (\`foydalanuvchi/foydalanuvchi\` nomli repozitoriy) — o'zingiz haqingizda vizual bannerlar, nishonlar (badges) va statistika vidjetlari.
2. Repozitoriy README.md fayli:
   - Sarlavha va loyiha logotipi
   - Jonli demo havolasi va demo GIF animatsiyasi
   - O'rnatish va ishga tushirish yo'riqnomasi (\`npm install\`, \`npm run dev\`)
   - Arxitektura va texnologiyalar ro'yxati
3. Case Study yozish: "Biz qanday qilib X muammoni Y vosita yordamida hal qilib, natijani Z foizga oshirdik".`,
        realWorldExample: `Do'konda mahsulot chiroyli yorqin qadoqda va tushunarli yo'riqnoma bilan sotilsa, xaridorgir bo'ladi. README sizning kodingizning o'sha jozibador qadog'idir.`,
        practicalTask: `O'z GitHub hisobingizda shaxsiy profil README faylini yarating va GitHub stats vidjetlarini joylashtiring.`,
        codeExample: {
          language: 'markdown',
          code: `# Salim Karimov | Frontend Developer 🚀

[![GitHub followers](https://img.shields.io/github/followers/salim?label=Follow&style=social)](https://github.com/salim)
[![Tech](https://img.shields.io/badge/Stack-React%20%7C%20Next.js%20%7C%20Tailwind-blue)](#)

### 👨‍💻 Men haqimda:
- 🔭 Ayni paytda **IT LAB 11** EdTech platformasi ustida ishlayapman.
- 🌱 O'rganayotgan texnologiyalarim: **Docker, CI/CD, AWS**.
- 💬 Savollaringiz bormi? **Telegram: @salim_dev**

### 📊 Mening statistikam:
![Salim's GitHub Stats](https://github-readme-stats.vercel.app/api?username=salim&show_icons=true&theme=radical)`,
          explanation: 'README dagi dinamik vidjetlar profilni jonli va professional ko\'rsatadi.'
        },
        quiz: [
          {
            id: 'm4l3-q1',
            question: 'GitHub profilida faollik kalendari (yashil katakchalar) nimani bildiradi?',
            options: [
              'O\'yin o\'ynagan vaqtni',
              'Dasturchining qanchalik muntazam commit qilganini va kod yozganini',
              'Internet tezligini',
              'Kompyuter haroratini'
            ],
            correctAnswer: 1,
            explanation: 'Yashil katakchalar dasturchining intizomi va muntazam mehnatini ko\'rsatadi.'
          },
          {
            id: 'm4l3-q2',
            question: 'Repozitoriy README.md faylida nimalar bo\'lishi tavsiya etiladi?',
            options: [
              'Faqat muallifning telefoni',
              'Loyiha tavsifi, skrinshotlar, ishlatilgan texnologiyalar va ishga tushirish qo\'llanmasi',
              'Hech narsa yozmaslik kerak',
              'Faqat xatolar ro\'yxati'
            ],
            correctAnswer: 1,
            explanation: 'README har qanday dasturchiga loyihani 2 daqiqada tushunish va kompyuterida yurgizishga yordam beradi.'
          },
          {
            id: 'm4l3-q3',
            question: 'Case Study yondashuvining an\'anaviy tavsifdan afzalligi nima?',
            options: [
              'U faqat rasm bo\'ladi',
              'U muammoni, unga topilgan texnik yechimni va biznes natijasini ko\'rsatib beradi',
              'U juda qisqa',
              'U pullik'
            ],
            correctAnswer: 1,
            explanation: 'Case Study sizning biznes fikrlashingizni va real foyda keltira olishingizni namoyish qiladi.'
          }
        ],
        summary: 'Tartibli GitHub profili — butun dunyo dasturchilari o\'rtasidagi universal rezyumedir.'
      }
    },
    {
      id: 'm4-l4',
      moduleId: 'module-4',
      title: 'Mijoz bilan muloqot',
      description: 'Muvaffaqiyatli muzokaralar: Proposal (taklif) yozish, mijoz ehtiyojini tushunish va ishonch qozonish.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 4,
      icon: 'MessageSquare',
      content: {
        theory: `Frilansda ishni yutib olish kodingizning zo'rligidan emas, birinchi yozgan taklifingizdan (Proposal / Cover Letter) boshlanadi. Mijoz 50 ta murojaat orasidan aynan siznikini tanlashi kerak!

Proposal yozishning 4 ta qoidasi:
1. Tayyor shablon nusxalamang (Copy-paste qilmang) — mijoz buni 1 soniyada sezadi va darhol o'chiradi.
2. Birinchi 2 qatorda mijozning ismini va uning muammosini tilga oling ("Salom Jon, men sizning Figma dizayningizni ko'rib chiqdim...").
3. Muammoga aniq yechim taklif qiling ("Men uni Next.js da tayyorlasam, sayt 1 soniyada ochiladi").
4. Muloqotni savol bilan yakunlang (Call to Action — "Bugun 10 daqiqalik qisqa suhbat orqali tafsilotlarni kelishib olsak qanday deysiz?").`,
        realWorldExample: `Agar siz shifokorga borsangiz, u sizni eshitmasdan "Mana bu dorini iching" desa ishonmaysiz. Ammo u sizni diqqat bilan tinglab, aynan qayeringiz og'riyotganini tushuntirib dori yozsa, albatta ishonasiz. Frilansda ham mijozning dardini tushunish shart.`,
        practicalTask: `Upwork dagi real e'lon matnini o'qib, unga mos ravishda 100 so'zdan iborat professional Proposal matnini yozing.`,
        codeExample: {
          language: 'markdown',
          code: `# Noto'g'ri Taklif:
"Salom. Men zo'r dasturchiman, HTML, CSS bilaman. Menga ish bering, arzon qilaman."

# Mukammal Professional Taklif:
"Assalomu alaykum!
Sizning ta'lim markazingiz uchun qulay veb-sayt yaratish bo'yicha e'loningizni diqqat bilan o'rganib chiqdim. 

Aynan shunga o'xshash IT LAB 11 platformasini muvaffaqiyatli ishlab chiqqanman (havolani ilova qilyapman). Sizning loyihangizni to'liq responsive, qulay o'quvchi kabineti va test tizimi bilan 7 kunda tayyorlab bera olaman.

Loyiha bo'yicha kichik savolim bor edi: to'lov tizimlarini (Click/Payme) ham integratsiya qilish rejangizda bormi?
Keling, tafsilotlarni qisqa suhbatda muhokama qilamiz!"`,
          explanation: 'Mijozga e\'tibor qaratgan samimiy va professional taklif 80% holatda g\'alaba qozonadi.'
        },
        quiz: [
          {
            id: 'm4l4-q1',
            question: 'Frilansda Proposal yozishda eng katta xato nima?',
            options: [
              'Mijozga savol berish',
              'Barcha mijozlarga bir xil tayyor nusxalangan (copy-paste) matnni yuborish',
              'O\'z portfolio havolasini qo\'shish',
              'Xushmuomala bo\'lish'
            ],
            correctAnswer: 1,
            explanation: 'Nusxalangan shablonlar samimiy emasligini mijozlar darhol anglaydi va rad etadi.'
          },
          {
            id: 'm4l4-q2',
            question: 'Proposal matnining birinchi 2 qatori nega eng muhim?',
            options: [
              'Chunki u faqat rasmlardan iborat',
              'Chunki mijoz xatlar ro\'yxatida faqat birinchi 2 qatorni ko\'radi va o\'qish yoki o\'chirishni hal qiladi',
              'Hech qanday ahamiyati yo\'q',
              'Faqat narxni ko\'rsatish uchun'
            ],
            correctAnswer: 1,
            explanation: 'Mijozning e\'tiborini birinchi soniyalardayoq jalb qilish hal qiluvchi rol o\'ynaydi.'
          },
          {
            id: 'm4l4-q3',
            question: 'Mijoz bilan bahsli vaziyat yuzaga kelganda qanday yo\'l tutish kerak?',
            options: [
              'Qo\'pol muomala qilib aloqani uzish',
              'Vazminlik bilan mijozning xavotirini tinglash va o\'zaro manfaatli yechim taklif qilish',
              'Barcha aybni mijozga to\'nkash',
              'Loyihani yarim yo\'lda tashlab ketish'
            ],
            correctAnswer: 1,
            explanation: 'Professionalizm har doim sabr-toqat va konstruktiv muloqotni talab qiladi.'
          }
        ],
        summary: 'Muloqot san\'ati — buyurtmalarni jalb qilishning kalitidir. Tinglashni bilgan dasturchi har doim talabgir bo\'ladi.'
      }
    },
    {
      id: 'm4-l5',
      moduleId: 'module-4',
      title: 'Narxlash va loyiha kelishuvi',
      description: 'Qancha haq so\'rash kerak? Soatbay (hourly) vs Fiks narx (fixed-price), shartnoma va bepul ishlashdan qochish.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 5,
      icon: 'DollarSign',
      content: {
        theory: `Boshlang'ich dasturchilarning eng qiyin savoli: "Bu ishga qancha pul so'rasam bo'ladi?". Narxni haddan tashqari arzon qilsangiz, qadrsiz ko'rinasiz, juda qimmat qilsangiz, mijoz qochib ketadi.

Narxlash modellari:
1. Fixed-Price (Qat'iy narx) — aniq loyiha uchun oldindan kelishilgan bitta summa (masalan: Landing page = $200). Bu modelda topshiriq chegarasi (Scope of Work) aniq qog'ozga tushirilishi shart! Aks holda mijoz "yana buni ham qo'shib bering" deb cheksiz ish yuklaydi.
2. Hourly (Soatbay to'lov) — har bir ishlangan soat uchun to'lov (masalan: $15/soat). Katta va noaniq loyihalar uchun eng adolatli usul.

Oltin Qoidalar:
- Avans (Oldindan to'lov): Hech qachon 0 so'm bilan ish boshlamang! Kamida 30-50% oldindan to'lov oling.
- Barcha talablar (Terms) yozma ravishda (Telegram xabari yoki shartnoma) qayd etilsin.`,
        realWorldExample: `Uy ta'mirlash uchun usta yollasangiz, usta "5 millionga xonani remont qilib beraman" deydi (Fixed price). Agar keyinroq unga "endi shiftni ham o'zgartirib ber" desangiz, usta qo'shimcha haq so'raydi. IT loyihalarda ham har bir qo'shimcha istak alohida baholanishi shart.`,
        practicalTask: `Kichik onlayn-do'kon veb-sayti uchun sarflanadigan soatlarni hisoblang va o'zingizning soatlik stavkangiz asosida umumiy narx taklifini (Invoice) shakllantiring.`,
        codeExample: {
          language: 'markdown',
          code: `# Loyiha Xarajatlar Hisob-Kitobi (Kalkulyatsiya):

1. Dizayn va maket moslash: 5 soat * $15 = $75
2. Frontend dasturlash (Next.js): 15 soat * $15 = $225
3. Backend va to'lov tizimi: 10 soat * $15 = $150
4. Testlash va serverga deploy: 4 soat * $15 = $60

**Jami Vaqt:** 34 soat
**Umumiy Narx:** $510
**Oldindan to'lov (50%):** $255 (ish boshlashdan oldin)
**Qolgan qismi (50%):** $255 (loyiha topshirilgach)`,
          explanation: 'Bunday shaffof hisob-kitobni ko\'rgan mijoz narx osmondan olinmaganiga to\'liq ishonadi.'
        },
        quiz: [
          {
            id: 'm4l5-q1',
            question: 'Fixed-Price (qat\'iy narx) loyihalarida eng asosiy xavf nima?',
            options: [
              'Mijozning qo\'shimcha bepul talablar qo\'shib (scope creep) ish hajmini haddan tashqari oshirib yuborishi',
              'Pulning ko\'payib ketishi',
              'Internetning tezlashishi',
              'Hech qanday xavf yo\'q'
            ],
            correctAnswer: 0,
            explanation: 'Vazifalar chegarasi aniq belgilanmasa, dasturchi 1 haftalik narxga 2 oy ishlashga majbur bo\'lib qolishi mumkin.'
          },
          {
            id: 'm4l5-q2',
            question: 'Yangi boshlayotgan frilanserga ish boshlashdan oldin nima tavsiya etiladi?',
            options: [
              'Hech qanday pul olmasdan butun ishni tugatib berish',
              'Kamida 30-50% oldindan avans to\'lovini olish',
              'Parollarni mijozga darhol berib yuborish',
              'Faqat og\'zaki kelishish'
            ],
            correctAnswer: 1,
            explanation: 'Oldindan to\'lov mijozning niyati jiddiyligini tasdiqlaydi va aldanishdan himoya qiladi.'
          },
          {
            id: 'm4l5-q3',
            question: 'O\'z soatlik stavkangizni (Hourly Rate) qanday belgilash kerak?',
            options: [
              'Doim $1 qilish kerak',
              'O\'z tajribangiz, bozordagi o\'rtacha narxlar va sarflanadigan xarajatlar asosida',
              'Har kuni tasodifiy raqam tanlash',
              'Eng qimmat narxni qo\'yish'
            ],
            correctAnswer: 1,
            explanation: 'Adolatli narxlash raqobatbardosh bo\'lish bilan birga mehnatingizni qadrlash imkonini beradi.'
          }
        ],
        summary: 'O\'z mehnatingizni qadrlang. Shaffof narx va yozma kelishuv — uzoq muddatli halol biznesning poydevoridir.'
      }
    },
    {
      id: 'm4-l6',
      moduleId: 'module-4',
      title: 'Startap va biznes g‘oya',
      description: 'Oddiy g\'oyadan startap sari: Startap nima? Muammoni topish, bozor hajmi va g\'oyani tekshirish.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 6,
      icon: 'Rocket',
      content: {
        theory: `Startap (Startup) — bu yuqori noaniqlik sharoitida yangi, innovatsion mahsulot yoki xizmat yaratib, juda tez sur'atlarda (eksponentsial) masshtablasha oladigan vaqtinchalik tashkilotdir.

Oddiy biznes va Startap farqi:
- Oddiy biznes (Novvoyxona, sartaroshxona): Ma'lum bozorda barqaror daromad oladi. Masshtablash uchun yangi bino, yangi ishchilar kerak.
- Startap (Instagram, Uber, Telegram): Dasturiy ta'minot asosida qurilgan. 100 ta odamga xizmat ko'rsatish bilan 100 million odamga xizmat ko'rsatish o'rtasida katta farq yo'q — bitta dastur hamma uchun ishlaydi!

Startap g'oyasi qanday tug'iladi?
Eng zo'r g'oyalar osmondan tushmaydi, balki kundalik hayotdagi haqiqiy og'riq va muammolardan (Pain points) tug'iladi. "Men yoki atrofimdagi odamlar nimada qiynalyapti?" degan savol yangi startapning boshlanishidir.`,
        realWorldExample: `Uber asoschilari qishda qorda qolib, taksi to'xtatolmay sovuqda qolishgan. Shunda ularga: "Nega telefonimdagi bitta tugmani bosib mashina chaqira olmayman?" degan fikr kelgan. Shu muammo jahon miqyosidagi ulkan startapga aylandi.`,
        practicalTask: `O'z maktabingiz yoki mahallangizdagi 3 ta real muammoni daftarga yozing va ularni IT texnologiya yordamida qanday hal qilish mumkinligini o'ylab ko'ring.`,
        codeExample: {
          language: 'markdown',
          code: `# Startap G'oyasini Baholash Formulasi:

1. **Muammo (Pain):** Maktabimizda tanaffusda oshxonada 100 kishilik uzun navbat hosil bo'ladi.
2. **Kenglik (Market):** O'zbekistonda 10 000+ maktab bor, har birida bu muammo mavjud.
3. **IT Yechim:** Telegram-bot orqali oldindan ovqatga buyurtma berish va navbatsiz olib ketish.
4. **Daromad Modeli:** Har bir buyurtmadan 5% komissiya.`,
          explanation: 'G\'oya qanchalik real muammoga asoslansa, uning startap sifatida yashab ketish ehtimoli shunchalik yuqori bo\'ladi.'
        },
        quiz: [
          {
            id: 'm4l6-q1',
            question: 'Startapning an\'anaviy kichik biznesdan asosiy farqi nima?',
            options: [
              'Startap doim zarar ko\'radi',
              'Startap texnologiya hisobiga tez va ulkan masshtablash (global kengayish) salohiyatiga ega',
              'Startapda kompyuter bo\'lmaydi',
              'Startap faqat qishloqda ochiladi'
            ],
            correctAnswer: 1,
            explanation: 'Texnologik startaplar minimal qo\'shimcha xarajat bilan butun dunyoga kengaya oladi.'
          },
          {
            id: 'm4l6-q2',
            question: 'Startap uchun eng yaxshi g\'oyalar qayerdan paydo bo\'ladi?',
            options: [
              'Faqat ilmiy fantastik kinolardan',
              'Odamlar kundalik hayotda duch kelayotgan real og\'riq va muammolarni kuzatishdan',
              'Boshqalarning loyihalarini 100% nusxalashdan',
              'Tasodifiy o\'yinlardan'
            ],
            correctAnswer: 1,
            explanation: 'Haqiqiy muammoni hal qiluvchi mahsulotlargagina odamlar bajonidil pul to\'laydi.'
          },
          {
            id: 'm4l6-q3',
            question: 'Startap asoschisi o\'z g\'oyasiga oshiq bo\'lib qolishi nimaga olib kelishi mumkin?',
            options: [
              'Tez boyib ketishga',
              'Bozor talabini va mijozlar fikrini e\'tiborsiz qoldirib, hech kimga kerak bo\'lmagan mahsulot yaratishga',
              'Litsenziya olishga',
              'Hamma narsa yaxshi bo\'ladi'
            ],
            correctAnswer: 1,
            explanation: 'G\'oyaga emas, muammoga oshiq bo\'lish kerak. Bozor va mijoz har doim haq.'
          }
        ],
        summary: 'G\'oya — bu faqat 1%. Qolgan 99% esa uning qanday amalga oshirilishi (Execution) va mehnatga bog\'liqdir.'
      }
    },
    {
      id: 'm4-l7',
      moduleId: 'module-4',
      title: 'MVP yaratish',
      description: 'Minimum Viable Product: 6 oy kod yozmasdan, 1 haftada sinov mahsulotini chiqarish san\'ati.',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 7,
      icon: 'PackageCheck',
      content: {
        theory: `Dasturchilarning eng katta xatolaridan biri: g'oya kelishi bilan 1 yil davomida xonaga qamalib, 100 ta funksiyaga ega ulkan dastur yozishadi. Oxirida saytni ochishsa — hech kimga bu kerak emasligi ma'lum bo'ladi!

MVP (Minimum Viable Product — Minimal Hayotiy Mahsulot):
Bu g'oyangiz to'g'ri yoki noto'g'riligini real mijozlar bilan tekshirish uchun zarur bo'lgan ENG MINIMAL funksiyalarga ega birinchi sinov versiyasidir.

MVP tamoyili:
- Barcha ortiqcha funksiyalarni olib tashlang.
- Faqat asosiy 1 ta muammoni hal qiluvchi xususiyatni qoldiring.
- Uni imkon qadar tez (1-2 haftada) foydalanuvchilar qo'liga bering.
- Fikr-mulohazalarni (Feedback) to'plang va shunga qarab mahsulotni rivojlantiring (Build - Measure - Learn).`,
        realWorldExample: `Agar siz yangi avtomobil yaratmoqchi bo'lsangiz, MVP bu — bitta g'ildirak emas! MVP — bu odamni A nuqtadan B nuqtaga olib boradigan Samokat yoki Skeletbord! Keyin u velosipedga, mototsiklga va nihoyat avtomobilga aylanadi. Har bir bosqichda mijoz undan foydalana oladi.`,
        practicalTask: `G'oyangizdagi 10 ta funksiyani ro'yxat qilib yozing va ulardan MVP uchun eng muhim 2 tasini qoldirib, qolganlarini keyingi bosqichlarga o'tkazing.`,
        codeExample: {
          language: 'markdown',
          code: `# MVP Qisqartirish Namunasi (Online Maktab Kutubxonasi):

### ❌ 1 yillik "Mukammal" loyiha (xavfli):
- Sun'iy intellekt tavsiya tizimi
- 3D kitob varaqlash animatsiyasi
- Audio kitoblar pleeri
- Ijtimoiy tarmoq va chat
- Sovrinlar va o'yin mexanikasi

### ✅ 1 haftalik Haqiqiy MVP (To'g'ri yo'l):
- Kitoblarning PDF ro'yxati va qidiruv
- "Yuklab olish" yoki "O'qish" bitta tugmasi
*(Foydalanuvchilar kitob o'qishni boshlasagina, qolgan funksiyalar bosqichma-bosqich qo'shiladi!)*`,
          explanation: 'Tez chiqarilgan MVP pulni, vaqtni tejaydi va haqiqiy talabni ko\'rsatadi.'
        },
        quiz: [
          {
            id: 'm4l7-q1',
            question: 'MVP (Minimum Viable Product) ning bosh maqsadi nima?',
            options: [
              'Dunyodagi eng chiroyli dizaynni yaratish',
              'Minimal xarajat va vaqt bilan g\'oyaning tirikligini real foydalanuvchilar orqali tekshirish',
              'Loyiha kodini maxfiy saqlash',
              'Kompaniyani darhol sotish'
            ],
            correctAnswer: 1,
            explanation: 'MVP taxminlarni real bozor faktlari orqali eng erta bosqichda tekshirishga xizmat qiladi.'
          },
          {
            id: 'm4l7-q2',
            question: 'Reid Hoffman (LinkedIn asoschisi) MVP haqida qanday mashhur gap aytgan?',
            options: [
              '"Hech qachon shoshilmang"',
              '"Agar mahsulotingizning birinchi versiyasidan uyalmasangiz, demak siz bozorga juda kech chiqibsiz!"',
              '"Faqat mukammal dastur sotiladi"',
              '"Kodni hech kimga ko\'rsatmang"'
            ],
            correctAnswer: 1,
            explanation: 'Mukammallikka intilib yillab o\'tirish — startapning o\'limidir. Tezroq bozorga chiqish shart.'
          },
          {
            id: 'm4l7-q3',
            question: 'Build - Measure - Learn (Qur - O\'lcha - O\'rgan) sikli nima uchun kerak?',
            options: [
              'Mijozlar fikri asosida mahsulotni to\'xtovsiz yaxshilab borish uchun',
              'Faqat maktab darslarida baho olish uchun',
              'Kompyuterni o\'lchash uchun',
              'Kitob o\'qish uchun'
            ],
            correctAnswer: 0,
            explanation: 'Muntazam takomillashtirish orqali startap mijozlar sevadigan haqiqiy mahsulotga aylanadi.'
          }
        ],
        summary: 'Tez yarat, bozorga ko\'rsat, xatodan o\'rgan va takomillashtir. MVP — startapchining eng kuchli quroli.'
      }
    },
    {
      id: 'm4-l8',
      moduleId: 'module-4',
      title: 'Lean Canvas va Value Proposition',
      description: 'Startap biznes rejasini 1 varaqda tuzish: 9 ta blokdan iborat Lean Canvas va qimmatli taklif.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 8,
      icon: 'FileSpreadsheet',
      content: {
        theory: `Eskirgan 50 betlik biznes-rejalarni hech kim o'qimaydi va startap tez o'zgargani sababli u 1 oyda eskiradi.
Ash Maurya tomonidan ishlab chiqilgan Lean Canvas — butun biznes modelni atigi 1 ta varaqqa jamlaydigan zamonaviy shablondir.

Lean Canvas ning 9 ta bloki:
1. Muammo (Problem) — mijozning 3 ta eng katta dardi.
2. Mijozlar segmenti (Customer Segments) — bu muammo aynan kimda bor?
3. Qimmatli taklif (Unique Value Proposition) — nega aynan sizni tanlashlari kerak?
4. Yechim (Solution) — muammoni qanday hal qilasiz?
5. Tarqatish kanallari (Channels) — mijozlarga qanday yetib borasiz?
6. Daromad oqimi (Revenue Streams) — qanday pul ishlaysiz?
7. Xarajatlar tuzilmasi (Cost Structure) — serverlar, marketing, ish haqi.
8. Asosiy ko'rsatkichlar (Key Metrics) — o'sishni qaysi raqamlarda o'lchaysiz?
9. Yengib bo'lmas ustunlik (Unfair Advantage) — raqiblar osonlikcha nusxalay olmaydigan sir!`,
        realWorldExample: `Tasavvur qiling, siz yangi maktab qahvaxonasi ochyapsiz. 50 bet kitob yozmaysiz: bir varaqqa kim ichadi (o'quvchilar), nima uchun (arzon va tez), qancha turadi (5000 so'm) va xarajatlarni yozasiz. 20 daqiqada butun biznes ko'z o'ngingizda namoyon bo'ladi.`,
        practicalTask: `O'z startap g'oyangiz uchun 9 ta blokdan iborat Lean Canvas jadvalini to'ldiring.`,
        codeExample: {
          language: 'markdown',
          code: `# IT LAB 11 — Lean Canvas Modeli:

1. **Muammo:** 11-sinf o'quvchilarida amaliy IT bilimlar, zamonaviy stack va portfolio yo'qligi.
2. **Mijozlar:** O'zbekistondagi 11-sinf o'quvchilari va informatika ustozlari.
3. **Qimmatli Taklif:** "Nazariyadan amaliyotga: 1-kundan real kod yozish va tayyor portfolio yaratish".
4. **Yechim:** Interaktiv brauzer muharriri, mini-testlar va modul loyihalari.
5. **Kanallar:** Maktablar, Telegram ta'lim kanallari, YouTube darsliklari.
6. **Daromad:** Boshlang'ich darslar bepul, chuqur mentorlik kursi pullik.
7. **Xarajatlar:** Vercel server, ma'lumotlar bazasi, kontent yaratish.
8. **Metrikalar:** Ro'yxatdan o'tganlar soni, darslarni tugatish foizi (Completion rate).
9. **Yashirin ustunlik:** 100% o'zbek tilidagi amaliy interaktiv metodika.`,
          explanation: 'Bitta varaqda butun biznes strategiya xaritasi aniq ko\'rinadi.'
        },
        quiz: [
          {
            id: 'm4l8-q1',
            question: 'Lean Canvas nechta asosiy blokdan iborat?',
            options: ['3 ta', '5 ta', '9 ta', '25 ta'],
            correctAnswer: 2,
            explanation: 'Lean Canvas biznes modelining barcha jabhalarini qamrab oluvchi 9 ta blokdan iborat.'
          },
          {
            id: 'm4l8-q2',
            question: 'Unique Value Proposition (Yagona qimmatli taklif) nimani anglatadi?',
            options: [
              'Loyiha narxini',
              'Sizning mahsulotingiz raqobatchilardan nimasi bilan tubdan yaxshiroqligi va mijoz nega sizni tanlashi kerakligining aniq ifodasi',
              'Foydalanuvchi parolini',
              'Saytning rangi'
            ],
            correctAnswer: 1,
            explanation: 'Qimmatli taklif mijozga keltiradigan asosiy foydani 1 ta jumlada ifodalaydi.'
          },
          {
            id: 'm4l8-q3',
            question: 'Lean Canvas ning 50 betlik an\'anaviy biznes-rejadan afzalligi nima?',
            options: [
              'Uni o\'qish shart emas',
              'Tezkor, ixcham, osongina yangilanadigan va barcha muhim jihatlarni bir varaqda ko\'rsatadigan vositaligi',
              'Faqat qog\'ozni tejash',
              'Unda raqamlar bo\'lmaydi'
            ],
            correctAnswer: 1,
            explanation: 'Startap har hafta o\'zgaradi, shuning uchun ixcham va chaqqon reja eng samaralisidir.'
          }
        ],
        summary: 'Lean Canvas — startap arxitektorining kompasidir. Rejangiz qanchalik aniq bo\'lsa, xatolarga shunchalik kam pul sarflaysiz.'
      }
    },
    {
      id: 'm4-l9',
      moduleId: 'module-4',
      title: 'Pitch va taqdimot',
      description: '3 daqiqada investorni hayratda qoldirish: Pitch Deck slaydlari, sahnada gapirish va savollarga javob.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 9,
      icon: 'Presentation',
      content: {
        theory: `Pitch — bu o'z startap g'oyangizni investorlar, hakamlar yoki mijozlarga juda qisqa vaqt ichida (odatda 3 daqiqa) jozibador qilib yetkazib berish nutqidir.

Klassik Pitch Deck slaydlari (10-12 slayd):
1. Muqova (Loyiha nomi, shiori, taqdimotchi).
2. Muammo — odamlar qaysi dardi bilan yashayapti? (Hissiyot bilan bering).
3. Yechim — sizning mahsulotingiz bu dardga qanday malham bo'ladi?
4. Mahsulot / Demo — qisqa video yoki skrinshotlar.
5. Bozor Hajmi (Market Size: TAM, SAM, SOM) — bu bozorda qancha pul bor?
6. Biznes Model — siz qanday qilib pul ishlaysiz?
7. Raqobatchilar va Ustunlik — boshqalardan nimangiz kuchli?
8. Jamoa — nega aynan sizning jamoangiz buni eplay oladi?
9. So'rov (The Ask) — sizga qancha investitsiya yoki qanday yordam kerak?`,
        realWorldExample: `Liftda mashhur milliarder investor bilan tasodifan birga chiqib qoldingiz. Sizda lift 10-qavatga yetguncha atigi 60 soniya vaqt bor! (Elevator Pitch). Agar shu vaqtda uni qiziqtira olsangiz, u sizga o'z vizitkasini beradi.`,
        practicalTask: `O'z startap loyihangiz uchun 1 daqiqalik "Elevator Pitch" nutqi matnini yozing va ovoz chiqarib tayyorgarlik ko'ring.`,
        codeExample: {
          language: 'markdown',
          code: `# 60 Soniyalik Elevator Pitch Namunasi:

"Assalomu alaykum! Bilasizmi, O'zbekistondagi 11-sinf o'quvchilarining 80 foizi dasturlashni o'rganishni xohlaydi, ammo mavjud kurslar haddan tashqari qimmat yoki zerikarli quruq nazariyadan iborat.

Biz IT LAB 11 loyihasini yaratdik. Bu — o'quvchilar to'g'ridan-to'g'ri brauzerda Git, Docker va real loyihalarni o'rganadigan interaktiv platformadir. Biz bilan o'quvchi 3 oyda o'zining birinchi shaxsiy portfoliosini yaratadi.

Hozirgacha 500 dan ortiq o'quvchi platformamizda ta'lim oldi. Bugun biz loyihani butun respublika maktablariga joriy qilish uchun hamkorlar qidirmoqdamiz. Keling, yoshlarimiz kelajagini birgalikda quramiz!"`,
          explanation: 'Aniq faktlar, hissiy muammo va dadil taklif investor qalbini zabt etadi.'
        },
        quiz: [
          {
            id: 'm4l9-q1',
            question: '"Elevator Pitch" atamasi nimani anglatadi?',
            options: [
              'Lift buzilib qolgandagi signal',
              'G\'oyani liftdagi qisqa safar vaqtida (30-60 soniyada) juda qiziqarli tushuntirib berish san\'ati',
              'Faqat lift ishlab chiqaruvchilar nutqi',
              'Uzoq 2 soatlik ma\'ruza'
            ],
            correctAnswer: 1,
            explanation: 'Elevator pitch o\'ta ixcham, aniq va esda qolarli taqdimot formatidir.'
          },
          {
            id: 'm4l9-q2',
            question: 'Pitch Deck taqdimot slaydlarida eng muhim qoida nima?',
            options: [
              'Har bir slaydga 500 ta so\'z mayda matn yozish',
              'Ko\'p matndan qochish, katta rasmlar, infografika va qisqa asosiy raqamlarni ko\'rsatish',
              'Slaydlarni qora-oq qilish',
              'Hech qanday rasm qo\'ymaslik'
            ],
            correctAnswer: 1,
            explanation: 'Tomoshabinlar slayddagi uzun matnni o\'qish bilan chalg\'imasdan, sizning nutqingizni tinglashi kerak.'
          },
          {
            id: 'm4l9-q3',
            question: 'Sahnada Pitch qilayotganda qanday holat ishonch uyg\'otadi?',
            options: [
              'Varaqqa qarab pichirlab o\'qish',
              'Zal bilan ko\'z bilan aloqa o\'rnatish, tabassum, dadil ovoz va o\'z loyihasiga ishonch',
              'Zalga orqa o\'girib turish',
              'Tez-tez soatga qarash'
            ],
            correctAnswer: 1,
            explanation: 'Investorlar birinchi navbatda loyihaga emas, uni taqdim etayotgan ishonchli insonlarga sarmoya kiritadi.'
          }
        ],
        summary: 'Zo\'r g\'oya agar uni hech kimga tushuntirib bera olmasangiz, qorong\'ulikda qolib ketadi. Pitch qilish qobiliyati — g\'oyaga qanot beradi.'
      }
    },
    {
      id: 'm4-l10',
      moduleId: 'module-4',
      title: 'Loyiha boshqaruvi',
      description: 'G\'oyadan natijagacha: Loyihaning uchburchak cheklovlari (Vaqt, Narx, Sifat) va risklarni boshqarish.',
      duration: '40 daqiqa',
      difficulty: 'boshlangich',
      order: 10,
      icon: 'Kanban',
      content: {
        theory: `Loyiha boshqaruvi (Project Management) — bu jamoaning bilim, ko'nikma va vositalarini qo'llagan holda loyiha maqsadlariga o'z vaqtida va belgilangan byudjet doirasida erishish san'atidir.

Loyiha boshqaruvining Temir Uchburchagi (Iron Triangle):
1. Ko'lam (Scope) — bajarilishi kerak bo'lgan ishlar ro'yxati.
2. Vaqt (Time) — topshirish muddati (Deadline).
3. Narx/Byudjet (Cost) — sarflanadigan mablag' va inson resursi.
Markazda: Sifat (Quality)!

Qoida: Agar bitta burchak o'zgarsa (masalan, muddat qisqarsa), qolgan burchaklar ham albatta ta'sirlanadi (xarajat oshadi yoki ish ko'lami qisqartiriladi). Uchala narsani bir vaqtda "tez, arzon va sifatli" qilib bo'lmaydi!`,
        realWorldExample: `Uy ta'mirlash: "Tez, Arzon, Sifatli" — bulardan faqat ikkitasini tanlashingiz mumkin. Agar Tez va Sifatli bo'lsin desangiz, qimmat bo'ladi. Agar Tez va Arzon bo'lsin desangiz, sifati past bo'ladi.`,
        practicalTask: `Loyihangizdagi ehtimoliy 3 ta xavfni (Risk) aniqlang va agar ular sodir bo'lsa qanday "B rejasi" borligini yozing.`,
        codeExample: {
          language: 'markdown',
          code: `# Loyiha Risklari Jadvali (Risk Matrix):

1. **Xavf:** Asosiy backend dasturchi kasal bo'lib qoldi.
   - *Yechim:* Kodlar to'liq hujjatlashtirilgan, Git da har kuni commit bor, ikkinchi dasturchi davom ettira oladi.
2. **Xavf:** Muddatga 3 kun qolganda server buzildi.
   - *Yechim:* Avtomatik kundalik Cloud backup va Staging server mavjud.
3. **Xavf:** Mijoz so'nggi daqiqada yangi funksiya talab qildi.
   - *Yechim:* Shartnomaga binoan bu funksiya 2-bosqichga qoldiriladi.`,
          explanation: 'Risklarni oldindan ko\'ra bilgan jamoa hech qachon sarosimaga tushmaydi.'
        },
        quiz: [
          {
            id: 'm4l10-q1',
            question: 'Loyiha boshqaruvining "Temir Uchburchagi" qaysi 3 ta omildan iborat?',
            options: [
              'Monitor, klaviatura, sichqoncha',
              'Ko\'lam (Scope), Vaqt (Time) va Narx (Cost)',
              'HTML, CSS, JavaScript',
              'Nonushta, tushlik, kechki ovqat'
            ],
            correctAnswer: 1,
            explanation: 'Vaqt, xarajat va ish ko\'lami o\'zaro chambarchas bog\'liq bo\'lgan asosiy cheklovlardir.'
          },
          {
            id: 'm4l10-q2',
            question: 'Loyiha menejeri (Project Manager) nima ish qiladi?',
            options: [
              'Faqat kompyuter o\'rnatadi',
              'Jamoa ishini rejalashtiradi, to\'siqlarni olib tashlaydi va loyiha o\'z vaqtida bitishini ta\'minlaydi',
              'Dasturchilar o\'rniga kod yozadi',
              'Faqat jarima qo\'yadi'
            ],
            correctAnswer: 1,
            explanation: 'PM loyihaning reja bo\'yicha silliq va xatosiz borishiga mas\'ul yetakchidir.'
          },
          {
            id: 'm4l10-q3',
            question: '"Deadline" so\'zi nimani anglatadi?',
            options: [
              'Kompyuter o\'chishi',
              'Topshiriq yoki loyiha topshirilishi shart bo\'lgan oxirgi qat\'iy muddat',
              'Tushlik tanaffusi',
              'Dastur xatosi'
            ],
            correctAnswer: 1,
            explanation: 'Deadline — muddatga qat\'iy amal qilish intizomini belgilaydi.'
          }
        ],
        summary: 'Tartibsiz jamoada xaos hukm suradi. Loyiha boshqaruvi — buyuk maqsadlarni tartibli qadamlar bilan zabt etish vositasidir.'
      }
    },
    {
      id: 'm4-l11',
      moduleId: 'module-4',
      title: 'Agile, Scrum va Kanban',
      description: 'Zamonaviy IT jamoalar qanday ishlaydi? Moslashuvchan metodologiyalar, Sprintlar va vizual taxtalar.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 11,
      icon: 'Workflow',
      content: {
        theory: `Eski "Waterfall" (Sharshara) modelida butun loyiha 1 yillik reja qilinardi va o'zgarishlar kiritish taqiqlanardi. Bu zamonaviy tez o'zgaruvchan dunyoda ish bermay qo'ydi.

Agile — bu moslashuvchan, o'zgarishlarga tez javob beruvchi va mijoz bilan doimiy muloqotga asoslangan yondashuvdir.

1. Scrum Metodologiyasi:
- Sprint — 1 yoki 2 haftalik qisqa ish davri. Har bir sprint oxirida ishlaydigan tayyor natija chiqishi shart!
- Daily Standup — har kuni ertalab 15 daqiqalik qisqa tik turib o'tkaziladigan yig'ilish ("Kecha nima qildim? Bugun nima qilaman? Qanday to'siq bor?").
- Retrospective — sprint yakunida nimalar yaxshi bo'lgani va nimani yaxshilash kerakligini tahlil qilish.

2. Kanban Metodologiyasi:
Ish jarayonini vizual doska (Board) orqali boshqarish. Asosiy ustunlar: To Do (Qilinishi kerak) -> In Progress (Jarayonda) -> In Review (Tekshiruvda) -> Done (Bajarildi). Qoida: "In Progress" da bir vaqtda haddan tashqari ko'p ish to'planib qolmasligi (WIP limit) kerak.`,
        realWorldExample: `Tasavvur qiling, siz 10 ta darsdan iborat katta kitob yozyapsiz. Waterfall — 1 yil hech kimga ko'rsatmasdan butun kitobni yozish. Scrum — har hafta 1 ta bobni yozib, o'quvchilarga o'qitib, ularning fikri asosida keyingi bobni yozish.`,
        practicalTask: `Xonangizdagi doskaga yoki qog'ozga 3 ta ustun chizing: To Do, Doing, Done va bugungi uy vazifalaringizni stikerlar (stik notes) orqali surib mashq qiling.`,
        codeExample: {
          language: 'markdown',
          code: `# Scrum Daily Standup Namunasi (15 daqiqa):

1. **Akmal (Frontend):**
   - *Kecha:* Ro'yxatdan o'tish formasini yaratdim va validatsiya qo'shdim.
   - *Bugun:* Dashboard sahifasidagi progress-barni ulayman.
   - *To'siq:* Backenddan kelayotgan API dagi sana formati xato kelyapti.

2. **Madina (Backend):**
   - *Kecha:* O'quvchi ma'lumotlari bazasi sxemasini tuzdim.
   - *Bugun:* Akmal aytgan sana formatini to'g'irlayman va test yozaman.
   - *To'siq:* Yo'q, hammasi joyida.`,
          explanation: 'Har kungi 15 daqiqalik ochiq muloqot haftalik tushunmovchiliklarning oldini oladi.'
        },
        quiz: [
          {
            id: 'm4l11-q1',
            question: 'Scrum tizimida "Sprint" nima?',
            options: [
              'Yugurish musobaqasi',
              'Jamoa aniq rejalashtirilgan vazifalarni bajarib tayyor natija chiqaradigan 1-2 haftalik qisqa ish sikli',
              'Yillik hisobot',
              'Tushlik vaqti'
            ],
            correctAnswer: 1,
            explanation: 'Sprintlar katta loyihani kichik, boshqariladigan bo\'laklarga ajratib bajarish imkonini beradi.'
          },
          {
            id: 'm4l11-q2',
            question: 'Kanban doskasining klassik 3 ta asosiy ustuni qaysi?',
            options: [
              'Start, Pause, Stop',
              'To Do (Rejada), In Progress (Jarayonda), Done (Bajarildi)',
              'Boshi, O\'rtasi, Oxiri',
              'Oson, O\'rta, Qiyin'
            ],
            correctAnswer: 1,
            explanation: 'Bu ustunlar vazifalarning harakatini ko\'z bilan yaqqol ko\'rib turish imkonini beradi.'
          },
          {
            id: 'm4l11-q3',
            question: 'Daily Standup yig\'ilishi nega tik turib (standup) o\'tkaziladi?',
            options: [
              'Kreslo yetishmagani uchun',
              'Yig\'ilish cho\'zilib ketmasligi, tez va ixcham (15 daqiqa) yakunlanishi uchun',
              'Boshliqlarning talabi shunday',
              'Uyqu kelmasligi uchun'
            ],
            correctAnswer: 1,
            explanation: 'Tik turish odamlarni ortiqcha chalg\'imasdan faqat eng muhim masalalarni gapirishga undaydi.'
          }
        ],
        summary: 'Agile va Scrum butun dunyo IT kompaniyalarining standart ish uslubidir. Ushbu madaniyatni bilgan o\'quvchi har qanday jamoaga birinchi kundan oson kirib keta oladi.'
      }
    },
    {
      id: 'm4-l12',
      moduleId: 'module-4',
      title: 'Jira, Trello va ClickUp',
      description: 'Loyiha boshqaruvining raqamli vositalari: Trello taxtalari, Jira epiklari, tasklar va backlog boshqaruvi.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 12,
      icon: 'CheckSquare',
      content: {
        theory: `Vazifalarni og'zaki yoki Telegram chatlarida saqlash — vazifalarning unutilishi va tartibsizlikka olib keladi. Barcha professional jamoalar loyihalarni maxsus raqamli tizimlarda boshqaradi:

1. Trello:
Eng sodda va qulay Kanban doskasi. Kichik jamoalar va shaxsiy loyihalar uchun ideal. Kartochkalarni sudrab (Drag-and-Drop) ustunlar bo'ylab o'tkazish juda oson.

2. Jira (Atlassian):
Katta kompaniyalar va jiddiy IT loyihalarining 1-raqamli standarti. Unda:
- Epics (Katta mavzular) -> Stories (Foydalanuvchi hikoyalari) -> Tasks (Vazifalar) -> Bugs (Xatolar).
- Backlog — hali bajarilishi kutilayotgan barcha vazifalar qopi.
- Burndown Chart — sprint yakuniga qancha ish qolganini ko'rsatuvchi grafik.

3. ClickUp va Linear:
Yangi avlodning o'ta tezkor, zamonaviy va chiroyli loyiha boshqaruv vositalari.`,
        realWorldExample: `Muzlatkich eshigiga yopishtirilgan xaridlar ro'yxatini eslang: olingan narsalarning ustidan chizib borasiz. Trello va Jira — bu sizning butun dasturchilar jamoangiz bilan birgalikda real vaqtda boshqaradigan elektron "muzlatkichi"dir.`,
        practicalTask: `Trello.com saytida bepul ro'yxatdan o'ting, "Mening IT Loyiham" nomli yangi doska oching va kamida 5 ta kartochka yarating.`,
        codeExample: {
          language: 'markdown',
          code: `# Jira / Trello Kartochkasining To'g'ri Strukturasi:

### Sarlavha: [AUTH-04] O'quvchi profil sahifasiga Dark Mode qo'shish
- **Tavsif:** Foydalanuvchi o'z profilida tungi rejimni yoqishi va bu sozlama saqlanib qolishi kerak.
- **Qabul Qilish Mezonlari (Acceptance Criteria):**
  - [ ] Tugma bosilganda sayt foni to'q rangga o'tishi
  - [ ] Sahifa yangilanganda ham tanlangan rejim saqlanib qolishi
  - [ ] Mobil ekranda ham tugma to'g'ri ko'rinishi
- **Mas'ul (Assignee):** Jasur (Frontend)
- **Topshirish muddati (Due Date):** 20-noyabr
- **Story Points (Qiyinlik darajasi):** 3 ball`,
          explanation: 'Bunday batafsil yozilgan kartochkani bajarganda dasturchida hech qanday noaniqlik qolmaydi.'
        },
        quiz: [
          {
            id: 'm4l12-q1',
            question: 'Jira da "Backlog" nimani anglatadi?',
            options: [
              'O\'chirilgan kompyuterlar ro\'yxati',
              'Kelajakda bajarilishi rejalashtirilgan barcha g\'oya va vazifalar to\'plami',
              'Foydalanuvchilar parollari',
              'Server xatoliklari jurnali'
            ],
            correctAnswer: 1,
            explanation: 'Backlog — sprintlarga hali olinmagan vazifalar xazinasi bo\'lib, u yerdan eng muhimlari tanlab olinadi.'
          },
          {
            id: 'm4l12-q2',
            question: 'Trello platformasining asosiy vizual modeli nima?',
            options: [
              'Oddiy matnli fayllar',
              'Kanban doskalari, ustunlar va kartochkalar',
              'Faqat audio yozuvlar',
              'Excel formulalari'
            ],
            correctAnswer: 1,
            explanation: 'Trello vizual kartochkalar va ustunlar orqali ish jarayonini o\'ta qulay boshqarish imkonini beradi.'
          },
          {
            id: 'm4l12-q3',
            question: 'IT jamoalarida Jira va Trello kabi vositalardan foydalanishning eng katta yutug\'i nima?',
            options: [
              'Internet sarfini kamaytirishi',
              'Har bir topshiriqning kimga yuklangani, muddati va bajarilish holati shaffof ko\'rinib turishi',
              'Kompyuterni tezlashtirishi',
              'Faqat vaqtni o\'ldirish'
            ],
            correctAnswer: 1,
            explanation: 'Shaffoflik va mas\'uliyat jamoaning muvofiqligini ta\'minlaydi va hech bir vazifa yo\'qolib qolmaydi.'
          }
        ],
        summary: 'Jira va Trello kabi asboblarni bilish — professional IT korporativ dunyosida ishlash uchun zarur bo\'lgan amaliy ko\'nikmadir.'
      }
    }
  ]
};

