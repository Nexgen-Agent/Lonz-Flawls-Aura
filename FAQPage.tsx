import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Are Lonz Flawls Aura products safe for all skin types?",
    answer:
      "Absolutely! Our formulas are dermatologist-tested and crafted for all skin tones and types—including sensitive skin. If you have a specific skin condition, consult your dermatologist before use.",
  },
  {
    question: "Where are your products made?",
    answer:
      "All Lonz Flawls Aura products are made in Africa, with a blend of traditional botanicals and modern science for visible, luxurious results.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most users notice a healthy, radiant glow within 2 weeks of consistent use. For targeted concerns, allow 4–6 weeks for full transformation.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We deliver worldwide. Shipping times and rates are calculated at checkout.",
  },
  {
    question: "Can I become a reseller?",
    answer:
      "We love partnering with beauty entrepreneurs! Visit our Reseller page to apply and join the Aura family.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-100 to-pink-200 px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Aura Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] w-[38vw] h-[38vw] bg-fuchsia-300 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-6 font-serif"
        >
          FAQs <span className="text-fuchsia-500">Lonz Flawls Aura</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed mb-12"
        >
          Everything you need to know about our luxury skincare, shipping, results, and more.
        </motion.p>

        <div className="space-y-6 text-left">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.13 + idx * 0.07 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-100"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-pink-700 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <span className="ml-4 transition-transform" style={{ transform: openIndex === idx ? "rotate(45deg)" : "rotate(0)" }}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-700 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex flex-col items-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-2 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-sm text-gray-500">Still have questions? Contact us for luxury support.</span>
        </motion.div>
      </section>
    </main>
  );
}