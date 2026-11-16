import { Module } from '../types';

export const module2: Module = {
  id: 'module-2',
  title: 'DevOps va uzluksiz integratsiya',
  description: 'Linux operatsion tizimi, terminal buyruqlari, SSH xavfsiz ulanish, Nginx veb-serveri, Docker konteynerizatsiyasi hamda GitHub Actions orqali CI/CD avtomatlashtirish texnologiyalari.',
  icon: 'Server',
  color: 'purple',
  gradient: 'from-purple-600 via-pink-600 to-rose-500',
  project: {
    title: 'Docker Web Application & CI/CD Pipeline',
    description: 'Node.js/Express veb-ilovasini Docker konteynerida o\'rab, ko\'p bosqichli Dockerfile yozish, Docker Compose bilan ma\'lumotlar bazasini ulash va GitHub Actions orqali avtomatlashtirilgan CI/CD test quvurini ishga tushiring.',
    tasks: [
      'Linux server muhitini sozlash va asosiy terminal buyruqlarini sinash',
      'Node.js veb-ilovasiga xizmat qiluvchi toza Dockerfile yaratish',
      'Docker Compose orqali veb-ilova va PostgreSQL/Redis konteynerlarini bog\'lash',
      'Docker Volume orqali ma\'lumotlar doimiyligini (persistence) ta\'minlash',
      'GitHub Actions workflow faylini (.github/workflows/main.yml) yaratish',
      'Har bir Git push da avtomatlashtirilgan testlar va Docker build jarayonini yo\'lga qo\'yish'
    ],
    technologies: ['Linux', 'Bash', 'SSH', 'Nginx', 'Docker', 'Docker Compose', 'GitHub Actions', 'YAML'],
    criteria: [
      'Dockerfile ko\'p bosqichli (multi-stage) va eng kichik Alpine imagelardan foydalangan bo\'lishi',
      'docker-compose up buyrug\'i bilan butun tizim 1 tugmada ko\'tarilishi',
      'GitHub Actions da barcha testlar muvaffaqiyatli "yashil" o\'tishi',
      'Tizim xavfsizligi va log yuritish mexanizmlari mavjudligi'
    ]
  },
  lessons: [
    {
      id: 'm2-l1',
      moduleId: 'module-2',
      title: 'Linux va Unix asoslari',
      description: 'Dunyodagi barcha serverlar yuragi — Linux nima? Fayllar tizimi iyerarxiyasi, ruxsatlar (permissions) va jarayonlar.',
      duration: '45 daqiqa',
      difficulty: 'boshlangich',
      order: 1,
      icon: 'Terminal',
      content: {
        theory: `Linux — bu ochiq kodli, juda tezkor, barqaror va xavfsiz operatsion tizimlar oilasidir. Butun dunyodagi internet serverlarining 90% dan ortig'i, superkompyuterlar va hatto Android telefonlar Linux yadrosida (kernel) ishlaydi.

Fayllar tizimi iyerarxiyasi:
Windowsda disklar C:, D: harflari bilan boshlansa, Linuxda hamma narsa bitta ildiz (root) belgisi bilan boshlanadi: \`/\`.
- \`/home/foydalanuvchi\` — foydalanuvchining shaxsiy fayllari.
- \`/etc\` — tizim va dasturlarning konfiguratsiya (sozlama) fayllari.
- \`/var/log\` — tizim xatoliklari va loglari saqlanadigan joy.
- \`/bin\` va \`/usr/bin\` — ijro etiluvchi dasturlar va buyruqlar.

Linuxda foydalanuvchi huquqlari juda qat'iy: Read (o'qish - r), Write (yozish - w), Execute (ishga tushirish - x).`,
        realWorldExample: `Windowsni hashamatli avtomat karobkali shahar avtomobiliga qiyoslasak, Linux bu — professional poyga mashinasi (Formula-1). Unda ortiqcha chalg'ituvchi narsalar yo'q, barcha quvvat to'g'ridan-to'g'ri tezlik va barqarorlikka yo'naltirilgan.`,
        practicalTask: `Linuxda fayllar ro'yxatini va ularning huquqlarini ko'rish uchun terminal buyrug'ini ishga tushiring.`,
        codeExample: {
          language: 'bash',
          code: `# Joriy jilddagi barcha fayllarni huquqlari bilan ko'rish
ls -la

# Foydalanuvchini ko'rish
whoami

# Joriy turgan papkani bilish
pwd

# Faylga barcha foydalanuvchilar uchun ijro (execute) huquqini berish
chmod +x script.sh`,
          explanation: 'ls -la buyrug\'i yashirin fayllar va ularning ruxsat huquqlarini (masalan, -rwxr-xr--) ko\'rsatadi.'
        },
        quiz: [
          {
            id: 'm2l1-q1',
            question: 'Linux fayllar tizimining eng yuqori ildiz (root) belgisi qaysi?',
            options: ['C:\\', '/', '/root', '~'],
            correctAnswer: 1,
            explanation: 'Linuxda barcha papkalar va disklar yagona "/" (slash) ildiz katalogidan boshlanadi.'
          },
          {
            id: 'm2l1-q2',
            question: 'Linuxda "rwxr-xr--" huquqi nimani anglatadi?',
            options: [
              'Fayl butunlay o\'chirilgan',
              'Egasi: o\'qish, yozish, ishga tushirish; Guruh: o\'qish va ishga tushirish; Boshqalar: faqat o\'qish',
              'Faqat parolli foydalanuvchi kira oladi',
              'Fayl hajmi 10 MB dan katta'
            ],
            correctAnswer: 1,
            explanation: 'r = read (4), w = write (2), x = execute (1). rwx = egasining to\'liq huquqi.'
          },
          {
            id: 'm2l1-q3',
            question: 'Fayl huquqlarini o\'zgartirish uchun qaysi buyruq qo\'llaniladi?',
            options: ['chmod', 'chown', 'mkdir', 'rmdir'],
            correctAnswer: 0,
            explanation: '\'chmod\' (change mode) fayl yoki papkaning o\'qish, yozish va ishga tushirish ruxsatlarini o\'zgartiradi.'
          }
        ],
        summary: 'Linux — zamonaviy backend va DevOps muhandislarining ikkinchi ona tili. Serverlar dunyosiga kirish Linuxdan boshlanadi.'
      }
    },
    {
      id: 'm2-l2',
      moduleId: 'module-2',
      title: 'Terminal buyruqlari',
      description: 'Qora ekranda tezkor ishlash sehri: navigatsiya, fayllarni manipulyatsiya qilish, grep, curl, htop va jarayonlar.',
      duration: '50 daqiqa',
      difficulty: 'boshlangich',
      order: 2,
      icon: 'SquareTerminal',
      content: {
        theory: `Professional dasturchi sichqonchaga qaraganda klaviaturada 10 barobar tezroq ishlaydi. Terminal (yoki CLI — Command Line Interface) operatsion tizim bilan to'g'ridan-to'g'ri matnli buyruqlar orqali muloqot qilish vositasidir.

Eng muhim asosiy buyruqlar:
- Navigatsiya: \`cd\` (papkalarga o'tish), \`pwd\` (qayerda ekanligini ko'rish), \`ls\` (fayllar ro'yxati).
- Fayl va papkalar: \`mkdir\` (yangi papka), \`touch\` (yangi fayl), \`cp\` (nusxalash), \`mv\` (ko'chirish/nomini o'zgartirish), \`rm\` (o'chirish).
- Matn bilan ishlash: \`cat\` (faylni o'qish), \`head\`/\`tail\` (boshi yoki oxirini ko'rish), \`grep\` (matn ichidan qidirish).
- Tizim monitoringi: \`top\`/\`htop\` (protsessor va operativ xotirani ko'rish), \`kill\` (jarayonni to'xtatish), \`ps aux\` (barcha ochiq dasturlar ro'yxati).
- Tarmoq: \`curl\` va \`wget\` (internetdan ma'lumot yuklab olish va API so'rovlari).`,
        realWorldExample: `1000 ta rasmni qo'lda papkadan papkaga sichqoncha bilan ko'chirish 1 soat vaqt olsa, terminalda bitta buyruq bilan: \`cp *.jpg /backup/\` deb yozsangiz, 1 soniyada ko'chiriladi!`,
        practicalTask: `Terminalda bitta buyruq yordamida 'loyiha' papkasi ichida 'src', 'docs' va 'tests' papkalarini birdaniga yarating.`,
        codeExample: {
          language: 'bash',
          code: `# Ichma-ich papkalarni birdaniga yaratish
mkdir -p mening-loyiham/{src,docs,tests}

# Fayl yaratish va unga matn yozish
echo "PORT=3000" > mening-loyiham/.env

# Matn ichidan qidirish (grep)
grep "PORT" mening-loyiham/.env

# Serverdan ma'lumot yuklash
curl -I https://google.com

# Oxirgi 10 qator logni real-vaqtda kuzatish
tail -f /var/log/nginx/access.log`,
          explanation: 'Bitta satrli qisqa buyruqlar orqali butun tizimni to\'liq avtomatlashtirish mumkin.'
        },
        quiz: [
          {
            id: 'm2l2-q1',
            question: 'Matnli fayl ichidan aniq so\'zni qidirish uchun qaysi buyruq ishlatiladi?',
            options: ['search', 'findword', 'grep', 'locate-text'],
            correctAnswer: 2,
            explanation: '\'grep\' buyrug\'i qatorlar ichidan berilgan matn andozasini (regex) qidirib topadi.'
          },
          {
            id: 'm2l2-q2',
            question: 'Papkani ichidagi barcha fayllari bilan birga to\'liq o\'chiruvchi xavfli buyruq qaysi?',
            options: ['delete all', 'rm -rf <papka>', 'clear -f', 'remove -dir'],
            correctAnswer: 1,
            explanation: '\'rm -rf\' rekursiv (r) va majburiy (f - force) tarzda jildni o\'chiradi.'
          },
          {
            id: 'm2l2-q3',
            question: 'Tizimda ishlab turgan dasturlarni (jarayonlarni) real vaqtda ko\'rish buyrug\'i qaysi?',
            options: ['htop', 'view', 'monitor', 'programs'],
            correctAnswer: 0,
            explanation: '\'htop\' interaktiv tarzda CPU, RAM va har bir jarayon yuklamasini ko\'rsatadi.'
          }
        ],
        summary: 'Terminal buyruqlarini o\'zlashtirish — IT dunyosida super-kuchga ega bo\'lish demakdir. Har bir buyruq sizning vaqtingizni tejaydi.'
      }
    },
    {
      id: 'm2-l3',
      moduleId: 'module-2',
      title: 'SSH va Nginx',
      description: 'Masofadagi serverga xavfsiz ulanish (SSH kalitlari) va eng ommabop veb-server Nginx sozlamalari.',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 3,
      icon: 'Shield',
      content: {
        theory: `SSH (Secure Shell) — masofadagi serverga shifrlangan xavfsiz kanal orqali ulanish va uni boshqarish protokolidir. Parol o'rniga ochiq va yopiq kalitlar juftligi (SSH Key Pair: id_rsa va id_rsa.pub) orqali ulanish eng xavfsiz usul hisoblanadi.

Nginx — bu dunyodagi eng tezkor va ommabop veb-server va Reverse Proxy dasturidir.
Asosiy vazifalari:
- Statik fayllarni (HTML, CSS, JS, rasmlar) chaqmoqdek tezlikda tarqatish.
- Reverse Proxy: 80 yoki 443-portga kelgan foydalanuvchi so'rovlarini ichkaridagi dasturlarga (masalan, Node.js ning 3000-portiga) xavfsiz yo'naltirish.
- Load Balancing: millionlab so'rovlarni bir nechta serverlar o'rtasida teng taqsimlash.`,
        realWorldExample: `Nginx ni mehmonxonaning kirishidagi Administratorga (Reception) o'xshatish mumkin: mehmonlar (foydalanuvchilar) to'g'ridan-to'g'ri oshpaz yoki texniklar xonasiga kirmaydi, administratorga murojaat qiladi, u esa kerakli xodimga yo'naltiradi.`,
        practicalTask: `O'z kompyuteringizda shaxsiy SSH kalit juftligini yarating (ssh-keygen) va uning ochiq kalitini ko'ring.`,
        codeExample: {
          language: 'nginx',
          code: `# Nginx konfiguratsiya fayli namunasi:
server {
    listen 80;
    server_name itlab11.uz;

    location / {
        # So'rovlarni Node.js ilovasiga yo'naltirish
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`,
          explanation: 'Ushbu sozlama orqali tashqi foydalanuvchilar 80-port orqali kelib, ichki 3000-portdagi ilovani ko\'rishadi.'
        },
        quiz: [
          {
            id: 'm2l3-q1',
            question: 'SSH ulanishining standart port raqami nechchi?',
            options: ['80', '443', '22', '3306'],
            correctAnswer: 2,
            explanation: 'SSH protokoli sukut bo\'yicha (default) 22-port orqali xavfsiz aloqa o\'rnatadi.'
          },
          {
            id: 'm2l3-q2',
            question: 'Nginx ning Reverse Proxy sifatidagi asosiy vazifasi nima?',
            options: [
              'Kompyuterga o\'yinlar o\'rnatish',
              'Tashqi so\'rovlarni ichki server va portlarga xavfsiz va samarali yo\'naltirish',
              'Ma\'lumotlar bazasini o\'chirib tashlash',
              'Faqat HTML fayllarni tahrirlash'
            ],
            correctAnswer: 1,
            explanation: 'Reverse Proxy tashqi mijozlar bilan ichki backend ilovalar o\'rtasida xavfsiz vositachidir.'
          },
          {
            id: 'm2l3-q3',
            question: 'SSH orqali parolsiz, xavfsiz ulanish uchun nima ishlatiladi?',
            options: ['SMS kod', 'SSH ochiq va yopiq kalitlar juftligi (Key Pair)', 'Faqat email manzil', 'Telegram bot'],
            correctAnswer: 1,
            explanation: 'Asimmetrik kriptografiyaga asoslangan SSH kalitlar parollarga qaraganda 100 barobar xavfsizroq.'
          }
        ],
        summary: 'SSH serverlarni masofadan xavfsiz boshqarish vositasi, Nginx esa saytingizni millionlab foydalanuvchilarga yetkazib beruvchi tezyurar poezddir.'
      }
    },
    {
      id: 'm2-l4',
      moduleId: 'module-2',
      title: 'Docker arxitekturasi',
      description: '"Mening kompyuterimda ishlayotgan edi-ku!" muammosiga abadiy barham berish. Konteynerlar inqilobi.',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 4,
      icon: 'Box',
      content: {
        theory: `Dasturchilar orasida eng mashhur muammo: "Loyiha mening kompyuterimda ishlayapti, lekin serverga qo'yganda yoki sherigimda xatolik berib qolyapti!". Sababi — operatsion tizim, kutubxonalar va versiyalar farq qiladi.

Docker bu muammoni to'liq hal qildi!
Docker — ilovani va unga kerak bo'lgan barcha muhitni (Node.js versiyasi, ma'lumotlar bazasi, kutubxonalar) bitta mustaqil, ixcham konteyner (container) ichiga joylab, istalgan kompyuterda bir xil ishlashini ta'minlaydi.

Virtual Mashina (VM) va Docker Konteyner farqi:
- Virtual Machine: To'liq yangi OS (masalan Ubuntu 4GB) yuklaydi, xotirani ko'p yeydi va sekin ishga tushadi.
- Docker: Asosiy kompyuterning Linux yadrosidan birgalikda foydalanadi, bir necha megabayt joy oladi va millisoniyalarda ishga tushadi.`,
        realWorldExample: `Yuk tashish konteynerlarini tasavvur qiling: dengiz kemasida avtomobil, kiyim yoki mevalar standart temir konteynerlarga solinadi. Kema uchun ichida nima borligi farqsiz, standart konteyner bo'lsa kifoya. Docker ham dasturlarni shunday standart qutilarga joylaydi.`,
        practicalTask: `Docker Desktop dasturining versiyasini tekshiring va 'hello-world' test konteynerini ishga tushiring.`,
        codeExample: {
          language: 'bash',
          code: `# Docker o'rnatilganini tekshirish
docker --version

# Birinchi sinov konteynerini ishga tushirish
docker run hello-world

# Ishlab turgan konteynerlar ro'yxatini ko'rish
docker ps

# Kompyuterdagi barcha yuklangan imagelarni ko'rish
docker images`,
          explanation: 'Docker dastlab kerakli imagelar borligini tekshiradi, bo\'lmasa Docker Hub dan avtomatik tortib oladi.'
        },
        quiz: [
          {
            id: 'm2l4-q1',
            question: 'Docker konteyneri va an\'anaviy Virtual Mashina o\'rtasidagi asosiy farq nima?',
            options: [
              'Virtual mashinalar tezroq',
              'Konteynerlar alohida og\'ir OS o\'rnatmasdan asosiy tizim yadrosidan foydalanadi va ancha yengil',
              'Docker faqat matnli fayllar uchun',
              'Hech qanday farq yo\'q'
            ],
            correctAnswer: 1,
            explanation: 'Docker operatsion tizim yadrosini (kernel) bo\'lishish orqali xotirani minimal darajada ishlatadi.'
          },
          {
            id: 'm2l4-q2',
            question: 'Dasturchilarning "Mening kompyuterimda ishlayotgan edi" degan bahonasini Docker qanday yo\'qotadi?',
            options: [
              'Dasturchilarga bir xil noutbuk berish orqali',
              'Dastur va uning barcha muhitini har qanday joyda bir xil ishlaydigan standart konteynerga o\'rash orqali',
              'Kodni internetga yuklamaslik orqali',
              'Xatolarni yashirish orqali'
            ],
            correctAnswer: 1,
            explanation: 'Docker muhitning har qanday kompyuter va serverda 100% bir xilligini kafolatlaydi.'
          },
          {
            id: 'm2l4-q3',
            question: 'Dunyo bo\'ylab tayyor Docker tasvirlari saqlanadigan rasmiy portal nima deb ataladi?',
            options: ['Docker Hub', 'GitHub', 'NPM', 'Docker Store'],
            correctAnswer: 0,
            explanation: 'Docker Hub — rasmiy ochiq kutubxona bo\'lib, millionlab tayyor tasvirlar (Ubuntu, Node, Python, Postgres) u yerda saqlanadi.'
          }
        ],
        summary: 'Docker bugungi kunda har qanday zamonaviy backend va DevOps mutaxassisi bilishi shart bo\'lgan standart texnologiyadir.'
      }
    },
    {
      id: 'm2-l5',
      moduleId: 'module-2',
      title: 'Docker Image va Container',
      description: 'Dockerfile yozish sirlari: FROM, WORKDIR, COPY, RUN, CMD va konteynerlarni boshqarish.',
      duration: '50 daqiqa',
      difficulty: 'orta',
      order: 5,
      icon: 'Layers',
      content: {
        theory: `Image va Container o'rtasidagi farq:
- Docker Image (Tasvir) — bu retsept yoki qolip (Class kabi). U o'zgarmas (immutable) bo'lib, dasturning barcha fayllari va ko'rsatmalarini o'z ichiga oladi.
- Docker Container (Konteyner) — o'sha retsept asosida tirik ishga tushirilgan nusxa (Object kabi). Bitta Imagedan 10 ta bir xil konteyner ochish mumkin.

Dockerfile — Image yaratish uchun bosqichma-bosqich yoziladigan ko'rsatmalar faylidir:
- \`FROM\` — tayyor boshlang'ich asosiy image (masalan: node:18-alpine).
- \`WORKDIR\` — konteyner ichidagi ishchi papka.
- \`COPY\` — kompyuteringizdagi fayllarni konteyner ichiga nusxalash.
- \`RUN\` — image yig'ilayotganda bajariladigan buyruqlar (masalan: npm install).
- \`EXPOSE\` — ochiladigan port raqami.
- \`CMD\` — konteyner har safar ishga tushganda bajariladigan asosiy buyruq.`,
        realWorldExample: `Image — bu keks pishirish uchun maxsus metall qolip. Container esa o'sha qolipdan chiqayotgan issiq, yeyish mumkin bo'lgan mazali keks! Bitta qolip bilan istalgancha keks tayyorlash mumkin.`,
        practicalTask: `Node.js veb-ilovasi uchun to'liq ishlaydigan Dockerfile yozing va uni \`docker build\` buyrug'i bilan tasvirga aylantiring.`,
        codeExample: {
          language: 'dockerfile',
          code: `# 1. Yengil Node.js Alpine asosida
FROM node:20-alpine

# 2. Konteyner ichidagi ishchi papka
WORKDIR /app

# 3. Paketlar faylini nusxalash va o'rnatish
COPY package*.json ./
RUN npm install --production

# 4. Qolgan barcha loyiha kodlarini nusxalash
COPY . .

# 5. Ilova 3000-portda ishlashini bildirish
EXPOSE 3000

# 6. Konteyner ishga tushgandagi buyruq
CMD ["node", "src/index.js"]`,
          explanation: 'Konteynerni ishga tushirish: docker run -p 3000:3000 -d mening-ilova:v1'
        },
        quiz: [
          {
            id: 'm2l5-q1',
            question: 'Docker Image va Container o\'rtasidagi munosabat qanday?',
            options: [
              'Image bu — qolip (chizma), Container esa — ishlayotgan nusxa',
              'Ikkalasi bir xil narsa',
              'Container avval yaratiladi, keyin Image qilinadi',
              'Image faqat Windows da ishlaydi'
            ],
            correctAnswer: 0,
            explanation: 'Image o\'zgarmas shablon, Container esa uning xotiradagi tirik jarayonidir.'
          },
          {
            id: 'm2l5-q2',
            question: 'Dockerfile da qaysi buyruq konteyner ishga tushganda bajariladigan asosiy jarayonni belgilaydi?',
            options: ['FROM', 'RUN', 'CMD', 'WORKDIR'],
            correctAnswer: 2,
            explanation: 'CMD (Command) konteyner ishga tushganda bajariladigan boshlang\'ich buyruqni beradi.'
          },
          {
            id: 'm2l5-q3',
            question: 'Konteynerning ichki 3000-portini kompyuterning 8080-portiga qanday bog\'laymiz?',
            options: ['-p 8080:3000', '-port 3000->8080', '--connect 3000', '-net open'],
            correctAnswer: 0,
            explanation: '-p <tashqi_port>:<ichki_port> orqali portlar xaritasi (mapping) amalga oshiriladi.'
          }
        ],
        summary: 'Dockerfile yozishni bilish — butun dasturiy ta\'minotni bir necha soniyada har qanday serverda ishga tushirish imkonini beradi.'
      }
    },
    {
      id: 'm2-l6',
      moduleId: 'module-2',
      title: 'Docker Volume va Network',
      description: 'Konteyner o\'chib ketganda ma\'lumotlar qanday saqlanadi? Tarmoqlar va Docker Compose ko\'p konteynerli tizimi.',
      duration: '50 daqiqa',
      difficulty: 'yuqori',
      order: 6,
      icon: 'Database',
      content: {
        theory: `Konteynerlar o'z tabiatiga ko'ra "Stateless" (o'tkinchi) hisoblanadi: agar konteyner o'chirilsa, uning ichida hosil bo'lgan barcha fayllar va bazadagi ma'lumotlar ham birga yo'qoladi!

Buning oldini olish uchun Docker Volume ishlatiladi:
- Docker Volume — bu konteyner ichidagi ma'lumotlar papkasini serverning doimiy qattiq diskiga bog'lab qo'yishdir. Konteyner o'chib ketsa ham, baza ma'lumotlari xavfsiz saqlanib qolaveradi.

Docker Network:
Konteynerlar alohida tarmoqlarga ajratiladi. Masalan, Veb-sayt konteyneri va PostgreSQL ma'lumotlar bazasi konteyneri bitta ichki Docker tarmog'ida bir-biri bilan xavfsiz muloqot qiladi.

Docker Compose:
Murakkab tizimlarda (Frontend + Backend + PostgreSQL + Redis) bitta buyruq bilan 10 ta konteynerni bir vaqtda sozlash va ko'tarish uchun \`docker-compose.yml\` fayli qo'llaniladi.`,
        realWorldExample: `Volume ni fleshkaga o'xshatish mumkin: kompyuterni o'chirib yoqsangiz ham, fleshkadagi fayllar qolaveradi. Docker Compose esa orkestr dirijyoriga o'xshaydi: bir ishora bilan barcha cholg'uchilar (konteynerlar) uyg'unlikda ish boshlaydi.`,
        practicalTask: `PostgreSQL ma'lumotlar bazasi va Node.js ilovasini bog'lovchi 'docker-compose.yml' faylini yozing.`,
        codeExample: {
          language: 'yaml',
          code: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_USER=postgres
      - DB_PASSWORD=maxfiy_parol

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: maxfiy_parol

volumes:
  postgres_data:`,
          explanation: 'Tizimni ishga tushirish uchun yagona buyruq: docker-compose up -d'
        },
        quiz: [
          {
            id: 'm2l6-q1',
            question: 'Docker Volume ning asosiy vazifasi nima?',
            options: [
              'Ovoz balandligini oshirish',
              'Konteyner o\'chirilganda ham ma\'lumotlar (masalan, baza) yo\'qolmasdan doimiy saqlanishini ta\'minlash',
              'Konteynerni internetga ulash',
              'Kod xatolarini tekshirish'
            ],
            correctAnswer: 1,
            explanation: 'Volume konteynerdan mustaqil ravishda doimiy ma\'lumotlar saqlovchisi hisoblanadi.'
          },
          {
            id: 'm2l6-q2',
            question: 'Ko\'p konteynerli ilovalarni bitta faylda e\'lon qilish va 1 ta buyruq bilan ko\'tarish uchun nima ishlatiladi?',
            options: ['Docker Hub', 'Docker Compose (docker-compose.yml)', 'Nginx', 'GitHub'],
            correctAnswer: 1,
            explanation: 'Docker Compose barcha servislar, tarmoqlar va volumlarni yagona YAML fayl orqali orkestratsiya qiladi.'
          },
          {
            id: 'm2l6-q3',
            question: 'Docker Compose bilan barcha servislarni fonda (background) ishga tushirish buyrug\'i qaysi?',
            options: ['docker-compose start', 'docker-compose up -d', 'docker-compose run', 'docker build .'],
            correctAnswer: 1,
            explanation: '\'docker-compose up -d\' servislarni orqa fonda (detached rejimda) ko\'taradi.'
          }
        ],
        summary: 'Volume va Compose texnologiyalari konteynerlarni o\'yinchoq holatdan haqiqiy korporativ ishlab chiqarish quroliga aylantiradi.'
      }
    },
    {
      id: 'm2-l7',
      moduleId: 'module-2',
      title: 'GitHub Actions',
      description: 'Avtomatlashtirish qudrati: workflow, triggerlar, actionlar va har bir Git push da kodni tekshirish.',
      duration: '45 daqiqa',
      difficulty: 'orta',
      order: 7,
      icon: 'Zap',
      content: {
        theory: `Har safar kod yozilganda, uni qo'lda tekshirish, testlarni ishga tushirish va serverga nusxalash — ko'p vaqt oladi va insoniy xatolarga sabab bo'ladi.

GitHub Actions — bu sizning GitHub repozitoriyingiz ichida to'g'ridan-to'g'ri ishlaydigan kuchli avtomatlashtirish platformasidir.
Asosiy tushunchalar:
- Workflow — avtomatlashtirilgan jarayon bo'lib, loyihaning \`.github/workflows/\` papkasida YAML formatida saqlanadi.
- Events / Triggers — workflow qachon ishga tushishi (masalan: har safar kimdir kodni 'push' qilganda yoki Pull Request ochganda).
- Jobs & Steps — bajarilishi kerak bo'lgan vazifalar ketma-ketligi (masalan: 1. Node.js o'rnat, 2. npm install qil, 3. testlarni ishlat).
- Runners — sizning vazifalaringizni GitHub bulutida bajarib beruvchi bepul virtual serverlar (Ubuntu, Windows, macOS).`,
        realWorldExample: `GitHub Actions — bu sizning shaxsiy 24/7 ishlaydigan robot yordamchingiz. Siz uxlab yotganingizda ham, kimdir kod yuborsa, robot darhol uni tekshiradi, testlarni o'tkazadi va agar xato bo'lsa darhol xabar beradi.`,
        practicalTask: `Repozitoriyingizda '.github/workflows/test.yml' faylini yarating va har bir push da Node testlarini tekshiruvchi workflow yozing.`,
        codeExample: {
          language: 'yaml',
          code: `name: Node.js Test Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Kodni yuklab olish
      uses: actions/checkout@v4

    - name: Node.js muhitini sozlash
      uses: actions/setup-node@v4
      with:
        node-version: 20

    - name: Kutubxonalarni o'rnatish
      run: npm ci

    - name: Testlarni ishga tushirish
      run: npm test`,
          explanation: 'Agar testlardan biri yiqilsa, GitHub Actions qizil xoch qo\'yadi va kodni birlashtirishga yo\'l qo\'ymaydi.'
        },
        quiz: [
          {
            id: 'm2l7-q1',
            question: 'GitHub Actions sozlamalari repozitoriyning qaysi papkasida saqlanadi?',
            options: ['/config/actions', '.github/workflows/', '/scripts/ci/', '.git/hooks/'],
            correctAnswer: 1,
            explanation: 'Barcha workflow fayllari repozitoriyning ildizidagi \'.github/workflows/\' katalogida joylashishi shart.'
          },
          {
            id: 'm2l7-q2',
            question: 'Workflow fayllari qaysi tilda yoziladi?',
            options: ['PHP', 'Python', 'YAML (.yml)', 'HTML'],
            correctAnswer: 2,
            explanation: 'GitHub Actions sozlamalari inson o\'qishi uchun qulay bo\'lgan YAML sintaksisida yoziladi.'
          },
          {
            id: 'm2l7-q3',
            question: 'GitHub Actions nima uchun juda foydali?',
            options: [
              'Saytga tashrif buyuruvchilarni ko\'paytiradi',
              'Koddagi xatolarni avtomatik tarzda, inson omilisiz zudlik bilan aniqlaydi',
              'Kompyuterga virus tushishini kafolatlaydi',
              'Faqat rasmlarni siqish uchun kerak'
            ],
            correctAnswer: 1,
            explanation: 'Har bir o\'zgarishda avtomatik testlar o\'tkazish sifatni yuqori darajada ushlab turadi.'
          }
        ],
        summary: 'GitHub Actions - zamonaviy dasturlashning sehrli tayog\'i. U qo\'l mehnati sarflanadigan zerikarli ishlarni to\'liq robotlarga yuklaydi.'
      }
    },
    {
      id: 'm2-l8',
      moduleId: 'module-2',
      title: 'CI/CD va avtomatlashtirilgan testlar',
      description: 'Continuous Integration va Continuous Deployment — professional dasturiy ta\'minotni yetkazib berish konveyeri.',
      duration: '50 daqiqa',
      difficulty: 'yuqori',
      order: 8,
      icon: 'GitCommit',
      content: {
        theory: `CI/CD — zamonaviy IT kompaniyalarining eng muhim muhandislik amaliyotidir:

1. CI (Continuous Integration — Uzluksiz Integratsiya):
Dasturchilar o'z kodlarini kuniga bir necha bor umumiy tarmoqqa birlashtiradi. Har bir yangi kod avtomatik tarzda build qilinadi va birlik (Unit) hamda integratsion testlardan o'tkaziladi.

2. CD (Continuous Delivery & Deployment — Uzluksiz Yetkazib berish va Joylashtirish):
Testlardan muvaffaqiyatli o'tgan yangi versiya avtomatik ravishda Docker tasvirga aylanadi va to'g'ridan-to'g'ri ishlab chiqarish (Production) serverlariga chiqariladi. Foydalanuvchilar yangi funksiyalarni bir necha daqiqa ichida qo'llarida ko'rishadi!

Test turlari:
- Unit testlar (Jest, Vitest) — alohida funksiyalarni tekshirish.
- Integration testlar — modullarning o'zaro ishlashini tekshirish.
- End-to-End (E2E) testlar (Playwright, Cypress) — foydalanuvchi nomidan butun brauzer ssenariylarini bosib chiqish.`,
        realWorldExample: `Zamonaviy avtomobil zavodidagi konveyerni ko'z oldingizga keltiring: ehtiyot qismlar har bir bosqichda rentgen va sensorlar bilan avtomatik tekshirib boriladi. Yakunda tayyor sifatli mashina konveyerdan o'zi chiqib ketadi. CI/CD — kod uchun ana shunday konveyerdir.`,
        practicalTask: `Jest yoki Node test runner yordamida ikkita sonni qo'shuvchi funksiya uchun sodda unit test yozing.`,
        codeExample: {
          language: 'javascript',
          code: `// math.js — Asosiy funksiya
function sum(a, b) {
  return a + b;
}

// math.test.js — Avtomatlashtirilgan Unit Test
test('2 ga 3 ni qo\'shganda natija 5 bo\'lishi shart', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Manfiy sonlarni to\'g\'ri qo\'shish', () => {
  expect(sum(-1, -4)).toBe(-5);
});`,
          explanation: 'Testlar koddagi xatolarni mijozlar ko\'rishidan oldin, yozish jarayonidayoq fosh qiladi.'
        },
        quiz: [
          {
            id: 'm2l8-q1',
            question: 'CI (Continuous Integration) ning asosiy maqsadi nima?',
            options: [
              'Dasturchilarga dam berish',
              'Koddagi o\'zgarishlarni tez-tez va avtomatik testlar orqali tekshirib umumiy tarmoqqa qo\'shib borish',
              'Foydalanuvchilardan pul yig\'ish',
              'Sayt dizaynini har kuni o\'zgartirish'
            ],
            correctAnswer: 1,
            explanation: 'CI jamoaviy ishlashdagi to\'qnashuvlarni minimallashtiradi va erta bosqichda xatolarni aniqlaydi.'
          },
          {
            id: 'm2l8-q2',
            question: 'CD (Continuous Deployment) amaliyoti nimani anglatadi?',
            options: [
              'Kodni qo\'lda fleshkaga ko\'chirib serverga olib borish',
              'Barcha testlardan o\'tgan kodni avtomatik tarzda jonli serverga (production) deploy qilish',
              'Har kuni kompyuterni formatlash',
              'Dasturni o\'chirib tashlash'
            ],
            correctAnswer: 1,
            explanation: 'Continuous Deployment yangiliklarni foydalanuvchilarga yetkazib berish vaqtini soatlardan daqiqalarga qisqartiradi.'
          },
          {
            id: 'm2l8-q3',
            question: 'Alohida kichik funksiyani tekshiruvchi test qanday ataladi?',
            options: ['Unit test (birlik testi)', 'Stress test', 'Beta test', 'Manual test'],
            correctAnswer: 0,
            explanation: 'Unit test — dasturning eng kichik ajralmas qismini (funksiya, metod) izolyatsiyalangan holda tekshiradi.'
          }
        ],
        summary: 'CI/CD konveyeri yordamida Netflix yoki Amazon kabi gigantlar kuniga 1000 martalab yangi versiyalarni foydalanuvchilarga uzilishsiz yetkazib beradi.'
      }
    }
  ]
};

