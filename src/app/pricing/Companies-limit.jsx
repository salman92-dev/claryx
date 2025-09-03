"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Limit() {
  return (
    <section className="md:px-36 px-4 py-12 max-sm:px-4">
      {/* Heading Section */}
      <motion.div
        className="text-center flex flex-col items-center mb-4"
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
        <h2 className="gilroy-m text-center text-2xl md:text-3xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2">
          Need more than 50 companies?
        </h2>
        <p className="gilroy-r text-xl md:text-2xl text-[#454140] md:px-40">
            Contact us for volume pricing
        </p>
        <button className="py-3 px-6 gradient-1 rounded-full gillroy-m mt-4">Get custom quote</button>
        <h4 className="gradient-4 w-full gilroy-m text-2xl text-black mt-14 py-2">Examples</h4>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "3 companies?",
            desc: `Choose Starter + 2 additional = $99/month`,
          },
          {
            title: "8 companies?",
            desc: `Choose Growth + 3 additional = $224/month`,
          },
          {
            title: "30 companies?",
            desc: `Choose Scale + 10 additional = $499/month`,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#F5F6F9] rounded-2xl px-8 py-12 pb-0 shadow-sm hover:shadow-md transition sticky top-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
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
