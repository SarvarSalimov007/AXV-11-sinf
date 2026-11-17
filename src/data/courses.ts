import { Module } from './types';
import { module1 } from './modules/module1';
import { module2 } from './modules/module2';
import { module3 } from './modules/module3';
import { module4 } from './modules/module4';

export * from './types';

export const modules: Module[] = [
  module1,
  module2,
  module3,
  module4
];

export function getModuleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string) {
  const mod = getModuleById(moduleId);
  if (!mod) return undefined;
  const lesson = mod.lessons.find((l) => l.id === lessonId);
  return lesson ? { module: mod, lesson } : undefined;
}

export function getAllLessons() {
  return modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleTitle: m.title })));
}
