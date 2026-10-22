import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'docgen',
      title: 'Clinical Document Generation Engine',
      subtitle: 'DocGenAI • Saama Technologies',
      category: 'FastAPI & AI Integration',
      desc: 'High-performance REST API platform streamlining clinical trial protocol creation and Clinical Study Reports (CSR) through AI-driven prompt execution and multi-tenant isolation.',
      tech: ['FastAPI', 'Python', 'Jinja SQL', 'PostgreSQL', 'Docker'],
      details: [
        'Dynamic SQL query generation using Jinja SQL for flexible data retrieval.',
        'Tenant-based data isolation and robust Role-Based Access Control (RBAC).',
        'Automated audit trail logging for all CRUD operations ensuring regulatory compliance.',
        'Comprehensive unit and integration test coverage achieving high reliability.'
      ]
    },
    {
      id: 'scale',
      title: 'Multi-Source Clinical Data Ingestion Platform',
      subtitle: 'SCALE • Saama Technologies',
      category: 'Data Pipeline & Orchestration',
      desc: 'Scalable ingestion platform featuring custom adapters for Oracle Inform EDC, Veeva CTMS, and REDCap Cloud, orchestrated reliably via Apache Airflow DAGs.',
      tech: ['Apache Airflow', 'Python', 'Docker', 'AWS S3', 'Redshift'],
      details: [
        'Adapters Developed: IBM CD, Oracle Inform EDC, Veeva CTMS, Veeva EDC, REDCap Cloud, Medrio.',
        'Implemented Directed Acyclic Graphs (DAGs) in Apache Airflow for robust task orchestration.',
        'Applied Source-to-Target Mappings (STTM) on raw data for seamless transformations.',
        'Containerized processing workflows using Docker and integrated with CI/CD deployment pipelines.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight">Featured Engineering Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 font-light">Enterprise-grade systems engineered with precision and scalability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.id} className="bg-white dark:bg-darkcard border border-gray-200 dark:border-gray-700 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-forest/10 dark:bg-accent/10 text-forest dark:text-accent text-xs font-mono font-semibold">{p.category}</span>
                <span className="font-mono text-xs text-gray-500">{p.subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">{t}</span>
                ))}
              </div>
            </div>
            <button onClick={() => setSelectedProject(p)} className="w-full py-3 rounded-xl bg-forest text-offwhite dark:bg-accent dark:text-charcoal font-semibold text-sm hover:opacity-95 hover:scale-[1.02] transition-all duration-300">
              View Architecture & Details
            </button>
          </div>
        ))}
      </div>

      {/* Fullscreen Overlay Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-fade-in min-h-screen">
          <div className="bg-white dark:bg-darkcard max-w-2xl w-full rounded-2xl p-8 border border-gray-200 dark:border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in m-auto">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white font-mono text-lg">
              <X className="w-6 h-6" />
            </button>
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-forest/10 dark:bg-accent/10 text-forest dark:text-accent text-xs font-mono font-semibold">{selectedProject.category}</span>
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{selectedProject.desc}</p>
              <h4 className="font-bold text-sm pt-2">Key Engineering Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                {selectedProject.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}