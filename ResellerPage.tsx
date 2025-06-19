export default function ResellerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-4">Become a Lonz Distributor 💼</h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10">
        You don't need to be a business expert to start. You just need belief, a phone, and the courage
        to glow up your income. We're opening the gates for loyal customers and glow lovers to become
        official resellers. Let Lonz Flawless Aura pay you back — literally.
      </p>

      <section className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why Join the Movement?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Get products at exclusive discounted prices</li>
          <li>Keep 100% of profits from your own sales</li>
          <li>Receive marketing tools, videos, and product images</li>
          <li>No experience needed – just passion and consistency</li>
          <li>Be featured on our page as a rising brand partner</li>
        </ul>
      </section>

      <section className="text-center">
        <h3 className="text-xl text-pink-500 font-semibold mb-3">Ready to glow with us?</h3>
        <a
          href="mailto:join@lonzaura.co.za"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition text-lg font-medium"
        >
          Apply to Become a Reseller
        </a>
        <p className="text-sm text-gray-500 mt-2">We’ll respond within 24–48 hours.</p>
      </section>
    </main>
  );
}