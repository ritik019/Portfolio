import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    title: 'Student',
    period: '2019 – 2021',
    description: 'Built the foundation — CS fundamentals, algorithms, and a passion for understanding how things work.',
    icon: '🎓',
    color: '#6366f1',
  },
  {
    title: 'Developer',
    period: '2021 – 2023',
    description: 'Shipped code, learned system design, and discovered that the best code solves real user problems.',
    icon: '💻',
    color: '#8b5cf6',
  },
  {
    title: 'Product Ops',
    period: '2023 – 2024',
    description: 'Bridged engineering and product — ran experiments, defined metrics, and shaped product direction.',
    icon: '📊',
    color: '#a855f7',
  },
  {
    title: 'Aspiring APM',
    period: '2024 – Present',
    description: 'Combining technical depth with product sense to build what matters most for users.',
    icon: '🚀',
    color: '#c084fc',
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
            isDark ? 'text-indigo-400' : 'text-indigo-600'
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
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500"
            />
          </div>

          {/* Mobile line */}
          <div className={`absolute left-6 top-0 bottom-0 w-px md:hidden ${
            isDark ? 'bg-white/10' : 'bg-gray-200'
          }`}>
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500"
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
