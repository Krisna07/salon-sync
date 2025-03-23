import BusinessCard from "@/components/business/BusinessCard";

export default function DiscoverPage() {
  const businesses = [
    {
      id: "1",
      name: "Elegant Cuts",
      description:
        "Premium hair salon offering cutting-edge styles and treatments",
      activeHours: "9:00 AM - 6:00 PM",
      type: "Hair Salon",
      location: "123 Main St, Springfield, IL",
      services: ["Haircut", "Hair Coloring", "Hair Styling"],
      imageUrl: "https://picsum.photos/seed/salon1/800/600",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Nail Envy",
      description: "Luxury nail salon specializing in manicures and pedicures",
      activeHours: "10:00 AM - 7:00 PM",
      type: "Nail Salon",
      location: "456 Elm St, Springfield, IL",
      services: ["Manicure", "Pedicure", "Nail Art"],
      imageUrl: "https://picsum.photos/seed/salon2/800/600",
      rating: 4.5,
    },
    {
      id: "3",
      name: "Skin Deep",
      description:
        "Boutique spa offering facials, massages, and skincare treatments",
      activeHours: "11:00 AM - 8:00 PM",
      type: "Spa",
      location: "789 Oak St, Springfield, IL",
      services: ["Facial", "Massage", "Skincare"],
      imageUrl: "https://picsum.photos/seed/salon3/800/600",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Urban Spa",
      description:
        "Modern spa offering an array of relaxing treatments and wellness packages",
      activeHours: "10:00 AM - 8:00 PM",
      type: "Spa",
      location: "101 City Rd, Springfield, IL",
      services: ["Massage", "Facial", "Manicure"],
      imageUrl: "https://picsum.photos/seed/salon4/800/600",
      rating: 4.6,
    },
    {
      id: "5",
      name: "Style Studio",
      description:
        "Contemporary hair salon known for creative cuts and vibrant styles",
      activeHours: "8:30 AM - 7:30 PM",
      type: "Hair Salon",
      location: "202 Fashion Ave, Springfield, IL",
      services: ["Haircut", "Hair Coloring", "Styling"],
      imageUrl: "https://picsum.photos/seed/salon5/800/600",
      rating: 4.4,
    },
    {
      id: "6",
      name: "Glamour Nails",
      description:
        "Chic nail salon specializing in luxurious manicures and pedicures",
      activeHours: "9:30 AM - 7:00 PM",
      type: "Nail Salon",
      location: "303 Glam St, Springfield, IL",
      services: ["Manicure", "Pedicure", "Nail Art"],
      imageUrl: "https://picsum.photos/seed/salon6/800/600",
      rating: 4.7,
    },
    {
      id: "7",
      name: "Bliss Beauty",
      description:
        "Expert beauty salon offering personalized treatments for skin, hair, and nails",
      activeHours: "8:00 AM - 5:00 PM",
      type: "Beauty Salon",
      location: "555 Beauty Blvd, Springfield, IL",
      services: ["Facial", "Hair Treatment", "Manicure", "Makeup"],
      imageUrl: "https://picsum.photos/seed/salon7/800/600",
      rating: 4.7,
    },
    {
      id: "8",
      name: "Fusion Spa",
      description:
        "Innovative spa and wellness center blending Eastern and Western techniques",
      activeHours: "9:00 AM - 9:00 PM",
      type: "Spa",
      location: "666 Harmony Rd, Springfield, IL",
      services: ["Massage", "Acupuncture", "Wellness"],
      imageUrl: "https://picsum.photos/seed/salon8/800/600",
      rating: 4.9,
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
