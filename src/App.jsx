import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal dark:bg-darkbg dark:text-offwhite transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Architecture />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
