import React from "react";
import { motion } from "framer-motion";

export default function ResellerPage() {
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
          className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-5 font-serif"
        >
          Become a <span className="text-fuchsia-500">Lonz Flawls Aura Reseller</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed mb-10"
        >
          Join our exclusive circle of partners and offer luxury skincare to your customers. Enjoy premium margins, marketing support, and the power of the Lonz Flawls Aura brand. Let’s glow together—globally.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left"
        >
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-lg font-bold text-pink-600 mb-2 font-serif">✨ Premium Margins</h2>
            <p className="text-gray-700">Earn industry-leading profits on every sale, with no compromise on quality or support.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-lg font-bold text-pink-600 mb-2 font-serif">🤝 Brand Support</h2>
            <p className="text-gray-700">Get access to marketing assets, social media shoutouts, and early product launches.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-lg font-bold text-pink-600 mb-2 font-serif">🌍 Global Community</h2>
            <p className="text-gray-700">Partner with a fast-growing family of beauty entrepreneurs across Africa and beyond.</p>
          </div>
          <div rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-lg font-bold text-pink-600 mb-2 font-serif">🎁 Exclusive Offers</h2>
            <p className="text-gray-700">Special bundles, free samples, and glowing incentives for our loyal resellers.</p>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100 p-8 md:p-10 space-y-7 text-left mx-auto max-w-xl"
          autoComplete="off"
          tabIndex={0}
        >
          <h2 className="text-2xl font-bold text-fuchsia-600 mb-4 font-serif text-center">
            Reseller Application
          </h2>
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
            <label htmlFor="location" className="block text-pink-700 font-semibold mb-2">
              Location or Store Name
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:bg-white transition"
              placeholder="City, Country or Store Name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-pink-700 font-semibold mb-2">
              Tell us about your business
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition resize-none"
              placeholder="Share your story or your vision…"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:from-fuchsia-400 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Apply Now
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 flex flex-col items-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-1 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-xs text-gray-500">Partner with the future of beauty.</span>
        </motion.div>
      </section>
    </main>
  );
}