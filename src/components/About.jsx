import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const journey = [
  { title: 'B.E. CS @ SPPU', period: '2020–2024' },
  { title: 'Dev Intern @ Gravitech', period: '2023' },
  { title: 'Product Ops @ Tectonic', period: '2025–Now' },
  { title: 'Aspiring APM', period: 'Next' },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            About
          </p>
          <h2 className={`text-2xl md:text-3xl font-bold mb-5 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Product-minded operator who ships with metrics.
          </h2>

          <div className={`space-y-3 text-[15px] leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            <p>
              At <strong className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>Tectonic Labs</strong>, I've led storefront migrations for 15+ merchants (Vaaree, Frido, Lets Beco), authored PRDs that reduced engineering gaps by 30%, and ran A/B tests that improved discovery CTR by 12%.
            </p>
            <p>
              I don't just write specs — I configure, experiment, and measure. Every feature ships with a hypothesis and a metric to validate it. Currently seeking APM roles to build AI-powered products at scale.
            </p>
          </div>
        </motion.div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-px rounded-lg overflow-hidden border ${
            isDark ? 'border-zinc-800 bg-zinc-800' : 'border-zinc-200 bg-zinc-200'
          }`}
        >
          {journey.map((stage) => (
            <div
              key={stage.title}
              className={`text-center py-4 px-3 ${isDark ? 'bg-[#09090b]' : 'bg-white'}`}
            >
              <div className={`text-sm font-medium mb-0.5 ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                {stage.title}
              </div>
              <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {stage.period}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
