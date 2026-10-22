import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-darkcard/50 border-y border-gray-200 dark:border-gray-800 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 font-light">Proven track record in senior engineering, data platforms, and clinical automation.</p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-700">
          
          {/* Role 1 */}
          <div className="relative pl-14">
            <div className="absolute left-7 -translate-x-1/2 w-6 h-6 rounded-full bg-forest dark:bg-accent border-4 border-offwhite dark:border-darkbg flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="bg-white dark:bg-darkcard p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                  <p className="text-forest dark:text-accent font-semibold">Saama Technologies • Pune, India</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-mono">11/2024 - Present</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Project: DocGenAI</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Designed and implemented high-performance REST APIs using Python and FastAPI.</li>
                <li>Engineered clinical document generation solutions to streamline medical writing (protocols and CSRs).</li>
                <li>Implemented dynamic SQL query generation and tenant-based isolation with robust RBAC.</li>
                <li>Automated audit trail logging for all CRUD operations, ensuring strict regulatory compliance.</li>
              </ul>
            </div>
          </div>

          {/* Role 2 */}
          <div className="relative pl-14">
            <div className="absolute left-7 -translate-x-1/2 w-6 h-6 rounded-full bg-forest dark:bg-accent border-4 border-offwhite dark:border-darkbg"></div>
            <div className="bg-white dark:bg-darkcard p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer / Data Engineer</h3>
                  <p className="text-forest dark:text-accent font-semibold">Saama Technologies • Pune, India</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-mono">03/2021 - 11/2024</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Project: SCALE</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Developed robust adapters for IBM CD, Oracle Inform EDC, Veeva CTMS/EDC, and REDCap Cloud.</li>
                <li>Orchestrated complex Directed Acyclic Graphs (DAGs) in Apache Airflow for reliable data pipelines.</li>
                <li>Applied Source-to-Target Mappings (STTM) and refactored legacy codebases for high performance.</li>
                <li>Managed containerized microservice deployments using Docker in CI/CD environments.</li>
              </ul>
            </div>
          </div>

          {/* Role 3 */}
          <div className="relative pl-14">
            <div className="absolute left-7 -translate-x-1/2 w-6 h-6 rounded-full bg-forest dark:bg-accent border-4 border-offwhite dark:border-darkbg"></div>
            <div className="bg-white dark:bg-darkcard p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">Software Engineering Intern</h3>
                  <p className="text-forest dark:text-accent font-semibold">Persistent Systems • Pune, India</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-mono">06/2019 - 12/2019</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assisted in developing enterprise software modules, writing unit tests, and optimizing database queries.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
