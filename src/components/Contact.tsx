'use client';

import { ExternalLink, Linkedin, Mail } from './icons';
import { useScrollReveal } from './portfolio-utils';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="px-6 py-32 max-w-6xl mx-auto scroll-mt-12">
      <div ref={ref} className={`max-w-2xl mx-auto text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-4">Let's Talk</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Open to Remote Roles</h2>
        <p className="text-base text-gray-400 leading-relaxed mb-10">
          Currently available for fully remote, individual-contributor positions in Backend Engineering, Cloud Infrastructure, or DevSecOps.
          If you're building something interesting — especially at the intersection of infrastructure and space systems — I'd like to hear about it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:pedro99grilo@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 text-white text-sm font-medium rounded-md hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/20">
            <Mail size={18} /> pedro99grilo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/pdrgrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Pedro Grilo LinkedIn profile (opens in new tab)"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn Profile
            <ExternalLink size={14} className="opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
