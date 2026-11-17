'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { 
  BookOpen, Code2, Server, Cloud, Briefcase, 
  Clock, CheckCircle2, ChevronLeft, ChevronRight, 
  ArrowRight, FolderGit2, CheckSquare, Sparkles 
} from 'lucide-react';
import { getModuleById } from '@/data/courses';
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

export default function ModulePage() {
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const module = getModuleById(moduleId);

  if (!module) {
    notFound();
  }

  const { getModuleProgress, getLessonProgress } = useAppStore();
  const progress = getModuleProgress(module.id);
  const Icon = iconMap[module.icon] || BookOpen;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Module Banner */}
      <section className={`bg-gradient-to-r ${module.gradient} text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/darslar"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Barcha kurslarga qaytish
          </Link>

          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-2">
                O&apos;quv Moduli
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {module.title}
              </h1>
            </div>
          </div>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed">
            {module.description}
          </p>

          {/* Progress Card */}
          <div className="mt-8 p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 max-w-xl">
            <div className="flex items-center justify-between text-sm font-semibold mb-2">
              <span className="text-white">Ushbu modul bo&apos;yicha o&apos;zlashtirish:</span>
              <span className="text-cyan-300 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-700"
                style={{ width: `${Math.max(progress, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Lessons List Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Darslar ketma-ketligi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Mavzularni ketma-ket o&apos;rganish tavsiya etiladi
              </p>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 px-3 py-1 rounded-full">
              Jami: {module.lessons.length} ta dars
            </span>
          </div>

          <div className="space-y-4">
            {module.lessons.map((lesson, idx) => {
              const lProgress = getLessonProgress(lesson.id);
              const isDone = lProgress?.completed;

              return (
                <Link
                  key={lesson.id}
                  href={`/darslar/${module.id}/${lesson.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isDone 
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {lesson.title}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 capitalize px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                          {lesson.difficulty}
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-1 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      {isDone ? "Qayta ko'rish" : "Boshlash"}
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Module Capstone Project Detailed Card */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              Modul Yakuniy Amaliy Loyihasi
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {module.project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {module.project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Kerakli texnologiyalar:
              </span>
              <div className="flex flex-wrap gap-2">
                {module.project.technologies.map((t) => (
                  <span 
                    key={t}
                    className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-xs font-medium text-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tasks & Criteria Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                  <CheckSquare className="w-4 h-4 text-cyan-400" />
                  Bajarilishi kerak bo&apos;lgan vazifalar:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {module.project.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Baholash mezonlari:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {module.project.criteria.map((cr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{cr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                href="/loyihalar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                Loyiha sahifasiga o&apos;tish
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
