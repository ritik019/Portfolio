import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const resumeItems = [
  {
    section: 'Experience',
    items: [
      {
        title: 'Product Operations Analyst',
        org: 'Tectonic Labs Pvt. Ltd.',
        period: 'Apr 2025 – Present',
        points: [
          'Led end-to-end Shopify-to-Tectonic storefront migrations for 15+ merchants including Vaaree, Frido, and Lets Beco, mapping product data and metafields for seamless product discovery.',
          'Authored structured PRDs and implementation plans translating merchant requirements into engineering-ready documentation, reducing functional gaps by 30%.',
          'Configured storefront discovery features including search, filters, badges, variants, and upsell components aligned with merchant merchandising strategies.',
          'Supported storefront launches powering 600K+ daily sessions, 14K+ daily orders, and 145K+ product catalogs, driving A/B testing that improved product discovery CTR by 12%.',
        ],
      },
      {
        title: 'Software Developer Intern',
        org: 'Gravitech Dreams Pvt. Ltd.',
        period: 'Feb 2023 – Aug 2023',
        points: [
          'Developed responsive UI components using HTML, CSS, JavaScript, and Bootstrap, translating Figma designs into production-ready interfaces across 5+ web modules.',
          'Integrated frontend components with backend services built using Java, JSP, and Servlets, ensuring smooth data flow between UI and server-side logic.',
          'Improved frontend performance by optimizing DOM rendering, reducing redundant API calls, and implementing reusable components.',
        ],
      },
    ],
  },
  {
    section: 'Education',
    items: [
      {
        title: 'B.E. in Computer Science',
        org: 'Savitribai Phule Pune University (SPPU)',
        period: '2020 – 2024',
        points: [
          'CGPA: 7.82',
          'Secretary — Entrepreneurship Cell (E-Cell): Led planning and execution of entrepreneurship workshops, coordinating teams of 20+ members for events attracting 500+ participants.',
        ],
      },
      {
        title: 'Higher Secondary Certificate (Class XII)',
        org: 'Army Public School, Pune',
        period: '2019 – 2020',
        points: ['CGPA: 7.35'],
      },
    ],
  },
];

function FullResume() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-10 bg-white text-[#1A1A1A] font-['Inter',system-ui,sans-serif]">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-[28px] font-bold tracking-tight text-[#1A1A1A]">Sakshyat Pradhan</h1>
        <p className="text-sm text-[#555] mt-1">
          ritikpradhan1000@gmail.com &ensp;|&ensp; +91-7848997533 &ensp;|&ensp;{' '}
          <a href="https://www.linkedin.com/in/sakshyat-pradhan" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:underline">LinkedIn</a>
          &ensp;|&ensp;
          <a href="https://github.com/ritik019" target="_blank" rel="noopener noreferrer" className="text-[#2C3E50] hover:underline">GitHub</a>
          &ensp;|&ensp; Bengaluru, India
        </p>
      </div>

      {/* Professional Summary */}
      <ResumeSection title="Professional Summary">
        <p className="text-[13px] leading-relaxed text-[#333]">
          Product Operations Analyst with ~1 year of experience working across product, engineering, and tech operations in startup environments. Skilled in requirement analysis, storefront migrations, experimentation, and cross-functional execution to deliver scalable and user-focused product improvements. Interested in building AI-powered and data-driven digital products.
        </p>
      </ResumeSection>

      {/* Work Experience */}
      <ResumeSection title="Work Experience">
        <div className="mb-4">
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="text-[13.5px]"><span className="font-semibold">Tectonic Labs Pvt. Ltd.</span> — <em>Product Operations Analyst</em></p>
            <span className="text-[12px] text-[#555]">Apr 2025 – Present</span>
          </div>
          <ul className="mt-1.5 space-y-1 list-disc pl-4">
            <li className="text-[12.5px] leading-relaxed text-[#333]">Led end-to-end Shopify-to-Tectonic storefront migrations for <strong>15+ merchants</strong>, including brands such as <strong>Vaaree, Frido, and Lets Beco</strong>, mapping product data and metafields to ensure seamless product discovery and merchandising workflows during storefront migration.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Authored structured <strong>PRDs</strong> and implementation plans translating <strong>merchant requirements</strong> into <strong>engineering-ready documentation</strong>, reducing functional gaps between business requirements and <strong>engineering implementation</strong> by <strong>30%</strong>.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Partnered with merchant teams to understand <strong>catalog structures</strong>, discovery challenges, and merchandising strategies, translating business needs into actionable <strong>product configurations</strong>.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Configured <strong>storefront discovery features</strong> including search, filters, badges, variants, and upsell components to align with merchant merchandising strategies and improve customer browsing experience.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Supported storefront launches on Tectonic's platform powering <strong>600K+ daily sessions, 14K+ daily orders, and 145K+ product catalogs</strong>, and drove UX experimentation through <strong>A/B testing</strong> that improved product discovery click-through rates by <strong>12%</strong>.</li>
          </ul>
        </div>

        <div>
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="text-[13.5px]"><span className="font-semibold">Gravitech Dreams Pvt. Ltd.</span> — <em>Software Developer Intern</em></p>
            <span className="text-[12px] text-[#555]">Feb 2023 – Aug 2023</span>
          </div>
          <ul className="mt-1.5 space-y-1 list-disc pl-4">
            <li className="text-[12.5px] leading-relaxed text-[#333]">Developed responsive UI components using <strong>HTML, CSS, JavaScript, and Bootstrap</strong>, translating Figma designs into production-ready interfaces across <strong>5+ web modules</strong> with cross-browser compatibility and mobile responsiveness.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Integrated frontend components with backend services built using <strong>Java, JSP, and Servlets</strong>, collaborating with backend engineers to ensure smooth data flow between UI and server-side logic.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Improved frontend performance by optimizing DOM rendering, reducing redundant API calls, and implementing reusable components to enhance overall user experience.</li>
          </ul>
        </div>
      </ResumeSection>

      {/* Projects */}
      <ResumeSection title="Projects">
        <div className="mb-4">
          <p className="text-[13.5px] font-semibold">AI Restaurant Recommendation Service</p>
          <ul className="mt-1.5 space-y-1 list-disc pl-4">
            <li className="text-[12.5px] leading-relaxed text-[#333]">Built an AI-powered restaurant recommendation platform enabling intent-driven discovery using natural language queries such as "romantic Italian dinner under ₹1500".</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Designed a recommendation pipeline combining <strong>semantic search embeddings</strong>, heuristic scoring, and <strong>LLM-based re-ranking</strong> to surface relevant dining options.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Implemented analytics tracking and feedback mechanisms to evaluate recommendation relevance and iteratively improve result ranking.</li>
          </ul>
        </div>

        <div>
          <p className="text-[13.5px] font-semibold">E-Learning Gaming Website</p>
          <ul className="mt-1.5 space-y-1 list-disc pl-4">
            <li className="text-[12.5px] leading-relaxed text-[#333]">Built a gamified e-learning platform featuring <strong>10+ interactive educational games</strong> designed to improve user engagement and learning retention.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Owned the end-to-end product lifecycle including requirement gathering, feature planning, development, testing, and deployment.</li>
            <li className="text-[12.5px] leading-relaxed text-[#333]">Designed game mechanics and progressive difficulty levels to create an engaging learning experience for students.</li>
          </ul>
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="text-[13px]"><span className="font-semibold">Savitribai Phule Pune University (SPPU)</span> — B.E. in Computer Science | CGPA: 7.82</p>
            <span className="text-[12px] text-[#555]">2020 – 2024</span>
          </div>
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <p className="text-[13px]"><span className="font-semibold">Army Public School, Pune</span> — Higher Secondary Certificate (Class XII) | CGPA: 7.35</p>
            <span className="text-[12px] text-[#555]">2019 – 2020</span>
          </div>
        </div>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection title="Skills & Expertise">
        <div className="space-y-1.5">
          <p className="text-[12.5px] text-[#333]"><strong>Product & Execution:</strong> PRD Writing, Requirement Analysis, User Stories, Feature Prioritization, Product Operations, Stakeholder Management, Sprint Planning</p>
          <p className="text-[12.5px] text-[#333]"><strong>Analytics & Experimentation:</strong> A/B Testing, Product Metrics (CTR, Conversion Rate, Bounce Rate), SQL, Funnel Analysis, Data Interpretation</p>
          <p className="text-[12.5px] text-[#333]"><strong>Tools:</strong> Figma, ClickUp, Google Sheets, Notion, GitHub</p>
        </div>
      </ResumeSection>

      {/* Leadership */}
      <ResumeSection title="Leadership & Activities">
        <p className="text-[12.5px] leading-relaxed text-[#333]">
          <strong>Secretary — Entrepreneurship Cell (E-Cell):</strong> Led planning and execution of entrepreneurship workshops and student-led initiatives, coordinating cross-functional teams of 20+ members for successful event delivery attracting 500+ participants.
        </p>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({ title, children }) {
  return (
    <div className="mb-4">
      <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#2C3E50] border-b border-[#2C3E50] pb-1 mb-2.5">{title}</h2>
      {children}
    </div>
  );
}

function ResumeModal({ onClose, isDark }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    const el = overlayRef.current;
    if (el) {
      const stop = (e) => e.stopPropagation();
      el.addEventListener('wheel', stop, true);
      el.addEventListener('touchmove', stop, true);
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.__lenis?.start();
        window.removeEventListener('keydown', handleEsc);
        el.removeEventListener('wheel', stop, true);
        el.removeEventListener('touchmove', stop, true);
      };
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={overlayRef}
      className="fixed inset-0 z-[100]"
    >
      <div
        className={`absolute inset-0 ${isDark ? 'bg-black/85' : 'bg-black/50'} backdrop-blur-sm`}
        onClick={onClose}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl h-[90vh] rounded-xl overflow-hidden flex flex-col bg-white border border-zinc-200 shadow-2xl"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-zinc-200 bg-zinc-50 shrink-0">
            <h2 className="text-sm font-semibold text-zinc-800">Resume — Sakshyat Pradhan</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-md flex items-center justify-center transition-colors hover:bg-zinc-200 text-zinc-500"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Resume content - scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain bg-[#f8f8f8]">
            <div className="py-6 px-4 flex justify-center">
              <div className="bg-white shadow-lg rounded-sm w-full max-w-[800px]">
                <FullResume />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  const [showModal, setShowModal] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener('open-resume', handler);
    return () => window.removeEventListener('open-resume', handler);
  }, []);

  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Background
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Resume
          </h2>
        </motion.div>

        <div className={`rounded-xl border p-5 md:p-7 mb-6 ${isDark ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-white'}`}>
          {resumeItems.map((section, sectionIdx) => (
            <div key={section.section} className={sectionIdx > 0 ? 'mt-8 pt-8 border-t ' + (isDark ? 'border-zinc-800' : 'border-zinc-200') : ''}>
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {section.section}
              </h3>

              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.title} className={`pl-4 border-l-2 ${isDark ? 'border-zinc-700' : 'border-zinc-300'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className={`text-[15px] font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-800'}`}>{item.title}</h4>
                      <span className={`text-[13px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{item.period}</span>
                    </div>
                    <p className={`text-[13px] mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{item.org}</p>
                    <ul className="space-y-1.5">
                      {item.points.map((point, pi) => (
                        <li key={pi} className={`text-[13px] leading-relaxed flex items-start gap-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isDark ? 'bg-zinc-600' : 'bg-zinc-300'}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowModal(true)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
              isDark
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Full Resume
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <ResumeModal isDark={isDark} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
}
