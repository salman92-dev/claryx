'use client'
import Image from "next/image";
import MegaMenuNavbar from "../components/layout/Navbar";
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
      className="flex flex-col items-center px-2 lg:px-28 mt-4 md:mt-8 rounded-2xl relative border-1 border-[#D8D8DB] overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-30 md:bottom-80 left-2 md:left-30 w-[10%]"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/c-1.png" alt="img" width={851} height={965} />
        </motion.div>
      </motion.div>

      {/* Right Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-34 md:bottom-100 right-6 md:right-40 w-[10%]"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/c-2.png" alt="img" width={851} height={965} />
        </motion.div>
      </motion.div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <MegaMenuNavbar />
      </motion.div>

      {/* Heading */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="gilroy-m text-white text-3xl md:text-6xl mt-2 text-center !leading-[150%] px-40 mt-12 md:mt-20"
      >
        <motion.h1 variants={textItem}>
          AI
          <span className="gradient-1 rounded-2xl text-white py-2 px-4 ml-2 border-1 border-[#573DC1] mr-3">
            Financial
          </span>
          Analysis
        </motion.h1>
        <motion.h1 variants={textItem}> 
        </motion.h1>
      </motion.div>
      <motion.h3
      initial = {{opacity : 0, filter : 'blur(12px)', y : 20}}
      whileInView={{opacity:1, filter:'blur(0)', y:0}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      
      className="text-white gilroy-m text-2xl md:text-4xl mt-2 text-center"
      >
        Finally, financial analysis that explains itself
      </motion.h3>
      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="text-center !text-white gilroy-r text-base mt-6 max-w-2xl"
      >
        Get instant answers to your financial questions. Our AI CFO analyzes your data, identifies issues,
         explains what’s happening, and tells you what to do next - all in plain English.
      </motion.p>
      <div className="flex items-center gap-2 mt-6">
        <button className="bg-gradient-to-r border-2 border-white from-blue-600 to-blue-400 text-white py-2.5 px-6 rounded-full hover:opacity-90 transition">
               Start Free Trial
        </button>
         <button className="bg-white text-black py-2.5 px-6 rounded-full hover:opacity-90 transition">
               See it in Action
        </button>
      </div>

      {/* Laptop Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2, type: "spring" }}
        className="mt-18 w-[80%] md:w-[60%]"
      >
        <motion.div
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Image src="/laptop-2.png" alt="laptop" width={1322} height={772} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
