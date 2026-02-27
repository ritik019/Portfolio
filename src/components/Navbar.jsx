import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
              : 'bg-white/80 backdrop-blur-xl border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              {scrolled ? (
                <motion.span
                  key="scrolled"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="gradient-text"
                >
                  SP
                </motion.span>
              ) : (
                <motion.span
                  key="top"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={isDark ? 'text-white' : 'text-gray-900'}
                >
                  Sakshyat Pradhan
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </motion.button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}
              />
              <motion.div
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}
              />
              <motion.div
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'}`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 pt-20 px-6 md:hidden ${
              isDark ? 'bg-[#0a0a0f]/95' : 'bg-white/95'
            } backdrop-blur-xl`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-2xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleTheme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-4 px-4 py-2 rounded-lg text-sm w-fit ${
                  isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
