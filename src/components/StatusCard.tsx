'use client';

export default function StatusCard() {
  const stats = [
    { label: 'Experience', value: '6+ years' },
    { label: 'Specialty', value: 'Python APIs' },
    { label: 'Focus', value: 'DevSecOps' },
    { label: 'Ambition', value: 'Space Tech' },
  ];

  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
      <div className="mb-3">
        <p className="text-xs uppercase tracking-widest text-violet-300/80">System Status</p>
        <h3 className="mt-1 text-lg font-semibold text-white">Live snapshot</h3>
      </div>

      <div className="grid gap-3">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between bg-black/20 rounded-md px-3 py-2">
            <div>
              <div className="text-sm text-gray-300">{s.label}</div>
            </div>
            <div className="text-sm font-medium text-white">{s.value}</div>
          </div>
        ))}

        <div className="mt-2">
          <a
            href="#work"
            className="inline-block px-4 py-2 bg-violet-600 text-white text-sm rounded-md hover:bg-violet-500 transition-colors"
          >
            View work
          </a>
        </div>
      </div>
    </div>
  );
}