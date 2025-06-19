export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">Contact & Support</h1>
      <p className="text-lg text-center text-gray-700 mb-10">
        Have a question, feedback, or custom request? We’d love to hear from you.
      </p>

      <form
        action="https://formspree.io/f/mexample" // Replace with your Formspree or backend route
        method="POST"
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl text-lg font-semibold"
        >
          Send Message
        </button>
      </form>

      <div className="text-center text-sm text-gray-500 mt-6">
        Or email us directly at{" "}
        <a href="mailto:hello@lonzaura.co.za" className="text-pink-500 underline">
          hello@lonzaura.co.za
        </a>
      </div>
    </main>
  );
}