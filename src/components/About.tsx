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
              I started in IT support, working my way through broadcast infrastructure at SPORT TV —
              one of the highest-uptime, highest-pressure environments you can operate in.
              Over eight years I moved from first-line technician to IT Support Supervisor,
              owning VMware clusters, Check Point firewalls, and a 24/7 broadcast network.
            </p>
            <p>
              Alongside that, I completed a BSc in Computer and Multimedia Engineering at ISEL,
              finishing with a capstone dissertation that combined 3D reconstruction, real-time
              simulation, and a Python RAG system over historical museum archives.
              The research was published.
            </p>
            <p>
              I&apos;m now targeting fully remote, individual-contributor roles in Backend Engineering,
              Cloud Infrastructure, or DevSecOps. The longer arc points toward space —
              specifically an MSc in <span className="text-violet-300 font-medium">Space Science &amp; Technology </span> at The Open University, specialising in Digital Forensics &amp; Cybersecurity.
              The infrastructure skills transfer directly.
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
            <p className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">Career Highlights</p>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {[
                { year: 'Present', desc: 'Incoming MSc Space Science & Technology at Open University' },
                { year: '2026', desc: 'BSc Computer & Multimedia Engineering (Published RAG)' },
                { year: '8+ Yrs', desc: 'Enterprise IT — Broadcast, Infra, Security Supervisor' },
                { year: 'Cert', desc: 'Check Point CCSA R81.10 Certified' },
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
