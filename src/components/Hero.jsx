import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import brands from '../../brand.json';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14 pb-32"
      id="hero"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-5 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-sm font-medium mb-5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}
        >
          Product &amp; Business Ops — Open to Internships
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}
        >
          I ship products that{' '}
          <span className={isDark ? 'text-zinc-400' : 'text-zinc-500'}>move metrics.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
        >
          From migrating 15+ storefronts powering 600K+ daily sessions to building
          AI recommendation engines — I turn user problems into measurable outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#cases"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
              isDark
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors border ${
              isDark
                ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                : 'border-zinc-300 text-zinc-600 hover:bg-zinc-100'
            }`}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Brand marquee */}
      <div className="absolute bottom-10 left-0 right-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`text-[11px] font-medium uppercase tracking-widest text-center mb-5 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}
        >
          Brands I've worked with
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-14 items-center animate-marquee">
              {[...brands, ...brands].map((brand, i) => (
                <img
                  key={`${brand.name}-${i}`}
                  src={brand.src}
                  alt={brand.name}
                  className={`h-10 md:h-12 w-auto object-contain shrink-0 ${isDark ? 'brightness-0 invert opacity-30' : 'opacity-25 grayscale'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
