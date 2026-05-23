'use client';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-mono text-xs text-dim tracking-widest uppercase mb-6"
      >
        Lisbon, Portugal
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-heading leading-tight tracking-tight text-balance mb-6"
      >
        Pedro Grilo
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-lg sm:text-xl text-body max-w-xl leading-relaxed mb-3 text-balance"
      >
        Backend &amp; Infrastructure Engineer.
        8+ years in enterprise IT, now building Python APIs,
        distributed systems, and DevSecOps pipelines.
      </motion.p>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-mono text-xs text-dim tracking-wide mb-10"
      >
        Next stop &mdash;&nbsp;
        <span className="text-accent">Space Science &amp; Technology</span>
      </motion.p>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-4"
      >
        <a
          href="#work"
          className="px-5 py-2.5 bg-accent text-bg text-sm font-medium rounded hover:bg-heading transition-colors duration-200 cursor-pointer"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 border border-border text-heading text-sm font-medium rounded hover:border-muted transition-colors duration-200 cursor-pointer"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
