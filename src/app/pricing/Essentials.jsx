"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

export default function Essentials() {
  return (
    <section className="lg:px-36 px-4 my-12 md:my-16  max-sm:px-0">
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
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-40"> 
            Essential (Free Forever)
        </h2>
        <h3 className="gilroy-m text-black md:text-5xl">
            Core Financial Reporting
        </h3>
        <motion.button 
        whileTap={{scale : 0.9}}
        whileHover={{scale : 1.1}}
        className="gradient-1 py-3 px-6 rounded-full gilroy-m mt-6">
        Get Started Free
        </motion.button>
      </motion.div>

      {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
        {[
            {
            icon: "/correct.svg",
            title: "What’s included",
            desc: `
            <ul class="list-disc ml-6 space-y-2">
            <li>1 company connection</li>
            <li>Standard financial statements</li>
            <li>Basic dashboards (P&amp;L, Balance Sheet, Cash Flow)</li>
            <li>3 users</li>
            <li>2 years historical data</li>
            <li>Industry benchmarks</li>
            <li>CSV/PDF exports</li>
            <li>Data sync every 48 hours</li>
            <li>Email support</li>
            </ul>
            `,
            },
            {
            icon: "/wrong.svg",
            title: "Not included",
            desc: `
            <ul class="list-disc ml-6 space-y-2">
            <li>AI analysis &amp; insights</li>
            <li>Custom dashboards</li>
            <li>Automated reporting</li>
            <li>Natural language queries</li>
            <li>Alert notifications</li>
            <li>White-labeling</li>
            <li>API access</li>
            </ul>
            `,
            },
        ].map((card, i) => (
            <motion.div
            key={i}
            className="rounded-2xl w-full md:w-[48%] border border-[#E0E7F5] hover:shadow-md transition p-2 bg-[#F4F8FC] w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: i * 0.2, // stagger effect
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            >
            <div className="bg-white rounded-2xl px-8 py-6 border border-[#E0E7F5] h-full">
                <div className="flex flex-col gap-2 mb-4 md:pr-20">
                <Image
                src={card.icon}
                alt="logo"
                width={654}
                height={493}
                className="w-8 mb-2"
                />
                <div>
                    <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold">
                    {card.title}
                    </h3>
                </div>
                </div>
                <div className="text-[#000] gilroy-r mb-6" dangerouslySetInnerHTML={{__html : card.desc}}/>
            </div>
            </motion.div>
        ))}
        </div>

    </section>
  );
}
