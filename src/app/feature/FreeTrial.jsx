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
      className="bg-[#E1F7FF] border border-[#D8D8DB] my-12 md:my-16 rounded-2xl px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 max-sm:pt-10"
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
          className="text-3xl md:text-4xl gilroy-m text-[#060B13] mb-4"
          variants={item}
        >
            Ready to let AI transform your financial analysis?
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          variants={item}
        >
          Be among the first to experience the future of financial intelligence.
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
            className="text-black gilroy-r"
            variants={item}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            No credit card required
          </motion.button>
        </motion.div>
        <p className='gilroy-m text-lg text-black mt-5'>
            <span className='gradient-1 text-transparent bg-clip-text'>Questions?</span> Chat with us | hello@claryx.ai
        </p>
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
