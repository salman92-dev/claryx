"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Subtitles } from "lucide-react";

const pricingData = {
  headers: ["Feature", "Essential", "All Paid Plans"],
  rows: [
    {
      feature: "Data & Connections",
      essential: `<div>2 Years<br/>48 Hours</div>`,
      paid: `<div>Varies by Plan<br/>Unlimited<br/>Daily + On Demand</div>`,
    },
    {
      feature: "Reporting & Dashboards",
      essential: `<div>Standard reports<br/>Custom dashboards<br/>White-labeling<br/>Automated delivery</div>`,
      paid: `<div>Unlimited</div>`,
    },
    {
      feature: "AI Intelligence Natural",
      essential: `<div>language queries<br/>Anomaly detection<br/>AI narratives<br/>Root cause analysis<br/>Smart recommendations</div>`,
      paid: `<div>Unlimited</div>`,
    },
    {
      feature: "Collaboration",
      essential: `<div>3</div>`,
      paid: `<div>Unlimited</div>`,
    },
    {
      feature: "Support",
      essential: `<div>Knowledge base<br/>Email support<br/>Live chat<br/>Onboarding</div>`,
      paid: `<div>Unlimited</div>`,
    },
  ],
};

export default function ComparePlans() {
  return (
    <section className="lg:px-28 px-4 py-6 md:py-0 max-sm:px-0 my-12 md:my-16">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="gilroy-m text-center text-4xl md:text-6xl !leading-[130%] tracking-[-1.97px] text-[#060B13] mt-2 md:px-40"> 
            Compare plans in detail
        </h2>
      </motion.div>

      {/* Cards Grid */}
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
            <motion.div
            className="rounded-2xl w-full border border-[#E0E7F5] shadow-lg transition p-2 bg-[#F4F8FC] w-full shadow-blue-200"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.2, // stagger effect
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            >
            <div className="bg-white rounded-2xl px-4 border border-[#E0E7F5] h-full flex flex-col justify-between">
                <div className="flex flex-wrap items-start gap-3">
                    <div className="w-full md:w-[32%] px-6 py-6">
                        <div className="bg-[linear-gradient(0deg,#1D4EFF_0%,#24B6FF_100%)] p-2 rounded-3xl">
                        <h3 className="bg-white text-black text-xl md:text-2xl rounded-2xl text-center py-3">Feature</h3>
                        </div>
                        <div className="my-5">
                            <h5 className="text-xl md:text-2xl text-black">Data & Connections</h5>
                            <p>Companies included</p>
                            <p>Accounting platforms</p>
                            <p>Historical dataData</p>
                            <p>sync frequency</p>
                        </div>
                         <div className="my-5">
                            <h5 className="text-xl md:text-2xl text-black">Reporting & Dashboards</h5>
                            <p>Standard reports</p>
                            <p>Custom dashboards </p>
                            <p>White-labeling</p>
                            <p>Automated delivery</p>
                        </div>
                        <div className="my-5">
                            <h5 className="text-xl md:text-2xl text-black">AI Intelligence Natural</h5>
                            <p>language queries </p>
                            <p>Anomaly detection</p>
                            <p>AI narratives</p>
                            <p>Root cause analysis</p>
                            <p>Smart recommendations</p>
                        </div>
                        <div className="my-5">
                            <h5 className="text-xl md:text-2xl text-black">Collaboration</h5>
                            <p>Users</p>
                            <p>Client portals</p>
                            <p>API access</p>
                        </div>
                        <div className="my-5">
                            <h5 className="text-xl md:text-2xl text-black">Support</h5>
                            <p>Knowledge base</p>
                            <p>Email support</p>
                            <p>Live chat</p>
                            <p>Onboarding</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[32%] px-6  py-6 md:border-l md:border-r md:h-full border-black/10">
                        <div className="bg-[linear-gradient(0deg,#1D4EFF_0%,#24B6FF_100%)] p-2 rounded-3xl">
                        <h3 className="bg-white text-black text-xl md:text-2xl rounded-2xl text-center py-3">Essentials</h3>
                        </div>
                        <div className="my-5 text-center mt-12">
                            <p className="mb-4">1</p>
                            <p>2 Years</p>
                            <p>48 Hours</p>
                            <p className="md:mt-96">3</p>
                        </div>
                    </div>
                     <div className="w-full md:w-[32%] px-6 py-6">
                        <div className="bg-[linear-gradient(0deg,#1D4EFF_0%,#24B6FF_100%)] p-2 rounded-3xl">
                        <h3 className="bg-white text-black text-xl md:text-2xl rounded-2xl text-center py-3">All Paid Plans</h3>
                        </div>
                        <div className="my-5 text-center mt-12">
                            <p className="mb-4">Varies by Plan</p>
                            <p>Unlimited</p>
                            <p>Daily + On Demand</p>
                            <p className="md:mt-20">Unlimited</p>
                            <p className="md:mt-70">Unlimited</p>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>

    </section>
  );
}
