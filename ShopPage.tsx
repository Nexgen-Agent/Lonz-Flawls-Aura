import { Card, CardContent } from "@/components/ui/card";

export default function ShopPage() {
  const products = [
    {
      name: "Extra Glow Soap",
      price: "R129",
      description: "Fades scars & stretch marks. Tumeric + Vitamin C.",
      image: "/images/glow-soap.jpg",
    },
    {
      name: "Whitening Cream",
      price: "R189",
      description: "Targets pigmentation, acne, and dark spots.",
      image: "/images/whitening-cream.jpg",
    },
    {
      name: "Glow Lotion",
      price: "R159",
      description: "Heals sunburn, hydrates dry skin. 250g.",
      image: "/images/glow-lotion.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Shop Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <Card key={index} className="shadow-lg rounded-2xl overflow-hidden">
            <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold text-pink-700 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <p className="text-lg font-bold text-pink-600">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}