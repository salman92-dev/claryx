"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyUse() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data array for content
  const data = [
    {
      id: 1,
      title: "Small Businesses",
      subtitle : "Single company?",
      description: "Single company? The Starter plan gives you enterprise-grade financial intelli- gence at a fraction of the cost of a CFO.",
      imageSrc: "/t-1.svg",
    },
    {
      id: 2,
      title: "Growing Companies",
      subtitle :"Multiple entities?",
      description: "Add only what you need. Pay for 7 companies, not a 10- company package you don’t fully use",
      imageSrc: "/t-1.svg",
    },
    {
      id: 3,
      title: "Accounting Firms",
      description: "Whether you have 15 clients or 150, our flexible pricing means you only pay for what you use. White-label everything as your own service.",
      imageSrc: "/t-1.svg",
    },
    {
      id: 4,
      title: "Franchises & Multi-location Businesses",
      description: "Compare locations, consolidate results, and identify your best and worst per- formers with AI-powered insights.",
      imageSrc: "/t-1.svg",
    },
  ];

  return (
    <section
      className="relative py-4 pb-12 lg:pb-20 md:px-20 rounded-2xl my-12 md:my-16"
      style={{
        backgroundImage: "url(/choose-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="flex flex-col items-center mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-12"
        >
          <Image
            className="w-3"
            src="/favicon.svg"
            alt="favicon"
            width={24}
            height={24}
          />
          Ai Financial Analysis
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2"
        >
          Who <span className="text-[#006DD3]">uses </span>
          Claryx?
        </motion.h2>

        {/* === Row === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 w-full flex flex-col md:flex-row items-between justify-between gap-4"
        >
          {/* First Column */}
          <div className="column w-full md:w-[34%]">
            {data.slice(0, 2).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="md:mb-8 mb-4 p-6 py-8 rounded-2xl gradient-3 shadow-sm border border-white text-left" // Add margin between the boxes
              >
                <Image
                  src={item.imageSrc}
                  alt="logo"
                  width={44}
                  height={44}
                  className="w-10 mb-4"
                />
                <h3 className="inter-b text-lg text-[#00234B] pr-10">
                  {item.title}
                </h3>
                <h4 className="gradient-1 text-transparent bg-clip-text gilroy-m text-lg">
                    {item.subtitle}
                </h4>
                <p className="mt-2 gilroy-m text-[#909090] text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Column (with Nested Column) */}
          <div className="w-full md:w-[28%] max-md:mb-4">
            <Image 
            src="/smiling-women.png"
            alt="women"
            width={744}
            height={1061}
            />
          </div>

          {/* Third Column */}
          <div className="column w-full md:w-[34%]">
            {data.slice(2, 4).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="mb-8 p-6 py-8 rounded-2xl gradient-3 shadow-sm border border-white text-left" // Add margin between the boxes
              >
                <Image
                  src={item.imageSrc}
                  alt="logo"
                  width={44}
                  height={44}
                  className="w-10 mb-4"
                />
                <h3 className="inter-b text-lg text-[#00234B] pr-10">
                  {item.title}
                </h3>
                <h4 className="gradient-1 text-transparent bg-clip-text gilroy-m text-lg">
                    {item.subtitle}
                </h4>
                <p className="mt-2 gilroy-m text-[#909090] text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
