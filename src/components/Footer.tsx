import { ExternalLink } from './icons';

export default function Footer() {
  return (
    <footer className="px-6 py-8 max-w-6xl mx-auto border-t border-white/10 relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} Pedro Grilo — Lisbon, Portugal</p>
        <div className="flex gap-6">
          <a href="https://github.com/pdrgrl" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gray-500 hover:text-violet-300 transition-colors flex items-center gap-1">
            GitHub <ExternalLink size={12} />
          </a>
          <a href="https://www.linkedin.com/in/pdrgrl" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-gray-500 hover:text-violet-300 transition-colors flex items-center gap-1">
            LinkedIn <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
