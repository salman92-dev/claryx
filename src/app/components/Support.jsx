"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const SupportSection = () => {
  return (
    <motion.section
      className="flex flex-wrap items-end justify-between px-0 md:px-8 lg:px-26 my-12 md:my-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 max-w-2xl"
        variants={fadeInUp}
      >
        <motion.h1
          className="gilroy-m text-4xl md:text-6xl !leading-[110%] tracking-[-1.97px] text-[#060B13] mt-2 mb-8"
          variants={fadeInUp}
        >
          Real humans, real <span className="text-[#2082FF]">support</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={staggerParent}
        >
          {/* Feature 1 */}
          <motion.div className="flex flex-col space-y-2" variants={fadeInUp}>
            <Image src="/s-1.svg" alt="logo" width={45} height={45} className="w-10" />
            <h3 className="text-2xl gilroy-m text-[#060B13]">
              Humans answer your questions
            </h3>
            <p className="text-[#909090] gilroy-r text-base">
              No AI chatbots pretending to help. Our support team actually
              understands both the product and your business.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div className="flex flex-col space-y-2" variants={fadeInUp}>
            <Image src="/s-2.svg" alt="logo" width={45} height={45} className="w-10" />
            <h3 className="text-2xl gilroy-m text-[#060B13]">Live chat</h3>
            <p className="text-[#909090] gilroy-r text-base">
              Get help whenever you need it, from people who know what they're
              talking about.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div className="flex flex-col space-y-2" variants={fadeInUp}>
            <Image src="/s-3.svg" alt="logo" width={45} height={45} className="w-10" />
            <h3 className="text-2xl gilroy-m text-[#060B13]">
              Personalized onboarding
            </h3>
            <p className="text-[#909090] gilroy-r text-base">
              We’ll help you get set up and show you exactly how to get the most
              value.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div className="flex flex-col space-y-2" variants={fadeInUp}>
            <Image src="/s-4.svg" alt="logo" width={45} height={45} className="w-10" />
            <h3 className="text-2xl gilroy-m text-[#060B13]">Training sessions</h3>
            <p className="text-[#909090] gilroy-r text-base">
              Join live webinars to master every feature and ask questions directly.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        variants={fadeInUp}
      >
        <Image
          src="/laptop-2.png"
          alt="Phone mockup"
          className="w-full rounded-xl md:mb-30"
          width={936}
          height={1366}
        />
      </motion.div>
    </motion.section>
  );
};

export default SupportSection;
