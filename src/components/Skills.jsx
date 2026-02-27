import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    title: 'Product Management',
    skills: [
      { name: 'User Research', level: 90 },
      { name: 'Product Strategy', level: 85 },
      { name: 'Roadmapping', level: 88 },
      { name: 'A/B Testing', level: 82 },
      { name: 'PRDs & Specs', level: 90 },
    ],
  },
  {
    title: 'Technical',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'React / JavaScript', level: 85 },
      { name: 'SQL & Analytics', level: 88 },
      { name: 'System Design', level: 80 },
      { name: 'APIs & Integrations', level: 85 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Figma', level: 82 },
      { name: 'Jira / Linear', level: 90 },
      { name: 'Amplitude / Mixpanel', level: 78 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'Git & CI/CD', level: 88 },
    ],
  },
];

const badges = [
  'Product Sense', 'Data-Driven', 'Agile', 'Scrum', 'Lean',
  'Design Thinking', 'OKRs', 'Sprint Planning', 'Stakeholder Mgmt',
  'Cross-functional', 'Go-to-Market', 'Competitive Analysis',
  'Customer Discovery', 'Feature Flagging', 'Metrics & KPIs',
];

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { isDark } = useTheme();

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {name}
        </span>
        <span className={`text-xs font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {level}%
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${
        isDark ? 'bg-white/5' : 'bg-gray-100'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            Capabilities
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Tools
          </h2>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-default transition-colors ${
                isDark
                  ? 'bg-white/5 text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300 border border-white/5'
                  : 'bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-100'
              }`}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
            >
              <h3 className={`text-lg font-bold mb-6 pb-3 border-b ${
                isDark ? 'text-white border-white/10' : 'text-gray-900 border-gray-200'
              }`}>
                {category.title}
              </h3>
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.2 + skillIdx * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
