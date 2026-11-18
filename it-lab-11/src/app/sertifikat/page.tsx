'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Award, Download, Printer, Share2, CheckCircle2, 
  Sparkles, ShieldCheck, ArrowLeft, User, QrCode,
  Calendar, School, Check
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthModal from '@/components/ui/AuthModal';

export default function SertifikatPage() {
  const { user, totalScore, getTotalProgress, badges } = useAppStore();
  const [studentName, setStudentName] = useState(user?.name || 'Salimov Sarvar');
  const [studentGrade, setStudentGrade] = useState(user?.grade || '11-A sinf');
  const [certId, setCertId] = useState('ITLAB-2024-8842');
  const [copiedLink, setCopiedLink] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    if (user?.name) {
      setStudentName(user.name);
    }
    if (user?.grade) {
      setStudentGrade(user.grade);
    }
    // Generate deterministic or stable ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setCertId(`ITLAB-11-${randomNum}`);
    setCurrentDate(new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, [user]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const totalProgress = getTotalProgress();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <div className="print:hidden">
        <Navbar />
        <AuthModal />
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
        
        {/* Top Controls Bar (hidden during printing) */}
        <div className="print:hidden mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Dashboardga qaytish
            </Link>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              IT LAB 11 Rasmiy Bitiruv Sertifikati
            </h1>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Chop etish / PDF Saqlash
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Nusxalandi!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Ulashish</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Customization input bar for demo (hidden during printing) */}
        <div className="print:hidden mb-8 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-medium">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Sertifikatdagi ism va sinfni xohlagancha o&apos;zgartirishingiz mumkin:</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="O'quvchi ismi va familiyasi"
              className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={studentGrade}
              onChange={(e) => setStudentGrade(e.target.value)}
              placeholder="Sinfi"
              className="w-24 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            OFFICIAL CERTIFICATE DOCUMENT (A4 Landscape aspect ratio)
           ═════════════════════════════════════════════════════════════════ */}
        <div className="relative mx-auto w-full bg-white text-slate-900 p-8 sm:p-14 rounded-3xl border-8 border-slate-900/10 shadow-2xl overflow-hidden print:m-0 print:p-10 print:border-4 print:shadow-none print:w-full">
          
          {/* Ornamental Inner Double Border */}
          <div className="absolute inset-4 sm:inset-6 border-2 border-amber-600/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 border border-amber-500/20 rounded-xl pointer-events-none" />

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-amber-600/60 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-amber-600/60 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-amber-600/60 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-amber-600/60 rounded-br-lg pointer-events-none" />

          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <Award className="w-[500px] h-[500px] text-blue-900" />
          </div>

          <div className="relative z-10 text-center space-y-6">
            
            {/* Top Emblem & Header */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-amber-400/30 mb-2">
                <Award className="w-9 h-9 text-amber-300" />
              </div>

              <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-blue-900 uppercase">
                O&apos;ZBEKISTON RESPUBLIKASI MAKTAB TA&apos;LIMI
              </span>
              <p className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                IT LAB 11 — Raqamli Texnologiyalar va Dasturlash Akademiyasi
              </p>
            </div>

            {/* Certificate Title */}
            <div className="py-2">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase font-serif">
                SERTIFIKAT
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2" />
              <p className="text-xs sm:text-sm text-slate-500 italic mt-2">
                Ushbu rasmiy sertifikat tasdiqlaydi:
              </p>
            </div>

            {/* Recipient Name */}
            <div className="py-2">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-900 border-b-2 border-slate-300 pb-2 inline-block min-w-[320px] max-w-full px-6 font-serif">
                {studentName || 'O\'quvchi Ismi'}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2">
                {studentGrade} o&apos;quvchisi
              </p>
            </div>

            {/* Achievement Description */}
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
              <strong>IT LAB 11</strong> dasturi doirasidagi 4 ta asosiy o&apos;quv modulini (Dasturiy ta&apos;minot arxitekturasi, Git/GitHub, Docker konteynerlashtirish, Linux, Cloud texnologiyalari va Startup MVP) muvaffaqiyatli tamomlagani hamda amaliy capstone loyihalarini a&apos;lo darajada himoya qilgani uchun taqdirlanadi.
            </p>

            {/* Skills Badges Grid on Certificate */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 max-w-xl mx-auto">
              {['SDLC & Git', 'Clean Code (SOLID)', 'Docker Containers', 'Linux & CI/CD', 'AWS Cloud & DNS', 'Agile & Startup MVP'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>

            {/* Footer Signatures, Seal & QR Code */}
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-slate-200/80 max-w-3xl mx-auto">
              
              {/* Left Signature */}
              <div className="text-center sm:text-left">
                <div className="font-serif italic text-base text-blue-900 font-bold mb-1">
                  Rustam Karimov
                </div>
                <div className="w-36 h-0.5 bg-slate-400 mx-auto sm:mx-0 mb-1" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Informatika fani ustozi
                </span>
              </div>

              {/* Center Official Gold Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-slate-950 flex flex-col items-center justify-center shadow-lg border-2 border-white ring-4 ring-amber-400/30">
                  <ShieldCheck className="w-6 h-6 text-slate-950" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">
                    VERIFIED
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-500 mt-1">
                  ID: {certId}
                </span>
              </div>

              {/* Right Signature & Date */}
              <div className="text-center sm:text-right">
                <div className="font-serif italic text-base text-blue-900 font-bold mb-1">
                  IT LAB 11 Kengashi
                </div>
                <div className="w-36 h-0.5 bg-slate-400 mx-auto sm:ml-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Berilgan sana: {currentDate || '2024-yil'}
                </span>
              </div>

            </div>

          </div>
        </div>

      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
