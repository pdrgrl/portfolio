'use client';

import { useState } from 'react';
import { useScrollReveal } from './portfolio-utils';
import { Database, Layers, Github, Activity, Code2, Shield, Rocket } from './icons';

const categories = ['All', 'AI & Data', 'Web Apps', 'Games & Tools', '3D Art & Creative'] as const;
type Category = typeof categories[number];

// Capstone & Highlighted projects shown at the top
const featuredProjects = [
  {
    title: 'Digital Twin — Early 20th-Century Energy System',
    description:
      'Capstone dissertation project. Architected a real-time digital twin of a historical energy system: 3D reconstruction in Blender, real-time simulation in Unity (C#), and a Python RAG system querying historical museum archives via ChromaDB and vector search.',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'Unity', 'C#', 'Blender'],
    links: { github: 'https://github.com/pdrgrl' },
    icon: Layers,
    featured: true,
  },
  {
    title: 'RAG API — Historical Archive Query',
    description:
      'Python backend exposing a REST API that retrieves semantically relevant documents from digitised museum archives using vector embeddings, context graphs, and LLM integration.',
    tags: ['Python', 'FastAPI', 'LLM API', 'ChromaDB', 'Docker'],
    links: { github: 'https://github.com/pdrgrl' },
    icon: Database,
    featured: false,
  },
  {
    title: 'Broadcast Infrastructure — SPORT TV',
    description:
      'Managed 24/7 uptime of critical broadcast systems across VMware clusters, Check Point firewalls, and Active Directory. Progressed from infrastructure technician to IT Support Supervisor.',
    tags: ['VMware', 'Check Point CCSA', 'Windows Server', 'PRTG'],
    links: {},
    icon: Activity,
    featured: false,
  },
];

// Archive repositories shown in the searchable grid below
const archiveProjectsData = [
  // --- Public ---
  {
    title: 'youtube-learning-platform',
    description: 'YouTube Learning Platform - Transform unstructured YouTube content into structured, AI-powered learning experiences with personalized curricula and interactive AI tutoring.',
    tags: ['TypeScript', 'React', 'AI', 'LLM API', 'Next.js'],
    links: { github: 'https://github.com/pdrgrl/youtube-learning-platform' },
    icon: Database,
    category: 'AI & Data',
    isPrivate: false,
  },
  {
    title: 'IMDb-Wrapped',
    description: 'Generate Spotify Wrapped-style analytics for your IMDb ratings. Upload your CSV, get beautiful stats, AI insights, and shareable reports for 2025 and beyond.',
    tags: ['JavaScript', 'Frontend', 'Data Visualization', 'CSS', 'AI Integration'],
    links: { github: 'https://github.com/pdrgrl/IMDb-Wrapped' },
    icon: Activity,
    category: 'Web Apps',
    isPrivate: false,
  },
  {
    title: 'speedma-backend',
    description: 'RAG (Retrieval-Augmented Generation) system for SPEEDMA - Simulation Platform for Early 20th-Century Domestic Energy Management Apparatus.',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'LLM API'],
    links: { github: 'https://github.com/pdrgrl/speedma-backend' },
    icon: Rocket,
    category: 'AI & Data',
    isPrivate: false,
  },
  {
    title: 'speedma-unity',
    description: 'Unity workspace and 3D simulation for SPEEDMA, reconstruction of historical energy system dynamics.',
    tags: ['C#', 'C', 'Unity', 'Blender', '3D Graphics'],
    links: { github: 'https://github.com/pdrgrl/speedma-unity' },
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: false,
  },
  {
    title: 'ai-news-tracker',
    description: 'Single-file HTML AI/LLM news aggregator with RSS feeds and GitHub trending repos.',
    tags: ['HTML', 'CSS', 'JavaScript', 'RSS Feed', 'TailwindCSS'],
    links: { github: 'https://github.com/pdrgrl/ai-news-tracker' },
    icon: Activity,
    category: 'Web Apps',
    isPrivate: false,
  },
  {
    title: 'awesome-brutalism',
    description: 'Curated list of awesome Brutalism resources for architecture, web design, and digital interfaces.',
    tags: ['Markdown', 'HTML', 'CSS Design'],
    links: { github: 'https://github.com/pdrgrl/awesome-brutalism' },
    icon: Shield,
    category: 'Games & Tools',
    isPrivate: false,
  },
  {
    title: 'LudumForge',
    description: 'Game development and game jam helper platform designed to streamline game logic creation.',
    tags: ['Kotlin', 'Android CLI', 'JVM'],
    links: { github: 'https://github.com/pdrgrl/LudumForge' },
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: false,
  },
  {
    title: 'IMDb-Watchlist-Picker',
    description: 'IMDb watchlist movie picker and recommendation algorithm based on user logs and lists.',
    tags: ['HTML', 'JavaScript', 'Python', 'CSS'],
    links: { github: 'https://github.com/pdrgrl/IMDb-Watchlist-Picker' },
    icon: Database,
    category: 'Web Apps',
    isPrivate: false,
  },
  {
    title: 'P-R-O-P-.-L-O-G-I-C',
    description: 'Propositional logic evaluation engine, AST generator, and visual truth table constructor.',
    tags: ['Dart', 'Flutter', 'Data Structures'],
    links: { github: 'https://github.com/pdrgrl/P-R-O-P-.-L-O-G-I-C' },
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: false,
  },

  // --- Private ---
  {
    title: 'Gravity Flip',
    description: 'Cross-platform endless runner game built in Unity (C#) where players flip gravity dynamically to dodge obstacles. Features procedural level generation and haptic feedback.',
    tags: ['C#', 'Unity', 'URP', 'Mobile Game', 'Procedural Generation'],
    links: {},
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: true,
  },
  {
    title: 'KINETIC',
    description: 'First-person psychic thriller set in a brutalist concrete facility. Navigating abandoned facility using asymmetric dual-hand psychic controls.',
    tags: ['C#', 'Unity 2022.3 LTS', 'URP', '3D Physics', 'Game Design'],
    links: {},
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: true,
  },
  {
    title: 'FlightRisk',
    description: 'A mobile game developed with Unity and C# showcasing custom game physics and touch controls.',
    tags: ['C#', 'Unity', 'Mobile Game', 'Game Dev'],
    links: {},
    icon: Code2,
    category: 'Games & Tools',
    isPrivate: true,
  },
  {
    title: 'calcif-ai',
    description: 'AI-powered task classification system utilizing Gemini API. Features a retro-futuristic Y2K brutalist wireframe design system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Gemini AI', 'PostgreSQL'],
    links: {},
    icon: Shield,
    category: 'AI & Data',
    isPrivate: true,
  },
  {
    title: 'imagensd-api',
    description: 'Modern Node.js & Express backend for ImaGenSD - AI image generation platform with PostgreSQL, JWT authentication, and Stable Diffusion API integration.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Stable Diffusion'],
    links: {},
    icon: Database,
    category: 'AI & Data',
    isPrivate: true,
  },
  {
    title: 'genre-guesser',
    description: 'Daily music genre browser guessing game (Wordle-style game) utilizing song audio metadata and the Last.fm API.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Last.fm API', 'Web Game'],
    links: {},
    icon: Activity,
    category: 'Web Apps',
    isPrivate: true,
  },
  {
    title: 'CanvasMind',
    description: 'Interactive node-based canvas editor (comfyui/n8n style). Paste and organize items to establish contextual zones and containerize specific data flows.',
    tags: ['TypeScript', 'React', 'Vite', 'Canvas API', 'Node Editor'],
    links: {},
    icon: Layers,
    category: 'Web Apps',
    isPrivate: true,
  },

  // --- Creative ---
  {
    title: 'Glasses',
    description: 'Photorealistic 3D glasses model and scene design where I thrived for complete physical realism. Modeled and rendered in Blender Cycles, with post-processing adjustments in Photoshop.',
    tags: ['Blender', 'Photoshop', '3D Modeling', 'Cycles Render', 'Photorealism'],
    links: {},
    icon: Layers,
    category: '3D Art & Creative',
    isPrivate: true,
    image: '/art/glasses.png',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProjects = archiveProjectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-12">
      <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* --- SECTION 1: FEATURED WORK --- */}
        <div>
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Selected Work</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-10">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {featuredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className={`group relative p-8 rounded-xl border transition-all duration-300 bg-[#0c0c16]/80 backdrop-blur-sm ${
                    project.featured
                      ? 'md:col-span-2 border-violet-500/30 hover:border-violet-400/50 shadow-lg shadow-violet-900/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Icon size={24} className="text-violet-400" />
                  </div>
                  <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                    <h3 className="text-xl font-medium text-white leading-snug pr-8">{project.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-3xl relative z-10">{project.description}</p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto relative z-10">
                    <ul className="flex flex-wrap gap-2" role="list">
                      {project.tags.map((tag) => (
                        <li key={tag} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 rounded-md px-2.5 py-1">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors text-sm font-mono shrink-0">
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* --- SECTION 2: PROJECT ARCHIVE --- */}
        <div className="pt-12 border-t border-white/5">
          <p className="font-mono text-xs text-violet-400/80 tracking-widest uppercase mb-3">Repository Log</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-8">All Projects & Archive</h2>

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
                suppressHydrationWarning={true}
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
                    className="group relative p-6 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 bg-[#0c0c16]/50 hover:bg-[#0c0c16]/80 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Project Visual Preview (Clickable Lightbox Trigger) */}
                      {'image' in project && project.image && (
                        <div 
                          onClick={() => setActiveImage(project.image)}
                          className="mb-4 overflow-hidden rounded-lg aspect-video border border-white/5 relative bg-black/40 cursor-zoom-in"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-lg bg-white/5 text-violet-400 group-hover:text-violet-300 transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-[10px] text-violet-400/60 uppercase tracking-widest bg-violet-500/5 px-2 py-0.5 rounded border border-violet-500/10">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-medium text-white group-hover:text-violet-300 transition-colors mb-2 pr-6 leading-snug">
                        {project.title}
                      </h3>
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
                            className="font-mono text-[10px] text-gray-300 bg-white/5 border border-white/10 rounded px-2 py-0.5"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {/* Links / Status */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        {project.isPrivate ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500">
                            🔒 Private Repository
                          </span>
                        ) : (
                          project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                            >
                              <Github size={14} /> Repository
                            </a>
                          )
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
        </div>

      </div>

      {/* --- IMAGE LIGHTBOX OVERLAY --- */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4">
            <img
              src={activeImage}
              alt="Project render preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-white/10 shadow-2xl animate-fade-in"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-full transition-colors flex items-center justify-center"
              aria-label="Close fullscreen preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
