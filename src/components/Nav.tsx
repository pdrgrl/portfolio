'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#08080f]/80 backdrop-blur-md border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-sm text-gray-200 tracking-tight hover:text-violet-300 transition-colors">
          pg.
        </a>
        <ul className="flex items-center gap-6 sm:gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
