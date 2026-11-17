import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProgress {
  lessonId: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
}

interface User {
  id: string;
  name: string;
  role: 'student' | 'teacher';
  avatar?: string;
  grade: string;
  joinedAt: string;
}

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
  progress: UserProgress[];
  updateProgress: (lessonId: string, completed: boolean, quizScore?: number) => void;
  getLessonProgress: (lessonId: string) => UserProgress | undefined;
  getModuleProgress: (moduleId: string) => number;
  getTotalProgress: () => number;
  totalScore: number;
  addScore: (points: number) => void;
  badges: string[];
  addBadge: (badge: string) => void;
  activeLessonId: string | null;
  setActiveLessonId: (id: string | null) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const MODULE_LESSON_COUNTS: Record<string, number> = {
  'module-1': 8,
  'module-2': 8,
  'module-3': 8,
  'module-4': 12,
};

const TOTAL_LESSONS = 36;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      // User
      user: null,
      setUser: (user) => set({ user }),

      // Progress
      progress: [],
      updateProgress: (lessonId, completed, quizScore) =>
        set((state) => {
          const existing = state.progress.find((p) => p.lessonId === lessonId);
          if (existing) {
            return {
              progress: state.progress.map((p) =>
                p.lessonId === lessonId
                  ? {
                      ...p,
                      completed,
                      quizScore: quizScore !== undefined ? quizScore : p.quizScore,
                      completedAt: completed ? new Date().toISOString() : p.completedAt,
                    }
                  : p
              ),
            };
          }
          return {
            progress: [
              ...state.progress,
              {
                lessonId,
                completed,
                quizScore: quizScore !== undefined ? quizScore : null,
                completedAt: completed ? new Date().toISOString() : null,
              },
            ],
          };
        }),

      getLessonProgress: (lessonId) => {
        return get().progress.find((p) => p.lessonId === lessonId);
      },

      getModuleProgress: (moduleId) => {
        const { progress } = get();
        const totalLessons = MODULE_LESSON_COUNTS[moduleId] || 0;
        if (totalLessons === 0) return 0;
        const completedCount = progress.filter(
          (p) => p.lessonId.startsWith(moduleId) && p.completed
        ).length;
        return completedCount / totalLessons;
      },

      getTotalProgress: () => {
        const { progress } = get();
        const completedCount = progress.filter((p) => p.completed).length;
        return completedCount / TOTAL_LESSONS;
      },

      // Score
      totalScore: 0,
      addScore: (points) =>
        set((state) => ({ totalScore: state.totalScore + points })),

      // Badges
      badges: [],
      addBadge: (badge) =>
        set((state) => ({
          badges: state.badges.includes(badge)
            ? state.badges
            : [...state.badges, badge],
        })),

      // Active lesson
      activeLessonId: null,
      setActiveLessonId: (id) => set({ activeLessonId: id }),

      // Auth modal
      showAuthModal: false,
      setShowAuthModal: (show) => set({ showAuthModal: show }),
    }),
    {
      name: 'it-lab-11-storage',
    }
  )
);
