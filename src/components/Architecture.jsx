import React, { useState } from 'react';

export default function Architecture() {
  const [activeComp, setActiveComp] = useState('api');

  const archData = {
    api: { title: "FastAPI Gateway", desc: "Handles incoming HTTP requests, validates bearer tokens against tenant databases, and securely dispatches jobs to downstream workers." },
    queue: { title: "Airflow DAGs", desc: "Orchestrates scheduled data ingestion tasks, dependency trees, automated retries, and failure alerts." },
    worker: { title: "Python / Pandas Workers", desc: "Applies Source-to-Target Mappings (STTM), parses raw EDC payloads, and performs high-throughput data transformations." },
    db: { title: "Postgres / Redshift", desc: "Stores tenant-isolated transactional data and high-volume analytical records with optimized query execution." },
    monitor: { title: "Grafana & Audit Logs", desc: "Tracks live system performance metrics, error rates, and automated audit trail logging for compliance." }
  };

  return (
    <section id="architecture" className="py-24 bg-gray-50 dark:bg-darkcard/50 border-y border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Interactive Architecture Playground</h2>
          <p className="text-gray-600 dark:text-gray-400 font-light">Hover over system components to inspect data flow and responsibilities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { id: 'api', label: '01 / INGRESS', title: 'FastAPI Gateway', desc: 'Validates JWT tokens, enforces RBAC, routes requests.' },
            { id: 'queue', label: '02 / ORCHESTRATION', title: 'Airflow DAGs', desc: 'Manages scheduled data ingestion tasks & dependency trees.' },
            { id: 'worker', label: '03 / PROCESSING', title: 'Python / Pandas', desc: 'Applies STTM transformations & parses raw EDC payloads.' },
            { id: 'db', label: '04 / STORAGE', title: 'Postgres / Redshift', desc: 'Stores tenant isolated transactional & analytical data.' },
            { id: 'monitor', label: '05 / OBSERVABILITY', title: 'Grafana & Logs', desc: 'Tracks performance metrics and CRUD audit trails.' }
          ].map((item) => (
            <div 
              key={item.id} 
              onMouseEnter={() => setActiveComp(item.id)}
              className={`p-6 rounded-2xl text-left space-y-2 transition-all duration-300 cursor-pointer bg-white dark:bg-darkcard border shadow-sm hover:shadow-md hover:scale-[1.02] ${activeComp === item.id ? 'border-2 border-forest dark:border-accent scale-[1.03]' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400'}`}
            >
              <span className="font-mono text-xs text-forest dark:text-accent font-bold">{item.label}</span>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-darkcard p-8 rounded-2xl border border-gray-200 dark:border-gray-700 font-mono text-sm space-y-2 shadow-sm transition-all duration-300 hover:shadow-md">
          <p className="text-accent font-bold">&gt; Component: {archData[activeComp].title}</p>
          <p className="text-gray-600 dark:text-gray-300">{archData[activeComp].desc}</p>
        </div>
      </div>
    </section>
  );
}