'use client'
import Image from "next/image";
import MegaMenuNavbar from "./layout/Navbar";
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
      className="flex flex-col items-center px-2 md:px-28 mt-4 md:mt-8 rounded-2xl relative border-1 border-[#D8D8DB] overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[-1rem] md:bottom-[-10rem] left-2 md:left-14 w-[33%]"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/hero-img-1.png" alt="img" width={851} height={965} />
        </motion.div>
      </motion.div>

      {/* Right Floating Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-2rem] right-2 md:right-8 w-[33%]"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/hero-img-2.png" alt="img" width={851} height={965} />
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

      {/* Badge Text */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-12 md:mt-20"
      >
        <Image className="w-3" src="/favicon.svg" alt="favicon" width={24} height={24} />
        Best Financial Management
      </motion.p>

      {/* Heading */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="gilroy-m text-[#060B13] text-4xl md:text-6xl mt-2 text-center !leading-[150%]"
      >
        <motion.h1 variants={textItem}>
          All-in-one reporting, dashboards
        </motion.h1>
        <motion.h1 variants={textItem}>
          and{" "}
          <span className="gradient-2 rounded-2xl text-[#fff] py-2 px-4 ml-2 border-1 border-[#573DC1]">
            Ai insights
          </span>
        </motion.h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="text-center text-[#909090] gilroy-r text-base mt-6 max-w-2xl"
      >
        Streamline your business's financial management with our intuitive,
        scalable SaaS platform. Designed for U.S. enterprises, our solutions
        simplify complex processes.
      </motion.p>

      {/* Laptop Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2, type: "spring" }}
        className="mt-18 w-[60%]"
      >
        <motion.div
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Image src="/laptop.png" alt="laptop" width={1322} height={772} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
