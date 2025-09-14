"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const Features = () => {
  return (
    <section className="px-0 md:px-6 my-12 md:my-16 lg:px-26 bg-white">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="flex flex-col items-center mx-auto text-center mb-16"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-2 text-[#6786EC] gilroy-m text-sm bg-[#F5F6F9] rounded-full px-6 py-2 shadow"
        >
          <Image className="w-3" src="/favicon.svg" alt="favicon" width={24} height={24} />
          Ai Financial Analysis
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="gilroy-m text-center text-4xl md:text-7xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2"
        >
          Answers to what keeps you<br /> up{" "}
          <span className="text-[#2082FF]">at night</span>
        </motion.h2>
      </motion.div>

      {/* Content Blocks */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="space-y-16"
      >
        {/* Block 1 */}
        <motion.div
          variants={fadeUp}
          className="grid lg:grid-cols-2 items-end gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="gradient-5 rounded-2xl overflow-hidden p-4"
          >
            <Image
              src="/f-9.png"
              alt="Manage deadlines with visual calendar integration"
              width={600}
              height={400}
              className="w-[100%] mx-auto h-auto"
            />
          </motion.div>
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeUp} className="gilroy-m text-2xl md:text-4xl !leading-[120%] text-[#120A0B] mb-4">
              Manage deadlines with visual calendar integration
            </motion.h3>
            <motion.p variants={fadeUp} className="text-[#454140] gilroy-r mb-6">
              Visual insights that update automatically with your latest data
            </motion.p>

            {[
              {
                icon: "/logo-6.svg",
                title: "Role-based views",
                desc: "Different dashboards for CFOs, Controllers, and Operational teams",
              },
              {
                icon: "/logo-7.svg",
                title: "One-click drill downs",
                desc: "Navigate from summary to source transaction instantly",
              },
              {
                icon: "/logo-8.svg",
                title: "Share securely",
                desc: "Controlled access for investors, boards, and stakeholders",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-2 text-[#454140] gilroy-m text-xl mb-4 ml-[-1rem]"
              >
                <Image src={item.icon} alt="logo" width={70} height={70} />
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-base gilroy-r">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-1 py-3 px-8 text-[#fff] rounded-full gilroy-m mt-6"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Block 2 */}
        <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="gradient-5 rounded-2xl overflow-hidden p-4"
          >
            <Image src="/f-10.png" alt="Management Reporting" width={600} height={400} className="w-[100%] mx-auto h-auto" />
          </motion.div>
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeUp} className="gilroy-m text-2xl md:text-4xl !leading-[120%] text-[#120A0B] mb-4">
              Management Reporting
            </motion.h3>
            <motion.p variants={fadeUp} className="text-[#454140] gilroy-r mb-6">
              Create custom reports and share results in a clear, compelling way
            </motion.p>
            {[
              {
                icon: "/logo-9.svg",
                title: "Fast",
                desc: "Craft management reports for print or web in minutes, not hours",
              },
              {
                icon: "/logo-10.svg",
                title: "Intelligent",
                desc: "AI-generated narratives explain every variance and trend automatically",
              },
              {
                icon: "/logo-11.svg",
                title: "Automated",
                desc: "Put your reporting on autopilot. Schedule the delivery of timely reports",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-2 text-[#454140] gilroy-m text-xl mb-4 ml-[-1rem]"
              >
                <Image src={item.icon} alt="logo" width={70} height={70} />
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-base gilroy-r">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-1 py-3 px-8 text-[#fff] rounded-full gilroy-m mt-6"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Block 3 */}
        <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="gradient-5 rounded-2xl overflow-hidden p-4"
          >
            <Image src="/f-11.png" alt="Smart Alerts & Notifications" width={600} height={400} className="w-[100%] mx-auto h-auto" />
          </motion.div>
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeUp} className="gilroy-m text-2xl md:text-4xl !leading-[120%] text-[#120A0B] mb-4">
              Smart Alerts & Notifications
            </motion.h3>
            <motion.p variants={fadeUp} className="text-[#454140] gilroy-r mb-6">
              Stay informed with AI-powered monitoring that never sleeps
            </motion.p>
            {[
              {
                icon: "/logo-12.svg",
                title: "Anomaly detection with custom thresholds",
                desc: "AI spots unusual patterns and alerts you on KPIs that matter.",
              },
              {
                icon: "/logo-13.svg",
                title: "Intelligent explanations",
                desc: "Every alert includes context and suggested actions, not just numbers.",
              },
              {
                icon: "/logo-14.svg",
                title: "Multi-channel delivery",
                desc: "Get notified via email, SMS, or in-app based on urgency.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-2 text-[#454140] gilroy-m text-xl mb-4 ml-[-1rem]"
              >
                <Image src={item.icon} alt="logo" width={70} height={70} />
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-base gilroy-r">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-1 py-3 px-8 text-[#fff] rounded-full gilroy-m mt-6"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
