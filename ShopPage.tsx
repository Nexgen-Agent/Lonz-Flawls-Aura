import React, { useState } from "react";
import { motion } from "framer-motion";

// Example products array – replace with your actual data or dynamic fetching
const products = [
  {
    name: "Aura Extra Glow Soap",
    description: "Brightens and hydrates for radiant skin. Turmeric + Vitamin C.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    price: "₦5,000",
  },
  {
    name: "Aura Whitening Cream",
    description: "Fades marks and spots. Glutathione + Collagen formula.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: "₦8,500",
  },
  {
    name: "Aura Glow Lotion",
    description: "Hydrates & smoothens. Vitamin C + Glycerin.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    price: "₦7,000",
  },
];

export default function ShopPage() {
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-50 to-pink-200 px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Aura Glows */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12%] -translate-x-1/2 w-[60vw] h-[60vw] bg-pink-200 opacity-25 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[38vw] h-[38vw] bg-fuchsia-300 opacity-20 rounded-full blur-3xl" />
      </div>

      <section className="z-10 w-full max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black tracking-tight text-pink-700 drop-shadow-lg mb-6 font-serif"
        >
          Shop <span className="text-fuchsia-500">Lonz Flawls Aura</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed mb-12"
        >
          Discover the ritual of luxury skin transformation. Each product is crafted to nurture, heal, and radiate confidence.
        </motion.p>

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
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-1 font-serif">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <span className="inline-block text-lg font-bold text-fuchsia-600 mb-4">{product.price}</span>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold text-base shadow hover:from-fuchsia-500 hover:to-pink-600 transition-all mt-3">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-16 flex flex-col items-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-semibold shadow-lg tracking-wide uppercase text-sm mb-2 animate-pulse">
            #GlowWithAura
          </span>
          <span className="text-sm text-gray-500">Luxury delivered to your door.</span>
        </motion.div>
      </section>
    </main>
  );
}