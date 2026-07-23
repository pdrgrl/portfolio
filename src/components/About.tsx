'use client';
import Image from 'next/image';
import { useScrollReveal } from './portfolio-utils';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-12 border-t border-white/5">
      <div ref={ref} className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div>
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">About Me</h2>

          <div className="space-y-4 text-sm text-gray-400 leading-relaxed mb-8">
            <p>
              I'm a Systems and Infrastructure Engineer with 6+ years of experience in enterprise IT operations, 
              system administration, and network security, now specializing in backend systems and applied AI (RAG &amp; LLM engineering).
            </p>
            <p>
              At SPORT TV, I progressed from IT Support Technician to IT Support Supervisor, maintaining 24/7 uptime for live 
              broadcast infrastructure: Windows Server, Linux, VMware vCenter, Active Directory, and Check Point firewalls (CCSA certified).
            </p>
            <p>
              I completed a BSc in Computer and Multimedia Engineering at ISEL (Instituto Superior de Engenharia de Lisboa), with a 
              published research paper on digital twin architecture. My capstone combined physics-based simulation in OpenModelica 
              with real-time 3D visualisation in Unity (C#) — a digital twin of a historic energy system, achieving the highest possible grade (20/20). I also built a 
              retrieval-augmented generation (RAG) API in Python (FastAPI, ChromaDB, LLM APIs) containerised with Docker and deployed with CI/CD.
            </p>
            <p>
              Open to remote Backend Developer, Software Engineer, Python Developer, AI Engineer, and DevOps Engineer roles. Long-term focus: space systems engineering.
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Planned postgraduate study: MSc in Space Science and Technology (Digital Forensics &amp; Cyber Security) and a Master of Business Engineering (MBE) in Space Systems.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
            <img src="/bg.webp" alt="Pedro Grilo" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-white/[0.05]" />
            <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay pointer-events-none" />
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8">
            <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">Career Timeline</p>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {[
                { year: '2017–2023', desc: 'IT Infrastructure & Support Supervisor at SPORT TV (6+ Years)' },
                { year: '2026', desc: 'BSc Computer & Multimedia Engineering (Published RAG)' },
                { year: '2027–2028', desc: 'MSc in Space Science & Technology — Digital Forensics & Cyber Security' },
                { year: '2029–2030', desc: 'Master of Business Engineering (MBE) — Space Systems (IST) with industry projects at CEiiA / CTI‑Aeroespacial' },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-violet-500/50 bg-[#08080f] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-white/5 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors">
                    <time className="font-mono text-xs text-violet-400 mb-1 block">{item.year}</time>
                    <div className="text-sm text-gray-300 font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
