'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm text-heading tracking-tight hover:text-accent transition-colors duration-200"
        >
          pg.
        </Link>
        <ul className="flex items-center gap-8" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-subtle hover:text-heading transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
