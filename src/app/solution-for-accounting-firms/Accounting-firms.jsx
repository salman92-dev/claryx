"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AccountingFirms() {

     const cards = [
    {
      icon: "/f-6.svg",
      title: "Portfolio Management",
      subtitle: "See all your clients in one place",
      desc: `Monitor your entire client base from a single dashboard:
      - Client health scores and alerts
      - Bulk report generation
      - Exception reporting
      - Performance bench- marking
      - Proactive issue identification
      Stop logging into multiple files. See everything at a glance.`,
      url: "[See portfolio features →]",
    },
    {
      icon: "/f-5.svg",
      title: "Automated Client Reporting",
      subtitle: `What took days now takes mins`,
      desc: `Set up once, deliver forever:
      - Monthly management reports
      - Quarterly reviews
      - Year-end packages
      - Custom templates per client
      - Automatic narratives and insights
      Reports generate and send automatically with AI-written commentary.`,
      url: "[Learn about automation →]",
    },
    {
      icon: "/f-7.svg",
      title: "Advisory at Scale",
      subtitle: "Deliver CFO-level insights to every client",
      desc: `Our AI CFO analyzes each client & provides:
      - Cash flow optimization strategies
      - Cost reduction opportunities
      - Margin improvement tactics
      - Working capital recommendations
      - Industry-specific insights
      Transform from bookkeeper to strategic advisor without the extra work.`,
      url: "[Explore advisory tools →]",
    },
     {
      icon: "/f-6.svg",
      title: "Portfolio Management",
      subtitle: "See all your clients in one place",
      desc: `Monitor your entire client base from a single dashboard:
      - Client health scores and alerts
      - Bulk report generation
      - Exception reporting
      - Performance bench- marking
      - Proactive issue identification
      Stop logging into multiple files. See everything at a glance.`,
      url: "[See portfolio features →]",
    },
    {
      icon: "/f-5.svg",
      title: "Automated Client Reporting",
      subtitle: `What took days now takes mins`,
      desc: `Set up once, deliver forever:
      - Monthly management reports
      - Quarterly reviews
      - Year-end packages
      - Custom templates per client
      - Automatic narratives and insights
      Reports generate and send automatically with AI-written commentary.`,
      url: `[Learn about automation →]`,
    },
    {
      icon: "/f-7.svg",
      title: "Advisory at Scale",
      subtitle: "Deliver CFO-level insights to every client",
      desc: `Our AI CFO analyzes each client & provides:
      - Cash flow optimization strategies
      - Cost reduction opportunities
      - Margin improvement tactics
      - Working capital recommendations
      - Industry-specific insights
      Transform from bookkeeper to strategic advisor without the extra work.`,
      url: `[Explore advisory tools →]`,
    },
  ];



  return (
    <section className="xl:px-36 sm:px-4 py-6 md:py-0">
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
          Ai Financial Analysis
        </p>
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] lg:px-40 tracking-[-1.97px] text-[#060B13] mt-2">
          How 
          <span className="text-[#006DD3]"> accounting firms </span>
          use Claryx
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full gap-8">
              <Swiper
              pagination={{ clickable: true,el: ".my-pagination" }}
              modules={[Pagination]}
              spaceBetween={24}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 1 }, // Tablet
                1024: { slidesPerView: 3 }, // Desktop
              }}
            >
              {cards.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    custom={i}
                    className="bg-[#F5F6F9] rounded-2xl p-6 transition min-h-105 shadow-lg shadow-blue-200 flex flex-col justify-between"
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
                    <h3 className="gilroy-m text-xl md:text-2xl text-[#1a1a1a] mb-2">
                      {item.title}
                    </h3>
                    <h4 className=" text-[#00234B] gilroy-m text-base md:text-lg mb-4">{item.subtitle}</h4>
                    <p className="text-[#909090] gilroy-m text-sm mb-4">{item.desc}</p>
                    <a href="/" className="gradient-1 gilroy-b text-transparent bg-clip-text">{item.url}</a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="my-pagination flex justify-center !bg-transparent pt-16 gap-2" />
              </div>
    </section>
  );
}
