"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Steps() {
  return (
    <section className="md:px-36 px-4 py-6 md:py-0 max-sm:px-4">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-12 md:mt-20">
          <Image
            className="w-3"
            src="/favicon.svg"
            alt="favicon"
            width={24}
            height={24}
          />
          Ai Financial Analysis
        </p>
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-50">
          The 
          <span className="text-[#006DD3]"> Steps </span>
          We Take to Get You There
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            icon: "/f-6.svg",
            title: "Connect your data",
            desc: `Link your Xero or QuickBooks account in under 5 minutes`,
            w: "70%",
          },
          {
            icon: "/f-5.svg",
            title: "Ask anything",
            desc: `Use natural language to query your financials`,
            w: "90%",
          },
          {
            icon: "/f-7.svg",
            title: "Get instant insights",
            desc: `AI analyzes your entire financial history and delivers answers immediately`,
            w: "100%",
          },
          {
            icon: "/f-7.svg",
            title: "Take action",
            desc: `Follow AI-generated recommendations specific to your situation`,
            w: "100%",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="rounded-2xl px-8 py-12 pb-0 border-1 border-[#DCE2E3] hover:shadow-md transition"
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
