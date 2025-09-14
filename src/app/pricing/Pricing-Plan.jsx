"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

export default function PricingPlan() {
  return (
    <section className="lg:px-28 px-4 py-6 md:py-0 max-sm:px-0 my-12 md:my-16">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-8">
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
            Choose your
          <span className="text-[#006DD3]"> plan </span>
        </h2>
        <p className="text-[#454140] gilroy-r text-xl lg:text-2xl mt-2">
            All plans include full AI-powered features
        </p>
      </motion.div>

      {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
        {[
            {
            icon: "/star.svg",
            title : "Starter",
            price: `<p class="inter-m text-3xl">$49 <span class="text-[#909090] text-base inter-r italic">USD</span></p>`,
            tier : "/ month Includes 1 company",
            duration : `<p class="text-[#909090] text-sm inter-r mb-6"><span class="text-[#000] italic">Billed Annually</span><br/>or $59 monthly</p>`,
            btn : "Start free trial",
            },
            {
            icon: "/star.svg",
            title: "Growth",
            price : '<p class="inter-m text-3xl">$149 <span class="text-[#909090] text-base inter-r italic">USD</span></p>',
            tier : "/ month Includes 5 companies",
            additional : "+$25 per additional",
            duration : `<p class="text-[#909090] text-sm inter-r mb-6"><span class="text-[#000] italic">Billed Annually</span><br/>or $159 monthly</p>`,
            btn : "Start free trial",
            },
            {
            icon: "/star.svg",
            title: "Scale",
            price :`<p class="inter-m text-3xl">$299 <span class="text-[#909090] text-base inter-r italic">USD</span></p>`,
            tier : "/ month Includes 20 companies",
            additional : "+$20 per additional",
            duration : `<p class="text-[#909090] text-sm inter-r mb-6"><span class="text-[#000] italic">Billed Annually</span><br/>or $359 monthly</p>`,
            btn : "Start free trial",
            },
            {
            icon: "/star.svg",
            title: "Enterprise",
            price : `<p class="inter-m text-3xl">$599 <span class="text-[#909090] text-base inter-r italic">USD</span></p>`,
            tier : "/ month Includes 50 companies",
            additional : "+$15 per additional",
            duration : `<p class="text-[#909090] text-sm inter-r mb-6"><span class="text-[#000] italic">Billed Annually</span><br/>or $719 monthly</p>`,
            btn : "Contact Sales",
            },
        ].map((card, i) => (
            <motion.div
            key={i}
            className="rounded-2xl w-full md:w-[48%] lg:w-[23%] border border-[#E0E7F5] shadow-lg transition p-2 bg-[#F4F8FC] w-full shadow-blue-200 h-100"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: i * 0.2, // stagger effect
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            >
            <div className="bg-white rounded-2xl px-4 py-4 border border-[#E0E7F5] h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2 md:pr-20">
                <Image
                src={card.icon}
                alt="logo"
                width={654}
                height={493}
                className="w-14"
                />
                <div>
                    <div className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold">
                    {card.title}
                    </div>
                </div>
                </div>
                <div className="text-[#060B13] text-xl tracking-[1.26px] mt-8" dangerouslySetInnerHTML={{__html : card.price}} />
                <p className="gilroy-m text-[14px] text-[#909090] mt-2">
                    {card.tier}
                </p>
               <p className="gilroy-m text-[14px] text-[#909090] mt-2 mt-8">
                    {card.additional}
                </p>
                <div className="text-[#000] text-sm inter-r mb-6" dangerouslySetInnerHTML={{__html : card.duration}} />{}
                <button
                className="gilroy-m border py-3 px-6 rounded-full hover:text-white border-[#004CD3] transition duration-300 bg-transparent hover:bg-[linear-gradient(0deg,#1D4EFF_0%,#24B6FF_100%)] text-[#004CD3]"
                >
                {card.btn}
                </button>
            </div>
            </motion.div>
        ))}
        </div>

    </section>
  );
}
