import { Card, CardContent } from "@/components/ui/card";

export default function ShopPage() {
  const products = [
    {
      name: "Lonz Flawls Aura Extra Glow Soap",
      price: "R129",
      description: "Fades scars & stretch marks. Turmeric + Vitamin C.",
      image: "/images/glow-soap.jpg",
    },
    {
      name: "Lonz Flawls Aura Whitening Cream",
      price: "R189",
      description: "Targets pigmentation, acne, and dark spots.",
      image: "/images/whitening-cream.jpg",
    },
    {
      name: "Lonz Flawls Aura Glow Lotion",
      price: "R159",
      description: "Heals sunburn, hydrates dry skin. 250g.",
      image: "/images/glow-lotion.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-50 to-white px-4 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Aura Glow Effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-pink-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[38vw] h-[38vw] bg-fuchsia-200 opacity-15 rounded-full blur-3xl" />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 tracking-tight drop-shadow-lg mb-10 font-serif z-10 fade-in-up">
        Shop <span className="text-fuchsia-500">Lonz Flawls Aura</span> Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full z-10 fade-in-up delay-100">
        {products.map((item, index) => (
          <Card key={index} className="rounded-3xl shadow-2xl overflow-hidden border border-pink-100 bg-white/90 backdrop-blur-lg hover:shadow-[0_8px_32px_0_rgba(249,168,212,0.18)] transition-all">
            <img src={item.image} alt={item.name} className="h-72 w-full object-cover" loading="lazy" />
            <CardContent className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-pink-700 mb-1 font-serif text-center">{item.name}</h3>
              <p className="text-base text-gray-700 mb-3 text-center">{item.description}</p>
              <p className="text-2xl font-extrabold text-fuchsia-600 mb-2">{item.price}</p>
              <button className="mt-2 w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white py-3 rounded-xl font-semibold text-base shadow hover:from-fuchsia-500 hover:to-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-300">
                Add to Cart
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="z-10 mt-14 flex flex-col items-center fade-in-up delay-200">
        <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 text-white font-bold shadow-lg tracking-wide uppercase text-base mb-1 animate-pulse">
          #GlowWithAura
        </span>
        <span className="text-sm text-gray-500">Luxury skincare, delivered to your door.</span>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .fade-in-up.delay-100 {
          animation-delay: 0.16s;
        }
        .fade-in-up.delay-200 {
          animation-delay: 0.28s;
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