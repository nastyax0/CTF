'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import hero from '@/public/salesman.png';

export default function HeroSection() {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });

  // Text + glow opacity mappings
  const leftOpacity = useTransform(springX, [-200, 0, 200], [0, 0, 1]);
  const rightOpacity = useTransform(springX, [-200, 0, 200], [1, 0, 0]);

  useEffect(() => {
    let direction = 1;

    const interval = setInterval(() => {
      x.set(direction > 0 ? 150 : -150);
      direction *= -1;
    }, 6000);

    return () => clearInterval(interval);
  }, [x]);

  return (
    <div className="relative h-screen overflow-hidden text-white bg-black">
      {/* Cinematic Animated Background */}
      <motion.div className="absolute inset-0" style={{ x: springX }}>
        <Image
          src={hero}
          alt="hero"
          fill
          style={{
            objectFit: 'cover',
            filter: 'contrast(1.4) saturate(1.2) brightness(0.9) blur(0.6px)',
          }}
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
        <div className="absolute inset-0 pointer-events-none bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />
      </motion.div>

      {/* LEFT BLUE GLOW */}
      <motion.div
        style={{ opacity: leftOpacity }}
        className="absolute left-0 top-0 h-full w-1/3 z-10 pointer-events-none"
      >
        <div className="h-full w-full bg-gradient-to-r from-blue-400/30 to-transparent blur-2xl" />
      </motion.div>

      {/* RIGHT BLUE GLOW */}
      <motion.div
        style={{ opacity: rightOpacity }}
        className="absolute right-0 top-0 h-full w-1/3 z-10 pointer-events-none"
      >
        <div className="h-full w-full bg-gradient-to-l from-blue-400/30 to-transparent blur-2xl" />
      </motion.div>

      {/* Left Text */}
      <motion.div
        style={{ opacity: leftOpacity }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 max-w-sm"
      >
        <h1 className="text-4xl font-bold">Are you willing to earn ₹10,000?</h1>
        <p className="mt-2">Only one way to find out.</p>
      </motion.div>

      {/* Right Text */}
      <motion.div
        style={{ opacity: rightOpacity }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 max-w-sm text-right"
      >
        <h1 className="text-4xl font-bold">We have a game for you.</h1>
        <p className="mt-2">Enter if you dare.</p>
      </motion.div>
    </div>
  );
}
