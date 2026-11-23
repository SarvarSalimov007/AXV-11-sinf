import { Module } from '../types';

export const module1: Module = {
  id: 'module-1',
  title: 'Dasturiy ta\'minot ishlab chiqish asoslari',
  description: 'Zamonaviy dasturiy ta\'minot ishlab chiqishning to\'liq hayotiy sikli (SDLC), Git va GitHub, toza kod tamoyillari, arxitektura andozalari hamda professional jamoada ishlash madaniyatini amaliy o\'rganamiz.',
  icon: 'Code2',
  color: 'blue',
  gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
  project: {
    title: 'Shaxsiy Portfolio Website',
    description: 'HTML5, CSS3, zamonaviy JavaScript va Git yordamida o\'zingizning shaxsiy portfolio veb-saytingizni yarating va GitHub Pages orqali butun dunyoga taqdim eting.',
    tasks: [
      'Loyihaning arxitekturasi va dizayn maketini ishlab chiqish',
      'Git repozitoriy yaratish va semantic commitlar bilan boshqarish',
      'Semantik HTML5 va responsive CSS (Flexbox/Grid) tuzilmasi',
      'Interaktiv JavaScript elementlari (tema almashish, portfolio filter, modal)',
      'Clean Code va DRY tamoyillariga rioya qilgan holda refactoring',
      'GitHub Pages orqali bepul jonli serverga joylashtirish (deploy)'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'GitHub Pages'],
    criteria: [
      'Barcha ekran o\'lchamlari (mobil, planshet, desktop) uchun to\'liq responsive bo\'lishi',
      'Kamida 10 ta ma\'noli Git commitlar va alohida feature-branch ishlatilgani',
      'Interaktiv loyihalar katalogi va ishlaydigan bog\'lanish formasi',
      'W3C validatsiyasidan o\'tgan toza semantik kod'
    ]
  },
  lessons: [
    {
      id: 'm1-l1',
      moduleId: 'module-1',
      title: 'Axborot texnologiyalari ekotizimi va SDLC',
      description: 'Dasturiy ta\'minot qanday yaratiladi? Talablarni yig\'ishdan tortib mahsulotni qo\'llab-quvvatlashgacha bo\'lgan 6 bosqich.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 1,
      icon: 'Layers',
      content: {
        theory: `Dasturiy ta'minotni ishlab chiqish hayotiy sikli (Software Development Life Cycle — SDLC) — bu yuqori sifatli va xatosiz dasturiy mahsulotlar yaratish uchun foydalaniladigan tizimli jarayon.

SDLC odatda 6 ta asosiy bosqichdan iborat:
1. Rejalashtirish va tahlil (Requirements Analysis) — mijozning ehtiyojlari va loyiha maqsadlari aniqlanadi.
2. Arxitektura va dizayn (System Design) — ma'lumotlar bazasi, tizim arxitekturasi va UI/UX interfeysi loyihalanadi.
3. Dasturlash (Implementation / Coding) — dasturchilar tasdiqlangan talablar asosida kod yozadilar.
4. Testlash (Testing & QA) — funksionallik, xavfsizlik va tezkorlik bo'yicha xatolar (buglar) tekshiriladi.
5. Joylashtirish (Deployment) — dastur foydalanuvchilar kirishi uchun jonli serverlarga chiqariladi.
6. Qo'llab-quvvatlash (Maintenance) — yangi yangilanishlar kiritiladi va yuzaga kelgan nosozliklar bartaraf etiladi.`,
        realWorldExample: `SDLC ni ko'p qavatli bino qurilishiga qiyoslash mumkin: avval ruxsatnomalar va talablar o'rganiladi, keyin muhandislar chizma chizishadi, poydevor quyilib g'isht teriladi, xavfsizlik inspeksiyasi tekshiradi va nihoyat xonadon egalariga kalit topshiriladi. To'g'ridan-to'g'ri chizmasiz g'isht terish fojia keltirib chiqargani kabi, rejasisiz yozilgan kod ham qulaydi.`,
        practicalTask: `Maktab o'quvchilari uchun kundalik baholarni ko'rish ilovasining SDLC rejasini tuzing: har bir bosqichda kim nima ish bajarishini 1 tadan gap bilan yozib chiqing.`,
        codeExample: {
          language: 'markdown',
          code: `# Maktab Baho Tizimi — SDLC Rejasi
1. Tahlil: O'quvchi va ota-onalar baholarni telefonida ko'rishni xohlaydi.
2. Dizayn: Figma'da sodda 3 ta ekran: Kirish, Baholar ro'yxati, Dars jadvali.
3. Dasturlash: Frontend (React) va Backend (Node.js/Express) dasturlash.
4. Testlash: 10 nafar o'quvchi bilan test sinovi, xatolarni to'g'rilash.
5. Deployment: AWS yoki Vercel bulutiga yuklash.
6. Qo'llab-quvvatlash: Har chorak yakunida yangi funksiyalar qo'shish.`,
          explanation: 'Haqiqiy IT loyihalari doimo ushbu tartibdagi texnik topshiriq (PRD) hujjatidan boshlanadi.'
        },
        quiz: [
          {
            id: "m1l1-q1",
            question: "SDLC ning to'g'ri bosqichlari ketma-ketligi qaysi javobda to'liq ko'rsatilgan?",
            options: [
              "Dasturlash -> Tahlil -> Dizayn -> Testlash -> Qo'llab-quvvatlash -> Deployment",
              "Dizayn -> Dasturlash -> Tahlil -> Deployment -> Testlash -> Qo'llab-quvvatlash",
              "Tahlil -> Dizayn -> Dasturlash -> Testlash -> Deployment -> Qo'llab-quvvatlash",
              "Deployment -> Testlash -> Dasturlash -> Dizayn -> Tahlil -> Qo'llab-quvvatlash"
            ],
            correctAnswer: 2,
            explanation: "Dasturiy ta'minot yaratish doimo chuqur tahlildan boshlanib, qo'llab-quvvatlash bilan yakunlanadi."
          },
          {
            id: "m1l1-q2",
            question: "QA (Quality Assurance) muhandisi SDLC ning qaysi bosqichida eng asosiy mas'ul hisoblanadi?",
            options: [
              "Dasturiy ta'minotni sinovdan o'tkazish (Testing)",
              "Grafik interfeys va vizual maketlar chizish (Design)",
              "Server infratuzilmasiga kodni joylashtirish (Deploy)",
              "Mijozdan boshlang'ich talablarni yig'ish (Analysis)"
            ],
            correctAnswer: 0,
            explanation: "QA mutaxassislari dasturning sifatini tekshirish va xatolarni aniqlash bosqichida bosh mas'uldir."
          },
          {
            id: "m1l1-q3",
            question: "SDLC metodologiyasi dasturiy ta'minot loyihalariga nima uchun joriy qilinadi?",
            options: [
              "Kodni faqat bir dasturchi yozishini ta'minlash va boshqarish uchun",
              "Dasturni internetga tezroq va hech qanday rejasiz yuklash uchun",
              "Loyihada faqat dizaynerlar mas'uliyatini oshirib borish uchun",
              "Loyihani sifatli, o'z vaqtida va belgilangan byudjetda yakunlash uchun"
            ],
            correctAnswer: 3,
            explanation: "SDLC loyiha xatolarini minimallashtiradi, byudjetni tejaydi va jamoa faoliyatini tartibga soladi."
          }
        ],
        summary: 'SDLC — har bir professional dasturchi bilishi shart bo\'lgan tizim. Dastur yozishdan oldin reja va dizayn, yozgandan keyin esa qat\'iy testlash bo\'lishi shart.'
      }
    },
    {
      id: 'm1-l2',
      moduleId: 'module-1',
      title: 'Git va GitHub asoslari',
      description: 'Versiyalarni boshqarish tizimi: git init, add, commit, status, log va GitHub masofaviy repozitoriylari bilan ishlash.',
      duration: '50 daqiqa',
      difficulty: 'boshlangich',
      order: 2,
      icon: 'GitBranch',
      content: {
        theory: `Git — bu dunyodagi eng mashhur taqsimlangan versiyalarni boshqarish tizimi (VCS). U sizning kodingizdagi har bir o'zgarishni vaqt bo'yicha suratga (snapshot/commit) olib boradi.

Asosiy tushunchalar:
- Repozitoriy (Repository) — loyihaning barcha fayllari va ularning tarixi saqlanadigan papka (.git).
- Working Directory — siz ayni paytda fayllarni tahrirlayotgan ishchi muhit.
- Staging Area (Index) — navbatdagi commitga tayyorlab qo'yilgan o'zgarishlar maydoni (\`git add\`).
- Commit — loyiha holatining muayyan vaqtdagi doimiy saqlangan nusxasi (\`git commit -m "xabar"\`).

GitHub esa Git repozitoriylarini bulutda saqlash, boshqa dasturchilar bilan hamkorlik qilish va kod almashish imkonini beruvchi eng yirik platformadir.`,
        realWorldExample: `Git bu — o'yindagi "Save Point" (saqlash nuqtasi) yoki Word hujjatidagi "Ctrl+Z" ning kuchaytirilgan varianti. Agar yangi yozgan kodingiz tufayli butun dastur buzilib ketsa, Git orqali istalgan avvalgi muvaffaqiyatli commitga 1 soniyada qaytishingiz mumkin.`,
        practicalTask: `O'z kompyuteringizda terminalni oching va shaxsiy birinchi Git repozitoriyingizni yarating hamda README.md faylini commit qiling.`,
        codeExample: {
          language: 'bash',
          code: `# 1. Yangi papka ochish va unga o'tish
mkdir mening-loyiham && cd mening-loyiham

# 2. Git repozitoriyni initsializatsiya qilish
git init

# 3. Fayl yaratish
echo "# Mening birinchi Git loyiham" > README.md

# 4. Faylni staging areaga qo'shish
git add README.md

# 5. Birinchi commitni amalga oshirish
git commit -m "feat: birinchi commit va README yaratildi"

# 6. Tarixni ko'rish
git log --oneline`,
          explanation: 'Har bir commit aniq va tushunarli xabar bilan ta\'minlanishi kerak (masalan, feat:, fix:, docs:).'
        },
        quiz: [
          {
            id: "m1l2-q1",
            question: "Yangi bo'sh Git repozitoriyni ishga tushiruvchi boshlang'ich buyruq qaysi?",
            options: [
              "git start --new",
              "git init",
              "git create-repo",
              "git setup ."
            ],
            correctAnswer: 1,
            explanation: "'git init' joriy jildda yangi yashirin .git papkasini yaratib, uni Git boshqaruviga oladi."
          },
          {
            id: "m1l2-q2",
            question: "Fayllardagi o'zgarishlarni navbatdagi commit ro'yxatiga (Staging) kiritish buyrug'i qaysi?",
            options: [
              "git push origin",
              "git commit -m",
              "git save --all",
              "git add ."
            ],
            correctAnswer: 3,
            explanation: "'git add <fayl>' yoki 'git add .' o'zgarishlarni navbatdagi commit tayyorgarlik zonasiga qo'shadi."
          },
          {
            id: "m1l2-q3",
            question: "Git va GitHub tizimlari o'rtasidagi tub printsipial farq nimada?",
            options: [
              "Git — lokal versiya nazoratchisi, GitHub esa repozitoriylarni saqlovchi bulutli platformadir",
              "Git faqat veb-saytda ishlaydi, GitHub esa faqat shaxsiy kompyuter xotirasida ishlaydi",
              "Git pullik tijoriy xizmat bo'lib, GitHub uning ochiq kodli bepul dasturiy analogidir",
              "Git faqat Linux operatsion tizimida, GitHub esa faqat Windows muhitida qo'llaniladi"
            ],
            correctAnswer: 0,
            explanation: "Git — bu lokal versiya boshqaruvchi dastur, GitHub esa masofaviy repozitoriylar veb-portalidir."
          }
        ],
        summary: 'Git va GitHub — dasturchining eng asosiy pasporti va ish quroli. Har bir o\'quvchi o\'z portfolio kodlarini GitHub orqali ko\'rsatadi.'
      }
    },
    {
      id: 'm1-l3',
      moduleId: 'module-1',
      title: 'Branching, Pull Request va Code Review',
      description: 'Tarmoqlanish strategiyalari, jamoaviy ishlash, Pull Request (PR) yuborish va kodni tekshirish madaniyati.',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 3,
      icon: 'GitPullRequest',
      content: {
        theory: `Haqiqiy jamoalarda o'nlab dasturchilar birdaniga bitta loyiha ustida ishlaydi. Hech qachon to'g'ridan-to'g'ri 'main' (asosiy) tarmoqqa kod yozilmaydi!

- Branch (Tarmoq) — asosiy kod bazasidan ajralib chiquvchi mustaqil ishchi yo'l. Masalan: \`feature/login-page\` yoki \`fix/navbar-bug\`.
- Pull Request (PR) — yangi tarmoqda bajarilgan o'zgarishlarni asosiy 'main' tarmoqqa qo'shish (merge) to'g'risidagi so'rov.
- Code Review — boshqa jamoa a'zosi yoki Senior dasturchi sizning kodingizni sinchkovlik bilan ko'rib chiqib, izohlar qoldirishi va tasdiqlashi (Approve).
- Merge Conflict — ikkita dasturchi bitta faylning bitta qatorini har xil o'zgartirganda yuzaga keladigan ziddiyat va uni hal qilish.`,
        realWorldExample: `Branching — gazeta tahririyatiga o'xshaydi. Jurnalist maqolani o'zining qoralamasida (branch) yozadi, bosh muharrirga (Code Review) taqdim etadi (PR). Muharrir xatolarni to'g'rilashni so'raydi va ma'qullagachgina maqola asosiy gazetaga (main) bosiladi.`,
        practicalTask: `Yangi branch yarating: 'feature/profile', unga bitta fayl qo'shib commit qiling va 'main' tarmog'iga qayting.`,
        codeExample: {
          language: 'bash',
          code: `# Yangi tarmoq yaratish va unga o'tish
git checkout -b feature/dark-mode

# O'zgarish kiritib commit qilish
echo "const theme = 'dark';" > theme.js
git add theme.js
git commit -m "feat: dark mode funksiyasi qo'shildi"

# Asosiy tarmoqqa qaytish
git checkout main

# Tarmoqni asosiy tarmoq bilan birlashtirish
git merge feature/dark-mode`,
          explanation: 'Zamonaviy git versiyalarida \'git switch -c <nom>\' buyrug\'i ham yangi tarmoq yaratishda keng qo\'llaniladi.'
        },
        quiz: [
          {
            id: "m1l3-q1",
            question: "Yangi tarmoq (branch) ochib, bir vaqtning o'zida unga o'tish uchun qaysi buyruq yoziladi?",
            options: [
              "git branch --switch <nom>",
              "git switch --create-only",
              "git checkout -b <nom>",
              "git merge --new-branch"
            ],
            correctAnswer: 2,
            explanation: "'git checkout -b <nom>' yoki 'git switch -c <nom>' yangi tarmoq ochib o'sha zahoti unga o'tkazadi."
          },
          {
            id: "m1l3-q2",
            question: "GitHub platformasida Pull Request (PR) ochishdan ko'zlangan asosiy maqsad nima?",
            options: [
              "O'zgarishlarni ko'rib chiqish (Code Review) va asosiy tarmoqqa xavfsiz qo'shish",
              "Loyiha repozitoriysidagi eski va keraksiz fayllarni butunlay o'chirib tashlash",
              "Barcha foydalanuvchilar kompyuteriga yangi versiya haqida reklama yuborish",
              "Loyiha kodini avtomatik tarzda boshqa dasturlash tiliga tarjima qilib berish"
            ],
            correctAnswer: 0,
            explanation: "Pull Request orqali jamoa a'zolari kodni tekshirishadi va sifat kafolatlangan holda merge qilinadi."
          },
          {
            id: "m1l3-q3",
            question: "Git da Merge Conflict (birlashtirish to'qnashuvi) qanday vaziyatda yuzaga keladi?",
            options: [
              "Loyiha hajmida belgilangan bepul fayl xotirasi to'lib qolganda",
              "Serverga yuklanayotgan paytda internet aloqasi kutilmaganda uzilganda",
              "Fayl nomida lotin alifbosidan tashqari maxsus belgilar ishlatilganda",
              "Ikkita tarmoqda ayni bir faylning bir xil qatorlari turlicha tahrirlanganda"
            ],
            correctAnswer: 3,
            explanation: "Git bir xil qatorlardagi ziddiyatli o'zgarishlarni avtomatik hal qila olmaganda konflikt hosil qiladi."
          }
        ],
        summary: 'Branching jamoada parallel ishlash imkonini beradi. Har bir yangi vazifa uchun alohida tarmoq ochish — oltin qoidadir.'
      }
    },
    {
      id: 'm1-l4',
      moduleId: 'module-1',
      title: 'Clean Code va SOLID tamoyillari',
      description: 'O\'qilishi oson, o\'zgarishlarga moslashuvchan va professional kod yozish madaniyati. SOLID qoidalari.',
      duration: '55 daqiqa',
      difficulty: 'yuqori',
      order: 4,
      icon: 'CheckCircle',
      content: {
        theory: `Clean Code (Toza kod) — bu har qanday boshqa dasturchi qiynalmasdan o'qiy oladigan, tushunadigan va oson kengaytira oladigan koddir. "Kodni yozishga 1 soat vaqt sarflansa, uni o'qishga 10 soat sarflanadi."

SOLID — Obyektga Yo'naltirilgan Dasturlash (OOP) dagi 5 ta muhim tamoyil:
- S (Single Responsibility): Har bir sinf/funksiya faqat BARCHA emas, bitta aniq vazifaga javobgar bo'lishi kerak.
- O (Open/Closed): Dasturiy birliklar kengayish uchun ochiq, ammo o'zgartirish uchun yopiq bo'lishi kerak.
- L (Liskov Substitution): Voris sinflar asosiy sinf o'rnini xatolarsiz bosa olishi kerak.
- I (Interface Segregation): Katta va hamma narsani o'z ichiga olgan interfeyslardan ko'ra, kichik va maqsadli interfeyslar afzal.
- D (Dependency Inversion): Yuqori darajadagi modullar quyi darajadagi modullarga to'g'ridan-to'g'ri bog'liq bo'lmasligi, abstraksiyalarga tayanishi kerak.`,
        realWorldExample: `Shveysariya armiya pichog'i (hamma narsasi bor) qulay ko'rinsa-da, professional oshpaz oshxonada go'sht uchun alohida, sabzavot uchun alohida ixtisoslashgan pichoq ishlatadi (Single Responsibility). Agar bitta asbob hamma ishni qilsa, uning bitta qismi sinsa, butun asbob ishdan chiqadi.`,
        practicalTask: `Quyidagi "yomon" funksiyani Clean Code qoidasiga ko'ra ikkita kichik, bitta vazifani bajaruvchi toza funksiyaga ajrating.`,
        codeExample: {
          language: 'typescript',
          code: `// YOMON AMALIYOT (Single Responsibility buzilgan):
function registerUserAndSendEmail(userData: any) {
  // Foydalanuvchini bazaga saqlash
  db.users.insert(userData);
  // Email xabari yuborish
  smtp.send({ to: userData.email, text: "Xush kelibsiz!" });
}

// TOZA VA TO'G'RI KOD (SOLID: S prinsipi):
class UserService {
  createUser(userData: User): User {
    return db.users.insert(userData);
  }
}

class EmailNotificationService {
  sendWelcomeEmail(email: string): void {
    smtp.send({ to: email, text: "Xush kelibsiz!" });
  }
}`,
          explanation: 'Endi agar email provayderi o\'zgarsa, foydalanuvchi yaratish mantiqiga tegilmaydi.'
        },
        quiz: [
          {
            id: "m1l4-q1",
            question: "SOLID tamoyillaridagi \"S\" (Single Responsibility) harfi nimani talab qiladi?",
            options: [
              "Barcha ma'lumotlar bazasi so'rovlarini bitta katta faylda birlashtirishni",
              "Har bir sinf yoki modul faqat bitta yagona vazifaga javobgar bo'lishini",
              "Dasturning tezligini oshirish uchun barcha xavfsizlik tekshiruvlarini o'chirishni",
              "Har bir dasturchi faqat o'zi yozgan kodini tushunadigan uslubda yozishini"
            ],
            correctAnswer: 1,
            explanation: "Single Responsibility Principle — har bir sinf faqat bitta o'zgarish sababiga ega bo'lishi shart."
          },
          {
            id: "m1l4-q2",
            question: "Clean Code talablariga muvofiq o'zgaruvchilarni nomlashda qaysi qoidaga amal qilinadi?",
            options: [
              "O'zgaruvchilarni har doim 1 ta tasodifiy harf bilan belgilash (masalan: a, b, c)",
              "Faqat tizim buyruqlari nomlari bilan bir xil so'zlarni tanlash (masalan: var, let)",
              "O'z vazifasini aniq bildiruvchi mazmunli so'zlarni qo'llash (masalan: isUserActive)",
              "Barcha nomlarni faqat o'zbek va lotin so'zlarini aralashtirib yozish (masalan: puliSum)"
            ],
            correctAnswer: 2,
            explanation: "O'zgaruvchining nomi uning nima maqsadda yaratilganini boshqa dasturchiga ochiq bildirishi shart."
          },
          {
            id: "m1l4-q3",
            question: "Dasturlashdagi mashhur DRY qoidasining to'g'ri kengaytmasi va ma'nosi qaysi?",
            options: [
              "Don't Repeat Yourself — bir xil mantiqiy kodni loyihada qayta-qayta takrorlamaslik",
              "Do Repeat Yearly — har yili butun loyiha kodini noldan qayta yozib chiqish",
              "Direct Route Yield — ma'lumotlar oqimini eng qisqa yo'l orqali serverga yo'naltirish",
              "Data Rapid Yield — operativ xotirada ma'lumotlarni zudlik bilan arxivlab saqlash"
            ],
            correctAnswer: 0,
            explanation: "DRY — bir xil mantiqiy kodni nusxalamasdan, umumiy funksiya yoki komponentga ajratish demakdir."
          }
        ],
        summary: 'Kodni shunday yozingki, uni kelajakda o\'qiydigan dasturchi sizga rahmat aytsin. Clean Code professional dasturchilikning eng oliy belgisidir.'
      }
    },
    {
      id: 'm1-l5',
      moduleId: 'module-1',
      title: 'Factory, Singleton va Observer Design Patterns',
      description: 'Dasturiy arxitekturaning klassik andozalari: Singleton, Factory Method va Observer qanday ishlaydi?',
      duration: '50 daqiqa',
      difficulty: 'yuqori',
      order: 5,
      icon: 'Cpu',
      content: {
        theory: `Dizayn andozalari (Design Patterns) — bu dasturlashda tez-tez uchraydigan muammolarning vaqt sinovidan o'tgan, optimal yechimlari to'plamidir.

Eng mashhur 3 ta andoza:
1. Singleton (Yakkaxon) — butun dastur bo'yicha sinfning faqat va faqat bitta nusxasi (instance) mavjud bo'lishini va unga global kirish nuqtasini ta'minlaydi (masalan: Ma'lumotlar bazasi ulanishi yoki Tizim sozlamalari).
2. Factory (Zavod) — obyektlarni to'g'ridan-to'g'ri 'new' orqali yaratish o'rniga, mos keluvchi sinf nusxasini maxsus zavod metodi orqali qaytaradi (masalan: To'lov tizimlari — Payme, Click, Uzum).
3. Observer (Kuzatuvchi) — bir obyektda (Publisher) o'zgarish yuz berganda, unga obuna bo'lgan barcha boshqa obyektlarga (Subscribers) avtomatik xabar beruvchi andoza (masalan: Yangiliklar lentasi, Telegram kanallari, Redux/Event listenerlar).`,
        realWorldExample: `Singleton — maktabdagi yagona qo'ng'iroq apparatiga o'xshaydi: har bir sinfxonada alohida qo'ng'iroq bo'lmaydi, hamma bitta qo'ng'iroqdan foydalanadi. Observer esa Telegram kanaliga o'xshaydi: admin bitta xabar joylasa, 1000 ta obunachining telefoniga bir vaqtda bildirishnoma boradi.`,
        practicalTask: `TypeScript yoki JavaScript da Singleton andozasi yordamida ilova sozlamalari (SettingsManager) sinfini yarating.`,
        codeExample: {
          language: 'typescript',
          code: `// SINGLETON ANDOZASI NAMUNASI
class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private isConnected = false;

  private constructor() {
    // Tashqaridan 'new' qilish taqiqlanadi
    this.isConnected = true;
    console.log("Bazaga yangi yagona ulanish o'rnatildi!");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}

// Foydalanish:
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true — ikkisi aynan bitta obyekt!`,
          explanation: 'Singleton xotirani tejaydi va tizimda resurslar to\'qnashuvini oldini oladi.'
        },
        quiz: [
          {
            id: "m1l5-q1",
            question: "Singleton dizayn andozasi (Design Pattern) nima maqsadda ishlatiladi?",
            options: [
              "Dastur algoritmlarini parallel tarzda bir necha protsessorga taqsimlash uchun",
              "Foydalanuvchilarning parollarini murakkab shifrlar yordamida himoyalash uchun",
              "Serverdagi barcha ochiq fayllarni avtomatik tarzda arxivlab borish uchun",
              "Loyiha doirasida ma'lum bir sinfdan faqat bitta yagona nusxa yaratilishini kafolatlash uchun"
            ],
            correctAnswer: 3,
            explanation: "Singleton butun ilova bo'yicha bitta umumiy kirish nuqtasi (masalan, DB aloqasi) bo'lishini ta'minlaydi."
          },
          {
            id: "m1l5-q2",
            question: "Bir obyekt holati o'zgarganda boshqa barcha bog'liq obyektlarga xabar yuboruvchi andoza qaysi?",
            options: [
              "Singleton andozasi",
              "Observer andozasi",
              "Adapter andozasi",
              "Prototype andozasi"
            ],
            correctAnswer: 1,
            explanation: "Observer — hodisalarga obuna bo'lish va o'zgarishlar haqida avtomatik bildirishnoma yuborish andozasidir."
          },
          {
            id: "m1l5-q3",
            question: "Factory (Fabrika) andozasi dastur arxitekturasida qachon eng ko'p qo'llaniladi?",
            options: [
              "Dasturdagi barcha xatoliklarni matnli faylga yozib borish jarayonida",
              "Veb-sahifaning ranglari va shriftlarini CSS orqali bezatish bosqichida",
              "Obyektlarni yaratish mantiqi murakkab bo'lib, umumiy interfeys orqali hosil qilishda",
              "Ma'lumotlar bazasidagi jadvallarni o'chirib qayta tiklash amaliyotida"
            ],
            correctAnswer: 2,
            explanation: "Factory mijoz kodini aniq sinf konstruktorlariga qattiq bog'lanib qolishdan xalos etadi."
          }
        ],
        summary: 'Dizayn andozalari — bu velosipedni qaytadan ixtiro qilmaslik siri. Ularni bilish sizni oddiy kod yozuvchidan haqiqiy dastur arxitektoriga aylantiradi.'
      }
    },
    {
      id: 'm1-l6',
      moduleId: 'module-1',
      title: 'REST API va JSON',
      description: 'Mijoz va server o\'rtasida ma\'lumot almashish tili: HTTP metodlari, status kodlari va JSON tuzilmasi.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 6,
      icon: 'Network',
      content: {
        theory: `Zamonaviy veb-saytlar va mobil ilovalar serverlar bilan REST (Representational State Transfer) arxitekturasi orqali muloqot qiladi.

HTTP Metodlari (CRUD operatsiyalari):
- GET — ma'lumotlarni o'qib olish (masalan: o'quvchilar ro'yxatini yuklash)
- POST — yangi ma'lumot yaratish (masalan: yangi o'quvchi qo'shish)
- PUT / PATCH — mavjud ma'lumotni yangilash yoki tahrirlash
- DELETE — ma'lumotni o'chirib tashlash

HTTP Status Kodlari:
- 200 OK, 201 Created — Muvaffaqiyatli yakun
- 400 Bad Request, 401 Unauthorized, 404 Not Found — Mijoz xatosi
- 500 Internal Server Error — Server ichki xatosi

JSON (JavaScript Object Notation) — butun dunyo bo'ylab tizimlar tushunadigan standart ma'lumot formati.`,
        realWorldExample: `REST API ni restorandagi ofitsiantga o'xshatish mumkin: siz (Frontend/Mijoz) menyudan taom tanlab buyurtma berasiz (HTTP Request), ofitsiant uni oshxonaga (Backend/Server) olib boradi, oshpaz taom tayyorlagach ofitsiant uni sizga keltirib beradi (JSON Response).`,
        practicalTask: `JavaScript da 'fetch' yordamida ommaviy API dan ma'lumot olib keluvchi asinxron funksiya yozing.`,
        codeExample: {
          language: 'javascript',
          code: `// REST API ga so'rov yuborish (Fetch)
async function getStudentData() {
  try {
    const response = await fetch('https://api.itlab11.uz/v1/students');
    
    if (!response.ok) {
      throw new Error(\`Xatolik yuz berdi: \${response.status}\`);
    }

    const data = await response.json();
    console.log("O'quvchilar ro'yxati:", data);
  } catch (error) {
    console.error("Tarmoq xatosi:", error.message);
  }
}`,
          explanation: 'Asinxron (async/await) so\'rovlar orqali foydalanuvchi interfeysi qotib qolmasdan ma\'lumot yuklanadi.'
        },
        quiz: [
          {
            id: "m1l6-q1",
            question: "Serverda yangi ma'lumot resursini yaratish uchun qaysi HTTP metodi standarti ishlatiladi?",
            options: [
              "POST metodi",
              "GET metodi",
              "PUT metodi",
              "HEAD metodi"
            ],
            correctAnswer: 0,
            explanation: "POST metodi serverga yangi ma'lumot yoki yozuv qo'shish uchun standart hisoblanadi."
          },
          {
            id: "m1l6-q2",
            question: "Veb-server qaytaradigan 404 HTTP status kodi nimani anglatadi?",
            options: [
              "Mijoz tomonidan yuborilgan so'rov to'liq va muvaffaqiyatli bajarildi",
              "Server ichki xatoligi tufayli so'rovni vaqtincha bajara olmadi",
              "Foydalanuvchi tizimga kirish uchun noto'g'ri login yoki parol kiritdi",
              "Mijoz so'ragan veb-sahifa yoki resurs ko'rsatilgan manzilda topilmadi"
            ],
            correctAnswer: 3,
            explanation: "404 Not Found — serverda so'ralgan manzil mavjud emasligini bildiradi."
          },
          {
            id: "m1l6-q3",
            question: "JSON (JavaScript Object Notation) formatida ma'lumotlar qanday tuzilishda saqlanadi?",
            options: [
              "Murakkab XML teglari va atributlarining iyerarxik daraxti shaklida",
              "Kalit va qiymat (key: value) juftliklari ko'rinishidagi obyektlarda",
              "Faqat vergul bilan ajratilgan oddiy matnli satrlar qatorlari shaklida",
              "Kompilyatsiya qilingan ikkilik (binary) baytlar ketma-ketligi ko'rinishida"
            ],
            correctAnswer: 1,
            explanation: "JSON ma'lumotlari {\"key\": \"value\"} ko'rinishidagi o'qishga oson juftliklardan iborat."
          }
        ],
        summary: 'REST API va JSON — butun internetning qon tomiri. Frontend va Backend tizimlari ayni shu standartlar orqali bog\'lanadi.'
      }
    },
    {
      id: 'm1-l7',
      moduleId: 'module-1',
      title: 'Jamoada ishlash va kommunikatsiya',
      description: 'Dasturchilar qanday muloqot qiladi? Asinxron muloqot, konstruktiv tanqid va jamoaviy qadriyatlar.',
      duration: '40 daqiqa',
      difficulty: 'boshlangich',
      order: 7,
      icon: 'Users',
      content: {
        theory: `Dasturchilik — bu faqat monitor qarshisida kod yozish emas, balki 80% holatda odamlar bilan muomala qilishdir. Eng kuchli texnik bilim ham, agar dasturchi jamoada muloqot qila olmasa, foydasiz bo'lib qoladi.

Asosiy jamoaviy qoidalar:
1. Asinxron muloqot (Slack, Discord, Telegram) — xabarlarni to'liq, aniq va savolning konteksti bilan yozish ("Salom" deb kutib o'tirmasdan, birdaniga maqsadni tushuntirish).
2. Konstruktiv Code Review — shaxsiyatga tegmasdan, faqat kod sifatini yaxshilashga qaratilgan mulohazalar bildirish ("Siz xato yozibsiz" emas, "Bu funksiyani xotirani tejash uchun mana bunday yozsak qanday bo'ladi?").
3. Shaffoflik (Transparency) — agar biror topshiriqda qiyinchilikka duch kelsangiz, uni yashirmasdan vaqtida jamoaga xabar berish.`,
        realWorldExample: `Futbol jamoasida har bir o'yinchi faqat o'zi gol urishni o'ylasa, to'pni pas bermasa, jamoa yutqazadi. IT loyihada ham dasturchilar bir-birini to'ldirib, o'zaro tajriba almashib ishlaganidagina g'alaba qozonishadi.`,
        practicalTask: `Jamoa a'zongizning xato yozilgan kodiga nisbatan xushmuomala, aniq va tushuntiruvchi 2 ta Code Review izohi yozib mashq qiling.`,
        codeExample: {
          language: 'markdown',
          code: `### Noto'g'ri (Salbiy) fikr:
"Bu yerda hamma narsa xato yozilgan, qaytadan yozing!"

### To'g'ri va Madaniyatli (Konstruktiv) fikr:
"Jasur, loyiha uchun ajoyib qadam bo'libdi! Faqat 42-qatorda foydalanuvchi ma'lumot kiritmasa xatolik berishi mumkin ekan. U yerga bitta shartli tekshiruv (if check) qo'shib qo'ysak, tizim barqarorligi yanada oshadi deb o'ylayman. Nima deysiz?"`,
          explanation: 'Konstruktiv muloqot jamoada iliq muhit yaratadi va ish unumdorligini 2 barobarga oshiradi.'
        },
        quiz: [
          {
            id: "m1l7-q1",
            question: "IT jamoalarida professional muloqot va hamkorlikning eng to'g'ri tamoyili qaysi?",
            options: [
              "Muammo tug'ilganda hech kimga aytmasdan haftalab mustaqil kutib o'tirish",
              "Barcha muhim xabarlarni faqat kechasi shaxsiy telefon orqali qo'ng'iroq qilib aytish",
              "Kontekst va muammoni to'liq tushuntirib, xushmuomala tarzda yozma bayon etish",
              "Boshqa dasturchilar xatolarini jamoa chatida masxara qilib tanqid qilish"
            ],
            correctAnswer: 2,
            explanation: "Kontekstni aniq bayon qilish vaqtni tejaydi va jamoada ishonchli muhit yaratadi."
          },
          {
            id: "m1l7-q2",
            question: "Code Review jarayonida hamkasb kodiga fikr bildirishda eng asosiy qoida nima?",
            options: [
              "Dasturchi shaxsiyatiga emas, balki faqat kod sifati va yaxshilanishiga e'tibor qaratish",
              "Faqat shaxsiy did va qulaylikka asoslanib, hamkasbdan uslubni o'zgartirishni talab qilish",
              "Har qanday xatolik uchraganda kodni darhol o'chirib tashlashni buyurish",
              "Loyihadagi barcha kodlarni faqat bitta dasturchi yozishi shartligini ta'kidlash"
            ],
            correctAnswer: 0,
            explanation: "Code Review — bu shaxsni emas, balki kod sifatini birgalikda oshirish madaniyatidir."
          },
          {
            id: "m1l7-q3",
            question: "Dasturchi uchun Soft Skills (muloqot va moslashuvchanlik) nima sababdan juda muhim?",
            options: [
              "Kompyuter tizimidagi operativ xotirani va drayverlarni tezroq tozalashni yaxshi o'rganish uchun",
              "Faqat xorijiy do'stlar bilan ijtimoiy tarmoqlarda muntazam ravishda inglizcha yozishib turish uchun",
              "Dastur kodini kompilyatsiya qilish va serverga yuklash tezligini sezilarli darajada oshirish uchun",
              "Mijozlar va jamoa bilan samarali hamkorlik qilib, murakkab loyihalarni muvaffaqiyatli topshirish uchun"
            ],
            correctAnswer: 3,
            explanation: "Texnik bilim bilan birga kuchli muloqot qobiliyati dasturchini haqiqiy yetakchiga aylantiradi."
          }
        ],
        summary: 'Kod kompyuter uchun, aloqa esa insonlar uchun yoziladi. Zo\'r dasturchi — avvalo yaxshi jamoaviy sherikdir.'
      }
    },
    {
      id: 'm1-l8',
      moduleId: 'module-1',
      title: 'Liderlik va vaqtni boshqarish',
      description: 'Pomodoro texnikasi, ustuvorliklarni belgilash (Eisenhower matritsasi) va mas\'uliyatni o\'z zimmasiga olish.',
      duration: '40 daqiqa',
      difficulty: 'boshlangich',
      order: 8,
      icon: 'Award',
      content: {
        theory: `Vaqt — dasturchining eng qimmatbaho resursi. Zamonaviy dunyoda chalg'ituvchi omillar (ijtimoiy tarmoqlar, o'yinlar) juda ko'p. Muvaffaqiyatli mutaxassis bo'lish uchun o'z vaqtini qat'iy boshqara olish shart.

Asosiy vaqt boshqaruvi metodlari:
- Pomodoro Texnikasi: 25 daqiqa to'liq diqqat bilan kod yozish -> 5 daqiqa qisqa tanaffus -> 4 ta sikldan keyin 20 daqiqa katta tanaffus.
- Eyzenxauer Matritsasi: Ishlarni 4 toifaga ajratish:
  1. Muhim va Shoshilinch (Darhol bajaring!)
  2. Muhim, lekin Shoshilinch emas (Rejalashtiring — o'rganish, sport, loyiha)
  3. Shoshilinch, lekin Muhim emas (Boshqalarga topshiring)
  4. Muhim ham, Shoshilinch ham emas (Vaqt o'g'rilari — butunlay cheklang!)
- Liderlik: Muammo paydo bo'lganda aybdor qidirmasdan, "Bu muammoni qanday hal qilsak bo'ladi?" deb tashabbus ko'rsatish.`,
        realWorldExample: `Agar siz imtihonga 1 kecha qolganda tayyorlansangiz (Stress + Shoshilinch), bilim mustahkam bo'lmaydi. Har kuni 25 daqiqadan Pomodoro bilan dasturlashni o'rgansangiz, 3 oyda bemalol professional loyiha tayyorlay olasiz.`,
        practicalTask: `Bugungi kuningiz uchun Eyzenxauer matritsasi jadvalini tuzing va eng muhim 3 ta vazifani belgilang.`,
        codeExample: {
          language: 'markdown',
          code: `# Mening Kunlik Vaqt Rejam (Eyzenxauer Matritsasi)

## 1. Muhim va Shoshilinch (Bugun bitirish shart!):
- [ ] IT LAB 11 da Git darsini tugatish va test topshirish
- [ ] 11-sinf informatika laboratoriya ishini topshirish

## 2. Muhim, lekin Shoshilinch emas (Rivojlanish investitsiyasi):
- [ ] 30 daqiqa Ingliz tili texnik so'zlarini o'rganish
- [ ] Portfolio sayti dizaynini chizish

## 3. Chalg'ituvchilar (Vaqtni qisqartirish):
- [x] Instagram/TikTok reels ko'rishni 15 daqiqadan oshirmaslik`,
          explanation: 'Muntazam rejalashtirish miyadagi stressni yo\'qotadi va samaradorlikni 300% ga oshiradi.'
        },
        quiz: [
          {
            id: "m1l8-q1",
            question: "Pomodoro vaqtni boshqarish texnikasining klassik qoidasi qanday vaqt taqsimotini taklif qiladi?",
            options: [
              "50 daqiqa to'xtovsiz o'yin o'ynash va 10 daqiqa dars qilish",
              "25 daqiqa to'liq diqqat bilan ishlash va 5 daqiqa qisqa tanaffus qilish",
              "60 daqiqa chalg'imasdan ishlash va 60 daqiqa uxlash rejasi",
              "Butun kun davomida hech qanday tanaffussiz kompyuterda ishlash"
            ],
            correctAnswer: 1,
            explanation: "25 daqiqalik konsentratsiya va 5 daqiqalik qisqa dam olish miya toliqishini keskin kamaytiradi."
          },
          {
            id: "m1l8-q2",
            question: "Eyzenxauer matritsasiga ko'ra, eng katta strategik e'tibor qaysi toifadagi vazifalarga qaratilishi zarur?",
            options: [
              "Shoshilinch bo'lgan, lekin kelajak uchun hech qanday foyda keltirmaydigan ishlarga",
              "Faqat ijtimoiy tarmoqlardagi tasodifiy bildirishnomalarni ko'rib chiqishga",
              "Muhim, ammo shoshilinch bo'lmagan (kelajak va rivojlanishga xizmat qiladigan) vazifalarga",
              "Kunlik rejasiz, faqat eng oxirgi daqiqalarda yuzaga keladigan favqulodda ishlarga"
            ],
            correctAnswer: 2,
            explanation: "Uzoq muddatli yutuqlar muhim, lekin shoshilinch bo'lmagan strategik vazifalarga bog'liqdir."
          },
          {
            id: "m1l8-q3",
            question: "IT loyihasida haqiqiy muhandislik yetakchisi (Tech Lead) qiyin vaziyatda qanday yo'l tutadi?",
            options: [
              "Yuzaga kelgan barcha texnik nosozliklarda faqat yangi kelgan xodimlarni ayblaydi",
              "Mas'uliyatni o'z zimmasiga oladi, aniq yechim taklif qiladi va jamoani qo'llab-quvvatlaydi",
              "Muammo hal bo'lguniga qadar hech kim bilan muloqot qilmasdan chetda turadi",
              "Loyiha kodini o'chirib tashlab, ishni boshqa kompaniyaga topshirishni talab qiladi"
            ],
            correctAnswer: 1,
            explanation: "Liderlik — mas'uliyatni olish, bosim ostida xotirjamlikni saqlash va jamoaga yordam berishdir."
          }
        ],
        summary: 'Vaqtni boshqarish va yetakchilik qobiliyati oddiy dasturchini jamoa sardori va texnik direktor darajasiga ko\'taradi.'
      }
    }
  ]
};

