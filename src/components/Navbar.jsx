import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800'
              : 'bg-white/90 backdrop-blur-md border-b border-zinc-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}
          >
            Sakshyat Pradhan
          </a>

          {/* Mobile: Resume button at top center */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
            className={`md:hidden text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
              isDark
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            Resume
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] font-medium transition-colors ${
                  isDark
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Resume CTA */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
              className={`text-[13px] font-medium px-4 py-1.5 rounded-md transition-colors ${
                isDark
                  ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white hover:bg-zinc-700'
              }`}
            >
              Resume
            </button>

            <button
              onClick={toggleTheme}
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                isDark
                  ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 rounded-md flex items-center justify-center ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 flex items-center justify-center"
            >
              <div className="space-y-1.5">
                <div className={`w-5 h-px transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''} ${isDark ? 'bg-white' : 'bg-zinc-900'}`} />
                <div className={`w-5 h-px transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''} ${isDark ? 'bg-white' : 'bg-zinc-900'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`fixed inset-0 z-40 pt-16 px-5 md:hidden ${
              isDark ? 'bg-[#09090b]/98' : 'bg-white/98'
            } backdrop-blur-sm`}
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium py-3 border-b ${
                    isDark ? 'text-zinc-200 border-zinc-800' : 'text-zinc-800 border-zinc-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  window.dispatchEvent(new CustomEvent('open-resume'));
                }}
                className={`text-lg font-medium py-3 text-left ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
