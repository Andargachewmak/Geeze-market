// components/Loader.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  const dots = 8;

  // Use viewport width units for responsive radius
  const radiusVW = 6; // radius in vw, scales with screen
  const dotSizeVW = 1.5; // dot size in vw

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
      {/* Rotating circle container */}
      <motion.div
        className="relative"
        style={{
          width: `${radiusVW * 2 + dotSizeVW}vw`,
          height: `${radiusVW * 2 + dotSizeVW}vw`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(dots)].map((_, i) => {
          const angle = (i / dots) * 2 * Math.PI;
          const x = radiusVW * Math.cos(angle);
          const y = radiusVW * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute bg-[#af9e05] rounded-full"
              style={{
                width: `${dotSizeVW}vw`,
                height: `${dotSizeVW}vw`,
                top: `calc(50% + ${y}vw - ${dotSizeVW / 2}vw)`,
                left: `calc(50% + ${x}vw - ${dotSizeVW / 2}vw)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Loader;
