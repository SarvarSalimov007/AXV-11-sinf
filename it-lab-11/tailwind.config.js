/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          purple: '#a855f7',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #8b5cf6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #7c3aed 100%)',
        'gradient-card': 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
        // Premium mesh gradients
        'mesh-gradient-1': 'radial-gradient(at 40% 20%, hsla(228,68%,42%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(265,70%,46%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(210,100%,50%,0.5) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,65%,45%,0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(225,100%,25%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(265,100%,46%,0.6) 0px, transparent 50%)',
        'mesh-gradient-2': 'radial-gradient(at 0% 0%, hsla(253,70%,60%,0.5) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(225,80%,50%,0.4) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(339,70%,50%,0.3) 0px, transparent 50%)',
        // Radial glows
        'radial-glow-blue': 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 70%)',
        'radial-glow-purple': 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.3) 0%, transparent 70%)',
        'radial-glow-cyan': 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.3) 0%, transparent 70%)',
        'radial-glow-center': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.2)',
        'glow-blue-lg': '0 0 30px rgba(59,130,246,0.6), 0 0 100px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 15px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)',
        'glow-purple-lg': '0 0 30px rgba(139,92,246,0.6), 0 0 100px rgba(139,92,246,0.3)',
        'glow-cyan': '0 0 15px rgba(6,182,212,0.5), 0 0 60px rgba(6,182,212,0.2)',
        'glow-cyan-lg': '0 0 30px rgba(6,182,212,0.6), 0 0 100px rgba(6,182,212,0.3)',
        'glow-white': '0 0 15px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)',
        'inner-glow': 'inset 0 0 30px rgba(59,130,246,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        // Premium animations
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-fast': 'floatFast 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'typing-cursor': 'typingCursor 1s step-end infinite',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'gradient-x': 'gradientX 3s ease infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Premium keyframes
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(59,130,246,0.4), 0 0 45px rgba(59,130,246,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(59,130,246,0.7), 0 0 90px rgba(59,130,246,0.3)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        typingCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderRotate: {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
