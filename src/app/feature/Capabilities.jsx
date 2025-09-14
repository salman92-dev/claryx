"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

export default function Capabilities() {
  return (
    <section className="lg:px-36 my-12 md:my-16">
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
          Key AI 
          <span className="text-[#006DD3]"> capabilities </span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: "/k-1.png",
            title: "Ask Questions, Get Answers",
            subtitle : "Query your data conversationally",
            desc: `Stop translating your thoughts into reports and formulas. Just ask: - “Why did our margins drop last quarter?” - “What’s driving the increase in operating expenses?” - “Which customers are most profitable?” - “Where are we losing money?” The AI CFO understands your intent and searches across all your data to find answers.`,
            url : "[Try sample questions →]"
          },
          {
            icon: "/k-2.png",
            title: "Anomaly Detection & Alerts",
            subtitle : "Catch issues before they become problems",
            desc: `Our AI CFO continuously monitors your financials and alerts you to: - Unusual expense patterns - Revenue irregularities - Cash flow concerns - Budget variances - Suspicious transactions Every alert includes: - What happened - The specific issue identified - Why it matters - Business impact explained - What to do - Recommended next steps`,
            url: "[Learn more about alerts →]",
          },
          {
            icon: "/k-3.png",
            title: "Root Cause Analysis",
            subtitle : "Drill from symptom to source in seconds",
            desc: `See a problem in your dashboard? Our AI CFO traces it back to the source: - Start with high-level metrics - Drill into account-level details - Identify specific transactions - Understand the complete story. No more hours of spreadsheet detective work. Get answers instantly.`,
            url: "[Try sample questions →]",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="rounded-2xl border-1 border-[#E0E7F5] hover:shadow-md transition p-2 bg-[#F4F8FC]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
           <div className="bg-[#fff] rounded-2xl px-4 py-4 border-1 border-[#E0E7F5] h-full">
             <Image
              src={card.icon}
              alt="logo"
              width={654}
              height={493}
              className="mb-6 w-full"
            />
            <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold mb-2">
              {card.title}
            </h3>
            <h4 className="text-[#1D8EFF] text-lg gilroy-m mb-2">
              {card.subtitle}
            </h4>
            <p className="text-[#464E68] gilroy-r mb-6">
              {card.desc}
            </p>
            <a href="/" className="gilroy-b gradient-1 text-transparent bg-clip-text">
             {card.url}
            </a>
           </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
