import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const resumeItems = [
  {
    section: 'Experience',
    items: [
      {
        title: 'Product Operations Analyst',
        org: 'Tech Company',
        period: '2023 – Present',
        points: [
          'Led cross-functional initiatives improving product delivery by 25%',
          'Defined and tracked KPIs for 3 product lines across 5 teams',
          'Ran 15+ experiments resulting in 12% increase in user engagement',
        ],
      },
      {
        title: 'Software Developer',
        org: 'Startup Inc.',
        period: '2021 – 2023',
        points: [
          'Built full-stack features used by 10,000+ daily active users',
          'Reduced API response time by 40% through query optimization',
          'Collaborated with PM to define technical requirements for 3 major releases',
        ],
      },
    ],
  },
  {
    section: 'Education',
    items: [
      {
        title: "Bachelor's in Computer Science",
        org: 'University',
        period: '2019 – 2023',
        points: [
          'Coursework: Data Structures, ML, HCI, Product Management',
          'Led student product club — shipped 2 campus apps',
        ],
      },
    ],
  },
];

export default function Resume() {
  const { isDark } = useTheme();

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            Background
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Resume
          </h2>
        </motion.div>

        {/* Resume content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`glass-card p-8 md:p-12 mb-8`}
        >
          {resumeItems.map((section, sectionIdx) => (
            <div key={section.section} className={sectionIdx > 0 ? 'mt-10' : ''}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIdx * 0.2 }}
                className={`text-sm font-mono font-bold uppercase tracking-wider mb-6 ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}
              >
                {section.section}
              </motion.h3>

              <div className="space-y-8">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + itemIdx * 0.15 }}
                    className={`pl-6 border-l-2 ${
                      isDark ? 'border-indigo-500/30' : 'border-indigo-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <span className={`text-sm font-mono ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    <p className={`text-sm font-medium mb-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.org}
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point, pi) => (
                        <li
                          key={pi}
                          className={`text-sm leading-relaxed flex items-start gap-2 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          <span className="text-indigo-400 mt-1.5 flex-shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="#"
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors animate-glow-pulse"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </motion.a>
          <p className={`text-sm mt-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            PDF format, updated February 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
