"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most firms are up and running in under an hour. Bulk client onboarding typically takes 1–2 days for 50+ clients.",
  },
  {
    question: "Do clients need their own accounts?",
    answer:
      "No, clients don’t need separate accounts. You control access centrally and can share reports securely without requiring clients to log into a new system.",
  },
  {
    question: "What about data security?",
    answer:
      "All data is encrypted in transit and at rest. We use industry-standard security protocols and role-based permissions to ensure client information remains protected.",
  },
  {
    question: "Can we customize for each client?",
    answer:
      "Yes. You can set up custom templates, branding, and reporting rules for each client so every report feels tailored while still being automated.",
  },
  {
    question: "What if we already have reporting tools?",
    answer:
      "Our platform integrates with most existing accounting and reporting systems. You can either supplement your current tools or fully replace them depending on your needs.",
  },
  {
    question: "How do we transition clients?",
    answer:
      "Transition is simple. Import your existing client data, map reports, and we’ll guide you through a step-by-step onboarding process so clients experience no disruption.",
  },
];


export default function CommonFAQ() {
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
            Common questions<br /> from firms
          </h2>
          <p className="text-[#454140] gilroy-r text-lg md:text-lg">
            For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you.
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
