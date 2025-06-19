import React from "react";

export default function ResellerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-fuchsia-50 to-white px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Aura Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-fuchsia-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-8%] w-[35vw] h-[35vw] bg-pink-200 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 tracking-tight drop-shadow-lg mb-6 font-serif fade-in-up">
          Become a <span className="text-fuchsia-500">Lonz Flawls Aura</span> Distributor 💼
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 fade-in-up delay-100">
          You don't need to be a business expert to start. You just need belief, a phone, and the courage to glow up your income. We're opening the gates for loyal customers and glow lovers to become official resellers. Let <span className="font-semibold text-fuchsia-600"> mb-10 fade-in-up delay-200">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 font-serif">Why Join the Movement?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg text-left mx-auto max-w-2xl">
          <li>Get products at exclusive discounted prices</li>
          <li>Keep 100% of profits from your own sales</li>
          <li>Receive marketing tools, videos, and product images</li>
          <li>No experience needed—just passion and consistency</li>
          <li>Be featured on our page as a rising brand partner</li>
        </ul>
      </section>

      <section className="z-10 text-center fade-in-up delay-300">
        <h3 className="text-2xl text-fuchsia-600 font-bold mb-4 font-serif">Ready to glow with us?</h3>
        <a
          href="mailto:join@lonzaura.co.za"
          className="inline-block bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl hover:from-fuchsia-500 hover:to-pink-600 transition-all text-xl font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
        >
          Apply to Become a Reseller
        </a>
        <p className="text-base text-gray-500 mt-3">We’ll respond within 24–48 hours.</p>
      </section>

      <div className="z-10 mt-14 flex flex-col items-center fade-in-up delay-400">
        <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-bold shadow-lg tracking-wide uppercase text-base mb-1 animate-pulse">
          #GlowWithAura
        </span>
        <span className="text-sm text-gray-500">Empowering new beauty entrepreneurs across Africa and the world.</span>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .fade-in-up.delay-100 {
          animation-delay: 0.14s;
        }
        .fade-in-up.delay-200 {
          animation-delay: 0.28s;
        }
        .fade-in-up.delay-300 {
          animation-delay: 0.42s;
        }
        .fade-in-up.delay-400 {
          animation-delay: 0.56s;
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