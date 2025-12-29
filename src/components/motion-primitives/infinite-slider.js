'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function InfiniteSlider({ children, speed = 40, speedOnHover = 20, gap = 24 }) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [duration, setDuration] = useState(speed);

  useEffect(() => {
    const slider = document.querySelector('.infinite-slider-content');
    if (slider) {
      setSliderWidth(slider.scrollWidth / 2);
    }
  }, [children]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setDuration(speedOnHover)}
      onMouseLeave={() => setDuration(speed)}
    >
      <motion.div
        className="infinite-slider-content flex"
        style={{ gap: `${gap}px` }}
        animate={{
          x: [-sliderWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
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
