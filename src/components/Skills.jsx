import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight">Technical Stack & Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 font-light">Core competencies and technologies mastered over 5+ years of engineering.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-darkcard p-8 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-mono text-accent font-bold">languages & backend</h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'SQL', 'FastAPI', 'RESTful APIs', 'Jinja SQL'].map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-forest/10 dark:hover:bg-accent/20 hover:text-forest dark:hover:text-accent transition-colors duration-200 cursor-default">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-darkcard p-8 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-mono text-accent font-bold">data & orchestration</h3>
          <div className="flex flex-wrap gap-2">
            {['Apache Airflow', 'Pandas', 'PySpark', 'PostgreSQL', 'Amazon Redshift'].map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-forest/10 dark:hover:bg-accent/20 hover:text-forest dark:hover:text-accent transition-colors duration-200 cursor-default">{s}</span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-darkcard p-8 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h3 className="font-mono text-accent font-bold">cloud, devops & tools</h3>
          <div className="flex flex-wrap gap-2">
            {['AWS', 'Docker', 'Kafka', 'Git & CI/CD', 'Grafana'].map((s, i) => (
              <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-forest/10 dark:hover:bg-accent/20 hover:text-forest dark:hover:text-accent transition-colors duration-200 cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
