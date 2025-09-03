"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatIsMissing() {
  return (
    <section className="xl:px-36 px-6 py-10 rounded-2xl my-12"
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
          Ready to see what you’re missing?
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            title: "Start your free trial today",
            desc: `14 days. All features. No credit card.`,
            url : 'Start Free Trial',
          },
          {
            title: "Get a personalized demo",
            desc: `See Claryx in action with your industry’s data`,
            url : 'Book 15-min demo',
          },
          {
            title: "Questions? We’re here to help",
            desc: `hello@claryx.ai`,
            url: 'Live Chat',
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="py-2 transition hover:bg-white/10 p-4 rounded-2xl"
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
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <button className="bg-white rounded-full py-3 px-6 text-black">
                {card.url}
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
