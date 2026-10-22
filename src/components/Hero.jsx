import React, { useState, useEffect } from 'react';
import { Terminal, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const words = ['Python Engineering', 'Backend Systems', 'Data Platforms', 'FastAPI Architecture'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer;
    if (!isDeleting) {
      if (currentText.length < word.length) {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 dark:bg-accent/10 text-forest dark:text-accent font-mono text-xs font-semibold">
            <span>⚡ Senior Software Engineer</span>
            <span>•</span>
            <span>5+ Years Experience</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            I engineer systems that make complexity feel simple.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            Specialized in designing robust Python backends, high-performance FastAPI microservices, and reliable, scalable data processing pipelines.
          </p>
          <div className="h-8 font-mono text-accent text-lg font-semibold flex items-center gap-2">
            <span>&gt;</span> <span>{currentText}</span><span className="animate-pulse">|</span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-forest text-offwhite dark:bg-accent dark:text-charcoal font-semibold hover:opacity-95 transition-all shadow-lg">
              Explore My Work
            </a>
            <a 
  href="/Pooja_Joshi_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-xl border border-forest dark:border-accent text-forest dark:text-accent font-semibold hover:bg-forest/10 dark:hover:bg-accent/10 transition-all flex items-center gap-2"
>
  <Download className="w-4 h-4" /> Download Résumé (PDF)
</a>
          </div>
        </div>
        <div className="lg:col-span-5 animate-fade-in-right">
          <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-2xl border border-gray-800 p-5 font-mono text-xs overflow-hidden relative hover:shadow-3xl transition-shadow duration-500">
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-400 ml-2">pooja_engine.py</span>
              </div>
              <span className="text-green-400 font-semibold">● RUNNING</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="text-gray-500"># Initializing enterprise pipeline service...</p>
              <p><span className="text-purple-400">import</span> fastapi, uvicorn, pandas, airflow</p>
              <p className="text-blue-400">app = FastAPI(title="PoojaEnterpriseCore", version="3.0.0")</p>
              <p className="text-yellow-400">@app.on_event("startup")</p>
              <p><span className="text-purple-400">async def</span> startup_event():</p>
              <p className="pl-4 text-green-300">print("Database connection pools established.")</p>
              <p className="pl-4 text-green-300">print("Airflow DAG orchestrators loaded successfully.")</p>
              <p className="text-accent">&gt; Service listening on port 8000. All health checks PASSED [200 OK].</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}