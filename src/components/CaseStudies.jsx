import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';
import { useCountUp } from '../hooks/useCountUp';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'ai-restaurant',
    title: 'AI Restaurant Recommendation System',
    subtitle: 'Machine Learning + Product Design',
    color: { dark: '#1a1033', light: '#f0f0ff' },
    accent: '#6366f1',
    problem: 'Users waste 30+ minutes daily deciding where to eat, scrolling through irrelevant recommendations that don\'t account for personal preferences, dietary restrictions, or real-time context.',
    thinking: 'Mapped the user decision journey, identified key friction points, and hypothesized that contextual AI recommendations could reduce decision time by 60%. Prioritized features using RICE scoring.',
    execution: 'Built a recommendation engine using collaborative filtering + content-based hybrid approach. Designed an intuitive UI with swipeable cards and real-time preference learning.',
    outcome: 'Reduced average decision time from 30 min to under 5 min. Achieved 85% recommendation relevance score from user feedback.',
    metrics: [
      { label: 'Decision Time Reduced', value: 83, suffix: '%' },
      { label: 'User Satisfaction', value: 85, suffix: '%' },
      { label: 'Daily Active Users', value: 500, suffix: '+' },
    ],
    tags: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
  },
  {
    id: 'shopify-migration',
    title: 'Shopify to Tectonic Migration',
    subtitle: 'Platform Engineering + Product Strategy',
    color: { dark: '#0a1a0a', light: '#f0fff0' },
    accent: '#22c55e',
    problem: 'E-commerce platform hitting Shopify limits — performance bottlenecks, customization constraints, and scaling costs growing 40% quarter over quarter.',
    thinking: 'Conducted competitive analysis of 5 platforms. Built a migration risk matrix and phased rollout plan. Identified that 80% of revenue came from 20% of features — migrated those first.',
    execution: 'Led a 3-phase migration: data pipeline setup, feature parity validation, and gradual traffic shifting. Built custom monitoring dashboards to track migration health in real-time.',
    outcome: 'Zero-downtime migration completed ahead of schedule. Platform costs reduced by 35% while page load improved by 2.3x.',
    metrics: [
      { label: 'Cost Reduction', value: 35, suffix: '%' },
      { label: 'Performance Gain', value: 230, suffix: '%' },
      { label: 'Migration Uptime', value: 100, suffix: '%' },
    ],
    tags: ['Node.js', 'AWS', 'Shopify API', 'Data Pipelines'],
  },
];

function MetricCounter({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
}

function CaseStudySection({ project, index }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const { isDark } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const problemOpacity = useTransform(scrollYProgress, [0.0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const thinkingOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const executionOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const outcomeOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 1, 1, 0.8]);

  const problemY = useTransform(scrollYProgress, [0.0, 0.1], [40, 0]);
  const thinkingY = useTransform(scrollYProgress, [0.2, 0.3], [40, 0]);
  const executionY = useTransform(scrollYProgress, [0.45, 0.55], [40, 0]);
  const outcomeY = useTransform(scrollYProgress, [0.65, 0.75], [40, 0]);

  const phases = [
    { label: 'Problem', text: project.problem, opacity: problemOpacity, y: problemY, icon: '🔍' },
    { label: 'Thinking', text: project.thinking, opacity: thinkingOpacity, y: thinkingY, icon: '💡' },
    { label: 'Execution', text: project.execution, opacity: executionOpacity, y: executionY, icon: '⚡' },
    { label: 'Outcome', text: project.outcome, opacity: outcomeOpacity, y: outcomeY, icon: '🎯' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background color transition */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            backgroundColor: isDark ? project.color.dark : project.color.light,
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className="text-xs font-mono font-bold tracking-wider uppercase"
                style={{ color: project.accent }}
              >
                Case Study {index + 1}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isDark ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className={`text-3xl md:text-5xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              {project.subtitle}
            </p>
          </motion.div>

          {/* Phases */}
          <div ref={contentRef} className="relative min-h-[200px]">
            {phases.map((phase) => (
              <motion.div
                key={phase.label}
                style={{ opacity: phase.opacity, y: phase.y }}
                className="absolute inset-0"
              >
                <div className={`glass-card p-6 md:p-8 max-w-3xl`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{phase.icon}</span>
                    <span
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: project.accent }}
                    >
                      {phase.label}
                    </span>
                  </div>
                  <p className={`text-base md:text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {phase.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics (visible in outcome phase) */}
          <motion.div
            style={{ opacity: outcomeOpacity }}
            className="mt-8 grid grid-cols-3 gap-6 max-w-2xl"
          >
            {project.metrics.map((metric) => (
              <MetricCounter
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </motion.div>
        </div>

        {/* Phase progress dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [i * 0.25, i * 0.25 + 0.1],
                  [0.3, 1]
                ),
              }}
              className="flex items-center gap-2"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <span className={`text-xs font-mono ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {phase.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudies() {
  const { isDark } = useTheme();

  return (
    <div id="cases">
      {/* Section intro */}
      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            Product Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Case Studies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Each project is a story — scroll through to experience the product journey
            from problem discovery to impact measurement.
          </p>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <CaseStudySection key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
