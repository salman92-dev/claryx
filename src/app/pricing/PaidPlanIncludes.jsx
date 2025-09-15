"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PaidPlanIncludes() {

     const cards = [
    {
      icon: "/f-6.svg",
      title: "AI-Powered Intelligence",
      desc: `
      <div class="space-y-3">
        <p>➜ Chat with your dataAsk<br/><span class="text-sm text-[#909090] gilroy-m text-lg">“Why did margins drop?” Get instant answers</span></p>
        <p>➜ Smart anomaly detection<br/><span class="text-sm text-[#909090] gilroy-m text-lg">AI spots issues and explains them in plain English</span></p>
        <p>➜ Automated narratives<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Reports that write themselves</span></p>
        <p>➜ Root cause analysis<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Drill from summary to transaction instantly</span></p>
        <p>➜ Action recommendations<br/><span class="text-sm text-[#909090] gilroy-m text-lg">AI tells you what to do next</span></p>
      </div>
      `,
    },
    {
      icon: "/f-5.svg",
      title: "Professional Reporting",
      desc: `
      <div class="space-y-3">
        <p>➜ Unlimited custom dashboards<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Build exactly what you need</span></p>
        <p>➜ Automated scheduling<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Reports delivered on your schedule</span></p>
        <p>➜ White-label everything<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Your brand, your reports</span></p>
        <p>➜ Role-based views<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Different dashboards for different teams</span></p>
        <p>➜ Executive summaries<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Board-ready in seconds</span></p>
      </div>
      `,
    },
    {
      icon: "/f-7.svg",
      title: "Real-time Monitoring",
      desc: `
      <div class="space-y-3">
        <p>➜ Daily data sync<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Always up to date</span></p>
        <p>➜ Intelligent alerts<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Get notified when things change</span></p>
        <p>➜ Custom KPIs<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Track what matters to you</span></p>
        <p>➜ Multi-channel delivery<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Email, SMS, or in-app</span></p>
      </div>
      `,
    },
{
      icon: "/f-6.svg",
      title: "AI-Powered Intelligence",
      desc: `
      <div class="space-y-3">
        <p>➜ Chat with your dataAsk<br/><span class="text-sm text-[#909090] gilroy-m text-lg">“Why did margins drop?” Get instant answers</span></p>
        <p>➜ Smart anomaly detection<br/><span class="text-sm text-[#909090] gilroy-m text-lg">AI spots issues and explains them in plain English</span></p>
        <p>➜ Automated narratives<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Reports that write themselves</span></p>
        <p>➜ Root cause analysis<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Drill from summary to transaction instantly</span></p>
        <p>➜ Action recommendations<br/><span class="text-sm text-[#909090] gilroy-m text-lg">AI tells you what to do next</span></p>
      </div>
      `,
    },
    {
      icon: "/f-5.svg",
      title: "Professional Reporting",
      desc: `
      <div class="space-y-3">
        <p>➜ Unlimited custom dashboards<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Build exactly what you need</span></p>
        <p>➜ Automated scheduling<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Reports delivered on your schedule</span></p>
        <p>➜ White-label everything<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Your brand, your reports</span></p>
        <p>➜ Role-based views<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Different dashboards for different teams</span></p>
        <p>➜ Executive summaries<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Board-ready in seconds</span></p>
      </div>
      `,
    },
    {
      icon: "/f-7.svg",
      title: "Real-time Monitoring",
      desc: `
      <div class="space-y-3">
        <p>➜ Daily data sync<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Always up to date</span></p>
        <p>➜ Intelligent alerts<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Get notified when things change</span></p>
        <p>➜ Custom KPIs<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Track what matters to you</span></p>
        <p>➜ Multi-channel delivery<br/><span class="text-sm text-[#909090] gilroy-m text-lg">Email, SMS, or in-app</span></p>
      </div>
      `,
    },
  ];



  return (
    <section className="lg:px-36 px-4  my-12 md:my-16 max-sm:px-0">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] lg:px-40 tracking-[-1.97px] text-[#060B13]">
          All Paid Plans Include Everything in Essential, plus:
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full gap-8">
              <Swiper
               modules={[Pagination, Navigation]}
          pagination={{
            el: ".custom-progress",
            type: "progressbar",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={false}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
             >
              {cards.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    custom={i}
                    className="bg-[#F5F6F9] rounded-2xl p-6 transition min-h-150 shadow-lg shadow-blue-200"
                  >
                    <div className="w-12 h-12 mb-4 flex items-center justify-center text-blue-600 rounded-lg">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-10"
                      />
                    </div>
                    <h3 className="gilroy-m text-2xl md:text-4xl text-[#1a1a1a] mb-8">
                      {item.title}
                    </h3>
                    <div className="text-[#000] inter-r text-lg md:text-xl mb-4" dangerouslySetInnerHTML={{__html : item.desc}}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation + Progress */}
        <div className="flex justify-center">
          <div className="w-[30%] flex items-center justify-between mt-8 bg-[#F8FBFF] rounded-full h-14">
          {/* Prev Button */}
          <button className="custom-prev flex items-center justify-center w-15 h-15 rounded-full bg-black text-white disabled:text-[#B8DCFF] disabled:bg-[#E7F3FF]">
            ←
          </button>

          {/* Progress bar */}
          <div className="custom-progress relative flex-1 mx-4 h-[4px] rounded-full bg-gray-300 overflow-hidden">
            <div className="swiper-pagination-progressbar-fill bg-[#006DD3]"></div>
          </div>

          {/* Next Button */}
          <button className="custom-next flex items-center justify-center w-15 h-15 rounded-full bg-black text-white disabled:text-[#B8DCFF] disabled:bg-[#E7F3FF]">
            →
          </button>
        </div>
        </div>
              </div>
    </section>
  );
}
