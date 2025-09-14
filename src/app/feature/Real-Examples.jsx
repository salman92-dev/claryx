'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core CSS
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


 const slides = [
    {
      img: "/b-1.svg",
      title: "Why did gross margin decrease by 3%?",
      subtitle : "AI CFO Response",
      text: "Your gross margin decreased from 42% to 39% primarily due to a 15% increase in materials costs starting in March. Specifically, your main supplier increased prices on Product Category A, which represents 60% of your COGS. Three options to address this: 1) Negotiate with current supplier using your 5-year history, 2) Source alternative suppliers (I’ve identified two options), 3) Implement a 5% price increase which would restore margins based on historical elasticity.",
    },
   {
      img: "/b-1.svg",
      title: "Why did gross margin decrease by 3%?",
      subtitle : "AI CFO Response",
      text: "Your gross margin decreased from 42% to 39% primarily due to a 15% increase in materials costs starting in March. Specifically, your main supplier increased prices on Product Category A, which represents 60% of your COGS. Three options to address this: 1) Negotiate with current supplier using your 5-year history, 2) Source alternative suppliers (I’ve identified two options), 3) Implement a 5% price increase which would restore margins based on historical elasticity.",
    },
    {
      img: "/b-1.svg",
      title: "Why did gross margin decrease by 3%?",
      subtitle : "AI CFO Response",
      text: "Your gross margin decreased from 42% to 39% primarily due to a 15% increase in materials costs starting in March. Specifically, your main supplier increased prices on Product Category A, which represents 60% of your COGS. Three options to address this: 1) Negotiate with current supplier using your 5-year history, 2) Source alternative suppliers (I’ve identified two options), 3) Implement a 5% price increase which would restore margins based on historical elasticity.",
    },
  ];


const RealExample = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 lg:py-24 my-12 md:my-16 pb-4 lg:pb-4 px-6 lg:px-22 rounded-3xl"
      style={{
        backgroundImage: 'url("/business-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center lg:text-left justify-between mb-12 flex flex-col md:flex-row max-md:items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="flex items-center max-md:mx-auto w-fit gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow">
              <Image className="w-3" src="/favicon.svg" alt="favicon" width={24} height={24} />
              Ai Financial Analysis
            </p>
            <h2 className="gilroy-m text-4xl md:text-6xl !leading-[110%] tracking-[-1.97px] text-[#060B13] mt-2">
              Real examples from real businesses
            </h2>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <div className="w-full gap-8">
        <Swiper
        pagination={{ clickable: true,el: ".my-pagination" }}
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 1 }, // Tablet
          1024: { slidesPerView: 1 }, // Desktop
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              custom={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-blue-600 rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-10"
                />
              </div>
              <h3 className="inter-sb text-2xl md:text-3xl text-[#1a1a1a] mb-2">
                {item.title}
              </h3>
              <h4 className="gradient-1 text-transparent bg-clip-text gilroy-m text-2xl md:text-3xl mb-4">{item.subtitle}</h4>
              <p className="text-black/60 inter-r text-lg">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="my-pagination flex justify-center mt-16 gap-2" />
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RealExample;
