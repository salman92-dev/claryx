"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Usecase() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data array for content
  const data = [
    {
      id: 1,
      title: "For CEOs & Owners",
      subtitle : "Make confident decisions without a finance degree",
      description: "Not just charts and graphs – real analysis that explains what’s happening and why",
      imageSrc: "/t-1.svg",
    },
    {
      id: 2,
      title: "For CFOs & Controllers",
      subtitle : "Focus on strategy, not spreadsheets",
      description: "Automate variance analysis - Get instant answers for the board - Identify optimization opportunities - Generate narratives automatically",
      imageSrc: "/t-1.svg",
    },
    {
      id: 3,
      title: "For Accounting Firms",
      subtitle :"Deliver insights, not just numbers",
      description: "Provide instant client answers - Gen- erate professional narratives - Catch issues across all clients - Scale advisory services",
      imageSrc: "/t-1.svg",
    },
    {
      id: 4,
      title: "For Operations Teams",
      subtitle : "Connect activities to financial outcomes",
      description: "Understand cost drivers - Track departmental performance - Monitor budget adherence - Identify ineﬀiciencies",
      imageSrc: "/t-1.svg",
    },
  ];

  return (
    <section
      className="relative py-4 pb-12 md:pb-20 my-8 md:px-20 rounded-2xl"
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
          Use cases by <span className="text-[#006DD3]">role</span>
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
                className="md:mb-8 mb-4 p-6 rounded-2xl gradient-3 border border-white text-left shadow-[0px_16px_69px_0px_#00000040]" // Add margin between the boxes
              >
                <Image
                  src={item.imageSrc}
                  alt="logo"
                  width={44}
                  height={44}
                  className="w-10 mb-4"
                />
                <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
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
                className="mb-8 p-6 rounded-2xl gradient-3 border border-white text-left shadow-[0px_16px_69px_0px_#00000040]" // Add margin between the boxes
              >
                <Image
                  src={item.imageSrc}
                  alt="logo"
                  width={44}
                  height={44}
                  className="w-10 mb-4"
                />
                <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
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
