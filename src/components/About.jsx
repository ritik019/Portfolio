import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const highlights = [
  { label: 'Products Shipped', value: '5+' },
  { label: 'Users Impacted', value: '10K+' },
  { label: 'Experiments Run', value: '20+' },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);

  const textLines = [
    "I'm a product-minded engineer transitioning into product management.",
    "With a strong foundation in software development and data analysis,",
    "I bring a unique perspective to building products that solve real problems.",
    "I believe great products emerge from deep user empathy,",
    "rigorous experimentation, and cross-functional collaboration.",
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Progress bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-16 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 z-40"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image */}
          <motion.div
            style={{ x: imageX, opacity: imageOpacity }}
            className="relative"
          >
            <div className={`aspect-square max-w-md mx-auto rounded-2xl overflow-hidden ${
              isDark ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30' : 'bg-gradient-to-br from-indigo-100 to-purple-100'
            }`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className={`w-32 h-32 mx-auto rounded-full mb-6 flex items-center justify-center text-5xl font-bold ${
                    isDark
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
                      : 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white'
                  }`}>
                    SP
                  </div>
                  <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Sakshyat Pradhan
                  </p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Product Builder & Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-lg border-2 -z-10 ${
              isDark ? 'border-indigo-500/20' : 'border-indigo-300/40'
            }`} />
            <div className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-lg border-2 -z-10 ${
              isDark ? 'border-purple-500/20' : 'border-purple-300/40'
            }`} />
          </motion.div>

          {/* Text content */}
          <div>
            <div className="space-y-4 mb-12">
              {textLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className={`text-xs font-medium uppercase tracking-wider ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
