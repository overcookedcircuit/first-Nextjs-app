// app/animated.tsx
"use client";

import { motion } from "framer-motion";

export default function Animated() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 2.0, rotate: 10 }} // hover effect
      >
        <img
          src="/images/next-js-logo.png"
          alt="Next.js Logo"
          className="w-40" // Tailwind size
        />
      </motion.div>
    </div>
  );
}
