'use client'
import Image from "next/image";
import Navbar from "../solution-for-accounting-firms/Navbar";
import { motion } from "framer-motion";

const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center px-2 lg:px-28 xl:pb-20 pb-12 mt-4 md:mt-8 rounded-2xl relative border-1 border-[#D8D8DB] overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Navbar />
      </motion.div>

      {/* Heading */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="gilroy-m text-[#060B13] text-3xl md:text-6xl mt-2 text-center !leading-[150%] mt-12 md:mt-20"
      >
        <motion.h1 variants={textItem}>
          Claryx Pricing Page
        </motion.h1>
        <motion.h1 variants={textItem}> 
        </motion.h1>
      </motion.div>
      <motion.h3
      initial = {{opacity : 0, filter : 'blur(12px)', y : 20}}
      whileInView={{opacity:1, filter:'blur(0)', y:0}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      
      className="text-[#060B13] gilroy-m text-2xl md:text-4xl lg:px-80 mt-2 text-center"
      >
        Simple, transparent pricing that grows with you
      </motion.h3>
      <motion.h3
      initial = {{opacity : 0, filter : 'blur(12px)', y : 20}}
      whileInView={{opacity:1, filter:'blur(0)', y:0}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      
      className="gradient-1 text-transparent bg-clip-text gilroy-m text-lg md:text-xl lg:px-60 mt-4 text-center"
      >
        Start with a 14-day free trial. No credit card required.
      </motion.h3>
      {/* Subtext */}
      <div className="flex items-center gap-2 mt-12">
        <button className="gradient-1 text-white py-2.5 px-6 rounded-full hover:opacity-90 transition">
               Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
