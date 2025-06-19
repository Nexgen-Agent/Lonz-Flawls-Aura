import React from "react";
import { motion } from "framer-motion";

export default function GlowRoutinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-50 to-pink-200 px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Aura Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] w-[35vw] h-[35vw] bg-fuchsia-200 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-center tracking-tight text-pink-700 drop-shadow-lg mb-7 font-serif"
        >
          Daily Glow Routine <span aria-hidden>✨</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed mb-10"
        >
          The Lonz Flawls Aura glow routine is crafted for every skin tone and body type. Experience gentle, powerful healing and hydration—restoring your natural radiance, morning and night.
        </motion.p>

        <div className="space-y-8">
          {/* Morning Routine */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-3 font-serif">🌞 Morning Routine</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
              <li>
                Cleanse with <strong>Lonz Flawls Aura Extra Glow Soap</strong>
              </li>
              <li>
                Apply <strong>Lonz Flawls Aura Extra Glow Lotion</strong> to full body
              </li>
              <li>
                Use <strong>Lonz Flawls Aura Whitening Oil</strong> on dark areas and dry spots
              </li>
              <li>
                Apply SPF (if exposed to sunlight)
              </li>
            </ul>
          </motion.div>
          {/* Night Routine */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-3 font-serif">🌙 Night Routine</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
              <li>
                Cleanse again with <strong>Lonz Flawls Aura Whitening Soap</strong>
              </li>
              <li>
                Apply <strong>Lonz Flawls Aura Whitening Cream</strong> to face and neck
              </li>
              <li>
                Use <strong>Lonz Flawls Aura Whitening Oil</strong> on targeted areas
              </li>
              <li>
                Drink 2 cups of water before sleep <span aria-label="water" role="img">💧</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Download Link */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="text-center mt-12"
        >
          <a
            href="/files/LonzGlowRoutine.pdf"
            download
            className="inline-block bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl hover:from-fuchsia-500 hover:to-pink-600 transition-all text-xl font-semibold shadow-lg"
          >
            Download Glow Routine PDF
          </a>
        </motion.div>
      </section>
    </main>
  );
}