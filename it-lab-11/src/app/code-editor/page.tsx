'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { 
  Play, RotateCcw, Trash2, Code2, Eye, Terminal as TerminalIcon,
  Layout, Sparkles, Check, Download, Laptop, Columns, 
  Send, CornerDownLeft, AlertCircle, Info, ChevronRight
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/ui/AuthModal';

// Dynamically import Monaco Editor
const Editor = dynamic(() => import('@monaco-editor/react'), { 
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center bg-slate-900 text-slate-400 font-mono text-sm">
      <div className="animate-pulse flex items-center gap-2">
        <Code2 className="w-5 h-5 text-blue-500 animate-spin" />
        Monaco kod muharriri yuklanmoqda...
      </div>
    </div>
  )
});

interface LogEntry {
  id: string;
  type: 'log' | 'error' | 'warn' | 'info' | 'system';
  message: string;
  time: string;
}

// Predefined templates with Uzbek content
const templates: Record<string, { html: string; css: string; js: string; title: string }> = {
  default: {
    title: 'Boshlang\'ich shablon',
    html: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>IT LAB 11 — Loyiham</title>
</head>
<body>
  <div class="card">
    <div class="badge">11-SINF IT LAB</div>
    <h1>Salom, IT LAB 11 Dunyosi! 🚀</h1>
    <p>Ushbu interaktiv muharrirda HTML, CSS va JavaScript kodlaringizni yozib, natijani jonli ko'rishingiz mumkin.</p>
    <button id="myBtn" onclick="tugmaBosildi()">Meni bosing!</button>
    <p id="natija"></p>
  </div>
</body>
</html>`,
    css: `body {
  margin: 0;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #7c3aed 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  padding: 35px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  text-align: center;
  max-width: 450px;
  width: 100%;
}

.badge {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

h1 {
  color: #0f172a;
  font-size: 24px;
  margin: 0 0 10px 0;
}

p {
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
}

button {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  border: none;
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

#natija {
  margin-top: 15px;
  font-weight: bold;
  color: #059669;
}`,
    js: `let sanagich = 0;

console.log("IT LAB 11 dasturi muvaffaqiyatli ishga tushdi!");
console.log("Boshlang'ich sanagich qiymati: " + sanagich);

function tugmaBosildi() {
  sanagich++;
  console.log("Tugma bosildi! Yangi hisob: " + sanagich);
  const natija = document.getElementById('natija');
  if (natija) {
    natija.textContent = "Tugma " + sanagich + " marta bosildi! 🎉";
  }
}`
  },
  portfolio: {
    title: 'Shaxsiy Portfolio',
    html: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Jasur — Frontend Dasturchi</title>
</head>
<body>
  <header>
    <h2>Jasur Olimov</h2>
    <p>11-sinf o'quvchisi & Junior Frontend Developer</p>
  </header>

  <main>
    <section class="skills">
      <h3>Texnologiyalarim:</h3>
      <div class="tags">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>Git</span>
        <span>Docker</span>
      </div>
    </section>

    <section class="projects">
      <h3>Mening Loyihalarim:</h3>
      <div class="project-card" onclick="loyihaTanlandi('IT LAB 11')">
        <h4>IT LAB 11 Platformasi</h4>
        <p>11-sinflar uchun interaktiv ta'lim portali.</p>
      </div>
      <div class="project-card" onclick="loyihaTanlandi('Maktab Boti')">
        <h4>Maktab Telegram Boti</h4>
        <p>Dars jadvali va baholarni ko'rsatuvchi bot.</p>
      </div>
    </section>
  </main>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 30px 20px;
  background-color: #f8fafc;
  color: #1e293b;
  display: flex;
  justify-content: center;
}

header {
  text-align: center;
  margin-bottom: 25px;
}

header h2 {
  font-size: 26px;
  color: #1e40af;
  margin-bottom: 6px;
}

main {
  max-width: 480px;
  width: 100%;
}

.tags span {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin: 4px;
}

.project-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  margin-top: 10px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;
}

.project-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.project-card h4 {
  margin: 0 0 6px 0;
  color: #0f172a;
}`,
    js: `console.log("Portfolio sahifasi yuklandi.");
console.info("Loyiha kartochkalaridan birini bosing...");

function loyihaTanlandi(nomi) {
  console.log("Tanlangan loyiha: " + nomi);
  alert("Siz " + nomi + " loyihasini tanladingiz!");
}`
  },
  calculator: {
    title: 'Interaktiv Kalkulyator',
    html: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Kalkulyator</title>
</head>
<body>
  <div class="calculator">
    <input type="text" id="ekran" readonly placeholder="0">
    <div class="buttons">
      <button onclick="tozala()" class="clear">C</button>
      <button onclick="belgiQosh('/')">/</button>
      <button onclick="belgiQosh('*')">*</button>
      <button onclick="belgiQosh('-')">-</button>
      
      <button onclick="belgiQosh('7')">7</button>
      <button onclick="belgiQosh('8')">8</button>
      <button onclick="belgiQosh('9')">9</button>
      <button onclick="belgiQosh('+')">+</button>
      
      <button onclick="belgiQosh('4')">4</button>
      <button onclick="belgiQosh('5')">5</button>
      <button onclick="belgiQosh('6')">6</button>
      <button onclick="hisobla()" class="equal">=</button>
      
      <button onclick="belgiQosh('1')">1</button>
      <button onclick="belgiQosh('2')">2</button>
      <button onclick="belgiQosh('3')">3</button>
      <button onclick="belgiQosh('0')">0</button>
    </div>
  </div>
</body>
</html>`,
    css: `body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #0f172a;
  font-family: Arial, sans-serif;
}

.calculator {
  background: #1e293b;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
  width: 280px;
}

#ekran {
  width: 100%;
  height: 50px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  color: #38bdf8;
  font-size: 24px;
  text-align: right;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  height: 50px;
  border-radius: 12px;
  border: none;
  background: #334155;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover { background: #475569; }
button.clear { background: #ef4444; }
button.equal { 
  background: #2563eb; 
  grid-row: span 2; 
  height: 110px; 
}`,
    js: `console.log("Kalkulyator dasturi tayyor!");

function belgiQosh(qiymat) {
  const ekran = document.getElementById('ekran');
  ekran.value += qiymat;
  console.log("Kiritildi: " + qiymat + " | Joriy ifoda: " + ekran.value);
}

function tozala() {
  document.getElementById('ekran').value = '';
  console.log("Ekran tozalandi.");
}

function hisobla() {
  const ekran = document.getElementById('ekran');
  try {
    const natija = eval(ekran.value);
    console.log("Hisoblandi: " + ekran.value + " = " + natija);
    ekran.value = natija;
  } catch (e) {
    console.error("Ifodada xatolik bor: " + e.message);
    ekran.value = 'Xatolik!';
  }
}`
  },
  todo: {
    title: 'To-do Vazifalar Ro\'yxati',
    html: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Vazifalar Rejasi</title>
</head>
<body>
  <div class="todo-box">
    <h2>Kunlik Vazifalarim</h2>
    <div class="input-row">
      <input type="text" id="vazifaInput" placeholder="Yangi vazifa yozing...">
      <button onclick="vazifaQosh()">Qo'shish</button>
    </div>
    <ul id="vazifalarListi">
      <li>IT LAB 11 da Git darsini ko'rish</li>
      <li>Monaco Editor da kod yozish</li>
    </ul>
  </div>
</body>
</html>`,
    css: `body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: #f1f5f9;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  margin: 0;
}

.todo-box {
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  width: 100%;
  max-width: 400px;
}

h2 {
  color: #1e3a8a;
  margin-top: 0;
  text-align: center;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;
}

li:hover {
  background: #fee2e2;
  text-decoration: line-through;
}`,
    js: `console.log("To-do dasturi ishga tushirildi.");

function vazifaQosh() {
  const input = document.getElementById('vazifaInput');
  const matn = input.value.trim();
  if (!matn) {
    console.warn("Iltimos, vazifa matnini kiriting!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = matn;
  li.onclick = function() { 
    console.log("Vazifa bajarildi va o'chirildi: " + matn);
    this.remove(); 
  };

  document.getElementById('vazifalarListi').appendChild(li);
  console.log("Yangi vazifa qo'shildi: " + matn);
  input.value = '';
}`
  }
};

export default function CodeEditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [activeRightTab, setActiveRightTab] = useState<'preview' | 'terminal' | 'split'>('split');
  
  const [htmlCode, setHtmlCode] = useState(templates.default.html);
  const [cssCode, setCssCode] = useState(templates.default.css);
  const [jsCode, setJsCode] = useState(templates.default.js);

  const [previewSrc, setPreviewSrc] = useState('');
  const [runKey, setRunKey] = useState(0);

  // Terminal state
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'init-1',
      type: 'system',
      message: 'IT LAB 11 Web Terminal v2.0 tayyor. Kodni ishga tushirish uchun "Ishga tushirish" tugmasini bosing.',
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Listen for console messages from iframe sandbox
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.source === 'it-lab-code-sandbox') {
        const { type, message, time } = event.data;
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: type || 'log',
            message: message || '',
            time: time || new Date().toLocaleTimeString()
          }
        ]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Generate full preview document with interceptor script
  const generatePreview = (h: string, c: string, j: string) => {
    const consoleInterceptor = `
      <script>
        (function() {
          function sendToParent(type, args) {
            try {
              var messages = Array.from(args).map(function(arg) {
                if (arg === null) return "null";
                if (arg === undefined) return "undefined";
                if (typeof arg === 'object') {
                  try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                }
                return String(arg);
              });
              window.parent.postMessage({
                source: 'it-lab-code-sandbox',
                type: type,
                message: messages.join(' '),
                time: new Date().toLocaleTimeString()
              }, '*');
            } catch(e) {}
          }

          var _log = console.log;
          var _error = console.error;
          var _warn = console.warn;
          var _info = console.info;

          console.log = function() {
            _log.apply(console, arguments);
            sendToParent('log', arguments);
          };
          console.error = function() {
            _error.apply(console, arguments);
            sendToParent('error', arguments);
          };
          console.warn = function() {
            _warn.apply(console, arguments);
            sendToParent('warn', arguments);
          };
          console.info = function() {
            _info.apply(console, arguments);
            sendToParent('info', arguments);
          };

          window.onerror = function(msg, url, line) {
            sendToParent('error', ['Xatolik yuz berdi (Qator ' + line + '): ' + msg]);
          };
        })();
      </script>
    `;

    const styleTag = `<style>${c}</style>`;
    const userScriptTag = `
      <script>
        try {
          ${j}
        } catch (err) {
          console.error("JavaScript Xatoligi: " + err.message);
        }
      </script>
    `;

    // If HTML already has document structure, insert intelligently
    if (h.includes('<html') || h.includes('<body') || h.includes('<!DOCTYPE')) {
      let doc = h;
      if (doc.includes('<head>')) {
        doc = doc.replace('<head>', `<head>${consoleInterceptor}${styleTag}`);
      } else {
        doc = consoleInterceptor + styleTag + doc;
      }
      if (doc.includes('</body>')) {
        doc = doc.replace('</body>', `${userScriptTag}</body>`);
      } else {
        doc = doc + userScriptTag;
      }
      return doc;
    }

    // Default clean wrapper
    return `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${consoleInterceptor}
  ${styleTag}
</head>
<body>
  ${h}
  ${userScriptTag}
</body>
</html>`;
  };

  // Run manually
  const handleRun = () => {
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'system',
        message: '⚡ Kod qayta yuklandi va ishga tushirildi...',
        time: new Date().toLocaleTimeString()
      }
    ]);
    const combined = generatePreview(htmlCode, cssCode, jsCode);
    setPreviewSrc(combined);
    setRunKey((prev) => prev + 1);
  };

  // Initial load
  useEffect(() => {
    handleRun();
  }, []);

  // Template switch
  const handleTemplateChange = (templateKey: string) => {
    setSelectedTemplate(templateKey);
    const tmpl = templates[templateKey];
    if (tmpl) {
      setHtmlCode(tmpl.html);
      setCssCode(tmpl.css);
      setJsCode(tmpl.js);
      setLogs([
        {
          id: Math.random().toString(),
          type: 'system',
          message: `"${tmpl.title}" shabloni yuklandi.`,
          time: new Date().toLocaleTimeString()
        }
      ]);
      const combined = generatePreview(tmpl.html, tmpl.css, tmpl.js);
      setPreviewSrc(combined);
      setRunKey((prev) => prev + 1);
    }
  };

  // Reset to current template default
  const handleReset = () => {
    const tmpl = templates[selectedTemplate];
    if (tmpl) {
      setHtmlCode(tmpl.html);
      setCssCode(tmpl.css);
      setJsCode(tmpl.js);
      setLogs([
        {
          id: Math.random().toString(),
          type: 'system',
          message: 'Kodingiz shablon holatiga qayta tiklandi.',
          time: new Date().toLocaleTimeString()
        }
      ]);
      const combined = generatePreview(tmpl.html, tmpl.css, tmpl.js);
      setPreviewSrc(combined);
      setRunKey((prev) => prev + 1);
    }
  };

  // Clear current tab
  const handleClearCode = () => {
    if (activeCodeTab === 'html') setHtmlCode('');
    if (activeCodeTab === 'css') setCssCode('');
    if (activeCodeTab === 'js') setJsCode('');
  };

  // Clear Terminal
  const handleClearTerminal = () => {
    setLogs([
      {
        id: Math.random().toString(),
        type: 'system',
        message: 'Terminal tozalandi.',
        time: new Date().toLocaleTimeString()
      }
    ]);
  };

  // Execute terminal input in iframe
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const command = terminalInput.trim();
    setTerminalInput('');

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'system',
        message: `> ${command}`,
        time: new Date().toLocaleTimeString()
      }
    ]);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          { source: 'eval-in-sandbox', code: command },
          '*'
        );
      } catch (err: any) {
        setLogs((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            type: 'error',
            message: 'Buyruq bajarilmadi: ' + err.message,
            time: new Date().toLocaleTimeString()
          }
        ]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <AuthModal />

      {/* Editor Control Header */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-16 z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold flex items-center gap-2">
              Interaktiv Kod Muharriri & Terminal
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                Jonli
              </span>
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              HTML, CSS va JS yozing — natijani hamda terminaldagi chiqishlarni real vaqtda ko&apos;ring.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Template Selector */}
          <select
            value={selectedTemplate}
            onChange={(e) => handleTemplateChange(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">📋 Boshlang&apos;ich shablon</option>
            <option value="portfolio">👤 Shaxsiy Portfolio</option>
            <option value="calculator">🧮 Kalkulyator</option>
            <option value="todo">✅ To-do dasturi</option>
          </select>

          <button
            onClick={handleRun}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Ishga tushirish (Run)
          </button>

          <button
            onClick={handleReset}
            title="Shablonni qayta tiklash"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleClearCode}
            title="Kodni tozalash"
            className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-300 hover:text-rose-400 text-xs transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Split Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[calc(100vh-140px)]">
        {/* LEFT: Code Editor Pane */}
        <div className="flex flex-col bg-slate-900">
          {/* File Tabs */}
          <div className="bg-slate-950 px-4 pt-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveCodeTab('html')}
                className={`px-4 py-2 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeCodeTab === 'html'
                    ? 'bg-slate-900 text-orange-400 border-t-2 border-orange-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                index.html
              </button>
              <button
                onClick={() => setActiveCodeTab('css')}
                className={`px-4 py-2 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeCodeTab === 'css'
                    ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                style.css
              </button>
              <button
                onClick={() => setActiveCodeTab('js')}
                className={`px-4 py-2 rounded-t-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeCodeTab === 'js'
                    ? 'bg-slate-900 text-yellow-400 border-t-2 border-yellow-500'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                script.js
              </button>
            </div>

            <span className="text-[11px] text-slate-500 font-mono pr-2">
              VS Code Monaco Editor
            </span>
          </div>

          {/* Monaco Editor Component */}
          <div className="flex-1 min-h-[400px] lg:min-h-full">
            {activeCodeTab === 'html' && (
              <Editor
                height="100%"
                language="html"
                theme="vs-dark"
                value={htmlCode}
                onChange={(val) => setHtmlCode(val || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            )}

            {activeCodeTab === 'css' && (
              <Editor
                height="100%"
                language="css"
                theme="vs-dark"
                value={cssCode}
                onChange={(val) => setCssCode(val || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            )}

            {activeCodeTab === 'js' && (
              <Editor
                height="100%"
                language="javascript"
                theme="vs-dark"
                value={jsCode}
                onChange={(val) => setJsCode(val || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            )}
          </div>
        </div>

        {/* RIGHT: Live Preview & Terminal Pane */}
        <div className="flex flex-col bg-slate-950">
          {/* Right Pane Navigation Header */}
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveRightTab('split')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  activeRightTab === 'split'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                Ikkalasi (Split)
              </button>

              <button
                onClick={() => setActiveRightTab('preview')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
                  activeRightTab === 'preview'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                Natija (Preview)
              </button>

              <button
                onClick={() => setActiveRightTab('terminal')}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all relative ${
                  activeRightTab === 'terminal'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5 text-yellow-400" />
                Terminal
                {logs.length > 0 && (
                  <span className="w-4 h-4 rounded-full bg-slate-700 text-[10px] flex items-center justify-center font-bold">
                    {logs.length}
                  </span>
                )}
              </button>
            </div>

            {/* Clear Terminal button */}
            <button
              onClick={handleClearTerminal}
              className="text-slate-400 hover:text-rose-400 text-[11px] font-semibold transition-colors"
            >
              Terminalni tozalash
            </button>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* PREVIEW FRAME */}
            {(activeRightTab === 'preview' || activeRightTab === 'split') && (
              <div className={`relative bg-white ${activeRightTab === 'split' ? 'h-1/2 border-b border-slate-800' : 'h-full'}`}>
                <iframe
                  ref={iframeRef}
                  key={runKey}
                  srcDoc={previewSrc}
                  title="Kodni sinash oynasi"
                  sandbox="allow-scripts allow-modals allow-same-origin"
                  className="w-full h-full border-none absolute inset-0"
                />
              </div>
            )}

            {/* TERMINAL / CONSOLE PANEL */}
            {(activeRightTab === 'terminal' || activeRightTab === 'split') && (
              <div className={`flex flex-col bg-slate-950 font-mono ${activeRightTab === 'split' ? 'h-1/2' : 'h-full'}`}>
                {/* Terminal Header Bar */}
                <div className="bg-slate-900/90 px-3.5 py-1.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 ml-2">
                      JavaScript Terminal & Konsol
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    console.log chiqishlari
                  </span>
                </div>

                {/* Terminal Logs Output */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-1.5 text-xs">
                  {logs.length === 0 ? (
                    <div className="text-slate-600 italic py-4 text-center">
                      Terminal bo&apos;sh. Kodni ishga tushiring yoki console.log yozing.
                    </div>
                  ) : (
                    logs.map((log) => {
                      let typeStyle = 'text-slate-300';
                      let prefix = '[LOG]';
                      if (log.type === 'error') {
                        typeStyle = 'text-rose-400 font-bold bg-rose-950/30 px-2 py-0.5 rounded';
                        prefix = '[XATO]';
                      } else if (log.type === 'warn') {
                        typeStyle = 'text-amber-400 font-semibold bg-amber-950/30 px-2 py-0.5 rounded';
                        prefix = '[OGOH]';
                      } else if (log.type === 'info') {
                        typeStyle = 'text-cyan-400 font-semibold';
                        prefix = '[INFO]';
                      } else if (log.type === 'system') {
                        typeStyle = 'text-blue-400/90 italic';
                        prefix = '[TIZIM]';
                      }

                      return (
                        <div key={log.id} className="flex items-start gap-2 leading-relaxed break-all">
                          <span className="text-[10px] text-slate-600 shrink-0 select-none">
                            {log.time}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 shrink-0 select-none">
                            {prefix}
                          </span>
                          <span className={`flex-1 whitespace-pre-wrap ${typeStyle}`}>
                            {log.message}
                          </span>
                        </div>
                      );
                    })
                  )}
                  <div ref={terminalEndRef} />
                </div>

                {/* Interactive CLI Input Line */}
                <form
                  onSubmit={handleTerminalSubmit}
                  className="bg-slate-900/90 border-t border-slate-800 px-3 py-2 flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0" />
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Buyruq yoki funksiyani yozing (masalan: tugmaBosildi(), 2 + 2)..."
                    className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-600 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    title="Buyruqni yuborish"
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
