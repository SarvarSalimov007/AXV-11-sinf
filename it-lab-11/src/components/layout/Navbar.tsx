'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import {
  Laptop, Sun, Moon, Menu, X, BookOpen, Code2,
  FolderGit2, LayoutDashboard, User, LogOut, ChevronDown,
  Home, Sparkles, Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Bosh sahifa', icon: Home },
  { href: '/darslar', label: 'Darslar', icon: BookOpen },
  { href: '/loyihalar', label: 'Loyihalar', icon: FolderGit2 },
  { href: '/code-editor', label: 'Kod Muharriri', icon: Code2 },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/sertifikat', label: 'Sertifikat', icon: Award },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, user, setUser, setShowAuthModal } = useAppStore();
  const getTotalProgress = useAppStore((s) => s.getTotalProgress);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll for elevated style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLogout = () => {
    setUser(null);
    setUserDropdown(false);
  };

  const progress = getTotalProgress();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        'backdrop-blur-2xl bg-white/70 dark:bg-slate-950/70',
        scrolled
          ? 'shadow-lg shadow-blue-500/5 dark:shadow-blue-500/10 border-b border-blue-200/30 dark:border-blue-500/20'
          : 'border-b border-gray-200/40 dark:border-gray-700/40'
      )}
    >
      {/* Subtle bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
            {/* Animated pulse ring */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 animate-ping opacity-20" />
            <Laptop className="relative h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            IT LAB 11
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 group',
                  isActive
                    ? 'bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 text-blue-700 dark:from-blue-500/15 dark:via-indigo-500/15 dark:to-purple-500/15 dark:text-blue-300'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                )}
              >
                <Icon className={cn(
                  'h-4 w-4 transition-colors duration-300',
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-500'
                )} />
                {link.label}
                {/* Animated bottom underline on hover */}
                <span
                  className={cn(
                    'absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full transition-all duration-300 ease-out',
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-x-100'
                      : 'bg-blue-500/60 scale-x-0 group-hover:scale-x-100'
                  )}
                  style={{ transformOrigin: 'left center' }}
                />
                {/* Active pill glow */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.85 }}
            className={cn(
              'relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300',
              'text-gray-500 hover:bg-gray-100/80 hover:text-gray-900',
              'dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
            )}
            aria-label="Mavzuni almashtirish"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="absolute"
                >
                  <Sun className="h-5 w-5 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="absolute"
                >
                  <Moon className="h-5 w-5 text-indigo-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* User section */}
          {user ? (
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <motion.button
                onClick={() => setUserDropdown(!userDropdown)}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-3 py-1.5 transition-all duration-300',
                  'hover:bg-gray-100/80 dark:hover:bg-white/10',
                  userDropdown && 'bg-gray-100/80 dark:bg-white/10'
                )}
              >
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-blue-500/25 ring-2 ring-white/50 dark:ring-white/20">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 max-w-[100px] truncate">
                  {user.name}
                </span>
                <motion.div
                  animate={{ rotate: userDropdown ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </motion.div>
              </motion.button>

              {/* Premium dropdown */}
              <AnimatePresence>
                {userDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -4 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-2 shadow-2xl shadow-blue-500/10"
                  >
                    {/* User card */}
                    <div className="mb-2 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/40 dark:to-purple-950/40 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-blue-500/25">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {user.name}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={cn(
                              'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                              user.role === 'teacher'
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
                            )}>
                              <Sparkles className="h-2.5 w-2.5" />
                              {user.role === 'teacher' ? "O'qituvchi" : "O'quvchi"}
                            </span>
                            {user.grade && (
                              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                                {user.grade}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setUserDropdown(false)}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-200 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <div className="my-1 mx-2 border-t border-gray-200/60 dark:border-gray-700/60" />
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 transition-all duration-200 hover:bg-red-50/80 dark:hover:bg-red-900/20"
                    >
                      <LogOut className="h-4 w-4" />
                      Chiqish
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              onClick={() => setShowAuthModal(true)}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                'hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all duration-300',
                'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600',
                'shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40',
                'animate-pulse [animation-duration:3s]'
              )}
            >
              <User className="h-4 w-4" />
              Kirish
            </motion.button>
          )}

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.85 }}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-xl lg:hidden transition-colors',
              'text-gray-500 hover:bg-gray-100/80 hover:text-gray-900',
              'dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
            )}
            aria-label="Menyu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Progress bar ── */}
      {progress > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px]">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-r-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blur backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />

            {/* Content panel */}
            <motion.div
              className={cn(
                'relative z-10 mx-4 mt-4 rounded-2xl border border-white/20 dark:border-white/10',
                'bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl',
                'p-5 shadow-2xl shadow-blue-500/10',
                'max-h-[calc(100vh-6rem)] overflow-y-auto'
              )}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* User info on mobile */}
              {user && (
                <motion.div
                  className="mb-4 flex items-center gap-3 rounded-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/40 dark:to-purple-950/40 p-3.5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-blue-500/25 ring-2 ring-white/50 dark:ring-white/20">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={cn(
                        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                        user.role === 'teacher'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
                      )}>
                        <Sparkles className="h-2.5 w-2.5" />
                        {user.role === 'teacher' ? "O'qituvchi" : "O'quvchi"}
                      </span>
                      {user.grade && (
                        <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                          {user.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Nav links with staggered animation */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * (i + 1), ease: 'easeOut' }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 text-blue-700 dark:from-blue-500/15 dark:via-indigo-500/15 dark:to-purple-500/15 dark:text-blue-300'
                            : 'text-gray-600 hover:bg-gray-100/60 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white'
                        )}
                      >
                        <Icon className={cn(
                          'h-5 w-5',
                          isActive ? 'text-blue-600 dark:text-blue-400' : ''
                        )} />
                        {link.label}
                        {isActive && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="my-3 border-t border-gray-200/60 dark:border-gray-700/60" />

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * (navLinks.length + 1) }}
              >
                {user ? (
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 transition-all duration-200 hover:bg-red-50/80 dark:hover:bg-red-900/20"
                  >
                    <LogOut className="h-5 w-5" />
                    Chiqish
                  </button>
                ) : (
                  <button
                    onClick={() => { setShowAuthModal(true); setMobileOpen(false); }}
                    className={cn(
                      'flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white',
                      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600',
                      'shadow-lg shadow-blue-500/30'
                    )}
                  >
                    <User className="h-5 w-5" />
                    Kirish
                  </button>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Navbar };
