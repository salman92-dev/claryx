"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnerProgramme() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Data array for content
  const data = [
    {
      id: 1,
      title: "Free internal use license",
      subtitle : "Free internal use license with 10+ paid clients",
      imageSrc: "/t-1.svg",
    },
    {
      id: 2,
      title: "20% lifetime commission",
      subtitle : "on every client you refer",
      imageSrc: "/t-1.svg",
    },
    {
      id: 3,
      title: "Early access",
      subtitle :"to new features",
      imageSrc: "/t-1.svg",
    },
    {
      id: 4,
      title: "Quarterly business",
      subtitle : "reviews with success team",
      imageSrc: "/t-1.svg",
    },
    {
        id : 5,
        title : "Co-branded marketing materials",
        imageSrc : "/t-1.svg"
    },
    {
        id : 6,
        title : "Bulk client onboarding ",
        subtitle : "and migration support",
        imageSrc : "/t-1.svg"
    },
    {
        id : 7,
        title : "White-label capabilities",
        subtitle : "included on all plans",
        imageSrc : "/t-1.svg"
    }
  ];

  return (
    <section
      className="relative py-4 pb-12 md:pb-40 my-8 xl:px-20 rounded-2xl bg-[#F5F8F9]">
      {/* Content */}
      <div className="flex flex-col items-center mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow mt-12 md:mt-20"
        >
          <Image
            className="w-3"
            src="/favicon.svg"
            alt="favicon"
            width={24}
            height={24}
          />
          Ai Financial Analysis
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-30"
        >
          Partner Program for <span className="text-[#006DD3]">Accounting</span> Professionals
        </motion.h2>

          <div className="mt-4 md:mt-40 w-full flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 relative">
          {/* Central Claryx Icon */}
          <div className="w-[50%] mx-auto items-center text-white">
            <Image
              src="/difference-img.png" // Replace with Claryx icon if different
              alt="Claryx logo"
              width={1388}
              height={1266}
              className="hidden md:block w-full"
            />
          </div>

          {/* Surrounding Boxes */}
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
               className={`relative w-full md:w-[25%] p-6 my-4 rounded-2xl bg-white shadow-md text-left ${
                index === 0
                ? "md:absolute md:top-[4rem] md:left-[1%]"
                : index === 1
                ? "md:absolute md:top-[-7rem] md:left-[25%]"
                : index === 2
                ? "md:absolute md:top-[-4%] md:right-[14%]"
                : index === 3
                ? "md:absolute md:top-[37%] md:right-[0%]" 
                : index === 4
                ? "md:absolute md:bottom-[-9%] md:right-[12%]"
                : index ===5 
                ? "md:absolute md:bottom-[-24%] md:left-[28%]"
                : "md:absolute md:bottom-[12%] md:left-[10%]" 
            }`}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={44}
                height={44}
                className="w-10 mb-4"
              />
              <h3 className="gilroy-m text-lg text-[#00234B] pr-10">{item.title}</h3>
              <p className="text-[#909090] text-sm gillroy-r">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
