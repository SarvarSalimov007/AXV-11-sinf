'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  BookOpen, Lightbulb, Code2, CheckCircle2, FileText,
  ChevronLeft, ChevronRight, Clock, Award, Play,
  Copy, Check, ArrowRight, HelpCircle, AlertCircle, RefreshCw,
  Sparkles, CheckSquare, ExternalLink
} from 'lucide-react';
import { getLessonById, getModuleById } from '@/data/courses';
import { useAppStore } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

export default function LessonPage() {
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const lessonId = params?.lessonId as string;

  const data = getLessonById(moduleId, lessonId);
  if (!data) {
    notFound();
  }

  const { module, lesson } = data;
  const { updateProgress, getLessonProgress, addScore, addBadge } = useAppStore();

  const [activeTab, setActiveTab] = useState<'nazariya' | 'hayotiy' | 'amaliyot' | 'test' | 'xulosa'>('nazariya');

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [lessonFinished, setLessonFinished] = useState(false);

  const lessonProgress = getLessonProgress(lesson.id);
  const isCompleted = lessonProgress?.completed;

  // Previous and Next lessons
  const currentIndex = module.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? module.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < module.lessons.length - 1 ? module.lessons[currentIndex + 1] : null;

  // Handle quiz answer selection
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  // Submit Quiz
  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    lesson.content.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePercent = Math.round((correctCount / lesson.content.quiz.length) * 100);
    updateProgress(lesson.id, true, scorePercent);
    addScore(scorePercent);

    if (scorePercent >= 90) {
      addBadge('Test chempioni');
    }
    addBadge('Birinchi qadam');
  };

  // Reset Quiz
  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // Complete lesson manually
  const handleFinishLesson = () => {
    updateProgress(lesson.id, true, 100);
    addScore(50);
    addBadge('Birinchi qadam');
    setLessonFinished(true);
  };

  // Copy code to clipboard
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Calculate Quiz Score
  const calculateScore = () => {
    let correct = 0;
    lesson.content.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) correct++;
    });
    return {
      correct,
      total: lesson.content.quiz.length,
      percentage: Math.round((correct / lesson.content.quiz.length) * 100)
    };
  };

  const scoreResult = quizSubmitted ? calculateScore() : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Top Breadcrumb & Lesson Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-16 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link href="/darslar" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Kurslar
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href={`/darslar/${module.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {module.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              #{lesson.order} {lesson.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
            {isCompleted ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Yakunlangan
              </span>
            ) : (
              <button
                onClick={handleFinishLesson}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all border border-blue-200 dark:border-blue-800"
              >
                <Check className="w-3.5 h-3.5" />
                Tugallandi deb belgilash
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Main Content (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          {/* Lesson Title Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                {lesson.order}-dars
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {lesson.duration}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 capitalize px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                {lesson.difficulty}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {lesson.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lesson.description}
            </p>

            {/* Dars maqsadi (Learning objective) */}
            <div className="mt-5 p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide">
                  Dars maqsadi
                </h4>
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 mt-0.5">
                  Ushbu dars yakunida siz {lesson.title.toLowerCase()} bo&apos;yicha mustahkam nazariy asosga ega bo&apos;lasiz va amaliy mashg&apos;ulot orqali bilimlaringizni amalda mustahkamlaysiz.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Tabs Header */}
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setActiveTab('nazariya')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${activeTab === 'nazariya'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <BookOpen className="w-4 h-4" />
              Nazariya (30%)
            </button>

            <button
              onClick={() => setActiveTab('hayotiy')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${activeTab === 'hayotiy'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <Lightbulb className="w-4 h-4" />
              Hayotiy misol
            </button>

            <button
              onClick={() => setActiveTab('amaliyot')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${activeTab === 'amaliyot'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <Code2 className="w-4 h-4" />
              Amaliyot (70%)
            </button>

            <button
              onClick={() => setActiveTab('test')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${activeTab === 'test'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <HelpCircle className="w-4 h-4" />
              Mini-test ({lesson.content.quiz.length})
            </button>

            <button
              onClick={() => setActiveTab('xulosa')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${activeTab === 'xulosa'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              <FileText className="w-4 h-4" />
              Xulosa
            </button>
          </div>

          {/* TAB 1: NAZARIYA */}
          {activeTab === 'nazariya' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Nazariy tushunchalar
                </h2>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
                {lesson.content.theory.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="whitespace-pre-line leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Visual Schema Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800">
                <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-cyan-300">
                  <Sparkles className="w-4 h-4" />
                  Mavzuning Vizual Sxemasi va Tushuntirishi
                </h3>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-blue-200 overflow-x-auto leading-relaxed">
                  [Kiruvchi Ma&apos;lumot] ➔ [ {lesson.title.toUpperCase()} ] ➔ [Kutilgan Samarali Natija]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Toza Kod, Xavfsizlik va Barqarorlik]
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveTab('hayotiy')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Hayotiy misolga o&apos;tish
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HAYOTIY MISOL */}
          {activeTab === 'hayotiy' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Kundalik hayot bilan bog&apos;lanish
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-amber-100 leading-relaxed text-sm sm:text-base">
                <p className="leading-relaxed whitespace-pre-line font-medium">
                  {lesson.content.realWorldExample}
                </p>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setActiveTab('nazariya')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Nazariyaga qaytish
                </button>
                <button
                  onClick={() => setActiveTab('amaliyot')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Amaliyotga o&apos;tish (70%)
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: AMALIYOT (70%) */}
          {activeTab === 'amaliyot' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Amaliy mashg&apos;ulot va kod namunalari
                  </h2>
                </div>
                <Link
                  href="/code-editor"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white text-xs font-bold transition-all border border-purple-200 dark:border-purple-800"
                >
                  <Play className="w-3.5 h-3.5" />
                  Kod muharririda ochish
                </Link>
              </div>

              {/* Practical Task Card */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                <h3 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                  <CheckSquare className="w-4 h-4" />
                  Amaliy topshiriq:
                </h3>
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {lesson.content.practicalTask}
                </p>
              </div>

              {/* Code Example (if available) */}
              {lesson.content.codeExample && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Til: {lesson.content.codeExample.language}
                    </span>
                    <button
                      onClick={() => handleCopyCode(lesson.content.codeExample!.code)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-all"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          Nusxalandi!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Kodni nusxalash
                        </>
                      )}
                    </button>
                  </div>

                  <div className="rounded-2xl bg-slate-950 text-slate-100 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-inner">
                    <pre className="whitespace-pre-wrap leading-relaxed">
                      <code>{lesson.content.codeExample.code}</code>
                    </pre>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    ℹ️ {lesson.content.codeExample.explanation}
                  </p>
                </div>
              )}

              {/* Mustaqil vazifa */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                  💡 Mustaqil topshiriq:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Yuqoridagi kod namunasini kompyuteringizda yoki bizning <Link href="/code-editor" className="text-blue-600 dark:text-blue-400 underline font-semibold">Kod Muharriri</Link> sahifamizda o&apos;zingiz mustaqil yozib ko&apos;ring va natijani tekshiring.
                </p>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setActiveTab('hayotiy')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Ortga
                </button>
                <button
                  onClick={() => setActiveTab('test')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  Mini-testni topshirish
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: MINI-TEST */}
          {activeTab === 'test' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Bilimlarni sinash mini-testi ({lesson.content.quiz.length} ta savol)
                  </h2>
                </div>
                {quizSubmitted && (
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Qayta topshirish
                  </button>
                )}
              </div>

              {/* Result Banner if submitted */}
              {quizSubmitted && scoreResult && (
                <div className={`p-5 rounded-2xl border ${scoreResult.percentage >= 70
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-100'
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Test natijasi: {scoreResult.percentage}%
                    </span>
                    <span className="text-sm font-semibold">
                      {scoreResult.correct} / {scoreResult.total} to&apos;g&apos;ri javob
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm">
                    {scoreResult.percentage >= 70
                      ? "Ajoyib natija! Siz ushbu dars mavzusini a'lo darajada o'zlashtirdingiz."
                      : "Yaxshi urinish! Noto'g'ri javoblarning izohlarini o'rganib chiqib, yana bir bor urinib ko'ring."}
                  </p>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-6">
                {lesson.content.quiz.map((q, qIdx) => {
                  const userChoice = selectedAnswers[q.id];
                  const isAnswered = userChoice !== undefined;
                  const isCorrect = userChoice === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${quizSubmitted
                          ? isCorrect
                            ? 'border-emerald-400 dark:border-emerald-600 bg-emerald-50/30 dark:bg-emerald-950/20'
                            : 'border-rose-400 dark:border-rose-600 bg-rose-50/30 dark:bg-rose-950/20'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'
                        }`}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4">
                        {qIdx + 1}. {q.question}
                      </h4>

                      <div className="space-y-2.5">
                        {q.options.map((option, optIdx) => {
                          const isSelected = userChoice === optIdx;
                          const isThisCorrect = optIdx === q.correctAnswer;

                          let optionStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200';

                          if (quizSubmitted) {
                            if (isThisCorrect) {
                              optionStyle = 'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-semibold';
                            } else if (isSelected && !isThisCorrect) {
                              optionStyle = 'border-rose-500 bg-rose-100/70 dark:bg-rose-950 text-rose-900 dark:text-rose-200';
                            }
                          } else if (isSelected) {
                            optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold shadow-sm';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                            >
                              <span>{option}</span>
                              {quizSubmitted && isThisCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                              )}
                              {quizSubmitted && isSelected && !isThisCorrect && (
                                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation after submit */}
                      {quizSubmitted && (
                        <div className="mt-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <strong>💡 Izoh:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              {!quizSubmitted && (
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < lesson.content.quiz.length}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-all"
                  >
                    Natijalarni tekshirish
                  </button>
                </div>
              )}

              {quizSubmitted && (
                <div className="pt-4 flex justify-between items-center">
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 font-semibold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Qayta topshirish
                  </button>
                  <button
                    onClick={() => setActiveTab('xulosa')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    Xulosaga o&apos;tish
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: XULOSA */}
          {activeTab === 'xulosa' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Dars xulosasi va asosiy xulosalar
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-emerald-100 text-sm sm:text-base leading-relaxed">
                <p className="leading-relaxed font-medium">
                  {lesson.content.summary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Bu darsda siz o&apos;zlashtirgan asosiy ko&apos;nikmalar:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{lesson.title} mavzusining nazariy mohiyati</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Haqiqiy IT sohasidagi amaliy tatbiqi va hayotiy misoli</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Mustaqil kod yozish va mini-test savollari orqali bilimlarni mustahkamlash</span>
                  </li>
                </ul>
              </div>

              {/* Complete Lesson Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleFinishLesson}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Darsni muvaffaqiyatli yakunlash
                </button>

                {nextLesson && (
                  <Link
                    href={`/darslar/${module.id}/${nextLesson.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    Keyingi darsga o&apos;tish
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Bottom Prev / Next Navigation Bar */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
            {prevLesson ? (
              <Link
                href={`/darslar/${module.id}/${prevLesson.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Oldingi dars:</span>
                <span className="truncate max-w-[120px] sm:max-w-[180px]">{prevLesson.title}</span>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <Link
                href={`/darslar/${module.id}/${nextLesson.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <span className="hidden sm:inline">Keyingi dars:</span>
                <span className="truncate max-w-[120px] sm:max-w-[180px]">{nextLesson.title}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href={`/darslar/${module.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                Modulni yakunlash
                <CheckCircle2 className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Right Sidebar: Module Lessons List (1 col) */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-32">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
              {module.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Ushbu moduldagi barcha darslar:
            </p>

            <div className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {module.lessons.map((l, idx) => {
                const isCurrent = l.id === lesson.id;
                const isDone = getLessonProgress(l.id)?.completed;

                return (
                  <Link
                    key={l.id}
                    href={`/darslar/${module.id}/${l.id}`}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-all ${isCurrent
                        ? 'bg-blue-600 text-white font-bold shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] shrink-0 font-bold ${isCurrent
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                        {idx + 1}
                      </span>
                      <span className="truncate">{l.title}</span>
                    </div>

                    {isDone && (
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-white' : 'text-emerald-500'
                        }`} />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/code-editor"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs transition-colors"
              >
                <Code2 className="w-4 h-4" />
                Interaktiv Kod Muharriri
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
