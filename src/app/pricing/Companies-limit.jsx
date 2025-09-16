"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Limit() {
  return (
    <section className="lg:px-36 px-4 max-sm:px-0 my-12 md:my-16">
      {/* Heading Section */}
      <motion.div
        className="text-center flex flex-col items-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-2xl md:text-3xl !leading-[130%] text-[#060B13] mt-2">
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
            choose: `Choose Starter`,
            sign : "+",
            additional : "2 additional",
            price : "$99/month"
          },
          {
            title: "8 companies?",
            choose: `Choose Starter`,
            sign : "+",
            additional : "2 additional",
            price : "$224/month"
          },
          {
            title: "30 companies?",
            choose: `Choose Starter`,
            sign : "+",
            additional : "2 additional",
            price : "$499/month"
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[linear-gradient(0deg,rgba(29,78,255,0.2)_0%,rgba(36,182,255,0.2)_100%)] rounded-2xl py-6 pb-0 shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[linear-gradient(0deg,#1D4EFF_0%,#24B6FF_100%)] p-2 rounded-3xl shadow-[-2px_12px_36px_0px_#004CD375] w-[85%] mx-auto">
              <h3 className="text-[#060B13] text-center py-3 rounded-2xl text-xl md:text-2xl gilroy-r tracking-[1.26px] font-semibold bg-white">
              {card.title}
            </h3>
            </div>
            <div className="py-6 border-b-2 border-white">
              <p className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm text-center">
              {card.choose}
              </p>
              <p className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm text-center">
                {card.sign}
              </p>
              <p className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm text-center">
                {card.additional}
              </p>
            </div>
            <h4 className="text-black text-center py-4 text-2xl">{card.price}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
