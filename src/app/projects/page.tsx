'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Starfield } from '@/components/portfolio-utils';
import { Database, Layers, Github, Activity, Code2, Shield, Rocket } from '@/components/icons';

const categories = ['All', 'AI & Data', 'Web Apps', 'Extensions & Bots', 'Other'] as const;
type Category = typeof categories[number];

const projectsData = [
  {
    title: 'complexity',
    description: '⚡ Supercharge your favourite AI Chat web apps. Currently supports Perplexity AI, adding power features and UI improvements.',
    tags: ['TypeScript', 'Browser Extension', 'Chrome Extension', 'TailwindCSS'],
    links: { github: 'https://github.com/pdrgrl/complexity' },
    icon: Layers,
    category: 'Extensions & Bots',
  },
  {
    title: 'youtube-learning-platform',
    description: 'YouTube Learning Platform - Transform unstructured YouTube content into structured, AI-powered learning experiences with personalized curricula and interactive AI tutoring.',
    tags: ['TypeScript', 'React', 'AI', 'LLM API', 'Next.js'],
    links: { github: 'https://github.com/pdrgrl/youtube-learning-platform' },
    icon: Database,
    category: 'AI & Data',
  },
  {
    title: 'IMDb-Wrapped',
    description: 'Generate Spotify Wrapped-style analytics for your IMDb ratings. Upload your CSV, get beautiful stats, AI insights, and shareable reports for 2025 and beyond.',
    tags: ['JavaScript', 'Frontend', 'Data Visualization', 'CSS', 'AI Integration'],
    links: { github: 'https://github.com/pdrgrl/IMDb-Wrapped' },
    icon: Activity,
    category: 'Web Apps',
  },
  {
    title: 'speedma-backend',
    description: 'RAG (Retrieval-Augmented Generation) system for SPEEDMA - Simulation Platform for Early 20th-Century Domestic Energy Management Apparatus.',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'LLM API'],
    links: { github: 'https://github.com/pdrgrl/speedma-backend' },
    icon: Rocket,
    category: 'AI & Data',
  },
  {
    title: 'speedma-unity',
    description: 'Unity workspace and 3D simulation for SPEEDMA, reconstruction of historical energy system dynamics.',
    tags: ['C#', 'C', 'Unity', 'Blender', '3D Graphics'],
    links: { github: 'https://github.com/pdrgrl/speedma-unity' },
    icon: Code2,
    category: 'Other',
  },
  {
    title: 'ai-news-tracker',
    description: 'Single-file HTML AI/LLM news aggregator with RSS feeds and GitHub trending repos.',
    tags: ['HTML', 'CSS', 'JavaScript', 'RSS Feed', 'TailwindCSS'],
    links: { github: 'https://github.com/pdrgrl/ai-news-tracker' },
    icon: Activity,
    category: 'Web Apps',
  },
  {
    title: 'awesome-brutalism',
    description: '🗿 A curated list of awesome Brutalism resources for architecture, web design, and digital interfaces.',
    tags: ['Markdown', 'HTML', 'CSS Design'],
    links: { github: 'https://github.com/pdrgrl/awesome-brutalism' },
    icon: Shield,
    category: 'Other',
  },
  {
    title: 'DodoStream',
    description: 'Streaming evolved. Seamless and high-quality self-hosted media streaming infrastructure.',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'WebRTC'],
    links: { github: 'https://github.com/pdrgrl/DodoStream' },
    icon: Rocket,
    category: 'Web Apps',
  },
  {
    title: 'LudumForge',
    description: 'Game development and game jam helper platform designed to streamline game logic creation.',
    tags: ['Kotlin', 'Android CLI', 'Java Virtual Machine'],
    links: { github: 'https://github.com/pdrgrl/LudumForge' },
    icon: Code2,
    category: 'Other',
  },
  {
    title: 'IMDb-Watchlist-Picker',
    description: 'IMDb watchlist movie picker and recommendation algorithm based on user logs and lists.',
    tags: ['HTML', 'JavaScript', 'Python', 'CSS'],
    links: { github: 'https://github.com/pdrgrl/IMDb-Watchlist-Picker' },
    icon: Database,
    category: 'Web Apps',
  },
  {
    title: 'odysseus',
    description: 'Self-hosted AI workspace. Orchestrates localized LLM instances, code environments, and personal workflows.',
    tags: ['Python', 'AI', 'LangChain', 'Docker', 'SQLite'],
    links: { github: 'https://github.com/pdrgrl/odysseus' },
    icon: Layers,
    category: 'AI & Data',
  },
  {
    title: 'P-R-O-P-.-L-O-G-I-C',
    description: 'Propositional logic evaluation engine, AST generator, and visual truth table constructor.',
    tags: ['Dart', 'Flutter', 'Data Structures'],
    links: { github: 'https://github.com/pdrgrl/P-R-O-P-.-L-O-G-I-C' },
    icon: Code2,
    category: 'Other',
  },
  {
    title: 'spoticord',
    description: 'A Discord music bot bringing high quality integration with Spotify playlogs directly to guilds.',
    tags: ['JavaScript', 'Node.js', 'Discord.js', 'Spotify API'],
    links: { github: 'https://github.com/pdrgrl/spoticord' },
    icon: Layers,
    category: 'Extensions & Bots',
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="text-gray-300 min-h-screen font-sans selection:bg-violet-500/30 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/webBG.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.20]"
        />
        <div className="absolute inset-0 bg-[#08080f]/25" />
      </div>
      <Starfield />

      <Nav />

      <main className="relative z-10 px-6 py-32 max-w-6xl mx-auto min-h-[calc(100vh-100px)]">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Archive</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            GitHub Repositories
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            A comprehensive list of my public engineering, AI, web development, and simulation projects fetched directly from GitHub. Use filters or search to explore.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8 pb-6 border-b border-white/5">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#0c0c16]/80 p-1 rounded-lg border border-white/5 backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0c16]/80 border border-white/10 rounded-lg px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 backdrop-blur-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-gray-500 hover:text-gray-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group relative p-6 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 bg-[#0c0c16]/50 hover:bg-[#0c0c16]/80 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-white/5 text-violet-400 group-hover:text-violet-300 transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-[10px] text-violet-400/60 uppercase tracking-widest bg-violet-500/5 px-2 py-0.5 rounded border border-violet-500/10">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-medium text-white group-hover:text-violet-300 transition-colors mb-2 pr-6">
                      {project.title}
                    </h2>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <ul className="flex flex-wrap gap-1.5 mb-6" role="list">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[10px] text-gray-400 bg-white/5 border border-white/5 rounded px-2 py-0.5"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={14} /> Repository
                        </a>
                      )}
                      <span className="text-[10px] font-mono text-gray-500">pdrgrl</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/5 rounded-2xl bg-[#0c0c16]/20">
            <p className="text-sm text-gray-500 mb-2">No projects found matching your search</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-violet-400 hover:text-violet-300 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
