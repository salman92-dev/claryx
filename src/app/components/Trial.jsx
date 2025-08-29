'use client';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between child animations
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FreeTrial = () => {
  return (
    <motion.section
      className="bg-[#E1F7FF] border border-[#D8D8DB] my-6 rounded-2xl px-4 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 max-sm:pt-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl text-center lg:text-left"
        variants={container}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-4"
          variants={item}
        >
          Try it for free
        </motion.h2>

        <motion.h3
          className="text-xl font-semibold text-gray-800 mb-2"
          variants={item}
        >
          Get started with Claryx
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-6"
          variants={item}
        >
          Transform your financial reporting today. No credit card required.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          variants={container}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2.5 px-6 rounded-full hover:opacity-90 transition"
            variants={item}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Start free trial
          </motion.button>

          <motion.button
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium border hover:bg-gray-100 transition"
            variants={item}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Book A Demo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Image with layered animation */}
      <motion.div
        className="w-full md:w-[60%] mt-[-1rem]"
        initial={{ opacity: 0, x: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/claryx-laptop.png"
          alt="Claryx laptop preview"
          className="w-full"
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default FreeTrial;
