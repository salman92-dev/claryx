"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Implementation() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data array for content
  const data = [
    {
      id: 1,
      title: "Priority chat support",
      imageSrc: "/logo-27.svg",
    },
    {
      id: 2,
      title: "Assigned success manager",
      imageSrc: "/logo-28.svg",
    },
    {
      id: 3,
      title: "Best practices guidance",
      imageSrc: "/logo-29.svg",
    },
    {
      id: 4,
      title: "Implementation assistance ",
      imageSrc: "/logo-30.svg",
    },
  ];

  return (
    <section
      className="relative py-4 pb-12 md:pb-20 my-12 md:my-16 lg:px-20 rounded-4xl bg-[#F5F8F9]">
      {/* Content */}
      <div className="flex flex-col items-center mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2"
        >
          Implementation & support
        </motion.h2>
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="gilroy-r text-center text-2xl md:text-3xl !leading-[130%] text-[#454140] mt-2"
        >
          We make it easy to get started
        </motion.h3>
        <p className="text-[#454140] gilroy-r text-lg mt-4">
            Simple onboarding - Connect client accounts in minutes - Templates to get started quickly - No IT required
        </p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2"
        >
          <span className="text-[#006DD3]">Dedicated</span> support
        </motion.h2>

          <div className="md:py-36 max-sm:pt-8 w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-[30%] relative">
          {/* Central Claryx Icon */}
          <div className="absolute w-[50%] left-[25%] top-10 mx-auto items-center text-white">
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
               className={`relative p-6 my-4 rounded-2xl bg-white shadow-lg text-left`}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={44}
                height={44}
                className="w-10 mb-4"
              />
              <h3 className="gilroy-m text-lg text-[#00234B] pr-10">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
