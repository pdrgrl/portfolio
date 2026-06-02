'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let stars: Array<{ x: number; y: number; radius: number; speed: number; alpha: number }> = [];

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 3000);
      for (let index = 0; index < numStars; index += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.3 + 0.1,
          alpha: Math.random() * 0.7 + 0.1,
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#08080f00';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.8,
        0,
        0,
        canvas.width * 0.8,
        0,
        canvas.width * 0.5,
      );
      gradient1.addColorStop(0, 'rgba(100, 80, 200, 0.08)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height,
        0,
        canvas.width * 0.2,
        canvas.height,
        canvas.width * 0.4,
      );
      gradient2.addColorStop(0, 'rgba(60, 40, 140, 0.06)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 191, 255, ${star.alpha})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.8) star.alpha = 0.8;
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />;
}

export function MockTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const fullScript = [
    'Infrastructure profile online',
    'VMware & Check Point clusters ready',
    'RAG API / ChromaDB connected',
    'Space Science & Tech focus active',
    'Available for impactful work',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = window.setInterval(() => {
      const nextLine = fullScript[currentLine];
      if (nextLine) {
        setLines((prev) => [...prev, nextLine]);
        currentLine += 1;
      } else {
        window.clearInterval(interval);
      }
    }, 700);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
      <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300/80">System Status</p>
          <h3 className="mt-2 text-lg font-semibold text-white">Live operational snapshot</h3>
        </div>

      <div className="space-y-3">
        {lines.map((line, index) => (
          <div
            key={`${index}-${line}`}
            className="rounded-lg border border-white/5 bg-black/20 px-3 py-2 text-sm text-gray-300 animate-fade-in"
          >
            {line}
          </div>
        ))}
        <div className="h-4 w-24 rounded bg-violet-300/30 animate-pulse" />
      </div>
    </div>
  );
}