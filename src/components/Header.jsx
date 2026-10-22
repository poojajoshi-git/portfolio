import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-offwhite/80 dark:bg-darkbg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="font-mono font-bold text-lg tracking-tight flex items-center gap-2">
          <span className="text-accent">~/</span>pooja_joshi<span className="animate-pulse">_</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#architecture" className="hover:text-accent transition-colors">Architecture</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300" /> : <Moon className="w-5 h-5 text-charcoal transition-transform duration-300" />}
          </button>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-forest text-offwhite dark:bg-accent dark:text-charcoal font-semibold text-sm hover:opacity-95 transition-opacity">
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
}
