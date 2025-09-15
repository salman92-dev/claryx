"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

export default function NumberMatters() {
  return (
    <section className="lg:px-36 px-4 md:pb-16 max-sm:px-0 my-12 md:my-16">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-40"> 
            The
          <span className="text-[#006DD3]"> numbers </span>
          that matter to practices
        </h2>
      </motion.div>

      {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
        {[
            {
            icon: "/p-1.svg",
            title: "Time savings",
            subtitle : "15 hours saved per month",
            desc: `On average, firms save 15+ hours monthly on reporting and analysis across their client base.`,
            },
            {
            icon: "/p-2.svg",
            title: "Client growth",
            subtitle : '2x more clients',
            desc: `Firms using Claryx handle twice as many clients with the same team size.`,
            },
            {
            icon: "/p-3.svg",
            title: "Revenue increase",
            subtitle : "35% higher fees",
            desc: `Move from compliance to advisory with premium services clients happily pay for.`,
            },
            {
            icon: "/p-4.svg",
            title: "Client retention",
            subtitle : "95% retention rate",
            desc: `Clients stay longer when they get proactive insights and professional reporting.`,
            },
        ].map((card, i) => (
            <motion.div
            key={i}
            className="rounded-2xl w-full md:w-[48%] border border-[#E0E7F5] shadow-lg hover:shadow-md transition p-2 bg-[#F4F8FC] w-full"
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
                <div className="flex items-center gap-3 mb-2 md:pr-20">
                <Image
                src={card.icon}
                alt="logo"
                width={654}
                height={493}
                className="w-14"
                />
                <div>
                    <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold">
                    {card.title}
                    </h3>
                    <h4 className="text-sm md:text-base text-black gilroy-r">
                    {card.subtitle}
                    </h4>
                </div>
                </div>
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
