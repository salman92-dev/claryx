"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StartUsing() {
  return (
    <section className="md:px-36 px-6 py-10 rounded-2xl my-12"
    style={{backgroundImage : 'url(/bg-1.png)', backgroundSize : 'cover', backgroundPosition : 'center'}}
    >
      {/* Heading Section */}
      <motion.div
        className="mb-14 flex flex-col items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow">
          <Image
            className="w-3"
            src="/favicon.svg"
            alt="favicon"
            width={24}
            height={24}
          />
          Ai Financial Analysis
        </p>
        <h2 className="gilroy-m text-4xl md:text-[3.3rem] !leading-[130%] tracking-[-1.97px] text-white mt-2">
          Start using AI Financial Analysis today
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: "Ask questions naturally",
            desc: `Link your Xero or QuickBooks account in under 5 minutes`,
            url : 'Start 14-day free trial'
          },
          {
            title: "Get explanations, not just charts",
            desc: `Every insight comes with the “why” behind it. Understand root causes, not just symptoms.`,
            url : 'Book a demo'
          },
          {
            title: "Receive actionable recommendations",
            desc: `Our AI CFO doesn’t just identify problems - it tells you exactly how to fix them.`,
            url: 'Visit resource center',
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="py-2 pb-0 hover:shadow-md transition"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#fff] text-xl gilroy-m tracking-[0.44px] mb-2">
              {card.title}
            </h3>
            <p className="text-[#fff] gilroy-r mb-6">
              {card.desc}
            </p>
            <button className="bg-white rounded-full py-3 px-6 text-black">
                {card.url}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
