export default function ReviewsPage() {
  const reviews = [
    {
      name: "Nokuthula M.",
      quote: "After just one week with the Glow Soap and Lotion, my skin feels baby soft. No more dry patches!",
      image: "/images/review-1.jpg",
    },
    {
      name: "Thandi D.",
      quote: "I’ve struggled with dark marks for years. Lonz Whitening Cream changed the game. My face is glowing!",
      image: "/images/review-2.jpg",
    },
    {
      name: "Zanele R.",
      quote: "Honestly, the oil smells divine and makes my skin feel like silk. I’m obsessed!",
      image: "/images/review-3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">Real Reviews ✨</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Nothing is more powerful than real skin stories. These are real customers who trusted our process — and got their glow back.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-pink-50 p-6 rounded-2xl shadow-xl text-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-600 mb-3">“{review.quote}”</p>
            <p className="font-semibold text-pink-600">{review.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="mailto:submit@lonzaura.co.za"
          className="text-pink-500 underline text-sm"
        >
          Want to submit your glow story? Email us your photo + review 💌
        </a>
      </div>
    </main>
  );
}