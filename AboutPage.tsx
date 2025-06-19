import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-50 via-fuchsia-100 to-pink-200 px-4 py-16 flex flex-col items-center">
      {/* Decorative Aura Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[70vw] h-[70vw] bg-pink-300 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] w-[40vw] h-[40vw] bg-fuchsia-200 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-6 font-serif fade-in-up">
          About <span className="text-fuchsia-500">Lonz Flawless Aura</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 fade-in-up delay-100">
          <span className="font-semibold text-pink-600">Lonz Flawless Aura</span> is more than skincare—it's a movement inspired by radiance, empowerment, and African elegance. We blend tradition and innovation to deliver confidence, transformation, and holistic healing for every body.
        </p>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <article className="relative group bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl fade-in-up">
            <div className="absolute -top-4 left-6 w-12 h-1 rounded bg-gradient-to-r from-pink-400 to-fuchsia-300"></div>
            <h2 className="text-2xl font-bold text-pink-600 mb-3 font-serif">Our Story</h2>
            <p className="text-gray-600 text-lg">
              What began in a small kitchen—with a dream to blend pure botanicals and science—has grown into a luxury care experience. From our signature Glow Bars to full-body rituals, our journey is about beauty that feels intimate, powerful, and timelessly elegant.
            </p>
          </article>
          <article className="relative group bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100 transition-all hover:shadow-2xl fade-in-up delay-100">
            <div className="absolute -top-4 left-6 w-12 h-1 rounded bg-gradient-to-r from-fuchsia-400 to-pink-300"></div>
            <h2 className="text-2xl font-bold text-fuchsia-600 mb-3 font-serif">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              We deliver transformative skincare for every tone, every journey—celebrating glow, healing, and unapologetic beauty. We believe in feminine softness, radiant boldness, and care without compromise, redefining the standard for luxury and inclusion.
            </p>
          </article>
        </div>

        <div className="mt-16 flex flex-col items-center fade-in-up delay-200">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-3 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-sm text-gray-500">Empowering beauty, elevating confidence.</span>
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