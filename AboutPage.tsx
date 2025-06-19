export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">About Lonz Flawless Aura</h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        Lonz Flawless Aura is more than just skincare — it's a movement rooted in radiance, empowerment,
        and African elegance. Born from a deep belief in glow, softness, and timeless self-care, we
        formulate our products to bring confidence, transformation, and healing.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Our Story</h3>
          <p className="text-gray-600">
            We started in a small kitchen with a dream to blend natural ingredients and scientific
            breakthroughs. From glowing bars to full-body care systems, our journey has always been
            about creating beauty that feels personal, powerful, and luxurious.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide world-class skincare solutions for every skin tone, body type, and journey —
            with a focus on glow, healing, and unapologetic beauty. We believe in feminine softness,
            radiant boldness, and skincare without compromise.
          </p>
        </div>
      </div>
    </main>
  );
}