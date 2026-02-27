import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const particles = document.querySelectorAll('.hero-particle');
    particles.forEach((p, i) => {
      gsap.to(p, {
        y: `random(-100, 100)`,
        x: `random(-50, 50)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh]"
      id="hero"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <div className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]'
              : 'bg-gradient-to-br from-white via-indigo-50/50 to-white'
          }`} />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`hero-particle absolute rounded-full ${
                isDark ? 'bg-indigo-500/20' : 'bg-indigo-400/15'
              }`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Gradient orbs */}
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDark ? 'bg-indigo-600/10' : 'bg-indigo-400/10'
          }`} />
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/10'
          }`} style={{ animationDelay: '-3s' }} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-sm md:text-base font-mono tracking-widest uppercase mb-6 ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}
            >
              Associate Product Manager
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className={isDark ? 'text-white' : 'text-gray-900'}>I build products</span>
              <br />
              <span className="gradient-text">users actually need.</span>
            </motion.h1>

            <motion.p
              style={{ opacity: subtitleOpacity }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Turning user pain points into elegant solutions through data-driven
              decisions, rapid experimentation, and relentless prioritization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#cases"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium text-sm transition-colors"
              >
                View Case Studies
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3.5 rounded-full font-medium text-sm border transition-colors ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ opacity: subtitleOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`flex flex-col items-center gap-2 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              <span className="text-xs font-mono">Scroll to explore</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
