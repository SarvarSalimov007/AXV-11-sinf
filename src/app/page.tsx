'use client';

import { useRef } from 'react';
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
  ChevronRight,
  Clock,
  Signal,
  Sparkles,
  Rocket,
  GraduationCap,
  Trophy,
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────── Stats Data ─────────────────────────────── */
const stats = [
  { icon: BookOpen, label: 'Darslar', value: '36+' },
  { icon: Layers, label: 'Modul', value: '4' },
  { icon: FolderGit2, label: 'Loyihalar', value: '12+' },
  { icon: ClipboardCheck, label: 'Test savollari', value: '100+' },
];

/* ──────────────────────────── Difficulty badge helper ────────────────── */
function difficultyBadge(level: string) {
  const colors: Record<string, string> = {
    'boshlangich':
      'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    'orta': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
    'yuqori':
      'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  };
  return (
    <span
      className={cn(
        'px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
        colors[level] ?? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
      )}
    >
      {level}
    </span>
  );
}

/* ════════════════════════════ PAGE COMPONENT ═════════════════════════ */
export default function HomePage() {
  const { user, getTotalProgress, getModuleProgress, setShowAuthModal } =
    useAppStore();

  const totalProgress = user ? getTotalProgress() : 0;
  const totalPercent = Math.round(totalProgress * 100);

  /* ── collect featured lessons (first 2 from each module) ── */
  const featuredLessons = modules.flatMap((mod) =>
    mod.lessons.slice(0, 2).map((lesson) => ({
      ...lesson,
      moduleId: mod.id,
      moduleTitle: mod.title,
      moduleGradient: mod.gradient,
    }))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <AuthModal />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-900">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl"
          />
          {/* grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium border border-white/10">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              IT LAB 11 — Yangi avlod ta&apos;lim platformasi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Kelajak kasblari{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              shu yerdan
            </span>{' '}
            boshlanadi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100/80 leading-relaxed"
          >
            IT LAB 11 — 11-sinf o&apos;quvchilari uchun zamonaviy dasturlash va IT
            ta&apos;lim platformasi
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-3 text-base sm:text-lg text-blue-200/60 font-medium tracking-wide"
          >
            O&apos;rgan · Amalda bajar · Yarat · Kelajakni qur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/darslar"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <Rocket className="w-5 h-5" />
              Darslarni boshlash
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => {
                document
                  .getElementById('modules-section')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur transition-all duration-300"
            >
              Platformani ko&apos;rish
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
              >
                <stat.icon className="w-6 h-6 text-blue-400" />
                <span className="text-2xl sm:text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-blue-200/60">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
      </section>

      {/* ═══════════════════ MODULES SECTION ═══════════════════ */}
      <section
        id="modules-section"
        className="relative py-24 sm:py-32 px-4 bg-white dark:bg-slate-900"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              <Layers className="w-4 h-4" />
              Modullar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              O&apos;quv bosqichlari
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Har bir modul sizni bosqichma-bosqich IT sohasining muhim
              yo&apos;nalishlariga olib boradi
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {modules.map((mod, idx) => {
              const IconComp = iconMap[mod.icon] ?? Code2;
              return (
                <Reveal key={mod.id} delay={idx * 0.1}>
                  <div className="group relative rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700/50">
                    {/* Gradient stripe */}
                    <div
                      className={cn('h-2', mod.gradient)}
                    />
                    <div className="p-6">
                      <div
                        className={cn(
                          'w-14 h-14 rounded-2xl flex items-center justify-center mb-4',
                          mod.gradient
                        )}
                      >
                        <IconComp className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {mod.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                          <BookOpen className="w-3.5 h-3.5" />
                          {mod.lessons.length} ta dars
                        </span>
                        <Link
                          href={`/darslar/${mod.id}/${mod.lessons[0]?.id ?? ''}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:gap-2"
                        >
                          Boshlash
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED LESSONS ═══════════════════ */}
      <section className="py-24 sm:py-32 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              Tanlangan darslar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Tavsiya etilgan darslar
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Eng muhim mavzulardan tanlangan darslar bilan tanishing
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredLessons.map((lesson, idx) => (
              <Reveal key={`${lesson.moduleId}-${lesson.id}`} delay={idx * 0.05}>
                <Link
                  href={`/darslar/${lesson.moduleId}/${lesson.id}`}
                  className="group block rounded-2xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700/50"
                >
                  {/* Top color accent */}
                  <div className={cn('h-1.5', lesson.moduleGradient)} />
                  <div className="p-5">
                    <span
                      className={cn(
                        'inline-block px-2.5 py-0.5 rounded-md text-xs font-medium mb-3 text-white',
                        lesson.moduleGradient
                      )}
                    >
                      {lesson.moduleTitle}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {lesson.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {lesson.duration ?? '45 daq'}
                      </span>
                      {lesson.difficulty ? (
                        difficultyBadge(lesson.difficulty)
                      ) : (
                        <span className="inline-flex items-center gap-1">
                          <Signal className="w-3.5 h-3.5" />
                          Standart
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROJECTS SECTION ═══════════════════ */}
      <section className="py-24 sm:py-32 px-4 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4">
              <FolderGit2 className="w-4 h-4" />
              Loyihalar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Amaliy loyihalar
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Har bir modulda real loyiha orqali o&apos;rgangan bilimlaringizni
              mustahkamlang
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((mod, idx) => {
              const project = mod.project;
              if (!project) return null;
              const IconComp = iconMap[mod.icon] ?? Code2;
              return (
                <Reveal key={mod.id} delay={idx * 0.1}>
                  <div className="group relative rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700/50">
                    {/* Gradient accent bar */}
                    <div className={cn('h-1.5', mod.gradient)} />
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                            mod.gradient
                          )}
                        >
                          <IconComp className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Tech badges */}
                          {project.technologies && project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((t: string) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}

                          <Link
                            href={`/loyihalar/${mod.id}`}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            Batafsil
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROGRESS SECTION (logged-in only) ════════ */}
      {user && (
        <section className="py-24 sm:py-32 px-4 bg-slate-50 dark:bg-slate-800/50">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4">
                <Trophy className="w-4 h-4" />
                Yutuqlar
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
                O&apos;zlashtirish
              </h2>
              <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                Umumiy progressingiz va har bir modul bo&apos;yicha natijalar
              </p>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700/50 p-8 sm:p-12">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* Circular progress SVG */}
                  <div className="relative flex-shrink-0">
                    <svg
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                      className="transform -rotate-90"
                    >
                      <circle
                        cx="90"
                        cy="90"
                        r="78"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-slate-200 dark:text-slate-700"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="78"
                        stroke="url(#progressGrad)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 78}`}
                        strokeDashoffset={`${2 * Math.PI * 78 * (1 - totalProgress)}`}
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient
                          id="progressGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                          {totalPercent}%
                        </span>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Bajarildi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Module progress bars */}
                  <div className="flex-1 w-full space-y-5">
                    {modules.map((mod) => {
                      const modProgress = getModuleProgress(mod.id);
                      const modPercent = Math.round(modProgress * 100);
                      return (
                        <div key={mod.id}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                              {mod.title}
                            </span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              {modPercent}%
                            </span>
                          </div>
                          <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${modPercent}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: 'easeOut',
                              }}
                              className={cn('h-full rounded-full', mod.gradient)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full opacity-10 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <Reveal>
            <Sparkles className="w-10 h-10 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Hoziroq boshlang!
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-xl mx-auto">
              Dasturlash, IT infratuzilmasi, bulutli texnologiyalar va startup
              loyihalar bo&apos;yicha bilimlaringizni oshiring. Kelajak IT
              mutaxassislari safiga qo&apos;shiling!
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="mt-10 inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <GraduationCap className="w-6 h-6" />
              Ro&apos;yxatdan o&apos;tish
            </button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}


