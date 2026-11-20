import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProgress {
  lessonId: string;
  completed: boolean;
  quizScore: number | null;
  completedAt: string | null;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  name: string; // `${firstName} ${lastName}`
  birthDate: string; // YYYY-MM-DD
  role: 'student' | 'teacher';
  avatar?: string;
  grade: string;
  joinedAt: string;
}

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  birthDate: string;
  grade: string;
  role: 'student' | 'teacher';
}

export interface AuthResult {
  success: boolean;
  message: string;
  user?: User;
}

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
  registeredUsers: User[];
  registerUser: (data: RegisterUserData) => AuthResult;
  loginUser: (data: { firstName: string; lastName: string; birthDate?: string }) => AuthResult;
  logoutUser: () => void;
  teacherName: string;
  setTeacherName: (name: string) => void;
  schoolName: string;
  setSchoolName: (name: string) => void;
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

const INITIAL_REGISTERED_USERS: User[] = [
  {
    id: 'demo-sarvar-007',
    firstName: 'Sarvar',
    lastName: 'Salimov',
    name: 'Sarvar Salimov',
    birthDate: '2007-04-12',
    role: 'student',
    grade: '11-A',
    joinedAt: '2024-09-01',
  },
  {
    id: 'demo-rustam-teacher',
    firstName: 'Rustam',
    lastName: 'Karimov',
    name: 'Rustam Karimov',
    birthDate: '1988-10-25',
    role: 'teacher',
    grade: '11-A',
    joinedAt: '2024-09-01',
  }
];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      // User & Auth State
      user: null,
      setUser: (user) => set({ user }),
      registeredUsers: INITIAL_REGISTERED_USERS,

      registerUser: (data) => {
        const cleanFirst = data.firstName.trim();
        const cleanLast = data.lastName.trim();
        const cleanDate = data.birthDate.trim();

        if (!cleanFirst || !cleanLast) {
          return {
            success: false,
            message: "Iltimos, ism va familiyangizni to'liq kiriting!",
          };
        }

        if (!cleanDate) {
          return {
            success: false,
            message: "Iltimos, tug'ilgan sanangizni tanlang!",
          };
        }

        // Check if user already exists (case-insensitive name check)
        const normFirst = cleanFirst.toLowerCase();
        const normLast = cleanLast.toLowerCase();

        const alreadyExists = get().registeredUsers.some(
          (u) =>
            u.firstName.trim().toLowerCase() === normFirst &&
            u.lastName.trim().toLowerCase() === normLast
        );

        if (alreadyExists) {
          return {
            success: false,
            message: "Bu foydalanuvchi oldin ro'yxatdan o'tgan",
          };
        }

        const newUser: User = {
          id: 'user-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
          firstName: cleanFirst,
          lastName: cleanLast,
          name: `${cleanFirst} ${cleanLast}`,
          birthDate: cleanDate,
          role: data.role || 'student',
          grade: data.grade || '11-A',
          joinedAt: new Date().toISOString().split('T')[0],
        };

        set((state) => ({
          registeredUsers: [...state.registeredUsers, newUser],
          user: newUser,
          showAuthModal: false,
        }));

        return {
          success: true,
          message: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
          user: newUser,
        };
      },

      loginUser: (data) => {
        const cleanFirst = data.firstName.trim().toLowerCase();
        const cleanLast = data.lastName.trim().toLowerCase();

        if (!cleanFirst || !cleanLast) {
          return {
            success: false,
            message: "Iltimos, ism va familiyangizni kiriting!",
          };
        }

        const foundUser = get().registeredUsers.find(
          (u) =>
            u.firstName.trim().toLowerCase() === cleanFirst &&
            u.lastName.trim().toLowerCase() === cleanLast
        );

        if (!foundUser) {
          return {
            success: false,
            message: "Bunday foydalanuvchi topilmadi! Iltimos, oldin ro'yxatdan o'ting.",
          };
        }

        set({ user: foundUser, showAuthModal: false });
        return {
          success: true,
          message: "Xush kelibsiz!",
          user: foundUser,
        };
      },

      logoutUser: () => set({ user: null }),

      // Teacher & School details for Certificates
      teacherName: 'Rustam Karimov',
      setTeacherName: (name) => set({ teacherName: name }),
      schoolName: '11-sonli ixtisoslashtirilgan umumta\'lim maktabi',
      setSchoolName: (name) => set({ schoolName: name }),

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
        return Math.round((completedCount / totalLessons) * 100);
      },

      getTotalProgress: () => {
        const { progress } = get();
        const completedCount = progress.filter((p) => p.completed).length;
        return Math.round((completedCount / TOTAL_LESSONS) * 100);
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
