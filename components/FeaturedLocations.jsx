"use client";

export default function FeaturedLocations() {

  const locations = [
    {
      name: "Lahore",
      properties: "1200+ Properties",
      mapUrl: "https://static-maps.yandex.ru/1.x/?ll=74.3587,31.5204&size=600,400&z=12&l=map"
    },
    {
      name: "Islamabad",
      properties: "800+ Properties",
      mapUrl: "https://static-maps.yandex.ru/1.x/?ll=73.0479,33.6844&size=600,400&z=12&l=map"
    },
    {
      name: "Karachi",
      properties: "950+ Properties",
      mapUrl: "https://static-maps.yandex.ru/1.x/?ll=67.0011,24.8607&size=600,400&z=12&l=map"
    },
    {
      name: "DHA Lahore",
      properties: "600+ Properties",
      mapUrl: "https://static-maps.yandex.ru/1.x/?ll=74.385,31.495&size=600,400&z=14&l=map"
    },
    {
      name: "Bahria Town",
      properties: "500+ Properties",
      mapUrl: "https://static-maps.yandex.ru/1.x/?ll=73.0846,32.8386&size=600,400&z=13&l=map"
    }
  ];

  return (
    <section className="py-18 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-[#1A2B3C] font-semibold">
            Explore Properties in Prime Locations
          </h2>
          <p className="font-body text-base text-[#333333] mt-4 leading-relaxed">
            Discover homes, apartments, and commercial spaces in the most
            sought-after locations. Browse properties in cities where
            opportunities and lifestyles meet.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {locations.map((loc, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition duration-500
                ${index === 0 ? "md:col-span-2 md:row-span-2 h-[420px]" : "h-[200px]"}`}
            >

              {/* Map Background */}
              <img
                src={loc.mapUrl}
                alt={`${loc.name} map`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Dark Overlay for Text */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-heading text-xl md:text-2xl text-white group-hover:text-[#C5A059] transition">
                  {loc.name}
                </h3>
                <p className="font-body text-sm md:text-base text-gray-200 mt-1 tracking-[0.05em] uppercase">
                  {loc.properties}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}