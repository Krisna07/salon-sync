import BusinessCard from "@/components/business/BusinessCard";

export default function DiscoverPage() {
  const businesses = [
    {
      id: "1",
      name: "Elegant Cuts",
      description:
        "Premium hair salon offering cutting-edge styles and treatments",
      imageUrl: "https://picsum.photos/seed/salon1/800/600",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Beauty & Beyond",
      description: "Full-service beauty salon with expert stylists",
      imageUrl: "https://picsum.photos/seed/salon2/800/600",
      rating: 4.5,
    },
    {
      id: "3",
      name: "Modern Style Studio",
      description: "Contemporary salon specializing in modern hair trends",
      imageUrl: "https://picsum.photos/seed/salon3/800/600",
      rating: 4.7,
    },
    {
      id: "4",
      name: "The Hair Lounge",
      description: "Luxurious salon experience with personalized service",
      imageUrl: "https://picsum.photos/seed/salon4/800/600",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Chic & Sharp",
      description: "Trendy salon offering latest hair and beauty services",
      imageUrl: "https://picsum.photos/seed/salon5/800/600",
      rating: 4.9,
    },
    {
      id: "6",
      name: "Style Haven",
      description: "Your destination for premium hair care and styling",
      imageUrl: "https://picsum.photos/seed/salon6/800/600",
      rating: 4.4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discover Salons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <BusinessCard key={business.id} {...business} />
        ))}
      </div>
    </div>
  );
}
