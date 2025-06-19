import React from "react";

export default function GlowRoutinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-50 to-pink-200 px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Aura Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[70vw] h-[70vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] w-[35vw] h-[35vw] bg-fuchsia-200 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-center tracking-tight text-pink-700 drop-shadow-lg mb-7 font-serif fade-in-up">
          Daily Glow Routine <span aria-hidden>✨</span>
        </h1>

        <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed mb-10 fade-in-up delay-100">
          The Lonz Flawls Aura glow routine is crafted for every skin tone and body type. Experience gentle, powerful healing and hydration—restoring your natural radiance, morning and night.
        </p>

        <div className="space-y-8 fade-in-up delay-200">
          {/* Morning Routine */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl">
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
          </div>
          {/* Night Routine */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl">
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
          </div>
        </div>

        {/* Download Link */}
        <div className="text-center mt-12 fade-in-up delay-300">
          <a
            href="/files/LonzGlowRoutine.pdf"
            download
            className="inline-block bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl hover:from-fuchsia-500 hover:to-pink-600 transition-all text-xl font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
          >
            Download Glow Routine PDF
          </a>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .fade-in-up.delay-100 {
          animation-delay: 0.12s;
        }
        .fade-in-up.delay-200 {
          animation-delay: 0.24s;
        }
        .fade-in-up.delay-300 {
          animation-delay: 0.36s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}