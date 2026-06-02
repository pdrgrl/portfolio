'use client';

import StatusCard from './StatusCard';
import { Radio, Rocket } from './icons';

export default function Hero() {
  return (
    <section id="top" className="items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-slide-up">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-violet-500/30 mb-6 bg-white/5 relative">
            <img
              src="/me.png"
              alt="Pedro Grilo"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Radio size={14} className="animate-pulse" /> Lisbon, Portugal
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight tracking-tight text-balance mb-6">
            Pedro Grilo
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed mb-6 text-balance">
            Backend &amp; Infrastructure Engineer. <br className="hidden sm:block" />
            6+ years in enterprise IT, now building Python APIs, distributed systems, and DevSecOps pipelines.
          </p>
          <p className="font-mono text-xs text-gray-500 tracking-wide mb-10 flex items-center gap-2 border border-white/10 rounded-full py-1 px-3 inline-flex bg-white/5">
            <Rocket size={14} className="text-violet-400" />
            Next stops — <span className="text-violet-300">MSc in Space Science &amp; Technology (Digital Forensics &amp; Cyber Security) &rarr; MBE in Space Systems</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-6 py-3 bg-violet-600 text-white text-sm font-medium rounded-md hover:bg-violet-500 transition-colors duration-200 cursor-pointer shadow-lg shadow-violet-900/20">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-md hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end animate-slide-up animate-slide-delay-200">
          <StatusCard />
        </div>
      </div>
    </section>
  );
}
