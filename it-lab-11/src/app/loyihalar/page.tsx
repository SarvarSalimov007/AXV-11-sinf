'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FolderGit2, CheckCircle2, Code2, Server, Cloud, 
  Rocket, CheckSquare, Sparkles, Send, Github, 
  ExternalLink, ChevronDown, ChevronUp, Clock, Award
} from 'lucide-react';
import { modules } from '@/data/courses';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

const projectIcons = [Code2, Server, Cloud, Rocket];

export default function LoyihalarPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [submittedProjects, setSubmittedProjects] = useState<Record<number, string>>({});
  const [githubUrlInput, setGithubUrlInput] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const activeModule = modules[activeProjectIdx];
  const activeProject = activeModule.project;
  const ActiveIcon = projectIcons[activeProjectIdx] || FolderGit2;

  const handleSubmitLoyiha = (e: React.FormEvent) => {
    e.preventDefault();
    if (!githubUrlInput.trim()) return;

    setSubmittedProjects((prev) => ({
      ...prev,
      [activeProjectIdx]: githubUrlInput
    }));
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setGithubUrlInput('');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Amaliyotga 70% yo&apos;naltirilgan ta&apos;lim
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Amaliy Modul Loyihalari
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
            Har bir modul yakunida real biznes va jamiyat uchun ahamiyatli 4 ta yirik loyihani bajarasiz. 
            Bu loyihalar sizning haqiqiy professional portfoioingizning asosini tashkil qiladi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {modules.map((mod, idx) => {
            const Icon = projectIcons[idx] || FolderGit2;
            const isSelected = activeProjectIdx === idx;
            const isSubmitted = !!submittedProjects[idx];

            return (
              <button
                key={mod.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-white dark:bg-slate-900 shadow-md ring-2 ring-blue-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isSelected 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSubmitted ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Topshirildi
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-500 uppercase">
                        {idx + 1}-Bosqich
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1">
                    {mod.project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {mod.title}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {isSelected ? 'Tanlangan loyiha' : 'Batafsil ko\'rish →'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Full Details */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Project Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {activeProjectIdx + 1}-BOSQICH YAKUNIY LOYIHASI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {activeProject.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                Tavsiya muddati: 1 hafta
              </span>
            </div>
          </div>

          {/* Objective & Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Loyiha maqsadi:
            </h3>
            <p className="text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {activeProject.description}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Qo&apos;llaniladigan texnologik stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Tasks & Steps Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Step-by-step Tasks */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-blue-600" />
                Bosqichma-bosqich vazifalar ro&apos;yxati:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activeProject.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {tIdx + 1}
                    </span>
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evaluation Criteria */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Baholash mezonlari:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activeProject.criteria.map((cr, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{cr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Submission Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white space-y-4">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 text-cyan-300">
                <Github className="w-5 h-5" />
                Loyihani topshirish (GitHub repozitoriy havolasi)
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Kodingizni GitHub ga yuklab, repozitoriy havolasini o&apos;qituvchiga tekshirish uchun yuboring.
              </p>
            </div>

            <form onSubmit={handleSubmitLoyiha} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                required
                placeholder="https://github.com/sizning-profilingiz/loyiha-nomi"
                value={githubUrlInput}
                onChange={(e) => setGithubUrlInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
                Topshirish
              </button>
            </form>

            {submitSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Loyiha muvaffaqiyatli topshirildi! O&apos;qituvchi tez orada kodingizni ko&apos;rib chiqib baho qo&apos;yadi.
              </div>
            )}

            {submittedProjects[activeProjectIdx] && !submitSuccess && (
              <div className="text-xs text-cyan-200 flex items-center gap-2">
                <span>Topshirilgan havola:</span>
                <a 
                  href={submittedProjects[activeProjectIdx]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono underline text-white flex items-center gap-1"
                >
                  {submittedProjects[activeProjectIdx]}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
