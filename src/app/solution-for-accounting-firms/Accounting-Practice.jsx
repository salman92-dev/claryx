"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AccountingPractice() {
  return (
    <section className="lg:px-36 px-4 max-sm:px-0 my-12 md:my-16">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2">
          Built specifically for 
          <span className="text-[#006DD3]"> accounting </span>
          practices
        </h2>
        <p className="gilroy-r text-xl text-[#454140] lg:px-40">
            We understand the challenges of running a modern accounting firm. Claryx was designed from day one to help you manage multiple clients eﬀiciently while transitioning from compliance to advisory.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="flex flex-col gap-8 relative">
        {[
          {
            title: "The Problem We Solve",
            desc:   `<div class="custom-marker-3">
                            <strong class="gilroy-b text-[#000] text-lg">60% of your time</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">spent on repetitive reporting</p>
                        </div>
                        <div class="custom-marker-3">
                            <strong class="gilroy-b text-[#000] text-lg">Clients want insights,</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">not just numbers</p>
                        </div>
                        <div class="custom-marker-3">
                            <strong class="gilroy-b text-[#000] text-lg">Talented staff</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">wasted on manual work</p>
                        </div>
                        <div class="custom-marker-3">
                            <strong class="gilroy-b text-[#000] text-lg">Larger firms</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">winning with better tools</p>
                        </div>
                        <div class="custom-marker-3">
                            <strong class="gilroy-b text-[#000] text-lg">Advisory services</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">limited by time constraints</p>
                        </div>`,
                      photo : "/img-1.png"
          },
          {
            title: "The Claryx difference",
            desc:`<div class="custom-marker-3">
                        <strong class="gilroy-b text-[#000] text-lg">Automate reporting</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">across your entire client base</p>
                    </div>
                    <div class="custom-marker-3">
                        <strong class="gilroy-b text-[#000] text-lg">AI-generated insights</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">that add real value</p>
                    </div>
                    <div class="custom-marker-3">
                        <strong class="gilroy-b text-[#000] text-lg">White-label everything</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">as your service</p>
                    </div>
                    <div class="custom-marker-3">
                        <strong class="gilroy-b text-[#000] text-lg">Scale efficiently</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">without adding headcount</p>
                    </div>
                    <div class="custom-marker-3">
                        <strong class="gilroy-b text-[#000] text-lg">Differentiate</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">with intelligence competitors can’t match</p>
                    </div>`,
                      photo : "/img-2.png"

          }
        ].map((card, i) => (
          <div className={`flex flex-col md:flex-row items-center sticky top-10 bg-white pt-8 justify-between ${i===1 ? "md:flex-row-reverse" : ""}`}>
            <motion.div
            key={i}
            className="w-full md:w-[30%] max-sm:pl-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#060B13] text-xl md:text-2xl gilroy-r tracking-[1.26px] font-semibold mb-6">
              {card.title}
            </h3>
            <div className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm mb-6" dangerouslySetInnerHTML={{ __html: card.desc }} />
          </motion.div>
          <div className="w-full md:w-[65%]">
            <Image src={card.photo} width={728} height={473} alt="photo" />
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
