"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI CFO maintains 95%+ accuracy on financial calculations and identifies meaningful patterns with high confidence. Every insight includes confidence scoring.",
  },
  {
    question: "What can I ask the AI?",
    answer: "You can ask about metrics, anomalies, comparisons, forecasts, and more. The AI understands natural language.",
  },
  {
    question: "How does it handle my specific industry?",
    answer: "Claryx adapts to your sector's benchmarks, seasonality, and KPIs for contextual accuracy.",
  },
  {
    question: "Is my data used to train the AI?",
    answer: "Your data is never used to train our models. Privacy and compliance are always ensured.",
  },
  {
    question: "Can I export AI insights?",
    answer: "Yes, you can export detailed reports and insights in multiple formats including PDF and Excel.",
  },
  {
    question: "How fast are responses?",
    answer: "Most queries return results in under 2 seconds, even for complex analyses.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-20 py-4 bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Heading */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl gilroy-m leading-tight text-black mb-4">
            Frequently <br /> asked questions
          </h2>
          <p className="text-[#454140] gilroy-r text-lg md:text-lg">
            For any unanswered questions, reach out to our support team via email.
            We’ll respond as soon as possible to assist you.
          </p>
        </div>

        {/* Right: FAQ List */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#120A0B]/20 rounded-xl px-6 py-4 transition-all duration-300 ${
                openIndex === index ? "shadow" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="gilroy-b  text-base md:text-lg text-[#120A0B]">
                  {faq.question}
                </h3>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-[#101010]"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 gilroy-r text-lg text-[#454140]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
