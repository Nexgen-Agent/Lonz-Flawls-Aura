import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

/* --- Data --- */
const products = [
  {
    name: "Lonz Flawls Aura Extra Glow Soap",
    description: "Brightens, fades marks, hydrates and smoothens. Turmeric + Vitamin C formula.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lonz Flawls Aura Whitening Cream",
    description: "Fights acne, dark spots, pigmentation and aging with Glutathione + Collagen.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lonz Flawls Aura Glow Lotion",
    description: "Hydrates, heals scars and stretch marks. With Vitamin C + glycerin. 250g size.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Amara, Lagos",
    quote: "Lonz Flawls Aura transformed my skin! I feel confident, radiant, and truly seen. The glow is real ✨",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Zuri, Nairobi",
    quote: "A luxury experience from start to finish. My skin has never been softer or more luminous.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Sade, Accra",
    quote: "The Glow Lotion is a game-changer. Even my friends can’t stop complimenting my radiance!",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
];

export default function HomePage() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-50 to-white overflow-x-hidden flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[68vh] flex flex-col items-center justify-center text-center py-20 px-4 w-full bg-gradient-to-br from-pink-100 via-fuchsia-50 to-pink-50">
        {/* Aura Glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
          <div className="absolute bottom-[-8%] right-[-8%] w-[40vw] h-[28vw] bg-fuchsia-300 opacity-20 rounded-full blur-2xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-pink-700 mb-6 font-serif drop-shadow-lg">
            Lonz Flawls Aura
          </h1>
          <p className="max-w-2xl mx-auto text-2xl md:text-3xl text-gray-700 mb-10 font-medium leading-tight">
            Experience the luxury of radiant, flawless skin. <span className="text-fuchsia-600 font-bold">Glow Beyond Expectations.</span>
          </p>
          <a
            href="/shop"
            className="inline-block bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:from-fuchsia-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 transition"
          >
            Shop Now
          </a>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section className="w-full max-w-7xl px-4 mx-auto mt-[-4rem] mb-24 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12 font-serif"
        >
          Discover Your Glow Ritual
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(249, 168, 212,0.22)",
              }}
              onMouseEnter={() => setHighlightIndex(i)}
              onMouseLeave={() => setHighlightIndex(null)}
              className={`rounded-3xl overflow-hidden shadow-xl bg-white transition-all border-2 ${
                highlightIndex === i
                  ? "border-fuchsia-400"
                  : "border-transparent"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-1 font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-pink-600 text-white w-full py-3 rounded-xl font-semibold text-base shadow">
                  Buy Now
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-fuchsia-600 text-center mb-14 font-serif"
        >
          Stories of Radiance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-fuchsia-200 mb-4 object-cover shadow"
              />
              <p className="text-fuchsia-700 text-lg italic mb-3 text-center">“{t.quote}”</p>
              <span className="font-semibold text-pink-700">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-bold text-lg rounded-full shadow-lg uppercase tracking-wider animate-pulse"
        >
          #GlowWithAura
        </motion.span>
        <p className="text-gray-500 mt-3">Join the movement. Elevate your confidence. Experience the Lonz Flawls Aura difference.</p>
      </div>
    </main>
  );
}