export default function GlowRoutinePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
        Daily Glow Routine ✨
      </h1>

      <div className="max-w-3xl mx-auto text-gray-700 space-y-6 text-lg">
        <p>
          Our glow routine is designed for all skin tones and body types. It works gently but powerfully — healing, hydrating, and restoring your natural radiance. Follow this ritual morning and night for best results.
        </p>

        <div className="bg-pink-50 p-6 rounded-2xl shadow-inner space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">🌞 Morning Routine</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Cleanse with <strong>Lonia’s Extra Glow Soap</strong></li>
            <li>Apply <strong>Lonia’s Extra Glow Lotion</strong> to full body</li>
            <li>Use <strong>Lonia’s Whitening Oil</strong> on dark areas and dry spots</li>
            <li>Apply SPF (if exposed to sunlight)</li>
          </ul>
        </div>

        <div className="bg-pink-50 p-6 rounded-2xl shadow-inner space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">🌙 Night Routine</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Cleanse again with <strong>Lonia’s Whitening Soap</strong></li>
            <li>Apply <strong>Lonia’s Whitening Cream</strong> to face and neck</li>
            <li>Use <strong>Lonia’s Whitening Oil</strong> on targeted areas</li>
            <li>Drink 2 cups of water before sleep 💧</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <a
            href=\"/files/LonzGlowRoutine.pdf\"
            download
            className=\"inline-block bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition text-lg font-medium\"
          >
            Download Glow Routine PDF
          </a>
        </div>
      </div>
    </main>
  );
}