"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChoose() {
  // Animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative py-4 pb-12 md:pb-20 my-8 md:px-20 rounded-2xl"
      style={{
        backgroundImage: "url(/choose-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* App UI Image */}
      <motion.div
        initial={{ opacity: 0, rotateY: 20 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="hidden md:visible absolute bottom-0 left-0 md:left-[15%] w-full md:w-[50%]"
      >
        <Image
          src="/app-ui.png"
          alt="App UI"
          width={300}
          height={600}
          className="relative z-10 w-full"
        />
      </motion.div>

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
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2"
        >
          Why teams
          <br />
          choose <span className="text-[#006DD3]">Claryx</span>
        </motion.h2>

        {/* === Row 1 === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 w-full flex flex-col gap-y-8 md:flex-row justify-between items-end"
        >
          {/* Left Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-[40%] lg:w-[22%] p-6 rounded-2xl gradient-3 shadow-sm border border-white text-left sticky top-10"
          >
            <Image
              src="/t-1.svg"
              alt="logo"
              width={44}
              height={44}
              className="w-10 mb-4"
            />
            <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
              Zero learning curve
            </h3>
            <p className="mt-2 gilroy-m text-[#909090] text-base">
              If you can read email, you can use Claryx. No training required.
            </p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-[40%] lg:w-[22%] p-6 rounded-2xl gradient-3 shadow-sm border border-white text-left sticky top-10"
          >
            <Image
              src="/t-1.svg"
              alt="logo"
              width={44}
              height={44}
              className="w-10 mb-4"
            />
            <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
              Alerts before problems, not after
            </h3>
            <p className="mt-2 gilroy-m text-[#909090] text-base">
              AI catches issues while they’re still small enough to fix — across
              your entire client base.
            </p>
          </motion.div>
        </motion.div>

        {/* === Row 2 === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 w-full flex flex-col md:flex-row justify-between gap-8 items-end"
        >
          {/* Left Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-[40%] lg:w-[22%] p-6 rounded-2xl gradient-3 shadow-sm border border-white text-left sticky top-10"
          >
            <Image
              src="/t-1.svg"
              alt="logo"
              width={44}
              height={44}
              className="w-10 mb-4"
            />
            <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
              AI narratives that sound human
            </h3>
            <p className="mt-2 gilroy-m text-[#909090] text-base">
              Reports write themselves with professional explanations your
              clients will actually read.
            </p>
          </motion.div>

          {/* Bottom Center Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-[40%] lg:w-[46%] p-6  rounded-2xl gradient-3 shadow-sm border border-white text-left sticky top-12"
          >
            <Image
              src="/t-1.svg"
              alt="logo"
              width={44}
              height={44}
              className="w-10 mb-4"
            />
            <h3 className="gilroy-m text-lg text-[#00234B] pr-10">
              Answers in seconds, not spreadsheets
            </h3>
            <p className="mt-2 gilroy-m text-[#909090] text-base">
              Ask questions naturally and get instant answers backed by your
              actual data.
            </p>
          </motion.div>

          {/* Right Box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-full md:w-[40%] lg:w-[22%] p-6 rounded-2xl gradient-3 shadow-sm border border-white text-left"
          >
            <Image
              src="/t-1.svg"
              alt="logo"
              width={44}
              height={44}
              className="w-10 mb-4"
            />
            <h3 className="gilroy-m text-lg text-[#00234B]">
              AI CFO that actually understands finance
            </h3>
            <p className="mt-2 gilroy-m text-[#909090] text-base">
              Not just charts and graphs — real analysis that explains what’s
              happening and why.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
