import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-pink-200 flex flex-col items-center py-16 px-2 relative overflow-hidden">
      {/* Decorative background glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12%] -translate-x-1/2 w-[60vw] h-[60vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[38vw] h-[38vw] bg-fuchsia-300 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-4 font-serif fade-in-up">
          Contact <span className="text-fuchsia-500">Lonz Flawls Aura</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 fade-in-up delay-100">
          Questions, compliments, or collaboration ideas? We’d love to hear from you. Reach out and let’s glow together.
        </p>

        <form
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100 p-8 md:p-12 space-y-7 text-left fade-in-up delay-200"
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
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-bold text-lg shadow-lg hover:from-fuchsia-400 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-300 active:scale-98"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex flex-col items-center fade-in-up delay-300">
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-1 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-xs text-gray-500">We reply within 24 hours on weekdays.</span>
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
          animation-delay: 0.22s;
        }
        .fade-in-up.delay-300 {
          animation-delay: 0.32s;
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