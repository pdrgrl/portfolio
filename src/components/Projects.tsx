'use client';

import { useScrollReveal } from './portfolio-utils';
import { Activity, Database, Github, Layers } from './icons';

const projects = [
  {
    title: 'Digital Twin — Early 20th-Century Energy System',
    description:
      'Capstone dissertation project. Architected a real-time digital twin of a historical energy system: 3D reconstruction in Blender, real-time simulation in Unity (C#), and a Python RAG system querying historical museum archives via ChromaDB and vector search.',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Unity', 'C#', 'Blender'],
    links: { github: 'https://github.com/pdrgrl' },
    icon: Layers,
    featured: true,
  },
  {
    title: 'RAG API — Historical Archive Query',
    description:
      'Python backend exposing a REST API that retrieves semantically relevant documents from digitised museum archives using vector embeddings, context graphs, and LLM integration.',
    tags: ['Python', 'FastAPI', 'LLM API', 'ChromaDB', 'Docker'],
    links: { github: 'https://github.com/pdrgrl' },
    icon: Database,
    featured: false,
  },
  {
    title: 'Broadcast Infrastructure — SPORT TV',
    description:
      'Managed 24/7 uptime of critical broadcast systems across VMware clusters, Check Point firewalls, and Active Directory. Progressed from infrastructure technician to IT Support Supervisor.',
    tags: ['VMware', 'Check Point CCSA', 'Windows Server', 'PRTG'],
    links: {},
    icon: Activity,
    featured: false,
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-12">
      <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Selected Work</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10">Engineering Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group relative p-8 rounded-xl border transition-all duration-300 bg-[#0c0c16]/80 backdrop-blur-sm ${
                  project.featured
                    ? 'md:col-span-2 border-violet-500/30 hover:border-violet-400/50 shadow-lg shadow-violet-900/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Icon size={24} className="text-violet-400" />
                </div>
                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                  <h3 className="text-xl font-medium text-white leading-snug pr-8">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-3xl relative z-10">{project.description}</p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto relative z-10">
                  <ul className="flex flex-wrap gap-2" role="list">
                    {project.tags.map((tag) => (
                      <li key={tag} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 rounded-md px-2.5 py-1">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors text-sm font-mono shrink-0">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
