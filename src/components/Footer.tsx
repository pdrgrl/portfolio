export default function Footer() {
  return (
    <footer className="px-6 py-8 max-w-5xl mx-auto border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-subtle">Pedro Grilo — Lisbon, Portugal</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/pdrgrl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-heading transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pdrgrl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-heading transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
