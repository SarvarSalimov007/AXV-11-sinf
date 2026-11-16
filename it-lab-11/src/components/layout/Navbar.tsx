'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import {
  Laptop, Sun, Moon, Menu, X, BookOpen, Code2,
  FolderGit2, LayoutDashboard, User, LogOut, ChevronDown,
  Home,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Bosh sahifa', icon: Home },
  { href: '/darslar', label: 'Darslar', icon: BookOpen },
  { href: '/loyihalar', label: 'Loyihalar', icon: FolderGit2 },
  { href: '/code-editor', label: 'Kod Muharriri', icon: Code2 },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, user, setUser, setShowAuthModal } = useAppStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl',
        'border-gray-200/50 dark:border-gray-700/50'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
            <Laptop className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IT LAB 11
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              'relative flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300',
              'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
              'dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
            )}
            aria-label="Mavzuni almashtirish"
          >
            <Sun className={cn(
              'h-5 w-5 absolute transition-all duration-500',
              theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
            )} />
            <Moon className={cn(
              'h-5 w-5 absolute transition-all duration-500',
              theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            )} />
          </button>

          {/* User section */}
          {user ? (
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-1.5 transition-colors duration-200',
                  'hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white shadow-md">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 max-w-[100px] truncate">
                  {user.name}
                </span>
                <ChevronDown className={cn(
                  'h-4 w-4 text-gray-400 transition-transform duration-200',
                  userDropdown && 'rotate-180'
                )} />
              </button>

              {/* Dropdown */}
              <div className={cn(
                'absolute right-0 mt-2 w-56 origin-top-right rounded-xl border bg-white p-1.5 shadow-xl transition-all duration-200 dark:border-gray-700 dark:bg-gray-800',
                userDropdown
                  ? 'scale-100 opacity-100 pointer-events-auto'
                  : 'scale-95 opacity-0 pointer-events-none'
              )}>
                <div className="mb-1.5 border-b border-gray-100 px-3 py-2 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.role === 'teacher' ? "O'qituvchi" : "O'quvchi"}{user.grade ? ` · ${user.grade}` : ''}
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setUserDropdown(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <LogOut className="h-4 w-4" />
                  Chiqish
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className={cn(
                'hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-300',
                'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25',
                'hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5',
                'active:translate-y-0'
              )}
            >
              <User className="h-4 w-4" />
              Kirish
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg lg:hidden transition-colors',
              'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
              'dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
            )}
            aria-label="Menyu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile slide-out panel */}
      <div
        className={cn(
          'fixed top-16 right-0 z-50 h-[calc(100vh-4rem)] w-72 border-l transition-transform duration-300 ease-in-out lg:hidden',
          'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700',
          'overflow-y-auto',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-1 p-4">
          {/* User info on mobile */}
          {user && (
            <div className="mb-3 flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.role === 'teacher' ? "O'qituvchi" : "O'quvchi"}
                </p>
              </div>
            </div>
          )}

          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                )}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}

          <div className="my-2 border-t border-gray-200 dark:border-gray-700" />

          {user ? (
            <button
              onClick={() => { handleLogout(); setMobileOpen(false); }}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-5 w-5" />
              Chiqish
            </button>
          ) : (
            <button
              onClick={() => { setShowAuthModal(true); setMobileOpen(false); }}
              className={cn(
                'flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all',
                'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25',
                'hover:shadow-xl hover:shadow-blue-500/30'
              )}
            >
              <User className="h-5 w-5" />
              Kirish
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export { Navbar };
