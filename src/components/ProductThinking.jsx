import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const cards = [
  {
    title: 'Prioritization Mindset',
    description: 'Using RICE, ICE, and custom frameworks to focus on what moves the needle. Not everything matters equally — the art is knowing what to say no to.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v4h-7zM14 10h7v11h-7zM3 13h7v8H3z" />
      </svg>
    ),
    color: '#1e3a5f',
  },
  {
    title: 'Metrics Thinking',
    description: 'Every feature needs a measurable hypothesis. I define north star metrics, track leading indicators, and build dashboards that tell a story.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    color: '#0f766e',
  },
  {
    title: 'User Empathy',
    description: 'Products are conversations with users. I conduct interviews, create journey maps, and use behavioral data to understand the "why" behind every action.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    color: '#9f1239',
  },
  {
    title: 'Experimentation',
    description: 'Ship fast, learn faster. I design A/B tests, analyze results rigorously, and iterate based on evidence — not opinions or HiPPOs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M12 3v7l-4 8h8l-4-8V3" />
        <circle cx="8" cy="21" r="1" />
        <circle cx="16" cy="21" r="1" />
      </svg>
    ),
    color: '#b45309',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductThinking() {
  const { isDark } = useTheme();

  return (
    <section id="thinking" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${
            isDark ? 'text-teal-400' : 'text-teal-700'
          }`}>
            How I Think
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Product Thinking
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`glass-card p-8 group cursor-default transition-all duration-300 ${
                isDark ? 'hover:bg-white/5' : 'hover:bg-white hover:shadow-lg'
              }`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${card.color}15`,
                  color: card.color,
                }}
              >
                {card.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {card.title}
              </h3>

              <p className={`leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {card.description}
              </p>

              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: card.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
