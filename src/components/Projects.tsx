'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Digital Twin — Early 20th-Century Energy System',
    description:
      'Capstone dissertation project. Architected a real-time digital twin of a historical energy system: 3D reconstruction in Blender, real-time simulation in Unity (C#), and a Python RAG system querying historical museum archives via ChromaDB and vector search.',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Unity', 'C#', 'Blender'],
    links: { github: 'https://github.com/pdrgrl' },
    highlight: true,
  },
  {
    title: 'RAG API — Historical Archive Query Engine',
    description:
      'Python backend exposing a REST API that retrieves semantically relevant documents from digitised museum archives using vector embeddings, context graphs, and LLM integration.',
    tags: ['Python', 'FastAPI', 'LLM API', 'ChromaDB', 'Context Graphs', 'Docker'],
    links: { github: 'https://github.com/pdrgrl' },
  },
  {
    title: 'Broadcast Infrastructure — SPORT TV',
    description:
      'Managed 24/7 uptime of critical broadcast systems across VMware clusters, Check Point firewalls, and Active Directory. Progressed from infrastructure technician to IT Support Supervisor over five years.',
    tags: ['VMware', 'Check Point CCSA', 'Windows Server', 'Active Directory', 'PRTG'],
    links: {},
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-3">Selected Work</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-heading tracking-tight">Projects</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-4"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={cardVariants}
            className={`group p-6 rounded-lg border transition-colors duration-200 ${
              p.highlight
                ? 'border-muted bg-surface hover:border-subtle'
                : 'border-border bg-surface hover:border-muted'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-base font-medium text-heading leading-snug">{p.title}</h3>
              <div className="flex gap-3 shrink-0">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtle hover:text-heading transition-colors duration-200 text-xs font-mono"
                    aria-label={`GitHub — ${p.title}`}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-body leading-relaxed mb-4">{p.description}</p>
            <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs text-subtle border border-border rounded px-2 py-0.5"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
