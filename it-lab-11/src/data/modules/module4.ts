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
            id: "m4l1-q1",
            question: "Frilanser (mustaqil mutaxassis) ning an'anaviy ofis xodimidan asosiy farqi nimada?",
            options: [
              "Frilanser hech qachon kompyuter texnologiyalaridan foydalanmaydi",
              "Frilanser ish joyi, vaqti va mijozlarini o'zi mustaqil tanlaydi",
              "Frilanserga bajarilgan ishlari uchun hech qanday haq to'lanmaydi",
              "Frilanser faqat kechasi va dam olish kunlarida ishlashga majburdir"
            ],
            correctAnswer: 1,
            explanation: "Frilanser erkin jadval asosida bir nechta global mijozlar bilan to'g'ridan-to'g'ri shartnoma qiladi."
          },
          {
            id: "m4l1-q2",
            question: "Global frilans bozorida (Upwork, Fiverr) muvaffaqiyatli buyurtmalar olish uchun qaysi til hal qiluvchi hisoblanadi?",
            options: [
              "Ingliz tili (xalqaro muloqot tili)",
              "Faqat lotin tili grammatikasi",
              "Faqat fransuz tili adabiyoti",
              "Faqat mahalliy qadimiy lahjalar"
            ],
            correctAnswer: 0,
            explanation: "Ingliz tili butun dunyodagi mijozlar bilan tushunishish va loyihalarni himoya qilishda asosiy kalitdir."
          },
          {
            id: "m4l1-q3",
            question: "Frilans faoliyatida buyurtmachilar ishonchini qozonish uchun eng qimmatli aktiv nima?",
            options: [
              "Eng oxirgi modeldagi qimmatbaho stol kompyuteri",
              "Kompyuter o'yinlarida to'plangan virtual ballar",
              "Ijtimoiy tarmoqlardagi tasodifiy obunachilar soni",
              "Mijozlarning ijobiy sharhlari (5-star review) va ishonch"
            ],
            correctAnswer: 3,
            explanation: "Mijozlarning 5 yulduzli tavsiflari va toza obro' yangi qimmatbaho shartnomalarni jalb qiladi."
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
            id: "m4l2-q1",
            question: "IT sohasida endi ish boshlayotgan yosh mutaxassis uchun eng ishonchli va kuchli hujjat nima?",
            options: [
              "Qog'ozda chop etilgan ko'p sahifali rezyume va rasmiy diplom",
              "Real loyihalar joylangan shaxsiy Portfolio va GitHub profili",
              "Ijtimoiy tarmoqdagi fotosuratlar va qiziqishlar to'plami",
              "Turli tadbirlarda qatnashilganligi haqidagi qog'oz guvohnoma"
            ],
            correctAnswer: 1,
            explanation: "Dasturchining haqiqiy kuchi uning tirik, ishlayotgan loyihalari va GitHub dagi kodi bilan o'lchanadi."
          },
          {
            id: "m4l2-q2",
            question: "Portfolioga qo'yilgan har bir amaliy loyiha uchun qaysi uchlik mavjud bo'lishi shart?",
            options: [
              "Jonli sayt havolasi (Live Demo), ochiq GitHub kodi va muammo tavsifi",
              "Faqat loyiha egasining telefon raqami, fotosurati va yashash manzili",
              "Loyiha necha pulga sotilganligi haqidagi bank cheki va to'lov qog'ozi",
              "Faqat foydalanuvchilar tomonidan yozilgan salbiy e'tirozlar ro'yxati"
            ],
            correctAnswer: 0,
            explanation: "Ish beruvchi loyihani ko'zi bilan ko'rib (Demo), kod sifatini (GitHub) tekshira olishi shart."
          },
          {
            id: "m4l2-q3",
            question: "Portfolioni shakllantirishda qaysi strategiya ish beruvchida eng yuqori taassurot qoldiradi?",
            options: [
              "Internetdan ko'chirib olingan 50 ta chala va ishlamaydigan oddiy sahifa",
              "Hech qanday kod ko'rsatmasdan faqat quruq va'dalar yozilgan varaq",
              "Boshqa dasturchilar yozgan kodlarni o'z nomidan soxta qilib ko'rsatish",
              "3-4 ta to'liq yakunlangan, xatosiz, chiroyli va real muammoni yechuvchi loyiha"
            ],
            correctAnswer: 3,
            explanation: "Sifat miqdordan doimo ustun: bir nechta to'liq mukammal loyiha 50 ta chala loyihadan ancha qimmatli."
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
            id: "m4l3-q1",
            question: "GitHub profilidagi faollik grafigi (yashil katakchalar jadvali) ish beruvchiga nimani ko'rsatadi?",
            options: [
              "Dasturchi kompyuterida qaysi operatsion tizim o'rnatilganligini",
              "Dasturchining qanchalik muntazam kod yozgani va intizomini",
              "Kompaniya ofisidagi internet aloqasining uzluksiz tezligini",
              "Kompyuter protsessorining o'rtacha harorati va yuklanishini"
            ],
            correctAnswer: 1,
            explanation: "Yashil kvadratlar dasturchining haftalar va oylar davomidagi muntazam mehnatini yaqqol aks ettiradi."
          },
          {
            id: "m4l3-q2",
            question: "Loyiha repozitoriysidagi README.md faylida qanday ma'lumotlar yoritilishi shart?",
            options: [
              "Faqat dasturchining shaxsiy avtobiografiyasi va maktab baholari",
              "Hech qanday matnsiz faqat dasturning litsenziya kodi raqamlari",
              "Loyiha maqsadi, skrinshotlar, texnologiyalar va ishga tushirish yo'riqnomasi",
              "Faqat kompyuterga operatsion tizimni qayta o'rnatish bo'yicha darslik"
            ],
            correctAnswer: 2,
            explanation: "README — loyihaning yuzi bo'lib, boshqa dasturchilarga kodni tushunish va ishga tushirishga yordam beradi."
          },
          {
            id: "m4l3-q3",
            question: "Loyiha tavsifida Case Study yondashuvi qo'llanilganda qaysi uch bosqich ochib beriladi?",
            options: [
              "Muammo (Problem) -> Texnik yechim (Solution) -> Biznes natija (Result)",
              "Dasturlash tili -> Matn muharriri -> Shaxsiy kompyuter monitori",
              "Shartnoma tuzish -> Pulni qabul qilish -> Butun aloqani uzib qo'yish",
              "Faylni yuklab olish -> Arxivni ochish -> Papka nomini o'zgartirish"
            ],
            correctAnswer: 0,
            explanation: "Case Study loyihaning qanday qiyin muammoni hal qilganini va qanday naf keltirganini isbotlaydi."
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
            id: "m4l4-q1",
            question: "Frilans birjalarida mijozning loyihasiga taklif (Proposal) yozishda eng katta xato nima?",
            options: [
              "Mijozning muammosiga mos ravishda aniq va o'rinli texnik savollar berish",
              "O'zining shaxsiy portfolio loyihalariga to'g'ridan-to'g'ri havolalar ko'rsatish",
              "Barcha mijozlarga bir xil tayyor nusxalangan (copy-paste) shablon xat yuborish",
              "Mijoz bilan doimo xushmuomala, professional va madaniyatli tilda muloqot qilish"
            ],
            correctAnswer: 2,
            explanation: "Bir xil shablon xatlar mijoz tomonidan darhol spam deb qabul qilinadi va e'tibordan chetda qoladi."
          },
          {
            id: "m4l4-q2",
            question: "Proposal xatining dastlabki 2 ta qatori nega butun loyihani yutib olishda eng muhim qism hisoblanadi?",
            options: [
              "Chunki mijoz arizalar ro'yxatida faqat birinchi 2 qatorni ko'rib, o'qish yoki o'chirishni hal qiladi",
              "Chunki qolgan qatorlar xalqaro qonunchilikka ko'ra brauzerlar tomonidan ko'rsatilmaydi",
              "Chunki taklif xatining birinchi qatorlariga faqat grafik rasm va kulgichlar qo'yiladi",
              "Chunki birinchi ikki qatorda dasturchining bank kartasi ma'lumotlari yozilishi shart"
            ],
            correctAnswer: 0,
            explanation: "Mijoz 50 ta taklif orasidan birinchi 2 qatori uning muammosiga to'g'ri kelgan arizalarnigina ochib o'qiydi."
          },
          {
            id: "m4l4-q3",
            question: "Mijoz bilan loyiha davomida kutilmagan bahsli vaziyat yuzaga kelsa, professional dasturchi qanday yo'l tutadi?",
            options: [
              "Mijozga qo'pol so'zlar yozib, uning barcha akkauntlarini butunlay bloklab qo'yadi",
              "Barcha texnik kamchiliklarda faqat buyurtmachini ayblab, darhol kompyuterni o'chiradi",
              "Loyihani yarim yo'lda tashlab, boshqa yangi buyurtmachi va mijozlar qidirishga o'tadi",
              "Vazminlik bilan mijozning xavotirini tinglab, o'zaro manfaatli muqobil yechim taklif qiladi"
            ],
            correctAnswer: 3,
            explanation: "Vazminlik, faktlar bilan muloqot va murosaga tayyorlik uzoq muddatli professional obro'ni saqlab qoladi."
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
            id: "m4l5-q1",
            question: "Fixed-Price (qat'iy narxli) loyihalarda dasturchi uchun eng katta potensial xavf nima hisoblanadi?",
            options: [
              "Loyiha ustida ishlash jarayonida internet aloqasi tezligi me'yordan oshib ketishi xavfi",
              "Mijozning qo'shimcha bepul talablar qo'shib (scope creep) ish hajmini haddan tashqari oshirishi",
              "Dasturchi kompyuteri xotirasidagi bo'sh joyning kutilmaganda birdaniga ko'payib ketishi xavfi",
              "Mijoz dasturchiga oldindan belgilangan kelishuvdan 2 barobar ko'proq mukofot puli to'lashi xavfi"
            ],
            correctAnswer: 1,
            explanation: "Scope Creep — shartnomada bo'lmagan yangi vazifalar qo'shilishi natijasida ishning cho'zilib ketishidir."
          },
          {
            id: "m4l5-q2",
            question: "To'g'ridan-to'g'ri mijoz bilan yangi shartnoma tuzganda moliyaviy xavfsizlik uchun qanday qoidaga amal qilinadi?",
            options: [
              "Hech qanday oldindan to'lov olmasdan butun ishni to'liq bitkazib topshirish",
              "Loyiha boshlanishidan oldin kamida 30-50 foiz avans to'lovini rasmiylashtirib olish",
              "Barcha server parollarini mijozga birinchi kundan tekinga taqdim etish",
              "Faqat og'zaki kelishuvga tayanib, yozma shartnomalar tuzmasdan ishlash"
            ],
            correctAnswer: 1,
            explanation: "Avans to'lovi mijozning niyati jiddiy ekanligini kafolatlaydi va vaqtni bekor ketishidan asraydi."
          },
          {
            id: "m4l5-q3",
            question: "O'z xizmatlari uchun soatlik yoki loyiha narxini belgilashda qaysi omillar asos qilib olinadi?",
            options: [
              "Har kuni ertalab tasodifiy raqamlar generatori orqali narx tanlash",
              "Faqat eng past narxni qo'yib, boshqa barcha dasturchilar bilan urishish",
              "O'z malakangiz, sarflanadigan vaqt, xarajatlar va bozordagi o'rtacha narxlar tahlili",
              "Barcha loyihalar uchun dunyodagi eng qimmat narxni istisnosiz belgilash"
            ],
            correctAnswer: 2,
            explanation: "Narx shakllantirish o'z tajribangiz, bozor talabi va sarflanadigan aniq soatlar tahliliga asoslanadi."
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
            id: "m4l6-q1",
            question: "Texnologik startapning an'anaviy kichik biznesdan (masalan, novvoyxona) eng asosiy farqi nima?",
            options: [
              "Startap texnologiya hisobiga tez va ulkan masshtablash (global kengayish) salohiyatiga ega",
              "Startap doimiy ravishda faqat moliyaviy zarar ko'rish uchun tashkil qilinadi",
              "Startap jamoasida hech qachon zamonaviy kompyuter va internetdan foydalanilmaydi",
              "Startap faqat bitta mahalla yoki qishloq hududida xizmat ko'rsatish bilan cheklanadi"
            ],
            correctAnswer: 0,
            explanation: "Startap innovatsion dasturiy yechimlar yordamida dunyo bo'ylab millionlab mijozlarga tezkor kengaya oladi."
          },
          {
            id: "m4l6-q2",
            question: "Kelajakda muvaffaqiyatli bo'ladigan startap uchun eng to'g'ri va ishonchli g'oyalar qayerdan topiladi?",
            options: [
              "Faqat ilmiy-fantastik badiiy filmlar va multfilmlarni tomosha qilishdan",
              "Boshqa mashhur dasturlarning dizaynini 100 foiz o'zgarishsiz ko'chirib olishdan",
              "Odamlar kundalik hayotda duch kelayotgan real og'riq va muammolarni chuqur kuzatishdan",
              "Internetdagi tasodifiy o'yinlarni shunchaki boshqa nom bilan qayta nomlashdan"
            ],
            correctAnswer: 2,
            explanation: "Eng kuchli startaplar (Uber, Airbnb, Telegram) insoniyatning mavjud katta og'riqli muammosini hal qilgan."
          },
          {
            id: "m4l6-q3",
            question: "Yangi boshlayotgan startap asoschilarining 90 foizi qaysi xato tufayli muvaffaqiyatsizlikka uchraydi?",
            options: [
              "Bozorga rejalashtirilgan muddatdan ancha erta chiqib ketganliklari tufayli",
              "Loyiha uchun eng so'nggi zamonaviy dasturlash tillarini tanlaganliklari tufayli",
              "Kompaniyaga rasmiy yuridik nom tanlashda uzoq vaqt ikkilanib qolganliklari tufayli",
              "Bozor talabini tekshirmasdan, hech kimga kerak bo'lmagan mahsulot yaratganliklari tufayli"
            ],
            correctAnswer: 3,
            explanation: "Mijozlarga kerak bo'lmagan mahsulotni ishlab chiqish (No market need) startaplar halokatining 1-raqamli sababidir."
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
            id: "m4l7-q1",
            question: "MVP (Minimum Viable Product — minimal ishchi mahsulot) ning bosh maqsadi nima?",
            options: [
              "Dunyodagi eng mukammal va eng chiroyli animatsiyalarga ega bo'lgan dizaynni yaratish",
              "Minimal xarajat va vaqt bilan g'oyaning tirikligini real foydalanuvchilar orqali tekshirish",
              "Loyiha kodini hech kimga ko'rsatmasdan 10 yil davomida qat'iy maxfiy saqlab turish",
              "Kompaniyani hali dastur yozilmasidan oldin zudlik bilan chet ellik investorlarga sotish"
            ],
            correctAnswer: 1,
            explanation: "MVP ortiqcha vaqt yo'qotmasdan g'oyaning bozorga kerakligini eng arzon va tez usulda sinovdan o'tkazadi."
          },
          {
            id: "m4l7-q2",
            question: "LinkedIn asoschisi Reid Hoffman MVP haqida qanday mashhur qoidani ilgari surgan?",
            options: [
              "Hech qachon shoshilmang, dastur mukammal bo'lmaguncha uni hech kimga ko'rsatmang",
              "Har qanday yangi startap kamida 10 million dollar byudjet bilan boshlanishi shart",
              "Agar mahsulotingizning birinchi versiyasidan uyalmasangiz, demak siz bozorga juda kech chiqibsiz",
              "Dastur kodini faqat o'z oila a'zolaringiz sinovdan o'tkazishi eng to'g'ri yo'ldir"
            ],
            correctAnswer: 2,
            explanation: "Mukammallikka intilib yillab o'tirish — startapning o'limidir. Tezroq bozorga chiqib xatolardan o'rganish shart."
          },
          {
            id: "m4l7-q3",
            question: "Startapdagi \"Build - Measure - Learn\" (Qur - O'lcha - O'rgan) doiraviy sikli nima vazifani bajaradi?",
            options: [
              "Mijozlar fikri va tahliliy ma'lumotlar asosida mahsulotni to'xtovsiz takomillashtirib borish",
              "Faqat maktab imtihonlarida a'lo baholar olish uchun nazariy konspektlar yozib borish",
              "Kompyuter protsessorining haroratini soat sayin maxsus asboblar bilan o'lchab turish",
              "Faqat kitob do'konlaridan startaplar haqidagi yangi adabiyotlarni xarid qilish"
            ],
            correctAnswer: 0,
            explanation: "Muntazam takomillashtirish orqali startap mijozlar sevadigan haqiqiy mahsulotga aylanadi."
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
            id: "m4l8-q1",
            question: "Startap biznes modelini 1 ta varaqda ifodalovchi Lean Canvas necha asosiy blokdan iborat?",
            options: [
              "3 ta blokdan",
              "5 ta blokdan",
              "9 ta blokdan",
              "25 ta blokdan"
            ],
            correctAnswer: 2,
            explanation: "Lean Canvas muammo, mijoz, qiymat, yechim, daromad kabi 9 ta muhim blokni bitta varaqqa jamlaydi."
          },
          {
            id: "m4l8-q2",
            question: "Lean Canvas dagi \"Unique Value Proposition\" (Noyob qimmatli taklif) nimani ifodalaydi?",
            options: [
              "Dasturiy mahsulotning yillik obuna narxi qancha dollar ekanligining aniq raqami",
              "Foydalanuvchilar veb-saytga kirish uchun kiritadigan maxfiy shifrlangan paroli",
              "Mahsulotning server xotirasidan qancha megabayt joy egallashi haqidagi ma'lumot",
              "Mahsulotingiz raqobatchilardan nimasi bilan yaxshiroqligi va mijoz nega sizni tanlashi sababi"
            ],
            correctAnswer: 3,
            explanation: "Value Proposition mijozga taklif qilinayotgan asosiy foydani 1 ta jumlada aniq ifodalaydi."
          },
          {
            id: "m4l8-q3",
            question: "Lean Canvas ning 50 betlik qalin an'anaviy biznes-rejalardan ustunligi nimada?",
            options: [
              "Ixcham, tezkor o'zgartirish oson va barcha muhim jihatlarni bir varaqda yaqqol ko'rsatadi",
              "Unda umuman hech qanday moliyaviy hisob-kitoblar, daromadlar va raqamlar bo'lmasligi bilan",
              "Uni faqat qog'ozda chizish mumkin bo'lib, kompyuterda fayl ochish butunlay taqiqlanishi bilan",
              "U faqat xalqaro yirik moliya tashkilotlari tomonidan qabul qilinadigan yagona rasmiy qog'ozdir"
            ],
            correctAnswer: 0,
            explanation: "Startap tez o'zgaradi, shuning uchun ixcham va chaqqon reja eng samarali vositadir."
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
            id: "m4l9-q1",
            question: "Investorlar uchun tayyorlanadigan Pitch Deck taqdimot slaydlarida qaysi qoidaga amal qilinadi?",
            options: [
              "Har bir slaydga 500 ta so'zdan iborat mayda matnlarni to'ldirib yozish",
              "Matnni minimal qilib, katta vizual suratlar, grafiklar va asosiy raqamlarni aks ettirish",
              "Barcha slaydlarni faqat qora va oq ranglarda, hechsiz oddiy qilib tayyorlash",
              "Taqdimotda hech qanday raqamlar, grafiklar yoki loyiha natijalarini ko'rsatmaslik"
            ],
            correctAnswer: 1,
            explanation: "Investorlar slayddagi uzun matnni o'qishdan ko'ra, sizning nutqingiz va asosiy raqamlarga e'tibor qaratadi."
          },
          {
            id: "m4l9-q2",
            question: "Elevator Pitch (Lift taqdimoti) formati o'zining qanday xususiyati bilan mashhur?",
            options: [
              "Faqat lift ichida gapirish shart bo'lgan qat'iy qoidaga egaligi bilan",
              "Kamida 3 soat davom etadigan ilmiy konferensiya ma'ruzasi ekanligi bilan",
              "Faqat yozma ravishda xat orqali yuboriladigan hujjat shakli hisoblanishi bilan",
              "Loyiha mohiyatini 30-60 soniya ichida o'ta lo'nda va esda qolarli tushuntirib berish bilan"
            ],
            correctAnswer: 3,
            explanation: "Elevator Pitch qisqa vaqt ichida investor qiziqishini uyg'otish uchun eng samarali taqdimotdir."
          },
          {
            id: "m4l9-q3",
            question: "Investorlar oldida sahnada taqdimot qilayotganda qanday xatti-harakat eng katta ishonchni shakllantiradi?",
            options: [
              "Qog'ozga qarab past ovozda pichirlab, tomoshabinlarga va zalga umuman qaramasdan so'zlash",
              "Sahnada turib zaldagi tinglovchilarga orqa o'girib, faqat slayd matnini to'liq o'qib berish",
              "Zal bilan ko'z orqali aloqa, dadil ovoz, tabassum va o'z loyihasi yechimiga to'liq ishonch",
              "Nutq davomida tez-tez soatga qarab, taqdimot vaqti qachon tugashini kutib xavotirda turish"
            ],
            correctAnswer: 2,
            explanation: "Investorlar birinchi navbatda loyihaning o'ziga emas, uni taqdim etayotgan dadil asoschilarga ishonadilar."
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
            id: "m4l10-q1",
            question: "Loyiha boshqaruvidagi mashhur \"Muhandislik uchburchagi\" (Triple Constraint) qaysi elementlardan iborat?",
            options: [
              "Monitor, klaviatura va kompyuter sichqonchasi",
              "HTML teglari, CSS stillari va JavaScript funksiyalari",
              "Ish hajmi (Scope), Muddat (Time) va Xarajat/Byudjet (Cost)",
              "Ertalabki reja, tushlik tanaffusi va kechki hisobot"
            ],
            correctAnswer: 2,
            explanation: "Hajm, vaqt va xarajat — loyihaning sifatini belgilovchi va o'zaro bog'liq 3 ta asosiy cheklovdir."
          },
          {
            id: "m4l10-q2",
            question: "IT jamoasida Loyiha Menejeri (Project Manager) ning asosiy mas'uliyati nimadan iborat?",
            options: [
              "Jamoa ishini rejalashtirish, to'siqlarni bartaraf etish va loyihani o'z vaqtida yakunlash",
              "Faqat ofis kompyuterlariga yangi tizim drayverlari va operatsion dasturlarni o'rnatish",
              "Barcha dasturchilarning o'rniga mustaqil kod yozib, ularga dam olishga ruxsat berish",
              "Kompaniya ofisidagi barcha xodimlarga har kuni kechikkanlik uchun jarimalar belgilash"
            ],
            correctAnswer: 0,
            explanation: "PM loyihaning belgilangan muddat va byudjet doirasida silliq harakatlanishiga mas'ul yetakchidir."
          },
          {
            id: "m4l10-q3",
            question: "Agile (Egiluvchan) loyiha boshqaruvi metodologiyasining eng ustuvor qadriyati nima?",
            options: [
              "Qat'iy qog'ozbozlik va o'zgarmas ko'p yillik rejalarga ko'r-ko'rona amal qilish",
              "O'zgarishlarga tezkor moslashish, ishlaydigan dastur va mijoz bilan uzluksiz hamkorlik",
              "Mijozlar bilan loyiha bitguniga qadar hech qanday muloqot qilmaslik",
              "Loyiha davomida xavfsizlik va sifatni tekshiruvchi testlarni butunlay bekor qilish"
            ],
            correctAnswer: 1,
            explanation: "Agile o'zgaruvchan bozor sharoitida mijoz talablariga moslashib tezkor natija chiqarishga urg'u beradi."
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
            id: "m4l11-q1",
            question: "Scrum metodologiyasidagi \"Sprint\" tushunchasi nimani anglatadi?",
            options: [
              "Kompaniya xodimlari o'rtasida o'tkaziladigan sport yugurish musobaqasi",
              "Loyiha jamoasi har yili bir marotaba topshiradigan rasmiy yakuniy hisobot",
              "Jamoa aniq vazifalarni bajarib tayyor natija chiqaradigan 1-2 haftalik qisqa ish davri",
              "Kompaniya ofisidagi barcha kompyuterlarni tozalash uchun ajratilgan kun"
            ],
            correctAnswer: 2,
            explanation: "Sprintlar katta loyihani kichik, boshqariladigan bo'laklarga ajratib bajarish imkonini beradi."
          },
          {
            id: "m4l11-q2",
            question: "Kanban doskasining klassik va eng mashhur 3 ta asosiy ustuni qaysi tartibda bo'ladi?",
            options: [
              "To Do (Rejada) -> In Progress (Jarayonda) -> Done (Bajarildi)",
              "Start (Boshlash) -> Pause (To'xtatish) -> Stop (Tugatish)",
              "Easy (Oson) -> Medium (O'rtacha) -> Hard (Qiyin)",
              "Input (Kirish) -> Cache (Xotira) -> Output (Chiqish)"
            ],
            correctAnswer: 0,
            explanation: "To Do, In Progress va Done ustunlari vazifalarning harakatini ko'z bilan yaqqol ko'rish imkonini beradi."
          },
          {
            id: "m4l11-q3",
            question: "Scrum jamoalarida Daily Standup (har kungi 15 daqiqalik yig'ilish) nega tik turgan holda o'tkaziladi?",
            options: [
              "Kompaniya ofisida qulay stul va yumshoq kreslolar xodimlar soniga yetishmasligi tufayli",
              "Dasturchilarning ertalabdan jismoniy mashqlar va badantarbiya bilan shug'ullanishi uchun",
              "Ofis xonalarini shamollatish va pollarini tozalash vaqtida xalaqit bermaslik maqsadida",
              "Yig'ilish cho'zilib ketmasligi, tez va faqat eng muhim masalalarga qaratilishi uchun"
            ],
            correctAnswer: 3,
            explanation: "Tik turish uzoq gap sotishni to'xtatib, barchani qisqa, aniq va londa gapirishga undaydi."
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
            id: "m4l12-q1",
            question: "Jira va Trello kabi boshqaruv tizimlarida \"Backlog\" nima vazifani bajaradi?",
            options: [
              "Serverda yuzaga kelgan barcha xatoliklar va nosozliklar jurnali",
              "Foydalanuvchilarning shaxsiy parollari va to'lov ma'lumotlari arxivi",
              "O'chirilgan kompyuterlar va eskirgan monitorlarning hisob ro'yxati",
              "Kelajakda bajarilishi rejalashtirilgan barcha g'oya va vazifalar xazinasi"
            ],
            correctAnswer: 3,
            explanation: "Backlog — sprintlarga hali olinmagan vazifalar xazinasi bo'lib, u yerdan eng muhimlari tanlab olinadi."
          },
          {
            id: "m4l12-q2",
            question: "Trello platformasining vizual boshqaruv modeli qaysi metodologiyaga asoslangan?",
            options: [
              "Faqat audio yozuvlar va ovozli xabarlar almashinuvi tizimiga",
              "Kanban doskalari, tematik ustunlar va vazifa kartochkalari tizimiga",
              "Murakkab matematik formulalar va jadval hisob-kitoblariga",
              "Faqat qog'oz hujjatlarni skaner qilib saqlash bazasiga"
            ],
            correctAnswer: 1,
            explanation: "Trello vizual kartochkalar va ustunlar orqali ish jarayonini o'ta qulay boshqarish imkonini beradi."
          },
          {
            id: "m4l12-q3",
            question: "Zamonaviy IT jamoalarida Jira va Trello tizimlaridan foydalanishning eng katta yutug'i nima?",
            options: [
              "Kompaniyaning oylik internet trafigi va elektr energiyasi sarfini 50 foizga tejab berishi",
              "Kompyuter protsessorining va operativ xotirasining ishlash tezligini ikki barobar oshirishi",
              "Dasturchilarning bir-biri bilan hech qachon shaxsiy muloqot qilmasligini ta'minlashi",
              "Har bir topshiriqning kimga yuklangani, muddati va bajarilish holati shaffof ko'rinishi"
            ],
            correctAnswer: 3,
            explanation: "Shaffoflik va mas'uliyat jamoaning muvofiqligini ta'minlaydi va hech bir vazifa yo'qolib qolmaydi."
          }
        ],
        summary: 'Jira va Trello kabi asboblarni bilish — professional IT korporativ dunyosida ishlash uchun zarur bo\'lgan amaliy ko\'nikmadir.'
      }
    }
  ]
};

