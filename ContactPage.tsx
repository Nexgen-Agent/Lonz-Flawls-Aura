import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-pink-200 flex flex-col items-center py-16 px-2 relative overflow-hidden">
      {/* Decorative background glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12%] -translate-x-1/2 w-[60vw] h-[60vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[38vw] h-[38vw] bg-fuchsia-300 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-2xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-4 font-serif"
        >
          Contact <span className="text-fuchsia-500">Lonz Flawls Aura</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-lg md:text-xl text-gray-700 mb-10"
        >
          Questions, compliments, you. Reach out and let’s glow together.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className100-8 md:p-12 space-y-7 text-left"
          autoComplete="off"
          tabIndex={0}
        >
          <div>
            <label htmlFor="name" className="block text-pink-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-pink-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:bg-white transition"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-pink-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition resize-none"
              placeholder="Type your message here…"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:from-fuchsia-400 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-10 flex flex-col items-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-1 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-xs text-gray-500">We reply within 24 hours on weekdays.</span>
        </motion.div>
      </section>
    </main>
  );
}