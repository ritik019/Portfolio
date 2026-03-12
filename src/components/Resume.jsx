import { motion } from 'framer-motion';
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

export default function Resume() {
  const { isDark } = useTheme();

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
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
              isDark
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
