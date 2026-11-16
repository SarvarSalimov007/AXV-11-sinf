'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Award, BookOpen, CheckCircle2, Clock, Code2, 
  Layers, Trophy, Star, ShieldCheck, Flame, User,
  ChevronRight, ArrowRight, BarChart3, Sparkles 
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { modules, getAllLessons } from '@/data/courses';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

// Badges system definition
interface BadgeDef {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const allBadges: BadgeDef[] = [
  {
    id: 'Birinchi qadam',
    title: 'Birinchi qadam',
    description: 'Birinchi darsni muvaffaqiyatli yakunladingiz',
    icon: Flame,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'Test chempioni',
    title: 'Test chempioni',
    description: 'Mini-testda 90% yoki undan yuqori natija ko\'rsatdingiz',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-600'
  },
  {
    id: 'Izlanuvchi',
    title: 'Izlanuvchi',
    description: 'Kamida 5 ta darsni muvaffaqiyatli o\'zlashtirdingiz',
    icon: Star,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'Modul ustasi',
    title: 'Modul ustasi',
    description: 'Bitta butun modul darslarini 100% tugatdingiz',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'IT mutaxassisi',
    title: 'IT mutaxassisi',
    description: 'Barcha 36 ta darsni to\'liq tamomladingiz',
    icon: Award,
    color: 'from-purple-600 to-pink-600'
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* User Not Logged In State */}
        {!user && mounted && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 text-center border border-blue-800 shadow-xl mb-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/15">
              <User className="w-8 h-8 text-cyan-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Shaxsiy kabinetingizga xush kelibsiz!
            </h2>
            <p className="mt-2 text-sm sm:text-base text-blue-200 max-w-lg mx-auto">
              O&apos;quv jarayoni statistikangiz, to&apos;plangan ballaringiz va sertifikatlaringizni ko&apos;rish uchun tizimga kiring.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              Kirish / Ro&apos;yxatdan o&apos;tish
            </button>
          </div>
        )}

        {/* User Profile Header (when logged in) */}
        {user && mounted && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 uppercase">
                    {user.role === 'teacher' ? 'Ustoz / O\'qituvchi' : '11-sinf O\'quvchisi'}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Sinf: {user.grade}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {user.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  A&apos;zolik sanasi: {user.joinedAt}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 self-end sm:self-auto">
              <div className="text-right">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                  To&apos;plangan umumiy ball:
                </span>
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {totalScore} XP
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stats 4-Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">O&apos;tilgan darslar</span>
              <BookOpen className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {completedLessons.length} <span className="text-xs text-slate-400 font-normal">/ 36</span>
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
              {totalProgress}% o&apos;zlashtirildi
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Tugallangan modullar</span>
              <Layers className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {completedModulesCount} <span className="text-xs text-slate-400 font-normal">/ 4</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 inline-block">
              Barcha asosiy bosqichlar
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Jami to&apos;plangan ball</span>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {totalScore}
            </div>
            <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-1 inline-block">
              +50 ball har bir dars uchun
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
              <span className="text-xs font-medium">Erishilgan yutuqlar</span>
              <Trophy className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {badges.length} <span className="text-xs text-slate-400 font-normal">/ {allBadges.length}</span>
            </div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
              Badge va nishonlar
            </span>
          </div>
        </div>

        {/* Progress & Modules Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left: Overall Circular/Bar Progress (1 col) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Umumiy o&apos;zlashtirish foizi
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Kurs bo&apos;yicha to&apos;liq progress holati
              </p>

              {/* Large Circular Gauge */}
              <div className="flex flex-col items-center justify-center my-4">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-slate-200 dark:text-slate-800 stroke-current"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-blue-600 stroke-current transition-all duration-1000 ease-out"
                      strokeWidth="10"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * totalProgress) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {totalProgress}%
                    </span>
                    <span className="text-[11px] text-slate-500 uppercase font-semibold">
                      Bajarildi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <Link
                href="/darslar"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Darslarni davom ettirish
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Module-by-Module Progress (2 cols) */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Modullar bo&apos;yicha o&apos;zlashtirish
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Har bir bosqichning o&apos;zlashtirish ko&apos;rsatkichlari
            </p>

            <div className="space-y-5">
              {modules.map((mod, idx) => {
                const modProgress = mounted ? getModuleProgress(mod.id) : 0;
                return (
                  <div key={mod.id} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        {mod.title}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        {modProgress}%
                      </span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${mod.gradient} rounded-full transition-all duration-700`}
                        style={{ width: `${Math.max(modProgress, 2)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Erishilgan yutuqlar va nishonlar (Badges)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Darslarni yakunlash va testlarni a&apos;lo topshirish orqali nishonlarni oching
              </p>
            </div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full">
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
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isEarned
                      ? 'border-amber-300 dark:border-amber-700 bg-gradient-to-b from-amber-500/10 to-transparent shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 opacity-40 grayscale'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white shadow-md bg-gradient-to-r ${badge.color}`}>
                    <BadgeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {badge.description}
                  </p>
                  <span className={`inline-block mt-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isEarned 
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' 
                      : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {isEarned ? 'Egalik qilindi' : 'Qulflangan'}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Test Results and Learning History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test Scores */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              Test natijalari
            </h2>

            {completedLessons.length === 0 ? (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-6 text-center italic">
                Hali testlar topshirilmagan. Darslarni boshlab birinchi testingizni topshiring!
              </p>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {completedLessons.map((p) => {
                  const lessonObj = allLessonsMap.find((l) => l.id === p.lessonId);
                  return (
                    <div
                      key={p.lessonId}
                      className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs"
                    >
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
                          {lessonObj?.title || p.lessonId}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {p.completedAt ? new Date(p.completedAt).toLocaleDateString() : 'Bajarildi'}
                        </span>
                      </div>
                      <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm">
                        {p.quizScore ?? 100}%
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* O'rganish tarixi (Learning History) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              So&apos;nggi faollik va o&apos;rganish tarixi
            </h2>

            {completedLessons.length === 0 ? (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-6 text-center italic">
                Hozircha faollik mavjud emas.
              </p>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {completedLessons.slice(-5).reverse().map((p) => {
                  const lessonObj = allLessonsMap.find((l) => l.id === p.lessonId);
                  return (
                    <div
                      key={p.lessonId}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <div className="flex-1 truncate">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {lessonObj?.title || p.lessonId}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                          Dars muvaffaqiyatli yakunlandi
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
