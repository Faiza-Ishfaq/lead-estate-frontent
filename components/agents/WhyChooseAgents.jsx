"use client";
export default function WhyChooseAgents() {
  const benefits = [
    {
      id: 1,
      title: "Verified Agents",
      description: "All agents are verified professionals with proven track records in buying, selling, and renting.",
      icon: "https://img.icons8.com/ios-filled/50/000000/checked.png",
    },
    {
      id: 2,
      title: "Local Expertise",
      description: "Agents with deep knowledge of neighborhoods and market trends to guide your decisions.",
      icon: "https://img.icons8.com/ios-filled/50/000000/map-marker.png",
    },
    {
      id: 3,
      title: "Fast Response",
      description: "Quick communication to ensure you never miss an opportunity to buy or sell.",
      icon: "https://img.icons8.com/ios-filled/50/000000/clock.png",
    },
    {
      id: 4,
      title: "Trusted Reviews",
      description: "Our clients rate our agents highly for professionalism, transparency, and results.",
      icon: "https://img.icons8.com/ios-filled/50/000000/star.png",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#C5A059]/10 rounded-full -z-10 blur-3xl animate-float1"></div>
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-[#C5A059]/5 rounded-full -z-10 blur-3xl animate-float2"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#C5A059]/5 rounded-full -z-10 blur-3xl animate-float3"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A2B3C] mb-4">
          Why Choose Our Agents
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our agents stand out in the market. Here’s why clients trust them to handle their real estate needs.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {benefits.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src={b.icon} alt={b.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-[#1A2B3C] mb-2">{b.title}</h3>
            <p className="text-gray-600 text-sm">{b.description}</p>
          </div>
        ))}
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(10px) translateX(15px); }
        }
        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 12s ease-in-out infinite; }
        .animate-float3 { animation: float3 14s ease-in-out infinite; }
      `}</style>
    </section>
  );
}