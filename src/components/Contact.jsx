import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0077b5',
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#333',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#1da1f2',
  },
  {
    name: 'Email',
    href: 'mailto:hello@sakshyat.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#6366f1',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background morph */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0"
      >
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-t from-indigo-950/50 via-[#0a0a0f] to-[#0a0a0f]'
            : 'bg-gradient-to-t from-indigo-50 via-white to-white'
        }`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          isDark ? 'bg-indigo-600/5' : 'bg-indigo-200/30'
        }`} />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            Let's Connect
          </span>

          <h2 className={`text-4xl md:text-6xl font-bold mt-6 mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's build something
            <br />
            <span className="gradient-text">meaningful together.</span>
          </h2>

          <p className={`text-lg mb-12 max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            I'm always excited to discuss product ideas, career opportunities,
            or just geek out about great user experiences.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <motion.a
            href="mailto:hello@sakshyat.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium text-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Say Hello
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{
                scale: 1.2,
                y: -4,
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  : 'bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              }`}
              style={{
                '--glow-color': social.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className={`mt-20 text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
        >
          Designed & Built by Sakshyat Pradhan &middot; 2026
        </motion.p>
      </div>
    </section>
  );
}
