import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata: Metadata = {
  title: 'IT LAB 11 — Interaktiv Dasturlash va IT Ta\'lim Platformasi',
  description: '11-sinf o\'quvchilari uchun zamonaviy IT ta\'lim platformasi. Dasturiy ta\'minot, Git, DevOps, Docker, Cloud va Startup yo\'nalishlarini o\'rganing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
