import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 'ai-restaurant',
    title: 'AI Restaurant Recommendation Service',
    subtitle: 'Intent-driven discovery using natural language queries',
    accent: '#0f766e',
    github: 'https://github.com/ritik019/Gen-ai-project',
    live: 'https://gen-ai-project-omega.vercel.app',
    tags: ['Python', 'Semantic Search', 'LLM', 'Analytics'],
    problem: 'Users waste 30+ minutes daily deciding where to eat, scrolling through irrelevant recommendations that don\'t account for personal preferences, dietary restrictions, or real-time context.',
    solution: 'Built an AI-powered restaurant recommendation platform enabling intent-driven discovery using natural language queries like "romantic Italian dinner under \u20B91500".',
    approach: 'Designed a recommendation pipeline combining semantic search embeddings, heuristic scoring, and LLM-based re-ranking to surface relevant dining options. Implemented analytics tracking and feedback mechanisms to evaluate recommendation relevance and iteratively improve result ranking.',
    impact: [
      { value: '83%', label: 'Decision Time Reduced' },
      { value: '85%', label: 'Relevance Score' },
      { value: '<5 min', label: 'Avg. Decision Time' },
    ],
  },
  {
    id: 'elearning',
    title: 'E-Learning Gaming Website',
    subtitle: 'Gamified education platform — Final Year Project',
    accent: '#1e3a5f',
    github: 'https://github.com/ritik019/Project',
    live: null,
    tags: ['JavaScript', 'Game Design', 'Full-Stack', 'EdTech'],
    problem: 'Traditional e-learning platforms suffer from low engagement and poor retention, with students dropping off due to monotonous learning experiences.',
    solution: 'Built a gamified e-learning platform featuring 10+ interactive educational games designed to improve engagement and learning retention through progressive difficulty and game mechanics.',
    approach: 'Owned the end-to-end product lifecycle including requirement gathering, feature planning, development, testing, and deployment. Designed game mechanics and progressive difficulty levels to create an engaging learning experience.',
    impact: [
      { value: '10+', label: 'Interactive Games' },
      { value: 'E2E', label: 'Product Lifecycle' },
    ],
  },
];

function ProjectModal({ project, onClose, isDark }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const el = overlayRef.current;
    if (el) {
      const stop = (e) => e.stopPropagation();
      el.addEventListener('wheel', stop, true);
      el.addEventListener('touchmove', stop, true);
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.__lenis?.start();
        el.removeEventListener('wheel', stop, true);
        el.removeEventListener('touchmove', stop, true);
      };
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={overlayRef}
      className="fixed inset-0 z-[100]"
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-black/80' : 'bg-black/40'} backdrop-blur-sm`} onClick={onClose} />
      <div className="absolute inset-0 z-10 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="min-h-full flex items-start justify-center py-6 md:py-12 px-4" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-2xl rounded-xl overflow-hidden ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${isDark ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-500'}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <div className="h-1" style={{ backgroundColor: project.accent }} />

            <div className="p-5 md:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] px-2 py-0.5 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{tag}</span>
                ))}
              </div>

              <h2 className={`text-xl md:text-2xl font-bold mb-1 pr-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{project.title}</h2>
              <p className={`text-sm mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{project.subtitle}</p>

              <div className={`grid grid-cols-${Math.min(project.impact.length, 3)} gap-3 mb-8 p-4 rounded-lg ${isDark ? 'bg-zinc-800/50' : 'bg-zinc-50'}`}>
                {project.impact.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl md:text-2xl font-bold mb-0.5" style={{ color: project.accent }}>{m.value}</div>
                    <div className={`text-[11px] font-medium uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${isDark ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium" style={{ backgroundColor: `${project.accent}18`, color: project.accent }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                )}
              </div>

              <div className="space-y-5">
                {[
                  { title: 'The Problem', content: project.problem },
                  { title: 'The Solution', content: project.solution },
                  { title: 'Approach & Execution', content: project.approach },
                ].map((section) => (
                  <div key={section.title}>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{section.title}</h3>
                    <p className={`text-[15px] leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDark } = useTheme();

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            What I've Built
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group p-5 rounded-lg border cursor-pointer transition-all duration-200 ${
                isDark
                  ? 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60'
                  : 'border-zinc-200 hover:border-zinc-300 bg-white hover:shadow-sm'
              }`}
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className={`text-[11px] px-1.5 py-0.5 rounded ${isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{tag}</span>
                ))}
              </div>

              <h3 className={`text-base font-semibold mb-1 ${isDark ? 'text-zinc-100' : 'text-zinc-800'}`}>{project.title}</h3>
              <p className={`text-[13px] mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{project.subtitle}</p>

              <div className="flex gap-4 mb-4">
                {project.impact.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <span className="text-lg font-bold" style={{ color: project.accent }}>{m.value}</span>
                    <p className={`text-[11px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium inline-flex items-center gap-1" style={{ color: project.accent }}>
                  View project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
                <div className="flex gap-1.5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800' : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100'}`}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800' : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100'}`}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} isDark={isDark} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
