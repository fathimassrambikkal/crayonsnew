import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqImg from "../assets/faq.avif";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age group do you accept?",
      answer:
        "We welcome children between the ages of 2 to 7 years old, providing tailored programs for each developmental stage.",
    },
    {
      question: "How does Crayons support my child’s early development?",
      answer:
        "At Crayons, we combine structured learning with play-based activities to foster your child’s cognitive, social, emotional, and physical development, ensuring a strong foundation for lifelong learning.",
    },
    {
      question: "What safety measures are in place at Crayons?",
      answer:
        "We prioritize safety with CCTV surveillance, secure entry systems, trained staff in first aid, and regular safety drills.",
    },
    {
      question: "What are the daily routines and activities at Crayons?",
      answer:
        "Children enjoy a mix of circle time, creative arts, outdoor play, story sessions, rest, and nutritious meals.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.95 },
    visible: { x: 0, opacity: 1, scale: 1 },
  };

  return (
    <section className="relative py-16 px-6 md:px-16 bg-gray-50 overflow-hidden">
      {/* Grid: mobile/tablet stacked, desktop 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={faqImg}
            alt="FAQ"
            loading="lazy"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Side - FAQ */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 font-inter">
            Crayons Child Academy
          </h2>
          <p className="mt-2 text-xl text-coral font-semibold">
            Frequently Asked Questions
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="bg-white rounded-2xl   shadow-md p-5 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={faqVariants}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                  delay: index * 0.1,
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold font-inter text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-coral text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden mt-3"
                    >
                      <p className="text-blue-800 text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
