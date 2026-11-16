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
            id: 'm3l1-q1',
            question: 'IT sohasida "Production" muhiti nimani anglatadi?',
            options: [
              'Dasturchining uyidagi noutbuki',
              'Haqiqiy foydalanuvchilar tashrif buyuradigan jonli, asosiy tizim',
              'Qoralama matn yozilgan daftar',
              'O\'chirilgan kompyuter'
            ],
            correctAnswer: 1,
            explanation: 'Production (Prod) — foydalanuvchilar real xizmat ko\'rsatiladigan eng mas\'uliyatli server muhiti.'
          },
          {
            id: 'm3l1-q2',
            question: 'Nega "localhost:3000" manzilini do\'stingiz o\'z telefonida ocholmaydi?',
            options: [
              'Chunki do\'stingiz internetga ulanmagan',
              'Chunki localhost faqat sizning shaxsiy kompyuteringizning ichki manzilidir',
              'Chunki telefonlarda dasturlash mumkin emas',
              'Chunki 3000 raqami taqiqlangan'
            ],
            correctAnswer: 1,
            explanation: 'Localhost (127.0.0.1) faqat joriy qurilmaning ichki aylanma tarmoq interfeysiga ishora qiladi.'
          },
          {
            id: 'm3l1-q3',
            question: 'Zamonaviy Git-based deployment platformalarining afzalligi nima?',
            options: [
              'Faqat Windows da ishlaydi',
              'Kodni Git ga push qilish bilan avtomatik tarzda yangi versiya serverga joylanadi',
              'Pullik va juda sekin',
              'Dasturchiga kerak emas'
            ],
            correctAnswer: 1,
            explanation: 'Avtomatlashtirilgan deploy har safar kod o\'zgarganda serverni bir necha soniyada yangilaydi.'
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
            id: 'm3l2-q1',
            question: '.env faylini GitHub repozitoriyiga yuklash nima uchun qat\'iyan taqiqlanadi?',
            options: [
              'Chunki GitHub faqat rasm fayllarni qabul qiladi',
              'Chunki .env ichidagi maxfiy parollar va tokenlar ommaga fosh bo\'lib, xakerlar hujumiga sabab bo\'ladi',
              'Fayl hajmi juda katta bo\'lgani uchun',
              'Hech qanday zarari yo\'q'
            ],
            correctAnswer: 1,
            explanation: 'Maxfiy kalitlar ochiq repozitoriyga tushishi zudlik bilan xavfsizlik fojiasiga olib keladi.'
          },
          {
            id: 'm3l2-q2',
            question: 'Keraksiz yoki maxfiy fayllarni Git e\'tiboridan chetda qoldirish uchun qaysi fayl xizmat qiladi?',
            options: ['.gitsettings', '.gitignore', 'secrets.txt', 'config.json'],
            correctAnswer: 1,
            explanation: '.gitignore faylida ko\'rsatilgan barcha fayl va jildlar Git tomonidan butunlay e\'tiborsiz qoldiriladi.'
          },
          {
            id: 'm3l2-q3',
            question: 'Node.js da muhit o\'zgaruvchilariga qanday murojaat qilinadi?',
            options: ['window.env.NAME', 'process.env.NAME', 'system.get("NAME")', 'global.env.NAME'],
            correctAnswer: 1,
            explanation: 'Node.js global "process.env" obyekti orqali tizim o\'zgaruvchilarini taqdim etadi.'
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
            id: 'm3l3-q1',
            question: 'Bulutli hisoblashning (Cloud Computing) eng asosiy iqtisodiy afzalligi nima?',
            options: [
              'Qimmatbaho server xonalarini qurmasdan, faqat ishlatilgan resurs uchun to\'lash (Pay-as-you-go)',
              'Faqat bepul xizmat ko\'rsatishi',
              'Internet bo\'lmasa ham ishlashi',
              'O\'yinlarni bepul yuklab berishi'
            ],
            correctAnswer: 0,
            explanation: 'Bulut qimmat boshlang\'ich xarajatlarni yo\'qotib, resurslarni egiluvchan ijaraga beradi.'
          },
          {
            id: 'm3l3-q2',
            question: 'Quyidagilardan qaysi biri dunyodagi eng yirik bulut provayderi hisoblanadi?',
            options: ['Telegram', 'AWS (Amazon Web Services)', 'Twitter', 'Photoshop'],
            correctAnswer: 1,
            explanation: 'AWS dunyodagi eng birinchi va bugungi kungacha eng yirik bulut platformasidir.'
          },
          {
            id: 'm3l3-q3',
            question: 'SaaS (Software as a Service) modeliga qaysi biri misol bo\'la oladi?',
            options: ['Figma yoki Google Docs', 'Ubuntu o\'rnatilgan bo\'sh disk', 'Tarmoq kabeli', 'Protsessor'],
            correctAnswer: 0,
            explanation: 'Figma va Google Docs brauzer orqali to\'g\'ridan-to\'g\'ri ishlatiladigan tayyor dasturlardir (SaaS).'
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
            id: 'm3l4-q1',
            question: 'AWS S3 xizmatining asosiy vazifasi nima?',
            options: [
              'Kodni kompilatsiya qilish',
              'Fayllarni (rasm, video, hujjat) bulutda ishonchli va cheksiz miqdorda saqlash',
              'Domen nomlarini sotish',
              'Kompyuterni sovutish'
            ],
            correctAnswer: 1,
            explanation: 'S3 — dunyodagi eng yirik va ishonchli obyektli fayllar saqlash xizmati (Object Storage).'
          },
          {
            id: 'm3l4-q2',
            question: 'AWS EC2 nima?',
            options: [
              'Elektron pochtalar ro\'yxati',
              'Bulutdagi virtual hisoblash serveri (Virtual Machine)',
              'Faqat ma\'lumotlar bazasi',
              'Antivirus dasturi'
            ],
            correctAnswer: 1,
            explanation: 'EC2 (Elastic Compute Cloud) — talabga ko\'ra ochiladigan virtual serverlar.'
          },
          {
            id: 'm3l4-q3',
            question: 'AWS IAM qoidalarida "Least Privilege" tamoyili nimani anglatadi?',
            options: [
              'Hamma xodimlarga eng yuqori Admin huquqini berish',
              'Foydalanuvchi yoki dasturga faqat o\'z ishini bajarishi uchun yetarli bo\'lgan eng minimal ruxsatlarni berish',
              'Hech kimga umuman tizimga kirishga ruxsat bermaslik',
              'Parollarni har soatda o\'zgartirish'
            ],
            correctAnswer: 1,
            explanation: 'Minimal huquq tamoyili tizim buzilganda ham yetkazilishi mumkin bo\'lgan zararni keskin kamaytiradi.'
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
            id: 'm3l5-q1',
            question: 'DNS tizimining asosiy vazifasi nima?',
            options: [
              'Foydalanuvchilarga kino ko\'rsatish',
              'Sayt domen nomlarini (masalan, itlab11.uz) serverning raqamli IP manziliga o\'girib berish',
              'Kompyuterni elektr bilan ta\'minlash',
              'Spam xatlarni tozalash'
            ],
            correctAnswer: 1,
            explanation: 'DNS internetning telefon kitobi kabi nomlarni raqamli IP manzillarga bog\'laydi.'
          },
          {
            id: 'm3l5-q2',
            question: 'Domen nomini aniq IPv4 manzilga bog\'lovchi DNS yozuvi qaysi?',
            options: ['CNAME', 'MX', 'A Record', 'TXT'],
            correctAnswer: 2,
            explanation: '\'A\' (Address) yozuvi domenni to\'g\'ridan-to\'g\'ri serverning IPv4 manziliga yo\'naltiradi.'
          },
          {
            id: 'm3l5-q3',
            question: 'Bitta domenni ikkinchi domen nomiga yo\'naltiruvchi (alias) DNS yozuvi nima deb ataladi?',
            options: ['CNAME', 'A', 'PTR', 'NS'],
            correctAnswer: 0,
            explanation: 'CNAME (Canonical Name) boshqa domen nomiga taxallus sifatida xizmat qiladi.'
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
            id: 'm3l6-q1',
            question: 'HTTPS protokolining oddiy HTTP dan asosiy farqi nima?',
            options: [
              'HTTPS da barcha ma\'lumotlar SSL/TLS orqali to\'liq shifrlanadi',
              'HTTPS faqat telefonlarda ishlaydi',
              'HTTPS saytni sekinlashtiradi',
              'Hech qanday farqi yo\'q'
            ],
            correctAnswer: 0,
            explanation: 'HTTPS uzatilayotgan barcha ma\'lumotlarni shifrlab, xakerlar tutib olishining oldini oladi.'
          },
          {
            id: 'm3l6-q2',
            question: 'Butun dunyoga bepul SSL sertifikatlari beruvchi eng mashhur xizmat qaysi?',
            options: ['Let\'s Encrypt', 'Google Play', 'Wikipedia', 'Microsoft Store'],
            correctAnswer: 0,
            explanation: 'Let\'s Encrypt ochiq va bepul SSL/TLS sertifikatlarini taqdim etuvchi notijorat markazdir.'
          },
          {
            id: 'm3l6-q3',
            question: 'HTTPS standarti bo\'yicha xavfsiz ulanish qaysi port orqali amalga oshiriladi?',
            options: ['80', '21', '443', '25'],
            correctAnswer: 2,
            explanation: 'Oddiy HTTP 80-portda, xavfsiz shifrlangan HTTPS esa 443-portda ishlaydi.'
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
            id: 'm3l7-q1',
            question: 'DDoS hujumining asosiy maqsadi nima?',
            options: [
              'Sayt parolini o\'zgartirish',
              'Serverni millionlab soxta so\'rovlar bilan to\'ldirib, uni ishlamay qolish holatiga (qotishga) olib kelish',
              'Foydalanuvchilarga bepul pul tarqatish',
              'Kompyuterga yangi o\'yin o\'rnatish'
            ],
            correctAnswer: 1,
            explanation: 'DDoS server resurslarini to\'liq tugatib, oddiy odamlarga xizmat ko\'rsatishni to\'xtatib qo\'yishga qaratilgan.'
          },
          {
            id: 'm3l7-q2',
            question: 'WAF (Web Application Firewall) nimadan himoya qiladi?',
            options: [
              'Elektr tarmog\'i uzilishidan',
              'Veb-ilovaga qaratilgan zararli so\'rovlar, SQL injection va botlardan',
              'Kompyuter monitorining sinishidan',
              'Hech narsadan'
            ],
            correctAnswer: 1,
            explanation: 'WAF HTTP/HTTPS so\'rovlaridagi zararli trafikni filtrlash uchun filtr vazifasini bajaradi.'
          },
          {
            id: 'm3l7-q3',
            question: 'Foydalanuvchi parollarini bazada qanday saqlash eng xavfsiz?',
            options: [
              'Ochiq matn ko\'rinishida',
              'Kriptografik hash (masalan: bcrypt yoki argon2) ko\'rinishida',
              'Excel jadvalida',
              'Skrinshot qilib'
            ],
            correctAnswer: 1,
            explanation: 'Hashlangan parollarni orqaga qaytarib bo\'lmaydi, shuning uchun hatto baza o\'g\'irlansa ham parollar oshkor bo\'lmaydi.'
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
            id: 'm3l8-q1',
            question: 'Autentifikatsiya va Avtorizatsiya o\'rtasidagi farq nima?',
            options: [
              'Ikkalasi bir xil so\'z',
              'Autentifikatsiya — shaxsni aniqlash ("Siz kimsiz?"), Avtorizatsiya — huquqlarni tekshirish ("Sizga nima ruxsat etilgan?")',
              'Autentifikatsiya faqat banklarda ishlatiladi',
              'Avtorizatsiya faqat Wi-Fi ga ulanishda kerak'
            ],
            correctAnswer: 1,
            explanation: 'AuthN — kimligingizni isbotlash, AuthZ — ruxsat etilgan amallar chegarasini belgilash.'
          },
          {
            id: 'm3l8-q2',
            question: 'JWT (JSON Web Token) qanday qismlardan iborat?',
            options: [
              'Faqat matn',
              '3 qismdan: Header (Sarlavha), Payload (Ma\'lumotlar) va Signature (Raqamli imzo)',
              'Faqat raqamlar',
              '4 ta fayldan'
            ],
            correctAnswer: 1,
            explanation: 'JWT nuqta bilan ajratilgan 3 qismdan: header.payload.signature dan iborat bo\'ladi.'
          },
          {
            id: 'm3l8-q3',
            question: 'Ikki bosqichli tasdiqlash (2FA/MFA) hisob xavfsizligini qanday oshiradi?',
            options: [
              'Parol oshkor bo\'lib qolganda ham ikkinchi dinamik kodsiz hisobga kirishning oldini oladi',
              'Saytni tezroq yuklaydi',
              'Parolni eslab qolishni osonlashtiradi',
              'Internet tezligini oshiradi'
            ],
            correctAnswer: 0,
            explanation: '2FA paroldan tashqari telefoningizdagi ikkinchi tasdiqlash faktorini talab qilib, buzib kirishni deyarli imkonsiz qiladi.'
          }
        ],
        summary: 'To\'g\'ri sozlangan Access Control tizimi sizning loyihangizni ichki va tashqi xavflardan ishonchli himoya qiladi.'
      }
    }
  ]
};

