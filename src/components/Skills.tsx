'use client';

import { Activity, Cloud, Code2, Database, Server, Shield } from './icons';
import { useScrollReveal } from './portfolio-utils';

const groups = [
  {
    label: 'Backend & Dev',
    icon: Code2,
    items: ['Python', 'FastAPI', 'Java', 'Kotlin', 'JavaScript', 'C#', 'SQL', 'REST APIs', 'Git'],
  },
  {
    label: 'Systems & Infra',
    icon: Server,
    items: ['Windows Server', 'Linux', 'VMware vCenter', 'Active Directory', 'Group Policy'],
  },
  {
    label: 'DevOps & Tools',
    icon: Cloud,
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'PuTTY'],
  },
  {
    label: 'Security',
    icon: Shield,
    items: ['Check Point CCSA', 'Cisco Meraki', 'VPN', 'BitLocker'],
  },
  {
    label: 'AI & Data',
    icon: Database,
    items: ['RAG Systems', 'LLM APIs', 'ChromaDB', 'Context Graphs', 'Vector Search'],
  },
  {
    label: 'Monitoring',
    icon: Activity,
    items: ['PRTG', 'ManageEngine ServiceDesk'],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-12 border-t border-white/5">
      <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Capabilities</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10">Technical Arsenal</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <div key={group.label} className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] transition-colors duration-300">
                <Icon className="text-violet-400 mb-4" size={28} />
                <h3 className="font-mono text-sm text-white tracking-wider uppercase mb-4">{group.label}</h3>
                <ul className="flex flex-wrap gap-2" role="list">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-gray-400 bg-black/20 border border-white/5 rounded px-2.5 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
