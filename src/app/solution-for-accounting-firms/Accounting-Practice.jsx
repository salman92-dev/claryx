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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <Image 
        src="/tag.png"
        alt="tag"
        width={586}
        height={586}
        className="hidden lg:block w-60 absolute left-[37%] top-[36%] z-2"
        />
        {[
          {
            icon: "/f-6.svg",
            title: "Ask questions naturally",
            desc:   `<div>
                            <strong class="gilroy-b text-[#000] text-lg">• 60% of your time</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">spent on repetitive reporting</p>
                        </div>
                        <div>
                            <strong class="gilroy-b text-[#000] text-lg">• Clients want insights,</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">not just numbers</p>
                        </div>
                        <div>
                            <strong class="gilroy-b text-[#000] text-lg">• Talented staff</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">wasted on manual work</p>
                        </div>
                        <div>
                            <strong class="gilroy-b text-[#000] text-lg">• Larger firms</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">winning with better tools</p>
                        </div>
                        <div>
                            <strong class="gilroy-b text-[#000] text-lg">• Advisory services</strong><br/>
                            <p class="gilroy-m text-[#909090] mb-4 text-lg">limited by time constraints</p>
                        </div>`,
          },
          {
            icon: "/f-5.svg",
            title: "Get explanations, not just charts",
            desc:`<div>
                        <strong class="gilroy-b text-[#000] text-lg">• Automate reporting</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">across your entire client base</p>
                    </div>
                    <div>
                        <strong class="gilroy-b text-[#000] text-lg">• AI-generated insights</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">that add real value</p>
                    </div>
                    <div>
                        <strong class="gilroy-b text-[#000] text-lg">• White-label everything</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">as your service</p>
                    </div>
                    <div>
                        <strong class="gilroy-b text-[#000] text-lg">• Scale efficiently</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">without adding headcount</p>
                    </div>
                    <div>
                        <strong class="gilroy-b text-[#000] text-lg">• Differentiate</strong><br/>
                        <p class="gilroy-m text-[#909090] mb-4 text-lg">with intelligence competitors can’t match</p>
                    </div>`,
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-[#F5F6F9] rounded-2xl px-8 py-12 pb-0 shadow-sm hover:shadow-md transition sticky top-10 md:pl-16"
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
              className="mb-6 w-12"
            />
            <h3 className="text-[#060B13] text-xl gilroy-r tracking-[1.26px] font-semibold mb-6">
              {card.title}
            </h3>
            <div className="text-[#909090] gilroy-m tracking-[-0.07px] text-sm mb-6" dangerouslySetInnerHTML={{ __html: card.desc }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
