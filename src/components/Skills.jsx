import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const pmThinking = [
  { title: 'Prioritization', desc: 'RICE, ICE — knowing what to say no to.' },
  { title: 'Metrics Thinking', desc: 'Every feature needs a measurable hypothesis.' },
  { title: 'User Empathy', desc: 'Behavioral data to understand the "why".' },
  { title: 'Experimentation', desc: 'A/B tests, evidence over opinions.' },
];

const skillCategories = [
  {
    title: 'Product & Execution',
    skills: ['PRD Writing', 'Requirement Analysis', 'Feature Prioritization', 'Product Operations', 'Stakeholder Management'],
  },
  {
    title: 'Analytics & Experimentation',
    skills: ['A/B Testing', 'SQL', 'Product Metrics (CTR, CVR)', 'Funnel Analysis', 'Data Interpretation'],
  },
  {
    title: 'Tools & Technical',
    skills: ['Figma', 'ClickUp / Notion', 'GitHub', 'Google Sheets', 'HTML / CSS / JavaScript'],
  },
];

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            How I Think
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Skills & Product Thinking
          </h2>
        </motion.div>

        {/* PM Thinking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {pmThinking.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-4 rounded-lg border ${
                isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-white'
              }`}
            >
              <div className={`text-sm font-semibold mb-1 ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{item.title}</div>
              <p className={`text-[13px] leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill categories as tag groups */}
        <div className="space-y-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[13px] px-3 py-1.5 rounded-md ${
                      isDark
                        ? 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                        : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
