'use client';
import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Backend & Development',
    items: ['Python', 'FastAPI', 'Java', 'Kotlin', 'JavaScript', 'C#', 'SQL', 'REST APIs', 'Git'],
  },
  {
    label: 'Systems & Infrastructure',
    items: ['Windows Server', 'Linux (Ubuntu/Debian)', 'VMware vCenter', 'Active Directory', 'Group Policy'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'PuTTY'],
  },
  {
    label: 'Security',
    items: ['Check Point CCSA R81.10', 'Cisco Meraki', 'VPN', 'BitLocker'],
  },
  {
    label: 'AI & Data',
    items: ['RAG Systems', 'LLM API Integration', 'ChromaDB', 'Context Graphs', 'Vector Search'],
  },
  {
    label: 'Monitoring & ITSM',
    items: ['PRTG', 'ManageEngine ServiceDesk'],
  },
  {
    label: 'Creative',
    items: ['Blender', 'Unity', 'Photoshop', 'Illustrator'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-subtle tracking-widest uppercase mb-3">What I Work With</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-heading tracking-tight">Skills</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {groups.map((g) => (
          <div key={g.label} className="space-y-3">
            <p className="font-mono text-xs text-subtle tracking-wider uppercase">{g.label}</p>
            <ul className="flex flex-wrap gap-2" role="list">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-xs text-body border border-border rounded px-2.5 py-1 font-mono"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
