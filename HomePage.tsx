import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white px-4 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-pink-600 tracking-tight mb-4">
          Lonz Flawless Aura
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Glow Beyond Expectations — Skincare Rooted in Confidence, Luxury, and African Radiance.
        </p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg">
          Shop Now
        </Button>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded-2xl shadow-xl overflow-hidden border-none">
              <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded-xl">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

const products = [
  {
    name: "Lonia’s Extra Glow Soap",
    description: "Brightens, fades marks, hydrates and smoothens. Tumeric + Vitamin C formula.",
    image: "https://example.com/glow-soap.jpg",
  },
  {
    name: "Lonia’s Whitening Cream",
    description: "Fights acne, dark spots, pigmentation and aging with Glutathione + Collagen.",
    image: "https://example.com/whitening-cream.jpg",
  },
  {
    name: "Lonia’s Glow Lotion",
    description: "Hydrates, heals scars and stretch marks. With Vitamin C + glycerin. 250g size.",
    image: "https://example.com/glow-lotion.jpg",
  },
];