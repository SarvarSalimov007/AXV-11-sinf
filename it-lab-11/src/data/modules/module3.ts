import { Module } from '../types';

export const module3: Module = {
  id: 'module-3',
  title: 'Cloud va Deployment',
  description: 'Bulutli texnologiyalar (AWS, Google Cloud, Azure), serverga deploy qilish usullari, domen va DNS sozlamalari, SSL/HTTPS shifrlash, muhit o\'zgaruvchilari hamda bulut xavfsizligi asoslari.',
  icon: 'Cloud',
  color: 'emerald',
  gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
  project: {
    title: 'Cloud Deployment va Xavfsiz Veb Infratuzilma',
    description: 'Zamonaviy veb-platformani AWS yoki Vercel bulutiga joylashtiring, shaxsiy domenni ulang, bepul SSL/TLS sertifikatini o\'rnating va muhit o\'zgaruvchilari (Environment Variables) xavfsizligini ta\'minlang.',
    tasks: [
      'Bulutli provayderda (AWS/Vercel/Render) hisob ochish va loyihani bog\'lash',
      'Ishlab chiqish (.env.local) va ishlab chiqarish (.env.production) o\'zgaruvchilarini xavfsiz ajratish',
      'Shaxsiy domenni (masalan: mening-loyiha.uz) sotib olish yoki bepul subdomen olish',
      'DNS yozuvlarini sozlash: A record, CNAME, TXT validatsiya',
      'Let\'s Encrypt yoki Cloudflare orqali SSL/HTTPS xavfsiz yashil qulf belgisini ulash',
      'Lighthouse orqali xavfsizlik va tezlik auditini o\'tkazish'
    ],
    technologies: ['AWS EC2', 'AWS S3', 'Vercel', 'DNS', 'SSL/TLS', 'HTTPS', 'Environment Variables', 'Cloudflare'],
    criteria: [
      'Sayt HTTPS orqali to\'liq shifrlangan holatda xatosiz ochilishi',
      'Hech qanday maxfiy API kalitlar yoki parollar Git kodida saqlanmaganligi',
      'DNS yozuvlari to\'g\'ri yo\'naltirilgan va global tarqalgan bo\'lishi',
      'Lighthouse auditida Security va Performance ko\'rsatkichi 90+ bo\'lishi'
    ]
  },
  lessons: [
    {
      id: 'm3-l1',
      moduleId: 'module-3',
      title: 'Deployment tushunchasi',
      description: 'Dasturni o\'z kompyuteringizdan butun dunyo foydalana oladigan jonli serverga chiqarish nima?',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 1,
      icon: 'UploadCloud',
      content: {
        theory: `Deployment (Joylashtirish) — bu siz o'z shaxsiy kompyuteringizda (localhost) yaratgan dasturiy ta'minotni 24/7 internetga ulangan masofaviy serverga yuklash va sozlash jarayonidir.

Deployment bosqichlari:
1. Localhost (Ishlab chiqish muhiti) — faqat sizning kompyuteringizda ishlaydi.
2. Staging / Preview (Sinov muhiti) — mijoz yoki jamoa test qilishi uchun xususiy server.
3. Production (Jonli muhit) — haqiqiy foydalanuvchilar kiradigan, xatolarga yo'l qo'yilmaydigan asosiy tizim.

Zamonaviy platformalar (Vercel, Netlify, Render, Railway) Git repozitoriyni bog'lash orqali 1 marta bosishda (1-Click Deployment) butun tizimni jonli efirga chiqarish imkonini beradi.`,
        realWorldExample: `Siz o'z xonangizda rasm chizib tursangiz, uni faqat o'zingiz ko'rasiz (Localhost). Agar rasmni mashhur muzey ko'rgazmasiga olib borib devorga ossangiz, uni butun shahar tomosha qilishi mumkin (Deployment).`,
        practicalTask: `Vercel yoki GitHub Pages da o'zingiz yaratgan HTML sahifani 5 daqiqada bepul joylashtirib, uning jonli havolasini oling.`,
        codeExample: {
          language: 'bash',
          code: `# Vercel CLI orqali 1 daqiqada deploy qilish
npm i -g vercel

# Loyiha papkasida
vercel

# Jonli ishlab chiqarish serveriga yuklash
vercel --prod`,
          explanation: 'Vercel kodingizni tahlil qilib, avtomatik CDN va HTTPS bilan ta\'minlangan domen beradi.'
        },
        quiz: [
          {
            id: "m3l1-q1",
            question: "IT sohasida \"Production\" (Prod) serveri qanday muhitni anglatadi?",
            options: [
              "Dasturchining uyidagi noutbukida kod sinovdan o'tkaziladigan lokal muhit",
              "Faqat dizaynerlar yangi maketlarni chizib saqlaydigan grafik muhit",
              "Haqiqiy foydalanuvchilar tashrif buyuradigan jonli, asosiy tizim serveri",
              "Kompaniya ofisidagi barcha kompyuterlarni internetga ulovchi router"
            ],
            correctAnswer: 2,
            explanation: "Production — bu real mijozlar har kuni ishlatadigan rasmiy, jonli ishchi muhitdir."
          },
          {
            id: "m3l1-q2",
            question: "Nima sababdan dasturchining kompyuteridagi \"localhost:3000\" ga boshqalar tashqaridan kira olmaydi?",
            options: [
              "Chunki localhost faqat sizning shaxsiy kompyuteringizning ichki tarmoq manzilidir",
              "Chunki mobil telefonlarda veb-sahifalarni ochish operatsion tizim tomonidan taqiqlangan",
              "Chunki 3000 raqami barcha xalqaro brauzerlar tomonidan bloklangan port hisoblanadi",
              "Chunki do'stingizning kompyuteriga maxsus dasturlash litsenziyasi o'rnatilmagan"
            ],
            correctAnswer: 0,
            explanation: "localhost (127.0.0.1) faqat ayni qurilmaning o'ziga xos bo'lib, tashqi internetga ulanmagan."
          },
          {
            id: "m3l1-q3",
            question: "Zamonaviy Git-based deployment platformalarining (Vercel, Render) eng katta afzalligi nima?",
            options: [
              "Faqat Windows tizimida ishlaydi va kompyuterga hech qanday dastur talab qilmaydi",
              "Saytga tashrif buyurgan barcha foydalanuvchilarga bepul internet tarqatib beradi",
              "Har safar saytni yangilash uchun server xonasiga borib kompyuterni o'chirib yoqish kerak",
              "Kodni Git ga push qilish bilan avtomatik tarzda yangi versiya serverga joylanadi"
            ],
            correctAnswer: 3,
            explanation: "Git-based CI/CD platformalari yangi commitni avtomatik build qilib bir necha soniyada deploy qiladi."
          }
        ],
        summary: 'Deployment — dasturingizning tug\'ilish lahzasi. Haqiqiy dasturchi kodi faqat o\'zida emas, millionlab odamlarning ekranida ishlaganda lazzat oladi.'
      }
    },
    {
      id: 'm3-l2',
      moduleId: 'module-3',
      title: 'Environment Variables',
      description: 'Maxfiy sirlarni xavfsiz saqlash: .env fayli, API kalitlar, ma\'lumotlar bazasi parollari va .gitignore qoidasi.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 2,
      icon: 'Key',
      content: {
        theory: `Dasturingizda turli maxfiy ma'lumotlar bo'ladi: Ma'lumotlar bazasi paroli, Stripe/Click to'lov kaliti, Telegram Bot tokeni.

ENG KATTA XATO: Bu maxfiy ma'lumotlarni to'g'ridan-to'g'ri kod ichida yozish va GitHub ga yuklash!
Agar bu parollar ochiq internetga tushsa, xakerlar bir necha daqiqada ma'lumotlaringizni o'g'irlashi yoki hisobingizdan millionlab so'm yechib olishi mumkin.

Yechim: Muhit o'zgaruvchilari (Environment Variables — .env)
- Barcha maxfiy kalitlar alohida \`.env\` faylida saqlanadi.
- \`.env\` fayli albatta \`.gitignore\` ga kiritiladi va hech qachon GitHub ga yuklanmaydi!
- Koddagi joylarda \`process.env.MAXFIY_KALIT\` orqali chaqirib ishlatiladi.`,
        realWorldExample: `Uyingizning kalitini uyingiz eshigining ustiga osib qo'ymaysiz-ku! Uni o'zingiz bilan xavfsiz cho'ntagingizda olib yurasiz. .env fayli ham kodingiz ichiga emas, faqat serverning xavfsiz cho'ntagiga joylanadigan kalitdir.`,
        practicalTask: `Loyiha papkasida .env va .gitignore fayllarini to'g'ri yarating va Node.js da muhit o'zgaruvchisini o'qing.`,
        codeExample: {
          language: 'javascript',
          code: `# .env fayli (GITGA CHIQARILMAYDI!):
DATABASE_URL=postgres://user:maxfiyParol123@db.itlab11.uz:5432/main
TELEGRAM_BOT_TOKEN=736482910:AAHjf73kdkd92jjd83h

# .gitignore fayli:
node_modules/
.env
.env.local

# app.js — Kod ichida xavfsiz chaqirish:
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
console.log("Bazaga muvaffaqiyatli ulanildi!");`,
          explanation: 'process.env orqali server muhiti o\'zgarganda kodni o\'zgartirish shart bo\'lmaydi.'
        },
        quiz: [
          {
            id: "m3l2-q1",
            question: ".env faylini GitHub ochiq repozitoriyiga yuklash nima sababdan qat'iyan taqiqlanadi?",
            options: [
              "Chunki .env ichidagi maxfiy parollar va tokenlar ommaga fosh bo'lib, xakerlar hujumiga sabab bo'ladi",
              "Chunki GitHub repozitoriysi faqat rasm, video va PDF formatidagi katta hajmli fayllarni qabul qiladi",
              "Chunki .env faylining hajmi me'yordan juda katta bo'lib, serverdagi xotira resursini to'ldirib qo'yadi",
              "Chunki bu fayl yuklanganda GitHub ning xalqaro veb-serverlari vaqtincha ishlamay qolishi mumkin"
            ],
            correctAnswer: 0,
            explanation: ".env faylida ma'lumotlar bazasi parollari, API tokenlar va maxfiy kalitlar saqlanadi."
          },
          {
            id: "m3l2-q2",
            question: "Keraksiz yoki maxfiy fayllarni Git e'tiboridan chetda qoldirish uchun qaysi fayldan foydalaniladi?",
            options: [
              ".gitrules fayli",
              ".gitignore fayli",
              ".gitprotect fayli",
              ".gitsecret fayli"
            ],
            correctAnswer: 1,
            explanation: ".gitignore faylida yozilgan barcha yo'l va fayllar Git tomonidan qat'iy e'tiborsiz qoldiriladi."
          },
          {
            id: "m3l2-q3",
            question: "Node.js dasturlash muhitida tizim o'zgaruvchilariga qaysi standart global obyekt orqali murojaat qilinadi?",
            options: [
              "system.environment.VARIABLE",
              "window.env.VARIABLE",
              "global.settings.VARIABLE",
              "process.env.VARIABLE"
            ],
            correctAnswer: 3,
            explanation: "Node.js da 'process.env.<NOM>' orqali yuklangan barcha muhit o'zgaruvchilariga kirish mumkin."
          }
        ],
        summary: 'Xavfsizlik 1-o\'rinda! Maxfiy ma\'lumotlarni hech qachon kodga yozmang, doimo .env va muhit o\'zgaruvchilaridan foydalaning.'
      }
    },
    {
      id: 'm3-l3',
      moduleId: 'module-3',
      title: 'AWS, Azure va Google Cloud',
      description: 'Dunyoni boshqarayotgan katta uchlik: Bulutli texnologiyalar nima va ular qanday imkoniyatlar beradi?',
      duration: '50 daqiqa',
      difficulty: 'boshlangich',
      order: 3,
      icon: 'CloudRain',
      content: {
        theory: `Oldinlari kompaniyalar o'z serverlarini sotib olib, ularga maxsus xona (Server Room), konditsionerlar va generatorlar o'rnatishi kerak edi. Bu juda qimmat va noqulay bo'lgan.

Bulutli hisoblash (Cloud Computing) — hisoblash quvvati, xotira va ma'lumotlar bazalarini dunyoning narigi burchagidagi ma'lumot markazlaridan (Data Center) internet orqali ijaraga olishdir.

"Katta uchlik" bulut provayderlari:
1. Amazon Web Services (AWS) — bozorning eng katta yetakchisi (32%+ bozor ulushi).
2. Microsoft Azure — korporativ mijozlar va Windows ekotizimining sevimli tanlovi.
3. Google Cloud Platform (GCP) — sun'iy intellekt, katta ma'lumotlar (Big Data) va Kubernetes bo'yicha eng kuchli provayder.

Bulut xizmatlari turlari:
- IaaS (Infrastructure as a Service) — sizga bo'sh virtual kompyuter beriladi (AWS EC2).
- PaaS (Platform as a Service) — siz faqat kodni berasiz, qolgan hamma narsani bulut bajaradi (Heroku, Vercel).
- SaaS (Software as a Service) — tayyor dastur (Gmail, Figma, Canva).`,
        realWorldExample: `Siz elektr chiroq yoqish uchun hovlingizga shaxsiy gidroelektrostantsiya qurmaysiz-ku! Shahar elektr tarmog'iga ulanasiz va qancha yorug'lik yoqsangiz, shuncha to'laysiz (Pay-as-you-go). Bulutli texnologiyalar ham aynan shunday hisoblash elektr energiyasidir.`,
        practicalTask: `AWS yoki Google Cloud konsolida bepul darajadagi (Free Tier) xizmatlar ro'yxati bilan tanishing.`,
        codeExample: {
          language: 'markdown',
          code: `# Bulutli Hisoblash Modeli: Pay-As-You-Go (Faqat ishlatganingiz uchun to'lang)

1. Server 1 oy ishlab tursa: ~$5/oy
2. Foydalanuvchilar yo'q paytda serverni o'chirib qo'ysangiz: $0 to'laysiz!
3. Yangi yil arafasida yuklama 100 barobar oshsa: Avtomatik ravishda 10 ta server qo'shiladi (Auto-scaling).
4. Bayram o'tgach yana 1 tagacha qisqaradi.`,
          explanation: 'Bulut sizga million dollarlik infratuzilmani bir necha dollarga ijaraga olish imkonini beradi.'
        },
        quiz: [
          {
            id: "m3l3-q1",
            question: "Bulutli hisoblash texnologiyasining (Cloud Computing) eng asosiy iqtisodiy foydasi nima?",
            options: [
              "Qimmatbaho server xonalarini qurmasdan, faqat ishlatilgan resurs uchun to'lash (Pay-as-you-go)",
              "Barcha xizmatlarning butun dunyo bo'ylab doimo mutlaqo bepul taqdim etilishi",
              "Serverlarning umuman internet tarmog'i mavjud bo'lmaganda ham bemalol ishlashi",
              "Kompyuter o'yinlarini hech qanday cheklovlarsiz yuqori tezlikda yuklab berishi"
            ],
            correctAnswer: 0,
            explanation: "Bulutli provayderlar infratuzilma xarajatlarini tejaydi va faqat sarflangan daqiqalar uchun pul oladi."
          },
          {
            id: "m3l3-q2",
            question: "Bugungi kunda butun dunyo bo'yicha eng yirik va yetakchi bulutli provayder qaysi kompaniyaga tegishli?",
            options: [
              "Telegram Cloud xizmati",
              "AWS (Amazon Web Services)",
              "Twitter Datacenter tarmog'i",
              "Adobe Cloud platformasi"
            ],
            correctAnswer: 1,
            explanation: "Amazon Web Services (AWS) dunyodagi eng katta va eng ko'p servislarga ega bulutli ekotizimdir."
          },
          {
            id: "m3l3-q3",
            question: "SaaS (Software as a Service) bulutli xizmat ko'rsatish modeliga qaysi biri eng to'g'ri misol bo'ladi?",
            options: [
              "Kompyuterga o'rnatilgan bo'sh qattiq disk (HDD)",
              "Serverlar xonasini sovutish uchun qo'yilgan konditsioner",
              "Brauzerda ishlatiladigan Google Docs yoki Figma xizmati",
              "Lokal tarmoqni ulash uchun xizmat qiladigan optik kabel"
            ],
            correctAnswer: 2,
            explanation: "SaaS — bu dasturni o'rnatmasdan to'g'ridan-to'g'ri veb orqali tayyor xizmat sifatida ishlatishdir."
          }
        ],
        summary: 'Bulutlar — barcha zamonaviy texnologiyalarning poydevori. Bulutni tushunish sizga global miqyosdagi tizimlarni boshqarish eshigini ochadi.'
      }
    },
    {
      id: 'm3-l4',
      moduleId: 'module-3',
      title: 'AWS EC2, S3 va IAM',
      description: 'AWS ning uch ustuni: Virtual serverlar (EC2), cheksiz fayllar ombori (S3) va xavfsizlik nazorati (IAM).',
      duration: '50 daqiqa',
      difficulty: 'yuqori',
      order: 4,
      icon: 'HardDrive',
      content: {
        theory: `AWS ning yuzlab xizmatlari orasida eng muhim 3 ta poydevor xizmat:

1. AWS EC2 (Elastic Compute Cloud):
Bulutdagi virtual kompyuter (server). Siz bir necha daqiqada Linux yoki Windows o'rnatilgan, istalgan protsessor va operativ xotiraga ega virtual mashinani ochishingiz mumkin.

2. AWS S3 (Simple Storage Service):
Internetdagi eng ishonchli fayllar ombori. Foydalanuvchilarning suratlari, video darslar, zaxira nusxalar (backuplar) S3 da cheksiz hajmda va 99.999999999% ishonchlilik bilan saqlanadi. Har bir faylga alohida URL havola orqali murojaat qilish mumkin.

3. AWS IAM (Identity and Access Management):
Xavfsizlik va ruxsatlar tizimi. "Kim qaysi resursga kira oladi?" degan savolga javob beradi. Har bir dasturchiga yoki serverga faqat o'ziga kerakli minimal huquqlar (Least Privilege) beriladi.`,
        realWorldExample: `EC2 — siz ijaraga olgan ofis binosi (ish shu yerda qaynaydi). S3 — ulkan omborxona (hamma mahsulot va buyumlar xavfsiz saqlanadi). IAM esa — ofis eshigidagi ruxsatnomali (propuskali) qo'riqlash xizmati.`,
        practicalTask: `AWS S3 chelagi (Bucket) qanday ishlashini va fayllarni yuklash mexanizmini tahlil qiling.`,
        codeExample: {
          language: 'javascript',
          code: `// AWS SDK orqali S3 ga rasm yuklash (Node.js)
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "eu-central-1" });

async function uploadAvatar(fileBuffer, fileName) {
  const uploadParams = {
    Bucket: "itlab11-user-avatars",
    Key: \`avatars/\${fileName}\`,
    Body: fileBuffer,
    ContentType: "image/jpeg"
  };

  await s3.send(new PutObjectCommand(uploadParams));
  console.log("Rasm S3 bulutiga muvaffaqiyatli yuklandi!");
}`,
          explanation: 'Katta fayllarni ma\'lumotlar bazasida emas, doimo S3 kabi obyektli omborlarda saqlash kerak.'
        },
        quiz: [
          {
            id: "m3l4-q1",
            question: "AWS S3 (Simple Storage Service) bulutli servisining asosiy vazifasi nima?",
            options: [
              "Dastur kodini real vaqtda tezkor kompilyatsiya qilib, test natijalarini ekranga chiqarish uchun",
              "Domen nomlarini xalqaro auksionda qulay narxlarda sotib olish va ularni boshqarish uchun",
              "Fayllarni (rasm, video, hujjat) bulutda ishonchli va cheksiz miqdorda saqlash uchun",
              "Server kompyuterining protsessorini va operativ xotirasini masofadan sovutib turish uchun"
            ],
            correctAnswer: 2,
            explanation: "S3 fayllarni ob'yektli xotirada (Bucket) 99.999999999% ishonchlilik bilan xavfsiz saqlaydi."
          },
          {
            id: "m3l4-q2",
            question: "AWS EC2 (Elastic Compute Cloud) xizmati nima vazifani bajaradi?",
            options: [
              "Foydalanuvchilarning elektron pochtalarini tartibga solib, yangi xabarlarni saralash xizmati",
              "Dasturlarni ishga tushirish uchun bulutdagi virtual serverlarni (Virtual Machine) taqdim etadi",
              "Sayt dizaynidagi barcha shriftlar va rasmlarni avtomatik tarzda qayta chizib beruvchi grafik modul",
              "Kompyuterni zararli viruslardan va tarmoq xurujlaridan tozalovchi lokal dastur hisoblanadi"
            ],
            correctAnswer: 1,
            explanation: "EC2 dasturchiga bir necha soniyada istalgan operatsion tizimli virtual serverni ijaraga beradi."
          },
          {
            id: "m3l4-q3",
            question: "AWS IAM xavfsizlik tizimidagi \"Principle of Least Privilege\" (Minimal ruxsatlar) tamoyili nimani anglatadi?",
            options: [
              "Barcha yangi xodimlarga eng yuqori darajadagi administrator (Root) huquqlarini berish",
              "Tizimga hech kim kira olmasligi uchun barcha parollarni butunlay o'chirib qo'yish",
              "Foydalanuvchilar parollarini har o'n daqiqada yangilab turish majburiyatini yuklash",
              "Foydalanuvchiga faqat o'z ishini bajarishi uchun zarur bo'lgan eng minimal ruxsatlarni berish"
            ],
            correctAnswer: 3,
            explanation: "Minimal ruxsatlar tamoyili xavfsizlik buzilganda ham tizimning boshqa qismlarini saqlab qoladi."
          }
        ],
        summary: 'EC2, S3 va IAM — AWS bulutining uchta ustuni. Bu xizmatlarni o\'zlashtirgan mutaxassis har qanday xalqaro kompaniyada qadrlanadi.'
      }
    },
    {
      id: 'm3-l5',
      moduleId: 'module-3',
      title: 'Domen va DNS',
      description: 'Internet qanday ishlaydi? Domen nomlari, IP manzillar va DNS (A, CNAME, MX) turlari.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 5,
      icon: 'Globe',
      content: {
        theory: `Kompyuterlar internetda bir-birini faqat raqamli IP manzillar orqali taniydi (masalan: 142.250.185.206). Biroq insonlar uchun bu raqamlarni eslab qolish juda qiyin!

DNS (Domain Name System) — bu internetning ulkan "telefon kitobi"dir!
U inson tushunadigan nomlarni (masalan: google.com yoki itlab11.uz) kompyuter tushunadigan raqamli IP manzilga o'girib beradi.

Asosiy DNS Yozuvlari (Records):
- A Record (Address): Domen nomini IPv4 manzilga bog'laydi (itlab11.uz -> 192.0.2.1).
- AAAA Record: Domen nomini yangi IPv6 manzilga bog'laydi.
- CNAME (Canonical Name): Bitta domenni boshqa domen nomiga taxallus (alias) qilib yo'naltiradi (www.itlab11.uz -> itlab11.uz).
- MX (Mail Exchange): Elektron pochta xabarlari qaysi serverga borishi kerakligini belgilaydi.
- TXT: Domen egaligini tasdiqlash uchun xizmat qiladi.`,
        realWorldExample: `Telefoningizdagi kontaktlar ro'yxatini tasavvur qiling: siz "Dadam" yoki "Ustoz" deb qidirasiz (Domen nomi), telefon esa o'sha nom ortidagi +998901234567 raqamiga qo'ng'iroq qiladi (IP manzil). DNS aynan shu ishni bajaradi.`,
        practicalTask: `Terminalda \`nslookup\` yoki \`dig\` buyrug'i orqali istalgan saytning qaysi IP manzilda joylashganini aniqlang.`,
        codeExample: {
          language: 'bash',
          code: `# Saytning IP manzilini DNS dan so'rab bilish
nslookup itlab11.uz

# Yoki 'dig' buyrug'i orqali to'liq DNS yozuvlarini ko'rish
dig itlab11.uz A

# Ping orqali server bilan aloqani tekshirish
ping -c 4 google.com`,
          explanation: 'DNS so\'rovi millisoniyalarda butun dunyo bo\'ylab root serverlar orqali hal qilinadi.'
        },
        quiz: [
          {
            id: "m3l5-q1",
            question: "Internetdagi DNS (Domain Name System) tizimining asosiy vazifasi nimadan iborat?",
            options: [
              "Foydalanuvchilarga onlayn video va filmlarni bepul tomosha qilish imkonini berish",
              "Sayt domen nomlarini (masalan, itlab11.uz) serverning raqamli IP manziliga o'girib berish",
              "Server kompyuterini elektr quvvati bilan uzluksiz ta'minlash jarayonini boshqarish",
              "Elektron pochtalarga kelayotgan keraksiz spam xabarlarni avtomatik tozalash"
            ],
            correctAnswer: 1,
            explanation: "DNS bu internetning telefon kitobidir: inson tushunadigan nomlarni raqamli IP ga o'giradi."
          },
          {
            id: "m3l5-q2",
            question: "Domen nomini aniq bir IPv4 raqamli manziliga bog'lash uchun qaysi DNS yozuvi turi ishlatiladi?",
            options: [
              "A Record yozuvi",
              "CNAME yozuvi",
              "MX Record yozuvi",
              "TXT Record yozuvi"
            ],
            correctAnswer: 0,
            explanation: "A Record (Address) domenni to'g'ridan-to'g'ri serverning IPv4 manziliga bog'laydi."
          },
          {
            id: "m3l5-q3",
            question: "Bitta domen yoki subdomenni boshqa bir domen nomiga yo'naltirish uchun qaysi DNS yozuvi qo'llaniladi?",
            options: [
              "PTR yozuvi",
              "NS yozuvi",
              "CNAME yozuvi",
              "A yozuvi"
            ],
            correctAnswer: 2,
            explanation: "CNAME (Canonical Name) bir domen nomini ikkinchi domen nomiga taxallus (alias) qilib yo'naltiradi."
          }
        ],
        summary: 'DNS va domenlar internetning navigatsiya tizimidir. Uni to\'g\'ri sozlash orqali millionlab foydalanuvchilar sizning saytingizga adashmasdan kirib keladi.'
      }
    },
    {
      id: 'm3-l6',
      moduleId: 'module-3',
      title: 'SSL/TLS va HTTPS',
      description: 'Brauzerdagi yashil qulf belgisi: Shifrlangan aloqa, sertifikatlar va Let\'s Encrypt.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 6,
      icon: 'Lock',
      content: {
        theory: `Eski HTTP protokolida internet orqali uzatilayotgan barcha ma'lumotlar (parollar, plastik karta raqamlari) ochiq matn ko'rinishida ketadi! Wi-Fi tarmog'idagi istalgan xaker bu ma'lumotlarni o'g'irlashi mumkin.

HTTPS (HTTP Secure) — bu SSL/TLS protokoli yordamida ma'lumotlarni kuchli kriptografik usulda shifrlab uzatish tizimidir:
- Maxfiylik (Privacy) — ma'lumotni faqat siz va server o'qiy oladi.
- Butunlik (Integrity) — yo'lda hech kim ma'lumotni o'zgartira olmaydi.
- Autentifikatsiya (Authentication) — siz aynan haqiqiy bank saytida ekanligingizni, qalbaki klonda emasligingizni tasdiqlaydi.

Let's Encrypt — butun dunyo bo'ylab har qanday veb-sayt uchun 100% bepul, avtomatlashtirilgan SSL sertifikatlarini taqdim etuvchi xalqaro tashkilotdir.`,
        realWorldExample: `HTTP — bu ochiq otkritkaga xat yozib pochta orqali yuborishga o'xshaydi: pochtachi ham, qo'shni ham xatni bemalol o'qiy oladi. HTTPS esa — xatni ochib bo'lmas po'lat seyfga solib, faqat oluvchiga kalitini berish demakdir.`,
        practicalTask: `Brauzeringizda sayt URL manzilining chap tomonidagi qulf belgisini bosing va uning xavfsizlik sertifikatini tekshiring.`,
        codeExample: {
          language: 'bash',
          code: `# Ubuntu serverda bepul Let's Encrypt SSL sertifikatini o'rnatish (Certbot)
sudo apt install certbot python3-certbot-nginx

# Nginx uchun avtomatik sertifikat olish va ulash
sudo certbot --nginx -d itlab11.uz -d www.itlab11.uz

# Sertifikatning avtomatik yangilanishini sinab ko'rish
sudo certbot renew --dry-run`,
          explanation: 'Certbot 90 kunlik bepul sertifikat beradi va muddati tugashidan oldin uni o\'zi avtomatik yangilab turadi.'
        },
        quiz: [
          {
            id: "m3l6-q1",
            question: "HTTPS protokolining an'anaviy ochiq HTTP dan eng asosiy xavfsizlik ustunligi nimada?",
            options: [
              "HTTPS protokoli orqali barcha jo'natilgan ma'lumotlar SSL/TLS orqali to'liq shifrlanadi",
              "HTTPS protokoli faqat kichik ekranli mobil telefonlarda ishlash uchun mo'ljallangan",
              "HTTPS protokoli internet sarfini 50 foizga kamaytirib, saytni tezroq yuklaydi",
              "HTTPS protokoli va oddiy HTTP protokoli o'rtasida hech qanday xavfsizlik farqi yo'q"
            ],
            correctAnswer: 0,
            explanation: "HTTPS ma'lumotlarni tranzit vaqtida shifrlab, oraliqdagi vositachilar uni o'g'irlashini oldini oladi."
          },
          {
            id: "m3l6-q2",
            question: "Butun dunyo bo'ylab bepul va avtomatik SSL/TLS sertifikatlarini taqdim etuvchi eng mashhur tashkilot qaysi?",
            options: [
              "Microsoft Azure Store",
              "Google Play Market",
              "Wikipedia Foundation",
              "Let's Encrypt xizmati"
            ],
            correctAnswer: 3,
            explanation: "Let's Encrypt ochiq va bepul SSL sertifikatlari berib, butun internetni HTTPS ga o'tkazishga hissa qo'shgan."
          },
          {
            id: "m3l6-q3",
            question: "HTTPS standarti bo'yicha xavfsiz shifrlangan veb-trafik odatda qaysi standart port orqali qabul qilinadi?",
            options: [
              "80-port (HTTP)",
              "443-port (HTTPS)",
              "21-port (FTP)",
              "25-port (SMTP)"
            ],
            correctAnswer: 1,
            explanation: "Standart veb-trafikda HTTP 80-portdan, xavfsiz HTTPS esa 443-portdan foydalanadi."
          }
        ],
        summary: 'Bugungi kunda SSL/HTTPS ixtiyoriy emas, balki qat\'iy majburiydir. Busiz Google Chrome saytingizni "Xavfli sayt" deb belgilaydi.'
      }
    },
    {
      id: 'm3-l7',
      moduleId: 'module-3',
      title: 'Cloud Security',
      description: 'Bulutdagi xavfsizlik: DDoS hujumlaridan himoyalanish, Cloudflare, Web Application Firewall (WAF) va shifrlash.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 7,
      icon: 'ShieldAlert',
      content: {
        theory: `Bulutga joylashtirilgan har qanday ochiq veb-sayt har kuni minglab botlar va zararli hujumlarga duch keladi.

Keng tarqalgan bulut xatarlari:
1. DDoS hujumlari (Distributed Denial of Service) — millionlab botlar orqali saytga bir vaqtda soxta so'rovlar yuborib, serverni qotirib qo'yish (crash).
2. SQL Injection va XSS — foydalanuvchi kiritish maydonchalari orqali bazaga zararli kod yuborish.
3. Ochiq portlar va xato konfiguratsiya — serverda kerak bo'lmagan portlarning internetga ochiq qolishi.

Cloudflare va WAF (Web Application Firewall):
Sayt oldiga qalqon (Shield) bo'lib turuvchi maxsus xizmat. U kelayotgan har bir tashrif buyuruvchini tekshiradi: agar u haqiqiy inson bo'lsa saytga kiritadi, zararli bot bo'lsa zudlik bilan bloklaydi.`,
        realWorldExample: `WAF ni aeroportdagi metall detektor va pasport nazoratiga qiyoslash mumkin: samolyotga (serverga) faqat xavfsiz, tekshirilgan yo'lovchilar o'tkaziladi, xavfli buyumlar eshik oldidayoq musodara qilinadi.`,
        practicalTask: `Cloudflare bepul tarifida DDoS himoyasi va botlarni filtrlash qoidalarini (Security Rules) qanday yoqishni o'rganing.`,
        codeExample: {
          language: 'markdown',
          code: `# Bulut Xavfsizligining Oltin Qoidalari:

1. Barcha portlarni yoping (Faqat 80 va 443 ochiq bo'lsin).
2. SSH (22-port) faqat maxsus oq ro'yxatdagi (Whitelist) IP larga ruxsat berilsin.
3. Doimo Cloudflare yoki AWS CloudFront orqali DDoS himoyasini yoqing.
4. Foydalanuvchi parollarini hech qachon ochiq saqlamang — doimo bcrypt/argon2 bilan hashlang!
5. Barcha kiruvchi so'rovlarni (input validation) tekshiring.`,
          explanation: 'Xavfsizlik dastur qurib bo\'lingandan keyin emas, eng boshidanoq rejalashtirilishi shart.'
        },
        quiz: [
          {
            id: "m3l7-q1",
            question: "DDoS (Taqsimlangan xizmat ko'rsatishni rad etish) kiberhujumining asosiy niyati nima?",
            options: [
              "Foydalanuvchilarning shaxsiy hisob raqamlariga bepul reklama kuponlarini tarqatib berish",
              "Sayt ma'lumotlar bazasidagi barcha maxfiy parollarni va jadvallarni bittama-bitta o'chirish",
              "Serverni millionlab soxta so'rovlar bilan to'ldirib, uni ishlamay qolish holatiga olib kelish",
              "Lokal kompyuter xotirasiga antivirus dasturlarining so'nggi versiyalarini o'rnatib berish"
            ],
            correctAnswer: 2,
            explanation: "DDoS server resurslarini soxta bot trafigi bilan haddan tashqari to'ldirib, haqiqiy foydalanuvchilarni to'sadi."
          },
          {
            id: "m3l7-q2",
            question: "WAF (Web Application Firewall) tizimi veb-ilovani qanday xavflardan himoya qiladi?",
            options: [
              "Elektr energiyasining to'satdan o'chib qolishidan va kabel sinishidan",
              "Dasturchi kompyuteri monitorining tasodifiy qorayib qolish xavfidan",
              "Foydalanuvchilarning internet tezligi sekinlashib qolishidan",
              "Veb-ilovaga qaratilgan zararli so'rovlar, SQL injection va zararli botlardan"
            ],
            correctAnswer: 3,
            explanation: "WAF HTTP so'rovlarni tahlil qilib, SQLi, XSS va zararli botlarni serverga yetmasidan bloklaydi."
          },
          {
            id: "m3l7-q3",
            question: "Foydalanuvchilarning maxfiy parollarini ma'lumotlar bazasida saqlashning eng xavfsiz standarti qaysi?",
            options: [
              "Ochiq matn (Plaintext) ko'rinishida oddiy jadvalda saqlash",
              "Skrinshot qilib fayllar serveriga rasm sifatida joylashtirish",
              "Excel jadvalida barcha xodimlar ko'rishi uchun ochiq saqlash",
              "Bir tomonlama kriptografik hash (masalan: bcrypt yoki argon2) ko'rinishida"
            ],
            correctAnswer: 3,
            explanation: "Parollar hech qachon ochiq saqlanmaydi, faqat qaytarib bo'lmaydigan kriptografik hash holida saqlanadi."
          }
        ],
        summary: 'Xavfsiz tizim — bu mijozlar ishonchi garovidir. Bulut xavfsizligi bo\'yicha mutaxassislar bugungi kunda eng yuqori maosh oluvchi IT mutaxassislari hisoblanadi.'
      }
    },
    {
      id: 'm3-l8',
      moduleId: 'module-3',
      title: 'Access Control va xavfsizlik',
      description: 'Kimga nima ruxsat berilgan? RBAC (Role-Based Access Control), JWT tokenlar va MFA (ikki bosqichli tasdiqlash).',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 8,
      icon: 'UserCheck',
      content: {
        theory: `Xavfsizlikning ikkita egizak tushunchasi mavjud:
1. Autentifikatsiya (Authentication — AuthN) — "Siz kimsiz?" (Login va parol, SMS kod orqali shaxsni aniqlash).
2. Avtorizatsiya (Authorization — AuthZ) — "Sizga nima qilishga ruxsat bor?" (Oddiy o'quvchi faqat darslarni ko'ra oladi, o'qituvchi yangi dars yarata oladi, admin esa tizimni o'chirishi mumkin).

RBAC (Role-Based Access Control) — huquqlarni rollar bo'yicha taqsimlash:
- Guest (Mehmon) -> Student (O'quvchi) -> Teacher (O'qituvchi) -> Admin.

JWT (JSON Web Token) — zamonaviy veb va mobil ilovalarda foydalanuvchining autentifikatsiya holatini saqlash uchun raqamli imzolangan ixcham token.

MFA (Multi-Factor Authentication) — hisobni 99.9% xakerlikdan asrovchi 2 bosqichli tasdiqlash (Parol + Google Authenticator kodi).`,
        realWorldExample: `Maktabga kirishda qorovul sizning o'quvchilik guvohnomangizni tekshiradi (Autentifikatsiya). Ammo siz direktor xonasidagi seyfni ocholmaysiz, chunki sizda faqat "O'quvchi" roli bor, "Direktor" roli yo'q (Avtorizatsiya).`,
        practicalTask: `Node.js da sodda RBAC middleware yozing: agar foydalanuvchi roli 'admin' bo'lmasa, 403 Forbidden xatoligini qaytarsin.`,
        codeExample: {
          language: 'javascript',
          code: `// Express.js da RBAC Middleware namunasi
function requireRole(allowedRole) {
  return (req, res, next) => {
    // req.user JWT tokenidan olingan foydalanuvchi ma'lumoti
    if (!req.user || req.user.role !== allowedRole) {
      return res.status(403).json({
        error: "Ruxsat berilmadi: Sizda ushbu amalni bajarish huquqi yo'q!"
      });
    }
    next(); // Huquq bor, keyingi funksiyaga ruxsat
  };
}

// Qo'llash:
app.post('/api/lessons/create', requireRole('teacher'), createLesson);`,
          explanation: 'Rollar orqali ruxsatlarni ajratish ma\'lumotlarning ruxsatsiz o\'zgarishini qat\'iy to\'xtatadi.'
        },
        quiz: [
          {
            id: "m3l8-q1",
            question: "Autentifikatsiya (Authentication) va Avtorizatsiya (Authorization) o'rtasidagi mantiqiy farq nima?",
            options: [
              "Autentifikatsiya — shaxsni aniqlash (\"Siz kimsiz?\"), Avtorizatsiya — huquqlarni tekshirish (\"Nima qila olasiz?\")",
              "Ikkalasi aynan bir xil ma'noni anglatuvchi texnik terminlar bo'lib, bir-birining o'rniga ishlatiladi",
              "Autentifikatsiya faqat bankomatlarda, Avtorizatsiya esa faqat mobil telefonlarda qo'llaniladi",
              "Autentifikatsiya parollarni tiklash jarayoni, Avtorizatsiya esa internet tezligini o'lchash tizimidir"
            ],
            correctAnswer: 0,
            explanation: "Autentifikatsiya kimligingizni tasdiqlaydi, avtorizatsiya esa sizga berilgan ruxsatlarni tekshiradi."
          },
          {
            id: "m3l8-q2",
            question: "Zamonaviy JWT (JSON Web Token) tuzilmasi qaysi 3 ta asosiy qismdan tashkil topgan?",
            options: [
              "HTML sahifasi, CSS stillar kaskadi va JavaScript skriptlari bloklaridan",
              "Foydalanuvchi logini, maxfiy paroli va SMS tasdiqlash kodlari blokidan",
              "Header (Sarlavha), Payload (Ma'lumot) va Signature (Raqamli imzo) dan",
              "Tizim protsessori, operativ xotira sarfi va qattiq disk jildlaridan"
            ],
            correctAnswer: 2,
            explanation: "JWT uch qismdan iborat bo'lib, nuqta bilan ajratiladi: header.payload.signature."
          },
          {
            id: "m3l8-q3",
            question: "Ikki bosqichli tasdiqlash (2FA/MFA) tizimi hisob xavfsizligini qanday mustahkamlaydi?",
            options: [
              "Foydalanuvchining internet provayderi orqali ulanish tezligini 2 barobarga oshirish orqali",
              "Parol fosh bo'lganda ham ikkinchi dinamik kodsiz hisobga kirishni to'liq bloklash orqali",
              "Sayt dizaynining ranglari va fon rasmlarini foydalanuvchi didiga moslab chiroyli qilish orqali",
              "Kompyuterga yangi dasturiy ta'minotlarni o'rnatish jarayonini bir necha soniyada bajarish orqali"
            ],
            correctAnswer: 1,
            explanation: "2FA tizimida parolni bilgan odam ham telefoningizdagi ikkinchi kodsiz hisobingizga kira olmaydi."
          }
        ],
        summary: 'To\'g\'ri sozlangan Access Control tizimi sizning loyihangizni ichki va tashqi xavflardan ishonchli himoya qiladi.'
      }
    }
  ]
};

