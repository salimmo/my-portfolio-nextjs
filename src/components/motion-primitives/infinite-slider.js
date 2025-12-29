import { motion } from 'framer-motion';

export function InfiniteSlider({ children, speed = 40, speedOnHover = 20, gap = 24 }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        whileHover={{
          transition: {
            duration: speedOnHover,
          },
        }}
      >
        {/* Render children twice for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
