"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FinancialAnalysis() {
  return (
    <section className="lg:px-36 px-4 py-6 md:py-0 max-sm:px-0">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] md:mt-8 mt-4">
          What is AI {" "}
          <span className="text-[#006DD3]"> Financial </span>
          Analysis?
        </h2>
        <p className="gilroy-r text-xl text-[#454140] md:px-40">
            Traditional financial tools show you numbers. Claryx’s AI CFO explains what they mean 
            and what you should do about them.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: "/f-6.svg",
            title: "Ask questions naturally",
            desc: `Link your Xero or QuickBooks account in under 5 minutes`,
            w: "70%",
          },
          {
            icon: "/f-5.svg",
            title: "Get explanations, not just charts",
            desc: `Every insight comes with the “why” behind it. Understand root causes, not just symptoms.`,
            w: "90%",
          },
          {
            icon: "/f-7.svg",
            title: "Receive actionable recommendations",
            desc: `Our AI CFO doesn’t just identify problems - it tells you exactly how to fix them.`,
            w: "100%",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#F5F6F9] rounded-2xl px-8 py-12 pb-0  f-after hover:shadow-md transition sticky top-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Image
              src={card.icon}
              alt="logo"
              width={24}
              height={24}
              className="mb-6 w-12"
            />
            <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm mb-6">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
