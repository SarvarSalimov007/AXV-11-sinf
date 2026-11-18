'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  BookOpen,
  Layers,
  FolderGit2,
  ClipboardCheck,
  Code2,
  Server,
  Cloud,
  Briefcase,
  ArrowRight,
  Clock,
  Sparkles,
  Rocket,
  GraduationCap,
  Trophy,
  Terminal,
  Zap,
  ExternalLink,
  Check,
  Copy,
  ChevronDown
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { modules } from '@/data/courses';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/ui/AuthModal';

/* ──────────────────────────── Icon Mapping ──────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  Cloud,
  Briefcase,
};

/* ──────────────────────────── Scroll-reveal wrapper ─────────────────── */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────── Animated Counter ──────────────────────── */
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ──────────────────────────── Code Snippets for Hero ────────────────── */
const heroSnippets = [
  {
    id: 'git',
    title: 'Git & Workflow',
    lang: 'bash',
    filename: 'terminal.sh',
    code: `# Git branch ochish va yangi funksiya qo'shish
git checkout -b feature/interactive-editor
git add src/components/Editor.tsx
git commit -m "feat: Monaco Editor integratsiyasi"
git push origin feature/interactive-editor

# Pull Request tekshirildi va merge qilindi ✅`
  },
  {
    id: 'docker',
    title: 'Docker Container',
    lang: 'dockerfile',
    filename: 'Dockerfile',
    code: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Xavfsiz ishlab chiqarish konteyneri
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
  },
  {
    id: 'cloud',
    title: 'Cloud & Deploy',
    lang: 'yaml',
    filename: 'deploy-pipeline.yml',
    code: `name: Production Deployment
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build & Test
        run: npm run test:ci
      - name: Deploy to Cloud (AWS EC2 / Vercel)
        run: npx vercel --prod --token=\${{ secrets.VERCEL_TOKEN }}`
  },
  {
    id: 'cleancode',
    title: 'Clean Code (SOLID)',
    lang: 'typescript',
    filename: 'SOLID_Principles.ts',
    code: `// Single Responsibility & Interface Segregation
interface IStudentRepository {
  save(student: Student): Promise<void>;
  findById(id: string): Promise<Student>;
}

export class StudentService {
  constructor(private readonly repo: IStudentRepository) {}

  async completeLesson(studentId: string, lessonId: string): Promise<number> {
    const student = await this.repo.findById(studentId);
    student.addScore(50);
    await this.repo.save(student);
    return student.totalScore;
  }
}`
  }
];

/* ──────────────────────────── Tech Badges ───────────────────────────── */
const techStack = [
  { name: 'TypeScript' },
  { name: 'Docker' },
  { name: 'Git & GitHub' },
  { name: 'Next.js 14' },
  { name: 'AWS Cloud' },
  { name: 'CI/CD Actions' },
  { name: 'Linux Terminal' },
  { name: 'Agile & MVP' },
];

export default function HomePage() {
  const { user, getTotalProgress, setShowAuthModal } = useAppStore();
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const activeSnippet = heroSnippets[activeSnippetIdx];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ── Featured lessons (first 2 from each module) ── */
  const featuredLessons = modules.flatMap((mod) =>
    mod.lessons.slice(0, 2).map((lesson) => ({
      ...lesson,
      moduleId: mod.id,
      moduleTitle: mod.title,
      moduleGradient: mod.gradient,
    }))
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />
      <AuthModal />

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO SECTION — Dual-Theme Modern Hero & Cyber Terminal
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/25 dark:to-slate-950 transition-colors duration-300">
        
        {/* Ambient Glow Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-purple-400/15 dark:bg-purple-600/20 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
          <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-cyan-400/15 dark:bg-cyan-500/15 rounded-full blur-[120px]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 shadow-sm backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  11-Sinf Maktab Ta&apos;lim Ekotizimi
                </span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                  IT LAB 11
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                  Kelajak kasblari{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300 bg-clip-text text-transparent">
                    shu yerdan
                  </span>{' '}
                  boshlanadi
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Dasturiy ta&apos;minot arxitekturasi, Git, Docker, CI/CD, Cloud texnologiyalari va Startap ekotizimini <strong className="text-slate-900 dark:text-white font-bold">100% amaliyot</strong> orqali o&apos;rganing.
                </p>

                {/* Slogan */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide pt-1">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>O&apos;rgan · Amalda bajar · Yarat · Kelajakni qur.</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href="/darslar"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Darslarni boshlash
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/code-editor"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-bold text-base border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <Code2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                  Interaktiv Kod Muharriri
                </Link>
              </motion.div>

              {/* Tech Badges Pill Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="pt-4 border-t border-slate-200 dark:border-slate-800/80"
              >
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider mb-3">
                  O&apos;rganiladigan Asosiy Texnologiyalar:
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:border-blue-500/40 transition-colors"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Live Interactive Cyber Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 w-full"
            >
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-700/40 dark:via-slate-800 to-purple-500/20 shadow-2xl shadow-blue-500/10">
                <div className="rounded-[22px] bg-slate-950 text-slate-100 border border-slate-800 overflow-hidden shadow-2xl">

                  {/* Terminal Header */}
                  <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                      <span className="text-xs font-mono text-slate-400 ml-2 font-medium">
                        it-lab-terminal — {activeSnippet.filename}
                      </span>
                    </div>

                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                      title="Kodni nusxalash"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 font-sans">Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-sans">Nusxa</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Terminal Navigation Tabs */}
                  <div className="bg-slate-950 px-3 pt-2 flex items-center gap-1 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
                    {heroSnippets.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSnippetIdx(idx)}
                        className={cn(
                          'px-3 py-1.5 rounded-t-lg text-xs font-mono font-semibold transition-all whitespace-nowrap flex items-center gap-1.5',
                          activeSnippetIdx === idx
                            ? 'bg-slate-900 text-blue-400 border-t-2 border-blue-500 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                        )}
                      >
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        {s.title}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Code Body */}
                  <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 min-h-[220px] overflow-x-auto bg-slate-950/90">
                    <pre className="text-slate-200">
                      <code>{activeSnippet.code}</code>
                    </pre>
                  </div>

                  {/* Terminal Footer Action */}
                  <div className="bg-slate-900/80 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ready for production</span>
                    </div>
                    <Link
                      href="/code-editor"
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 font-sans"
                    >
                      Muharrirda ochish
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

          {/* ── Key Statistics Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { label: "O'quv Darslari", value: 36, suffix: ' ta', desc: 'Real kod & nazariya', icon: BookOpen, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-500/10' },
              { label: 'Katta Modul', value: 4, suffix: ' bosqich', desc: 'SDLC, DevOps, Cloud, Startap', icon: Layers, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-500/10' },
              { label: 'Yakuniy Loyihalar', value: 4, suffix: ' ta MVP', desc: 'Portfolio, Docker, Cloud, Startap', icon: FolderGit2, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-500/10' },
              { label: 'Interaktiv Testlar', value: 100, suffix: '+ savol', desc: 'Tezkor ball va tekshiruv', icon: ClipboardCheck, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-500/10' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={cn('p-2 rounded-xl', stat.bg)}>
                    <stat.icon className={cn('w-4 h-4', stat.color)} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. METHODOLOGY: 70% Amaliyot / 30% Nazariya Formula
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 mb-4">
              <Zap className="w-3.5 h-3.5" />
              O&apos;qitish Metodologiyasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Quruq yodlash emas — Faqat haqiqiy amaliyot
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              IT LAB 11 da har bir dars o&apos;quvchi o&apos;z qo&apos;li bilan kod yozishi, konteyner ko&apos;tarishi va serverga joylashi uchun mo&apos;ljallangan.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xl mb-6 border border-blue-200 dark:border-blue-500/30">
                  30%
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Sodda va Aniq Nazariya
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Murakkab tushunchalar kundalik hayotdagi misollar, vizual infografikalar va arxitektura sxemalari orqali 11-sinf o&apos;quvchisi tushunadigan tilda tushuntiriladi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full p-8 rounded-3xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/30 dark:to-slate-900 border border-blue-300 dark:border-blue-500/40 shadow-md hover:shadow-xl relative group overflow-hidden transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-blue-500/30">
                  70%
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  Amaliy Kod va Terminal
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300">
                    Asosiy
                  </span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Har bir mavzuda jonli kod sinovlari, kompyuterda bajariladigan topshiriqlar va interaktiv Monaco muharririda to&apos;g&apos;ridan-to&apos;g&apos;ri ishga tushirish imkoniyati.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/40 shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xl mb-6 border border-purple-200 dark:border-purple-500/30">
                  100%
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Mustaqil Portfolio
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  O&apos;quvchi kurs yakunida bo&apos;sh qo&apos;l bilan chiqmaydi: uning shaxsiy GitHub profili, Docker loyihasi, jonli veb-sayti va Startup MVP loyihasi tayyor bo&apos;ladi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. MODULES SECTION — 4 Ta Katta Bosqich
         ═══════════════════════════════════════════════════════════════════ */}
      <section id="modules-section" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            O&apos;quv Dasturi
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            4 ta Katta O&apos;quv Bosqichi
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Noldan boshlab Senior arxitekturagacha — bosqichma-bosqich tizimli o&apos;rganish rejasi
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => {
            const IconComp = iconMap[mod.icon] ?? Code2;
            const romanNums = ['I', 'II', 'III', 'IV'];

            return (
              <Reveal key={mod.id} delay={idx * 0.1}>
                <div className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">

                  {/* Top Gradient Stripe */}
                  <div className={cn('h-2.5 w-full bg-gradient-to-r', mod.gradient)} />

                  <div className="p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          'w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg',
                          mod.gradient
                        )}>
                          <IconComp className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                            {romanNums[idx]}-BOSQICH
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {mod.title}
                          </h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                        {mod.lessons.length} dars
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {mod.description}
                    </p>

                    {/* Quick Lesson Preview Chips */}
                    <div className="space-y-2 mb-8">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Mavzular namunasi:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mod.lessons.slice(0, 4).map((l) => (
                          <span
                            key={l.id}
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium"
                          >
                            {l.title.split('—')[0].trim()}
                          </span>
                        ))}
                        {mod.lessons.length > 4 && (
                          <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 font-medium">
                            +{mod.lessons.length - 4} ta mavzu
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                        <span>Davomiyligi: ~{mod.lessons.length * 45} daqiqa</span>
                      </div>

                      <Link
                        href={`/darslar/${mod.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 dark:bg-blue-600/20 dark:hover:bg-blue-600 text-blue-700 hover:text-white dark:text-blue-300 dark:hover:text-white font-bold text-xs border border-blue-200 dark:border-blue-500/30 transition-all duration-300"
                      >
                        Modulni boshlash
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. FEATURED LESSONS SECTION
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                Darslar Katalogi
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Tavsiya etilgan darslar
              </h2>
            </div>
            <Link
              href="/darslar"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Barcha 36 ta darsni ko&apos;rish
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLessons.map((lesson, idx) => (
              <Reveal key={`${lesson.moduleId}-${lesson.id}`} delay={idx * 0.05}>
                <Link
                  href={`/darslar/${lesson.moduleId}/${lesson.id}`}
                  className="group flex flex-col justify-between h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn(
                        'text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg text-white',
                        lesson.moduleGradient
                      )}>
                        {lesson.moduleTitle.split(' ')[0]}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {lesson.duration || '45 daq'}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                      {lesson.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Darsga o&apos;tish</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. CAPSTONE PROJECTS — 4 Ta Amaliy Loyiha
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Amaliy Natija
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Modul Yakunidagi Real Loyihalar
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Nazariya bilan cheklanmaymiz — har bir modul mustaqil himoya qilinadigan loyiha bilan yakunlanadi
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => {
            const project = mod.project;
            if (!project) return null;
            const IconComp = iconMap[mod.icon] ?? Code2;

            return (
              <Reveal key={mod.id} delay={idx * 0.1}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between h-full group shadow-sm hover:shadow-xl">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center shadow-lg',
                        mod.gradient
                      )}>
                        <IconComp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                          Amaliy Loyiha #{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    {project.technologies && (
                      <div className="mb-6">
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-2">
                          Texnologik Stek:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((t: string) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      GitHub orqali topshiriladi
                    </span>
                    <Link
                      href={`/loyihalar`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 dark:bg-emerald-600/20 dark:hover:bg-emerald-600 text-emerald-700 hover:text-white dark:text-emerald-300 dark:hover:text-white font-bold text-xs border border-emerald-200 dark:border-emerald-500/30 transition-all duration-300"
                    >
                      Loyiha topshirig&apos;i
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. FAQ SECTION — Savol-Javoblar
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 mb-4">
              Ko&apos;p So&apos;raladigan Savollar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Platforma haqida savollaringiz bormi?
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: "11-sinf o'quvchisi IT ni bilmasa ham o'rgana oladimi?",
                a: "Albatta! Kurs SDLC va kompyuter savodxonligidan boshlab bosqichma-bosqich eng murakkab Cloud va Docker texnologiyalarigacha olib boradi. Har bir mavzu sodda hayotiy misollar orqali tushuntirilgan."
              },
              {
                q: "Kod yozish uchun kompyuterga qo'shimcha dastur o'rnatish shartmi?",
                a: "Yo'q! Platformamiz ichida to'liq ishlaydigan Monaco Editor (VS Code bazasida) va JavaScript interaktiv terminali mavjud. O'quvchi to'g'ridan-to'g'ri brauzerda kod yozib natijasini ko'rishi mumkin."
              },
              {
                q: "O'qituvchi o'quvchilar natijalarini qanday tekshiradi?",
                a: "Alohida Teacher Dashboard mavjud. O'qituvchi sinflar kesimida (11-A, 11-B, 11-C) har bir o'quvchining o'zlashtirish foizini, test natijalarini ko'radi va topshiriqlarga to'g'ridan-to'g'ri izoh/baho qo'yishi mumkin."
              },
              {
                q: "Kursni tugatgach o'quvchi qanday natijaga erishadi?",
                a: "O'quvchi 4 ta haqiqiy portfolioga ega bo'ladi: Shaxsiy veb-sayt, Docker konteyneri, Cloud hostingiga deploy qilingan veb-dastur va maktab uchun Startup MVP loyihasi."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={cn(
                    'w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0',
                    activeFaq === index ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                  )} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. HIGH-IMPACT CALL TO ACTION
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-700 dark:via-indigo-900 dark:to-purple-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <Reveal>
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-2 border border-white/20 shadow-inner">
              <Trophy className="w-8 h-8 text-amber-300" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Kelajagingizni bugun yaratishni boshlang!
            </h2>

            <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
              11-sinf o&apos;quvchilari uchun maxsus yaratilgan professional IT ta&apos;lim platformasi sizni kutmoqda.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/darslar"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-blue-900 font-extrabold text-base shadow-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Darslarni Hoziroq Boshlash
              </Link>
              {!user && (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-blue-950/60 hover:bg-blue-950 text-white font-bold text-base border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Ro&apos;yxatdan O&apos;tish
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
