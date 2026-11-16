'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Code2, Server, Cloud, Briefcase, Search, 
  Clock, CheckCircle2, ChevronRight, Award, Sparkles, Filter 
} from 'lucide-react';
import { modules } from '@/data/courses';
import { useAppStore } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

const iconMap: Record<string, any> = {
  Code2,
  Server,
  Cloud,
  Briefcase
};

export default function DarslarPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const { getModuleProgress, getLessonProgress, getTotalProgress } = useAppStore();

  const totalProgress = getTotalProgress();

  const filteredModules = modules.map((mod) => {
    const filteredLessons = mod.lessons.filter((l) => {
      const matchesSearch = 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = 
        selectedDifficulty === 'all' || l.difficulty === selectedDifficulty;
      return matchesSearch && matchesDifficulty;
    });
    return { ...mod, filteredLessons };
  });

  const totalLessonsCount = modules.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            11-sinf o&apos;quv dasturi asosida
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            IT LAB 11 — O&apos;quv Kurslari
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
            4 ta asosiy bosqich, {totalLessonsCount} ta amaliy dars va 4 ta yirik modul loyihasi. 
            Noldan boshlab zamonaviy IT mutaxassisi darajasigacha o&apos;rganing.
          </p>

          {/* Overall Progress Bar */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span className="flex items-center gap-2 text-white">
                <Award className="w-4 h-4 text-amber-400" />
                Umumiy o&apos;zlashtirish darajasi:
              </span>
              <span className="text-cyan-300 text-base">{totalProgress}%</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700"
                style={{ width: `${Math.max(totalProgress, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Filters */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Dars mavzusi yoki texnologiya bo'yicha qidiruv (masalan: Docker, Git, REST)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 ml-1" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Barcha darajalar</option>
              <option value="boshlangich">Boshlang&apos;ich</option>
              <option value="orta">O&apos;rta</option>
              <option value="yuqori">Yuqori</option>
            </select>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-12">
          {filteredModules.map((module, mIdx) => {
            const Icon = iconMap[module.icon] || BookOpen;
            const progress = getModuleProgress(module.id);

            return (
              <section 
                key={module.id} 
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                {/* Module Header Banner */}
                <div className={`p-6 sm:p-8 bg-gradient-to-r ${module.gradient} text-white relative overflow-hidden`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-3.5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                          {mIdx + 1}-BOSQICH
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                          {module.title}
                        </h2>
                        <p className="mt-1 text-sm text-white/90 max-w-2xl line-clamp-2">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <Link 
                      href={`/darslar/${module.id}`}
                      className="self-start sm:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-md hover:scale-105 transition-all"
                    >
                      Barcha darslar
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Module Progress in Header */}
                  <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-medium">
                    <span>O&apos;zlashtirish: {progress}%</span>
                    <span>{module.lessons.length} ta dars • 1 ta amaliy loyiha</span>
                  </div>
                </div>

                {/* Lessons Grid */}
                <div className="p-6 sm:p-8">
                  {module.filteredLessons.length === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center italic">
                      Qidiruvingiz bo&apos;yicha ushbu modulda dars topilmadi.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {module.filteredLessons.map((lesson) => {
                        const lProgress = getLessonProgress(lesson.id);
                        const isDone = lProgress?.completed;

                        return (
                          <Link
                            key={lesson.id}
                            href={`/darslar/${module.id}/${lesson.id}`}
                            className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center">
                                  #{lesson.order}
                                </span>
                                {isDone ? (
                                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Bajarildi
                                  </span>
                                ) : (
                                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 capitalize px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-700/60">
                                    {lesson.difficulty}
                                  </span>
                                )}
                              </div>

                              <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {lesson.title}
                              </h3>
                              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                {lesson.description}
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {lesson.duration}
                              </span>
                              <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                                O&apos;tish <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Module Capstone Project Teaser */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-800/80 dark:to-blue-950/40 border border-blue-200/50 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        Modul Yakuniy Loyihasi
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {module.project.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                        {module.project.description}
                      </p>
                    </div>
                    <Link
                      href={`/loyihalar`}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shrink-0"
                    >
                      Loyihani ko&apos;rish
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
