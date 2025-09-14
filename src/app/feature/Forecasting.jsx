"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

export default function Forecasting() {
  return (
    <section className="lg:px-36 px-4 my-12 md:my-16 py-6 md:py-0 max-sm:px-0">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
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
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-50"> 
          <span className="text-[#006DD3]"> Predictive </span>
          Analytics & Forecasting
        </h2>
        <h3 className="text-black  gilroy-m text-2xl md:text-4xl mt-3">
            Coming Soon (Q1 2026)
        </h3>
      </motion.div>

      {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
        {[
            {
            icon: "/p-1.svg",
            title: "Cash Flow Forecasting",
            desc: `Project liquidity up to 12 weeks ahead.`,
            },
            {
            icon: "/p-2.svg",
            title: "Revenue Predictions",
            desc: `Revenue predictions based on historical patterns`,
            },
            {
            icon: "/p-3.svg",
            title: "Expense Trends",
            desc: `Track and forecast spending with precision.`,
            },
            {
            icon: "/p-4.svg",
            title: "Scenario Modeling",
            desc: `Scenario modeling and what-if analysis`,
            },
            {
            icon: "/p-5.svg",
            title: "Budget vs. Actuals",
            desc: `Budget vs actual comparisons`,
            },
        ].map((card, i) => (
            <motion.div
            key={i}
            className="rounded-2xl w-full md:w-[32%] border border-[#E0E7F5] shadow-[-8px_35px_55px_0px_#0000001C] transition p-2 bg-[#F4F8FC] w-full max-w-sm"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: i * 0.2, // stagger effect
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            >
            <div className="bg-white rounded-2xl px-4 py-4 border border-[#E0E7F5] h-full">
                <div className="flex items-center gap-3 mb-2 pr-20">
                <Image
                src={card.icon}
                alt="logo"
                width={654}
                height={493}
                className="w-14"
                />
                <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold">
                {card.title}
                </h3>
                </div>
                <h4 className="text-[#1D8EFF] text-lg gilroy-m mb-2">
                {card.subtitle}
                </h4>
                <p className="text-[#909090] gilroy-r mb-6">{card.desc}</p>
                <a
                href="/"
                className="gilroy-b gradient-1 text-transparent bg-clip-text"
                >
                {card.url}
                </a>
            </div>
            </motion.div>
        ))}
        </div>

    </section>
  );
}
