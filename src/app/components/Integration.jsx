'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const IntegrationsSection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-600 text-white rounded-2xl py-10 pl-6 md:pl-20 overflow-hidden"
      style={{
        backgroundImage: 'url("/integration-bg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Content */}
        <motion.div
          className="max-w-xl z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-black text-2xl md:text-3xl gilroy-b mb-12"
            variants={fadeUp}
            custom={0}
          >
            Integrations
          </motion.h3>

          <motion.h2
            className="text-3xl !leading-[120%] md:text-5xl gilroy-m mb-4 text-black"
            variants={fadeUp}
            custom={1}
          >
            Connect to your favorite <br /> accounting software
          </motion.h2>

          <motion.p
            className="text-black/70 gilroy-r mb-6 md:w-[70%]"
            variants={fadeUp}
            custom={2}
          >
            Claryx integrates directly with leading accounting platforms. Making it easy to get
            started, stay connected and get more out of your financial data.
          </motion.p>
          <div className="max-md:w-full flex flex-col items-start gap-4 mb-2 mt-4">
          <div className="flex gap-24">
            <motion.img
              src="/quickbooks.svg"
              alt="QuickBooks"
              className="w-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/xero.svg"
              alt="Xero"
              className="w-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
          <span className="gilroy-m text-3xl !leading-[80%] text-white">Online | Xero</span>
          <span className="gilroy-m text-3xl !leading-[80%] text-white">QuickBooks</span>
        </div>
          <motion.button
            className="bg-white text-black gilroy-m font-semibold px-6 py-3 rounded-full  hover:bg-gray-100 transition mt-8"
            variants={fadeUp}
            custom={3}
          >
            Start free trial
          </motion.button>
        </motion.div>

        {/* Right Screenshot */}
        <motion.div
          className="z-10 max-w-2xl w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="/accounting-dashboard.png"
            alt="Accounting dashboard"
            className="w-full shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Platform Logos and Coming Soon */}
      <motion.div
        className="mt-10 text-white flex flex-col md:flex-row gap-12 md:gap-32 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={4}
      >

        <motion.h5
          className="italic text-2xl text-white max-md:pr-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Excel / Google Sheets / QuickBooks Desktop / MYOB / Sage <br />
          <span className="font-semibold">Coming Soon</span>
        </motion.h5>
      </motion.div>
    </section>
  );
};

export default IntegrationsSection;
