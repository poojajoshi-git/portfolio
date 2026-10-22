import React, { useState } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Pooja Joshi's Interactive Terminal v3.2.0" },
    { type: 'output', text: "Type 'help' to view available commands." }
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      const newHistory = [...history, { type: 'input', text: `pooja@portfolio:~$ ${cmd}` }];

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'output', text: 'Available commands: help, about, skills, projects, contact, clear, ls, cat resume.txt, whoami' });
          break;
        case 'about':
          newHistory.push({ type: 'output', text: 'Pooja Joshi: Senior Software Engineer with 5+ years experience in Python, FastAPI, Airflow, and Data Engineering.' });
          break;
        case 'skills':
          newHistory.push({ type: 'output', text: 'Python, FastAPI, SQL, Apache Airflow, Pandas, PySpark, AWS, Docker, PostgreSQL, Redshift.' });
          break;
        case 'projects':
          newHistory.push({ type: 'output', text: '1. DocGenAI (FastAPI & Clinical Document Generation)\n2. SCALE (Multi-source Clinical Data Ingestion Platform)' });
          break;
        case 'contact':
          newHistory.push({ type: 'output', text: 'Email: jpooja0211@gmail.com | GitHub: github.com/poojajoshi-git' });
          break;
        case 'clear':
          setHistory([{ type: 'output', text: 'Terminal cleared.' }]);
          return;
        case 'ls':
          newHistory.push({ type: 'output', text: 'pooja_engine.py    resume.pdf    dag_orchestrator.py    adapters/' });
          break;
        case 'cat resume.txt':
        case 'cat resume':
          newHistory.push({ type: 'output', text: 'Pooja Joshi - Senior Software Engineer (5+ yrs exp). BE in IT + MTech. Saama Technologies & Persistent Systems.' });
          break;
        case 'whoami':
          newHistory.push({ type: 'output', text: 'pooja_joshi@senior-software-engineer' });
          break;
        default:
          newHistory.push({ type: 'output', text: `zsh: command not found: ${cmd}. Type 'help' for available commands.` });
      }
      setHistory(newHistory);
    }
  };

  return (
    <section id="terminal" className="py-24 bg-gray-50 dark:bg-darkcard/50 border-y border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Interactive Developer Terminal</h2>
          <p className="text-gray-600 dark:text-gray-400 font-light">Type commands below (`help`, `about`, `skills`, `projects`, `contact`, `clear`).</p>
        </div>
        <div className="bg-gray-950 text-gray-200 rounded-2xl shadow-2xl border border-gray-800 font-mono text-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="text-gray-400 ml-2">pooja@portfolio:~</span>
            </div>
            <span className="text-xs text-gray-500">bash</span>
          </div>
          <div className="p-6 h-80 overflow-y-auto space-y-3">
            {history.map((h, i) => (
              <p key={i} className={h.type === 'input' ? 'text-accent' : 'text-gray-300'}>{h.text}</p>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800 flex items-center gap-2">
            <span className="text-accent">pooja@portfolio:~$</span>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 text-offwhite font-mono" 
              placeholder="Type a command..." 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
