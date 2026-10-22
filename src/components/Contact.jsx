import React, { useState } from 'react';
import { Mail, Linkedin, Github, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('jpooja0211@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto space-y-12 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight">Let's Build Something Exceptional</h2>
        <p className="text-gray-600 dark:text-gray-400 font-light">Open for Senior Python Developer, Backend, and Data Engineering roles.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <button onClick={copyEmail} className="px-6 py-4 rounded-xl bg-white dark:bg-darkcard border border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-3 hover:border-accent transition-colors shadow-sm">
          <Mail className="w-5 h-5 text-accent" />
          <span>{copied ? 'Copied to clipboard!' : 'jpooja0211@gmail.com'}</span>
          {copied && <Check className="w-4 h-4 text-green-500" />}
        </button>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-xl bg-white dark:bg-darkcard border border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-3 hover:border-accent transition-colors shadow-sm">
          <Linkedin className="w-5 h-5 text-accent" />
          <span>LinkedIn Profile</span>
        </a>
        <a href="https://github.com/poojajoshi-git" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-xl bg-white dark:bg-darkcard border border-gray-200 dark:border-gray-700 font-semibold flex items-center gap-3 hover:border-accent transition-colors shadow-sm">
          <Github className="w-5 h-5 text-accent" />
          <span>GitHub Profile</span>
        </a>
      </div>
    </section>
  );
}
