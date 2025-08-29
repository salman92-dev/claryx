'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const BusinessSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 lg:py-24 px-6 lg:px-22 rounded-3xl"
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
              Built for <span className="text-[#2082FF]">modern</span> businesses
            </h2>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-[#454140] giroy-r max-w-2xl w-full md:w-[46%]"
          >
            Accountants, CFOs and business managers at companies of every size are ready for 
            AI-powered financial reporting and analysis.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-blue-600 rounded-lg">
                <Image
                  src={`/b-${i + 1}.svg`}
                  alt={`b-${i + 1}`}
                  width={48}
                  height={48}
                  className="w-10"
                />
              </div>
              <h3 className="inter-sb text-3xl text-[#1a1a1a] mb-2">
                {i === 0 ? "Small & Medium Business" : "Accountants and Bookkeepers"}
              </h3>
              <p className="text-black/60 inter-r text-lg">
                {i === 0
                  ? "Whether reporting to investors, lenders or updating your management team, you’ll always be prepared with Claryx."
                  : "Transform your practice with automated reporting and AI insights that let you focus on advisory, not data entry."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 flex items-center gap-12 rounded-full bg-[#1a1a1a] text-white hover:bg-gray-800"
          >
            Learn More <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BusinessSection;
