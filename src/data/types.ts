export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonContent {
  theory: string;
  realWorldExample: string;
  practicalTask: string;
  codeExample?: {
    language: string;
    code: string;
    explanation: string;
  };
  quiz: QuizQuestion[];
  summary: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'boshlangich' | 'orta' | 'yuqori';
  order: number;
  content: LessonContent;
  icon: string;
}

export interface ModuleProject {
  title: string;
  description: string;
  tasks: string[];
  technologies: string[];
  criteria: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  lessons: Lesson[];
  project: ModuleProject;
}

