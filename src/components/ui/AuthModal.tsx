'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { X, User, UserPlus, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'login' | 'register';

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, setUser } = useAppStore();
  const [tab, setTab] = useState<Tab>('login');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('11-A');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus name input when modal opens
  useEffect(() => {
    if (showAuthModal) {
      setError('');
      setName('');
      setTimeout(() => nameInputRef.current?.focus(), 150);
    }
  }, [showAuthModal, tab]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowAuthModal(false);
    }
    if (showAuthModal) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [showAuthModal, setShowAuthModal]);

  if (!showAuthModal) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Iltimos, ismingizni kiriting');
      nameInputRef.current?.focus();
      return;
    }

    setLoading(true);

    // Simulate a brief delay for UX
    await new Promise((r) => setTimeout(r, 400));

    const newUser = {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).substring(2, 15),
      name: trimmedName,
      role: tab === 'register' ? role : ('student' as const),
      grade: tab === 'register' ? grade : '11-A',
      joinedAt: new Date().toISOString(),
    };

    setUser(newUser);
    setShowAuthModal(false);
    setLoading(false);
    setName('');
  };

  const switchTab = (newTab: Tab) => {
    setTab(newTab);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setShowAuthModal(false)}
      />

      {/* Modal card */}
      <div
        className={cn(
          'relative z-10 w-full max-w-md rounded-2xl border shadow-2xl',
          'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700',
          'animate-in fade-in zoom-in-95 duration-300'
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setShowAuthModal(false)}
          className={cn(
            'absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
            'text-gray-400 hover:bg-gray-100 hover:text-gray-600',
            'dark:hover:bg-gray-800 dark:hover:text-gray-300'
          )}
          aria-label="Yopish"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25">
            {tab === 'login' ? (
              <User className="h-6 w-6 text-white" />
            ) : (
              <UserPlus className="h-6 w-6 text-white" />
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {tab === 'login' ? 'Xush kelibsiz!' : "Ro'yxatdan o'tish"}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {tab === 'login'
              ? "IT LAB 11 ga kirish"
              : "Yangi hisob yarating"}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mx-6 mt-4 flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
          <button
            onClick={() => switchTab('login')}
            className={cn(
              'flex-1 rounded-lg py-2 text-sm font-medium transition-all duration-200',
              tab === 'login'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            Kirish
          </button>
          <button
            onClick={() => switchTab('register')}
            className={cn(
              'flex-1 rounded-lg py-2 text-sm font-medium transition-all duration-200',
              tab === 'register'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            )}
          >
            Ro&apos;yxatdan o&apos;tish
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Name field */}
          <div>
            <label
              htmlFor="auth-name"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Ism
            </label>
            <input
              ref={nameInputRef}
              id="auth-name"
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              placeholder="Ismingizni kiriting"
              className={cn(
                'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200',
                'bg-white dark:bg-gray-800',
                'text-gray-900 dark:text-white placeholder:text-gray-400',
                error
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              )}
            />
            {error && (
              <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{error}</p>
            )}
          </div>

          {/* Register-only fields */}
          {tab === 'register' && (
            <>
              {/* Grade select */}
              <div>
                <label
                  htmlFor="auth-grade"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Sinf
                </label>
                <select
                  id="auth-grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={cn(
                    'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200',
                    'bg-white dark:bg-gray-800',
                    'text-gray-900 dark:text-white',
                    'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  )}
                >
                  <option value="11-A">11-A</option>
                  <option value="11-B">11-B</option>
                  <option value="11-C">11-C</option>
                </select>
              </div>

              {/* Role radio */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rol
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'student' as const, label: "O'quvchi" },
                    { value: 'teacher' as const, label: "O'qituvchi" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200',
                        role === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600'
                      )}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={option.value}
                        checked={role === option.value}
                        onChange={(e) => setRole(e.target.value as 'student' | 'teacher')}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              'flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300',
              'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25',
              'hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5',
              'active:translate-y-0',
              'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg'
            )}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Kuting...
              </>
            ) : tab === 'login' ? (
              'Kirish'
            ) : (
              "Ro'yxatdan o'tish"
            )}
          </button>

          {/* Switch prompt */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            {tab === 'login' ? (
              <>
                Hisobingiz yo&apos;qmi?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('register')}
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Ro&apos;yxatdan o&apos;ting
                </button>
              </>
            ) : (
              <>
                Hisobingiz bormi?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('login')}
                  className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Kiring
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export { AuthModal };
