'use client';

import { useState } from 'react';
import { 
  Users, Award, BookOpen, PlusCircle, CheckCircle2, 
  Search, Filter, Send, MessageSquare, BarChart3, 
  GraduationCap, Sparkles, AlertCircle, Edit, CheckSquare
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { modules } from '@/data/courses';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

// Mock student roster for teacher view
interface StudentData {
  id: string;
  name: string;
  grade: string;
  progress: number;
  avgScore: number;
  lastActive: string;
  status: 'faol' | 'nofaol';
  completedTasks: number;
}

const mockStudents: StudentData[] = [
  { id: '1', name: 'Abdullayev Jasur', grade: '11-A', progress: 85, avgScore: 92, lastActive: 'Bugun, 14:20', status: 'faol', completedTasks: 28 },
  { id: '2', name: 'Karimova Madina', grade: '11-A', progress: 94, avgScore: 98, lastActive: 'Bugun, 16:05', status: 'faol', completedTasks: 34 },
  { id: '3', name: 'Toshmatov Bobur', grade: '11-B', progress: 68, avgScore: 78, lastActive: 'Kecha, 11:30', status: 'faol', completedTasks: 22 },
  { id: '4', name: 'Rahimova Nilufar', grade: '11-B', progress: 45, avgScore: 65, lastActive: '3 kun oldin', status: 'nofaol', completedTasks: 15 },
  { id: '5', name: 'Umarov Sardor', grade: '11-A', progress: 78, avgScore: 88, lastActive: 'Bugun, 10:15', status: 'faol', completedTasks: 26 },
  { id: '6', name: 'Nazarova Laylo', grade: '11-C', progress: 91, avgScore: 95, lastActive: 'Bugun, 15:40', status: 'faol', completedTasks: 32 },
  { id: '7', name: 'Ismoilov Amir', grade: '11-B', progress: 52, avgScore: 70, lastActive: '4 kun oldin', status: 'nofaol', completedTasks: 18 },
  { id: '8', name: 'Qodirova Sabina', grade: '11-C', progress: 80, avgScore: 89, lastActive: 'Kecha, 18:00', status: 'faol', completedTasks: 27 },
];

export default function TeacherPanelPage() {
  const { user, setUser } = useAppStore();
  const [students, setStudents] = useState<StudentData[]>(mockStudents);
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Feedback modal
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  // New assignment modal
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskModule, setNewTaskModule] = useState(modules[0].id);
  const [newTaskDeadline, setNewTaskDeadline] = useState('');
  const [taskCreatedSuccess, setTaskCreatedSuccess] = useState(false);

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || s.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setSelectedStudent(null);
      setFeedbackText('');
    }, 1500);
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTaskCreatedSuccess(true);
    setTimeout(() => {
      setTaskCreatedSuccess(false);
      setShowNewTaskModal(false);
      setNewTaskTitle('');
    }, 1500);
  };

  // Switch role to teacher for easy demo evaluation
  const setTeacherRole = () => {
    setUser({
      id: 'teacher-1',
      name: 'Rustam Karimov (Informatika O\'qituvchisi)',
      role: 'teacher',
      grade: '11-sinflar',
      joinedAt: '2024-09-01'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      <Navbar />
      <AuthModal />

      {/* Role Notice if not logged in as teacher */}
      {(!user || user.role !== 'teacher') && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-3 text-center text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-center justify-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Siz hozirda o&apos;qituvchi sifatida tizimga kirmagansiz. Test qilish uchun o&apos;qituvchi rejimini yoqing:</span>
          <button
            onClick={setTeacherRole}
            className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all"
          >
            O&apos;qituvchi rejimini yoqish
          </button>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs font-bold mb-3">
            <GraduationCap className="w-4 h-4" />
            Ustozlar boshqaruv portali
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            O&apos;qituvchi Paneli — IT LAB 11
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            11-sinf o&apos;quvchilarining dars o&apos;zlashtirishi, test ko&apos;rsatkichlari, topshiriqlar tekshiruvi va baholash monitoringi.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-xs text-blue-200 block">Jami o&apos;quvchilar</span>
              <span className="text-2xl font-black text-white mt-1 block">32 nafar</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-xs text-emerald-200 block">Bugun faollar</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">24 nafar</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-xs text-amber-200 block">O&apos;rtacha o&apos;zlashtirish</span>
              <span className="text-2xl font-black text-amber-300 mt-1 block">78.5%</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-xs text-purple-200 block">Topshirilgan loyihalar</span>
              <span className="text-2xl font-black text-purple-300 mt-1 block">18 ta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">
        {/* Controls: Search, Grade Filter & Create Task */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="O'quvchi ismi bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Barcha sinflar</option>
              <option value="11-A">11-A sinf</option>
              <option value="11-B">11-B sinf</option>
              <option value="11-C">11-C sinf</option>
            </select>
          </div>

          <button
            onClick={() => setShowNewTaskModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            Yangi topshiriq / test qo&apos;shish
          </button>
        </div>

        {/* Student Performance Table */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              O&apos;quvchilar ro&apos;yxati va natijalari
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Ko&apos;rsatilyapti: {filteredStudents.length} nafar o&apos;quvchi
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3.5"># O&apos;quvchi</th>
                  <th className="px-6 py-3.5">Sinf</th>
                  <th className="px-6 py-3.5">O&apos;zlashtirish</th>
                  <th className="px-6 py-3.5">O&apos;rtacha test bali</th>
                  <th className="px-6 py-3.5">Bajarilgan darslar</th>
                  <th className="px-6 py-3.5">So&apos;nggi faollik</th>
                  <th className="px-6 py-3.5 text-right">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredStudents.map((st, idx) => (
                  <tr key={st.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span>{st.name}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">
                      {st.grade}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${st.progress}%` }}
                          />
                        </div>
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                          {st.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-emerald-600 dark:text-emerald-400">
                      {st.avgScore}%
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                      {st.completedTasks} / 36
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">
                      {st.lastActive}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedStudent(st)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Tavsiya yuborish
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Feedback Modal */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-600" />
                {selectedStudent.name} uchun izoh va tavsiya
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sinf: {selectedStudent.grade} • Hozirgi progress: {selectedStudent.progress}%
              </p>

              <textarea
                rows={4}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Masalan: Docker darslaridagi amaliy vazifangiz a'lo bajarildi! Keyingi darsdagi CI/CD testlariga e'tibor qarating..."
                className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {feedbackSent ? (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Tavsiya o&apos;quvchiga muvaffaqiyatli yetkazildi!
                </div>
              ) : (
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Bekor qilish
                  </button>
                  <button
                    onClick={handleSendFeedback}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Yuborish
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* New Assignment Modal */}
        {showNewTaskModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in">
            <form onSubmit={handleCreateTask} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-blue-600" />
                Yangi topshiriq / test yaratish
              </h3>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Topshiriq nomi:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masalan: Dockerfile optimizatsiyasi bo'yicha amaliy test"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Qaysi modul uchun:
                </label>
                <select
                  value={newTaskModule}
                  onChange={(e) => setNewTaskModule(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white"
                >
                  {modules.map((m) => (
                    <option key={m.id} value={m.id}>{m.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Topshirish muddati (Deadline):
                </label>
                <input
                  type="date"
                  value={newTaskDeadline}
                  onChange={(e) => setNewTaskDeadline(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white"
                />
              </div>

              {taskCreatedSuccess ? (
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Yangi topshiriq muvaffaqiyatli saqlandi va barcha o&apos;quvchilarga e&apos;lon qilindi!
                </div>
              ) : (
                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowNewTaskModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    E&apos;lon qilish
                  </button>
                </div>
              )}
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
