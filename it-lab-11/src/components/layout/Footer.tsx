import Link from 'next/link';
import {
  Laptop, BookOpen, Code2, FolderGit2, LayoutDashboard,
  Mail, MessageSquare, Github, Send, Sparkles, Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';

const platformLinks = [
  { href: '/darslar', label: 'Darslar katalogi', icon: BookOpen },
  { href: '/loyihalar', label: 'Amaliy Loyihalar', icon: FolderGit2 },
  { href: '/code-editor', label: 'Interaktiv Kod Muharriri', icon: Code2 },
  { href: '/dashboard', label: 'O\'quvchi Dashboardi', icon: LayoutDashboard },
];

const courseModules = [
  { href: '/darslar/module-1', label: 'I-Bosqich: SDLC va Git/GitHub' },
  { href: '/darslar/module-2', label: 'II-Bosqich: Linux va Docker' },
  { href: '/darslar/module-3', label: 'III-Bosqich: Cloud va AWS' },
  { href: '/darslar/module-4', label: 'IV-Bosqich: Freelance va Startap' },
];

const contactLinks = [
  { href: 'mailto:info@itlab11.uz', label: 'info@itlab11.uz', icon: Mail },
  { href: 'https://t.me', label: 'Telegram Hamjamiyat', icon: Send },
  { href: 'https://github.com', label: 'GitHub Repozitoriy', icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 overflow-hidden transition-colors duration-300">
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand info (2 columns wide on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                <Laptop className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent tracking-tight">
                IT LAB 11
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              11-sinf o&apos;quvchilari uchun zamonaviy dasturiy ta&apos;minot, DevOps, Docker, Cloud va Startap ekotizimini o&apos;rgatuvchi interaktiv ta&apos;lim platformasi.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>O&apos;rgan · Amalda bajar · Yarat · Kelajakni qur.</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Send, href: '#', label: 'Telegram' },
                { icon: MessageSquare, href: '#', label: 'Chat' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/40 transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platforma Linklari */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Platforma
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* O'quv Modullari */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              O&apos;quv Bosqichlari
            </h4>
            <ul className="space-y-3">
              {courseModules.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400 block leading-relaxed"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa & Yordam */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Aloqa & Yordam
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} IT LAB 11 Platformasi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-1">
            <span>11-sinf o&apos;quvchilari uchun mehr bilan yaratildi</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
