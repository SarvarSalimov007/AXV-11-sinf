'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Award, BookOpen, CheckCircle2, Clock, Code2, 
  Layers, Trophy, Star, ShieldCheck, Flame, User,
  ChevronRight, ArrowRight, BarChart3, Sparkles,
  Zap, Target, Terminal, Compass, Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { modules, getAllLessons } from '@/data/courses';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/ui/AuthModal';

// Badges system definition
interface BadgeDef {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  glow: string;
}

const allBadges: BadgeDef[] = [
  {
    id: 'Birinchi qadam',
    title: 'Birinchi qadam',
    description: 'Birinchi darsni muvaffaqiyatli yakunladingiz',
    icon: Flame,
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.4)'
  },
  {
    id: 'Test chempioni',
    title: 'Test chempioni',
    description: 'Mini-testda 90% yoki undan yuqori natija ko\'rsatdingiz',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-600',
    glow: 'rgba(234, 179, 8, 0.4)'
  },
  {
    id: 'Izlanuvchi',
    title: 'Izlanuvchi',
    description: 'Kamida 5 ta darsni muvaffaqiyatli o\'zlashtirdingiz',
    icon: Star,
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59, 130, 246, 0.4)'
  },
  {
    id: 'Modul ustasi',
    title: 'Modul ustasi',
    description: 'Bitta butun modul darslarini 100% tugatdingiz',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.4)'
  },
  {
    id: 'IT mutaxassisi',
    title: 'IT mutaxassisi',
    description: 'Barcha 36 ta darsni to\'liq tamomladingiz',
    icon: Award,
    color: 'from-purple-600 to-pink-600',
    glow: 'rgba(168, 85, 247, 0.4)'
  }
];

export default function DashboardPage() {
  const { 
    user, progress, totalScore, badges, 
    getTotalProgress, getModuleProgress, setShowAuthModal,
    addBadge
  } = useAppStore();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalProgress = mounted ? getTotalProgress() : 0;
  const completedLessons = mounted ? progress.filter((p) => p.completed) : [];
  
  // Calculate completed modules
  const completedModulesCount = mounted ? modules.filter((m) => getModuleProgress(m.id) === 100).length : 0;

  // Auto award badges on page view if criteria met
  useEffect(() => {
    if (!mounted) return;
    if (completedLessons.length >= 1) addBadge('Birinchi qadam');
    if (completedLessons.length >= 5) addBadge('Izlanuvchi');
    if (completedModulesCount >= 1) addBadge('Modul ustasi');
    if (completedLessons.length >= 36) addBadge('IT mutaxassisi');
  }, [mounted, completedLessons.length, completedModulesCount, addBadge]);

  const allLessonsMap = getAllLessons();

  // Student Level calculation
  const getStudentLevel = (score: number) => {
    if (score >= 1500) return { title: 'Senior Developer', level: 5, color: 'text-purple-400', progress: 100 };
    if (score >= 1000) return { title: 'Middle Developer', level: 4, color: 'text-blue-400', progress: Math.min(100, Math.round((score - 1000) / 5)) };
    if (score >= 500) return { title: 'Junior+ Developer', level: 3, color: 'text-cyan-400', progress: Math.min(100, Math.round((score - 500) / 5)) };
    if (score >= 200) return { title: 'Junior Developer', level: 2, color: 'text-emerald-400', progress: Math.min(100, Math.round((score - 200) / 3)) };
    return { title: 'Boshlang\'ich Dasturchi', level: 1, color: 'text-amber-400', progress: Math.min(100, Math.round(score / 2)) };
  };

  const currentLevel = getStudentLevel(totalScore);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <AuthModal />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        
        {/* User Not Logged In State */}
        {!user && mounted && (
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center border border-blue-500/30 shadow-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2)_0,transparent_70%)]" />
            <div className="relative z-10 max-w-xl mx-auto space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20 shadow-inner">
                <User className="w-8 h-8 text-cyan-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Shaxsiy kabinetingizga xush kelibsiz!
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                O&apos;quv jarayoni statistikangiz, to&apos;plangan ballaringiz, ochilgan nishonlar va test tarixingizni ko&apos;rish uchun tizimga kiring.
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Kirish / Ro&apos;yxatdan o&apos;tish
              </button>
            </div>
          </div>
        )}

        {/* User Profile Header (when logged in) */}
        {user && mounted && (
          <div className="relative rounded-3xl p-6 sm:p-8 border border-slate-800 bg-slate-900 shadow-xl mb-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Profile Details */}
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-white/10">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900" title="Faol holatda" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                      {user.role === 'teacher' ? 'Ustoz / O\'qituvchi' : '11-sinf O\'quvchisi'}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                      Sinf: {user.grade || '11-A'}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {user.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    A&apos;zolik sanasi: {user.joinedAt || '2024'}
                  </p>
                </div>
              </div>

              {/* Level & XP Gauge */}
              <div className="w-full md:w-auto p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between md:justify-end gap-6">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold mb-1">
                    <span className="text-slate-400">Daraja:</span>
                    <span className={cn('font-bold', currentLevel.color)}>
                      Level {currentLevel.level} • {currentLevel.title}
                    </span>
                  </div>
                  <div className="w-48 sm:w-56 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
                      style={{ width: `${currentLevel.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Keyingi darajagacha {100 - currentLevel.progress}% qoldi
                  </span>
                </div>

                <div className="text-right border-l border-slate-800 pl-4">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    To&apos;plangan Ball
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    {totalScore} <span className="text-xs font-bold text-slate-500">XP</span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── 4 Stats Cards Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">O&apos;tilgan darslar</span>
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {completedLessons.length} <span className="text-xs text-slate-500 font-normal">/ 36 ta</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold mt-2 inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {totalProgress}% o&apos;zlashtirildi
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Tugallangan modullar</span>
              <Layers className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {completedModulesCount} <span className="text-xs text-slate-500 font-normal">/ 4 ta</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-2 block">
              Barcha asosiy bosqichlar
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Jami to&apos;plangan ball</span>
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">
              {totalScore} <span className="text-xs text-slate-500 font-normal">XP</span>
            </div>
            <span className="text-[11px] text-amber-400/90 font-semibold mt-2 inline-block">
              +50 ball har bir dars uchun
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Nishonlar (Badges)</span>
              <Trophy className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {badges.length} <span className="text-xs text-slate-500 font-normal">/ {allBadges.length} ochilgan</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold mt-2 inline-block">
              Faol o&apos;quvchi yutuqlari
            </span>
          </div>

        </div>

        {/* ── Progress & Modules Overview Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          {/* Left: Overall Circular Gauge (1 col) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white mb-1">
                Umumiy o&apos;zlashtirish foizi
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Kurs bo&apos;yicha to&apos;liq progress holati
              </p>

              {/* Large Circular Gauge */}
              <div className="flex flex-col items-center justify-center my-4">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-slate-800 stroke-current"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-blue-500 stroke-current transition-all duration-1000 ease-out"
                      strokeWidth="10"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * totalProgress) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black text-white tracking-tight">
                      {totalProgress}%
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                      Bajarildi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-center">
              <Link
                href="/darslar"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
              >
                Darslarni davom ettirish
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Module-by-Module Progress Bars (2 cols) */}
          <div className="lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-1">
              Modullar bo&apos;yicha o&apos;zlashtirish
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Har bir bosqichning o&apos;zlashtirish ko&apos;rsatkichlari
            </p>

            <div className="space-y-6">
              {modules.map((mod, idx) => {
                const modProgress = mounted ? getModuleProgress(mod.id) : 0;
                return (
                  <div key={mod.id} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-slate-200 flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-xs font-bold flex items-center justify-center text-slate-300 border border-slate-700">
                          {idx + 1}
                        </span>
                        {mod.title}
                      </span>
                      <span className="text-blue-400 font-bold">
                        {modProgress}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                      <div
                        className={cn(
                          'h-full rounded-full transition-all duration-700 bg-gradient-to-r',
                          mod.gradient
                        )}
                        style={{ width: `${Math.max(modProgress, 2)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── Badges Section ── */}
        <section className="rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl mb-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Erishilgan Yutuqlar va Nishonlar (Badges)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Darslarni yakunlash va testlarni a&apos;lo topshirish orqali nishonlarni oching
              </p>
            </div>
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
              {badges.length} / {allBadges.length} ochilgan
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {allBadges.map((badge) => {
              const isEarned = badges.includes(badge.id);
              const BadgeIcon = badge.icon;

              return (
                <div
                  key={badge.id}
                  className={cn(
                    'p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col justify-between',
                    isEarned
                      ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 shadow-lg shadow-amber-500/5 hover:scale-105'
                      : 'border-slate-800 bg-slate-950/40 opacity-40 grayscale'
                  )}
                >
                  <div>
                    <div className={cn(
                      'w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white shadow-lg bg-gradient-to-r',
                      badge.color
                    )}>
                      <BadgeIcon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-sm text-white mb-1">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className={cn(
                      'inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider',
                      isEarned 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-slate-800 text-slate-500'
                    )}>
                      {isEarned ? (
                        <>
                          <Check className="w-3 h-3" />
                          Ochilgan
                        </>
                      ) : (
                        'Qulflangan'
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Test Results & Activity History ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Test Scores */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              Test natijalari
            </h2>

            {completedLessons.length === 0 ? (
              <p className="text-xs sm:text-sm text-slate-400 py-8 text-center italic">
                Hali testlar topshirilmagan. Darslarni boshlab birinchi testingizni topshiring!
              </p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {completedLessons.map((p) => {
                  const lessonObj = allLessonsMap.find((l) => l.id === p.lessonId);
                  return (
                    <div
                      key={p.lessonId}
                      className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs"
                    >
                      <div>
                        <h4 className="font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                          {lessonObj?.title || p.lessonId}
                        </h4>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">
                          {p.completedAt ? new Date(p.completedAt).toLocaleDateString() : 'Bajarildi'}
                        </span>
                      </div>
                      <span className="font-black text-blue-400 text-sm px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        {p.quizScore ?? 100}%
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Activity History */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              So&apos;nggi faollik va o&apos;rganish tarixi
            </h2>

            {completedLessons.length === 0 ? (
              <p className="text-xs sm:text-sm text-slate-400 py-8 text-center italic">
                Hozircha faollik mavjud emas.
              </p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {completedLessons.slice(-6).reverse().map((p) => {
                  const lessonObj = allLessonsMap.find((l) => l.id === p.lessonId);
                  return (
                    <div
                      key={p.lessonId}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-sm shadow-emerald-500/50" />
                      <div className="flex-1 truncate">
                        <span className="font-semibold text-slate-200">
                          {lessonObj?.title || p.lessonId}
                        </span>
                        <span className="text-slate-400 block text-[11px]">
                          Dars va amaliy topshiriq muvaffaqiyatli yakunlandi
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
