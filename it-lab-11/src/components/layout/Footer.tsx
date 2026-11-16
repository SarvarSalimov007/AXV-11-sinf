import Link from 'next/link';
import {
  Laptop, BookOpen, Code2, FolderGit2, LayoutDashboard,
  FileText, HelpCircle, Shield, Mail, MessageSquare,
  Github, Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const platformLinks = [
  { href: '/darslar', label: 'Darslar', icon: BookOpen },
  { href: '/loyihalar', label: 'Loyihalar', icon: FolderGit2 },
  { href: '/code-editor', label: 'Kod Muharriri', icon: Code2 },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

const resourceLinks = [
  { href: '#', label: "Qo'llanma", icon: FileText },
  { href: '#', label: "Ko'p so'raladigan savollar", icon: HelpCircle },
  { href: '#', label: 'Maxfiylik siyosati', icon: Shield },
];

const contactLinks = [
  { href: 'mailto:info@itlab11.uz', label: 'info@itlab11.uz', icon: Mail },
  { href: '#', label: 'Telegram', icon: Send },
  { href: '#', label: 'GitHub', icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
                <Laptop className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT LAB 11
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              O&apos;rgan. Amalda bajar. Yarat. Kelajakni qur.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Send, href: '#', label: 'Telegram' },
                { icon: MessageSquare, href: '#', label: 'Chat' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200',
                    'bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600',
                    'dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400'
                  )}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platforma */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Platforma
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurslar */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Resurslar
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bog'lanish */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Bog&apos;lanish
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <link.icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 dark:border-gray-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} IT LAB 11. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
