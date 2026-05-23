'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <p className="font-mono text-xs text-dim tracking-widest uppercase mb-3">Let&apos;s Talk</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-heading tracking-tight mb-4">
          Open to Remote Roles
        </h2>
        <p className="text-sm text-body leading-relaxed mb-8">
          Currently available for fully remote, individual-contributor positions in
          Backend Engineering, Cloud Infrastructure, or DevSecOps.
          If you&apos;re building something interesting &mdash; especially at the intersection
          of infrastructure and space systems &mdash; I&apos;d like to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:pedro99grilo@gmail.com"
            className="px-5 py-2.5 bg-accent text-bg text-sm font-medium rounded hover:bg-heading transition-colors duration-200 text-center cursor-pointer"
          >
            pedro99grilo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/pdrgrl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-heading text-sm font-medium rounded hover:border-muted transition-colors duration-200 text-center cursor-pointer"
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
