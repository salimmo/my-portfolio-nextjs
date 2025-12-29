import { motion } from 'framer-motion';

const logos = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Vercel',
  'GitHub',
  'TypeScript',
  'Node.js',
];

export default function LogoCloud() {
  return (
    <section className="w-full bg-light dark:bg-dark overflow-hidden py-16 border-t border-dark/10 dark:border-light/10">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-sm text-dark/75 dark:text-light/75 mb-8 font-medium">
          Technologies I Work With
        </h3>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {/* Render logos multiple times for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 py-4 text-lg font-semibold text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
              >
                {logo}
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-light dark:from-dark to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-light dark:from-dark to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
