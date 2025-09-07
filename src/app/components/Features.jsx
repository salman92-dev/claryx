"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
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
          Ai Financial Data
        </p>
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2">
          Answers to what keeps you <br /> up{" "}
          <span className="text-[#006DD3]">at night</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: "/f-1.svg",
            title: "Chat with your data",
            desc: `Ask questions naturally: “Why did margins drop?” “What’s driving this
            expense?” Get instant, accurate answers`,
            img: "/f-5.png",
            w: "70%",
          },
          {
            icon: "/f-2.svg",
            title: "Find what’s broken",
            desc: `AI identifies exactly where you’re losing money, missing targets, or
            leaving cash on the table`,
            img: "/f-6.png",
            w: "90%",
          },
          {
            icon: "/f-3.svg",
            title: "Plain English explanations",
            desc: `Complex financials translated into language everyone understands`,
            img: "/f-7.png",
            w: "100%",
          },
          {
            icon: "/f-4.svg",
            title: "Root cause analysis",
            desc: `Drill from symptom to source in seconds, not hours`,
            img: "/f-8.png",
            w: "90%",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#F5F6F9] rounded-2xl p-8 pb-0 shadow-sm hover:shadow-md transition"
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
              className="mb-4 w-10"
            />
            <h3 className="text-[#060B13] text-xl gilroy-m tracking-[1.26px] font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm mb-6">
              {card.desc}
            </p>
            <div className={`w-[${card.w}] mx-auto`}>
              <Image src={card.img} alt={card.title} width={400} height={200} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
