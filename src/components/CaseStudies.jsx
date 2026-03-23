import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const caseStudies = [
  {
    id: 'chatgpt-voice',
    question: 'Designing voice input for ChatGPT — reducing mobile input friction by 60%',
    metricValue: '60%',
    metricLabel: 'Input Friction Reduced',
    company: 'UX Case Study',
    tags: ['UX Design', 'Prototyping', 'Mobile'],
    accent: '#0f766e',
    github: 'https://github.com/ritik019/chatgpt-voice-prototype',
    live: './case studies/index.html',
    pdf: null,
    metrics: [
      { value: '4', label: 'Interactive Screens' },
      { value: '60%', label: 'Input Friction Reduced' },
      { value: '92%', label: 'Mobile UX Score' },
    ],
    sections: [
      { title: 'The Problem', content: 'ChatGPT\'s text-only input creates friction for users who think faster than they type, leading to lower engagement and incomplete queries — especially on mobile devices where typing is cumbersome.' },
      { title: 'Research & Hypothesis', content: 'Analyzed user behavior patterns and identified that voice input could significantly reduce input friction. Hypothesized a 4-screen flow: Home (with nudge tooltip) → Listening (waveform + live transcription) → Edit (review with confidence indicators) → Chat (conversation view).' },
      { title: 'Design Decisions', content: 'Designed for trust: live transcription shows users their words are being captured accurately. Added an edit screen so users can review and refine before sending — addressing the #1 concern with voice input (accuracy). Confidence warning indicators flag low-certainty transcriptions.' },
      { title: 'Prototype', content: 'Built an interactive high-fidelity prototype with phone bezel design, waveform animations, live transcription simulation, and editable text review — demonstrating the full voice-to-chat user flow with real interactions.' },
      { title: 'Impact', content: 'Created a compelling UX case study demonstrating how voice input could improve mobile engagement and reduce input abandonment rates. The prototype received positive feedback for its attention to edge cases and user trust.' },
    ],
  },
  {
    id: 'zepto-discovery',
    question: 'How to improve product discovery in Zepto — a product strategy case study',
    metricValue: 'Strategy',
    metricLabel: 'Product Discovery',
    company: 'Product Strategy',
    tags: ['E-commerce', 'Quick Commerce', 'Discovery'],
    accent: '#b45309',
    github: null,
    live: null,
    pdf: './case studies/Improving-Product-Discovery-in-Zepto.pdf',
    metrics: [],
    sections: [
      { title: 'Overview', content: 'A product strategy case study analyzing Zepto\'s product discovery experience and proposing data-driven improvements to help users find relevant products faster in a quick-commerce context.' },
    ],
  },
  {
    id: 'uber-driver',
    question: 'How to improve driver supply in Uber — a marketplace problem analysis',
    metricValue: 'Analysis',
    metricLabel: 'Supply-Side',
    company: 'Marketplace Strategy',
    tags: ['Marketplace', 'Supply & Demand', 'Strategy'],
    accent: '#9f1239',
    github: null,
    live: null,
    pdf: './case studies/Improving-Driver-Supply-in-Uber.pdf',
    metrics: [],
    sections: [
      { title: 'Overview', content: 'A marketplace dynamics case study analyzing the driver supply problem in Uber and proposing strategies to improve driver availability, reduce wait times, and balance the supply-demand equation.' },
    ],
  },
];

function CaseStudyModal({ study, onClose, isDark }) {
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

            <div className="h-1" style={{ backgroundColor: study.accent }} />

            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: study.accent }}>{study.company}</span>
                {study.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] px-2 py-0.5 rounded ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{tag}</span>
                ))}
              </div>

              <h2 className={`text-xl md:text-2xl font-bold mb-6 leading-snug pr-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{study.question}</h2>

              {study.metrics.length > 0 && (
                <div className={`grid grid-cols-3 gap-3 mb-8 p-4 rounded-lg ${isDark ? 'bg-zinc-800/50' : 'bg-zinc-50'}`}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-xl md:text-2xl font-bold mb-0.5" style={{ color: study.accent }}>{metric.value}</div>
                      <div className={`text-[11px] font-medium uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {(study.github || study.live || study.pdf) && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.github && (
                    <a href={study.github} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${isDark ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {study.live && (
                    <a href={study.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium" style={{ backgroundColor: `${study.accent}18`, color: study.accent }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Prototype
                    </a>
                  )}
                  {study.pdf && (
                    <a href={study.pdf} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${isDark ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      Read PDF
                    </a>
                  )}
                </div>
              )}

              <div className="space-y-5">
                {study.sections.map((section) => (
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

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const { isDark } = useTheme();

  return (
    <section id="cases" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Product Thinking
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Case Studies
          </h2>
        </motion.div>

        <div className="space-y-3">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelectedStudy(study)}
              className={`group p-5 md:p-6 rounded-lg border cursor-pointer transition-all duration-200 ${
                isDark
                  ? 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/60'
                  : 'border-zinc-200 hover:border-zinc-300 bg-white hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: study.accent }}>{study.company}</span>
                    {study.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={`text-[11px] px-1.5 py-0.5 rounded ${isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-400'}`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={`text-base md:text-lg font-semibold leading-snug mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-800'}`}>{study.question}</h3>
                  <span className="text-[13px] font-medium inline-flex items-center gap-1" style={{ color: study.accent }}>
                    {study.pdf ? 'Read case study' : 'View case study'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: study.accent }}>{study.metricValue}</div>
                  <div className={`text-[11px] font-medium uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{study.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && <CaseStudyModal study={selectedStudy} isDark={isDark} onClose={() => setSelectedStudy(null)} />}
      </AnimatePresence>
    </section>
  );
}
