'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { 
  X, User, UserPlus, Loader2, Calendar, 
  GraduationCap, AlertCircle, CheckCircle2, Sparkles,
  School, ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Tab = 'login' | 'register';

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, registerUser, loginUser } = useAppStore();
  
  const [tab, setTab] = useState<Tab>('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [grade, setGrade] = useState('11-A');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const firstNameInputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens or tab switches
  useEffect(() => {
    if (showAuthModal) {
      setError('');
      setSuccessMessage('');
      setTimeout(() => firstNameInputRef.current?.focus(), 150);
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
    setSuccessMessage('');

    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();

    if (!cleanFirst) {
      setError('Iltimos, ismingizni kiriting!');
      firstNameInputRef.current?.focus();
      return;
    }

    if (!cleanLast) {
      setError('Iltimos, familiyangizni kiriting!');
      return;
    }

    if (tab === 'register' && !birthDate) {
      setError("Iltimos, tug'ilgan sanangizni tanlang!");
      return;
    }

    setLoading(true);

    // Subtle natural delay
    await new Promise((r) => setTimeout(r, 350));

    if (tab === 'register') {
      const result = registerUser({
        firstName: cleanFirst,
        lastName: cleanLast,
        birthDate: birthDate,
        grade,
        role,
      });

      setLoading(false);

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccessMessage("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      setTimeout(() => {
        setShowAuthModal(false);
        setFirstName('');
        setLastName('');
        setBirthDate('');
      }, 500);

    } else {
      // Login mode
      const result = loginUser({
        firstName: cleanFirst,
        lastName: cleanLast,
        birthDate: birthDate || undefined,
      });

      setLoading(false);

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccessMessage("Xush kelibsiz!");
      setTimeout(() => {
        setShowAuthModal(false);
        setFirstName('');
        setLastName('');
        setBirthDate('');
      }, 500);
    }
  };

  const switchTab = (newTab: Tab) => {
    setTab(newTab);
    setError('');
    setSuccessMessage('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setShowAuthModal(false)}
      />

      {/* Modal card */}
      <div
        className={cn(
          'relative z-10 w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden',
          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800',
          'animate-in fade-in zoom-in-95 duration-300'
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setShowAuthModal(false)}
          className={cn(
            'absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl transition-colors cursor-pointer',
            'text-slate-400 hover:bg-slate-100 hover:text-slate-700',
            'dark:hover:bg-slate-800 dark:hover:text-slate-200'
          )}
          aria-label="Yopish"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="px-6 pt-7 pb-2 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/25">
            {tab === 'login' ? (
              <User className="h-7 w-7 text-white" />
            ) : (
              <UserPlus className="h-7 w-7 text-white" />
            )}
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {tab === 'login' ? 'Tizimga kirish' : "Ro'yxatdan o'tish"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {tab === 'login'
              ? "IT LAB 11 platformasidagi darslaringizni davom ettiring"
              : "Yangi 11-sinf o'quvchi hisobini yarating"}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mx-6 mt-4 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => switchTab('login')}
            className={cn(
              'flex-1 rounded-lg py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
              tab === 'login'
                ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Kirish
          </button>
          <button
            type="button"
            onClick={() => switchTab('register')}
            className={cn(
              'flex-1 rounded-lg py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
              tab === 'register'
                ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Ro&apos;yxatdan o&apos;tish
          </button>
        </div>

        {/* Error / Success Alert Banners */}
        {error && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300 font-semibold animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {successMessage && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-2.5 text-xs text-emerald-700 dark:text-emerald-300 font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          
          {/* Two-column First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="auth-first-name"
                className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                Ism
              </label>
              <input
                ref={firstNameInputRef}
                id="auth-first-name"
                type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); setError(''); }}
                placeholder="Sarvar"
                required
                className={cn(
                  'w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all duration-200',
                  'bg-white dark:bg-slate-800/80',
                  'text-slate-900 dark:text-white placeholder:text-slate-400',
                  'border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                )}
              />
            </div>

            <div>
              <label
                htmlFor="auth-last-name"
                className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                Familiya
              </label>
              <input
                id="auth-last-name"
                type="text"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); setError(''); }}
                placeholder="Salimov"
                required
                className={cn(
                  'w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all duration-200',
                  'bg-white dark:bg-slate-800/80',
                  'text-slate-900 dark:text-white placeholder:text-slate-400',
                  'border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                )}
              />
            </div>
          </div>

          {/* Date of Birth field */}
          <div>
            <label
              htmlFor="auth-birth-date"
              className="mb-1 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                Tug&apos;ilgan sana
              </span>
              {tab === 'login' && (
                <span className="text-[10px] text-slate-400 normal-case font-normal">(ixtiyoriy)</span>
              )}
            </label>
            <input
              id="auth-birth-date"
              type="date"
              value={birthDate}
              onChange={(e) => { setBirthDate(e.target.value); setError(''); }}
              required={tab === 'register'}
              className={cn(
                'w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all duration-200',
                'bg-white dark:bg-slate-800/80',
                'text-slate-900 dark:text-white placeholder:text-slate-400',
                'border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              )}
            />
          </div>

          {/* Register-only fields */}
          {tab === 'register' && (
            <div className="space-y-3 pt-1">
              {/* Grade select */}
              <div>
                <label
                  htmlFor="auth-grade"
                  className="mb-1 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
                  Sinf
                </label>
                <select
                  id="auth-grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className={cn(
                    'w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all duration-200',
                    'bg-white dark:bg-slate-800/80',
                    'text-slate-900 dark:text-white',
                    'border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                  )}
                >
                  <option value="11-A">11-A sinf</option>
                  <option value="11-B">11-B sinf</option>
                  <option value="11-C">11-C sinf</option>
                  <option value="11-D">11-D sinf</option>
                </select>
              </div>

              {/* Role selector */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Rol / Maqom
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { value: 'student' as const, label: "O'quvchi", desc: "11-sinf" },
                    { value: 'teacher' as const, label: "Ustoz", desc: "Informatika" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex flex-col items-center justify-center p-2.5 rounded-xl border cursor-pointer transition-all duration-200 text-center',
                        role === option.value
                          ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 ring-2 ring-blue-500/20'
                          : 'border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
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
                      <span className="text-xs font-bold">{option.label}</span>
                      <span className="text-[10px] text-slate-400">{option.desc}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              'mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 cursor-pointer',
              'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/25',
              'hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]',
              'active:scale-[0.98]',
              'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
            )}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Tekshirilmoqda...</span>
              </>
            ) : tab === 'login' ? (
              <>
                <ShieldCheck className="h-4 w-4" />
                <span>Tizimga kirish</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Ro&apos;yxatdan o&apos;tish</span>
              </>
            )}
          </button>

          {/* Switch prompt */}
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1">
            {tab === 'login' ? (
              <>
                Platformada yangimisiz?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('register')}
                  className="font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer"
                >
                  Ro&apos;yxatdan o&apos;ting
                </button>
              </>
            ) : (
              <>
                Oldin ro&apos;yxatdan o&apos;tganmisiz?{' '}
                <button
                  type="button"
                  onClick={() => switchTab('login')}
                  className="font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline cursor-pointer"
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
