"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // ✅ Type-safe easing
    },
  },
};

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/asset/geez.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col justify-start pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-white max-w-2xl"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Ge’Ez Market <br />
            <span className="text-[#af9e05]">
              Authentic African Groceries
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-gray-200"
          >
            Serving San Leandro, CA with the finest African products. We’re best
            known for stocking premium Teff, a wonderful selection of mixed
            spices, traditional cookware, and beautiful cultural dresses.
            Visit our store to experience authentic African flavors and
            traditions!
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="bg-[#af9e05] hover:bg-[#d0b82b] transition px-6 py-3 rounded-xl font-semibold"
            >
              Explore Products
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-white/70 px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#af9e05] transition"
            >
              Visit Store
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
