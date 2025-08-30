"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Difference() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data array for content
  const data = [
    {
      id: 1,
      title: "Industry-specific intelligence",
      description: "Understands your sector’s unique metrics, seasonality, and benchmarks.",
      imageSrc: "/t-1.svg",
    },
    {
      id: 2,
      title: "Transparent insights",
      description: "Every recommendation includes confidence scoring and clear, jargon-free explanations.",
      imageSrc: "/t-1.svg",
    },
    {
      id: 3,
      title: "Adaptive learning",
      description: "Continuously improves by learning your business patterns and preferences.",
      imageSrc: "/t-1.svg",
    },
    {
      id: 4,
      title: "Multi-layer analysis",
      description: "From a 30,000-foot executive view to transaction-level detail.",
      imageSrc: "/t-1.svg",
    },
  ];

  return (
    <section
      className="relative py-4 pb-12 md:pb-20 my-8 md:px-20 rounded-2xl bg-[#F5F8F9]">
      {/* Content */}
      <div className="flex flex-col items-center mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-12 md:mt-20"
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
          What makes our AI <span className="text-[#006DD3]">different</span>
        </motion.h2>

          <div className="mt-4 md:mt-20 w-full flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 relative">
          {/* Central Claryx Icon */}
          <div className="w-[50%] mx-auto items-center text-white">
            <Image
              src="/difference-img.png" // Replace with Claryx icon if different
              alt="Claryx logo"
              width={1388}
              height={1266}
              className="hidden md:block w-full"
            />
          </div>

          {/* Surrounding Boxes */}
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
               className={`relative w-full md:w-[25%] p-6 my-4 rounded-2xl bg-white shadow-md text-left ${
                index === 0
                ? "md:absolute md:top-[-3rem] md:left-[9%]"
                : index === 1
                ? "md:absolute md:top-[-2rem] md:right-[5%]"
                : index === 2
                ? "md:absolute md:bottom-[-10%] md:left-[8%]"
                : "md:absolute md:bottom-[-10%] md:right-[8%]"
            }`}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={44}
                height={44}
                className="w-10 mb-4"
              />
              <h3 className="gilroy-m text-lg text-[#00234B] pr-10">{item.title}</h3>
              <p className="mt-2 gilroy-m text-[#909090] text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
