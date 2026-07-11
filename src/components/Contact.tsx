'use client';

import { ExternalLink, Linkedin } from './icons';
import { useScrollReveal } from './portfolio-utils';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="px-6 py-32 max-w-6xl mx-auto scroll-mt-12">
      <div ref={ref} className={`max-w-2xl mx-auto text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-4">Let's Talk</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Let's Connect</h2>
        <p className="text-base text-gray-400 leading-relaxed mb-10">
          Open to remote Backend Developer, Software Engineer, Python Developer, AI Engineer, and DevOps Engineer roles.
          Based in Lisbon, Portugal.
          <br></br>
          Long-term focus: space systems engineering.
        </p>
        <div className="flex justify-center">
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
