'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-dim tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-heading tracking-tight mb-6">About</h2>
          <div className="space-y-4 text-sm text-body leading-relaxed">
            <p>
              I started in IT support, working my way through broadcast infrastructure at SPORT TV &mdash;
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
              Cloud Infrastructure, or DevSecOps. The longer arc points toward space &mdash;
              specifically an MSc in{' '}
              <span className="text-accent font-medium">Space Science &amp; Technology</span>
              {' '}at The Open University, specialising in Digital Forensics &amp; Cybersecurity.
              The infrastructure skills transfer directly.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <p className="font-mono text-xs text-dim tracking-widest uppercase mb-4">Highlights</p>
            <ul className="space-y-3 text-sm" role="list">
              {[
                '8+ years enterprise IT — broadcast, infra, security',
                'BSc Computer & Multimedia Engineering — ISEL 2026',
                'Published research on digital twin + RAG architecture',
                'Check Point CCSA R81.10 certified',
                'MSc Space Science & Technology — Open University (incoming)',
                'Open to fully remote IC roles',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex gap-6">
            <a
              href="https://www.linkedin.com/in/pdrgrl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-subtle hover:text-heading transition-colors duration-200 font-mono"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/pdrgrl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-subtle hover:text-heading transition-colors duration-200 font-mono"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
