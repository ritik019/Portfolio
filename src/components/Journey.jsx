import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: 'Student',
    period: '2020 – 2024',
    description: 'B.E. in Computer Science at SPPU — built the foundation in CS fundamentals, algorithms, and led the Entrepreneurship Cell as Secretary.',
    icon: '🎓',
    color: '#1e3a5f',
  },
  {
    title: 'Developer Intern',
    period: 'Feb 2023 – Aug 2023',
    description: 'Software Developer Intern at Gravitech Dreams — built responsive UIs, integrated frontend with Java backend services, and optimized frontend performance.',
    icon: '💻',
    color: '#0f766e',
  },
  {
    title: 'Product Ops Analyst',
    period: 'Apr 2025 – Present',
    description: 'At Tectonic Labs — leading storefront migrations for 15+ merchants, writing PRDs, configuring discovery features, and running A/B tests powering 600K+ daily sessions.',
    icon: '📊',
    color: '#b45309',
  },
  {
    title: 'What\'s Next',
    period: 'Exploring',
    description: 'Seeking product intern, product analyst, or business analyst roles — combining technical depth with product sense to solve real user problems at scale.',
    icon: '🚀',
    color: '#92400e',
  },
];

export default function Journey() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const { isDark } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);

  useEffect(() => {
    const cards = document.querySelectorAll('.journey-card');
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="section-padding relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-teal-400' : 'text-teal-700'
          }`}>
            My Journey
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            The Product Path
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className={`absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block ${
            isDark ? 'bg-white/10' : 'bg-gray-200'
          }`}>
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-teal-700 to-amber-700"
            />
          </div>

          {/* Mobile line */}
          <div className={`absolute left-6 top-0 bottom-0 w-px md:hidden ${
            isDark ? 'bg-white/10' : 'bg-gray-200'
          }`}>
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-teal-700 to-amber-700"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className={`journey-card relative flex items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${stage.color}, ${stage.color}88)`,
                    }}
                  >
                    {stage.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } ${i % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <div className={`glass-card p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
                    isDark ? 'hover:bg-white/5' : 'hover:bg-white'
                  }`}>
                    <span
                      className="text-xs font-mono font-bold tracking-wider uppercase"
                      style={{ color: stage.color }}
                    >
                      {stage.period}
                    </span>
                    <h3 className={`text-2xl font-bold mt-2 mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
