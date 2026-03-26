export default function PropertyTypes() {

  const types = [
    {
      id: 1,
      name: "Houses",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },
    {
      id: 2,
      name: "Apartments",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    {
      id: 3,
      name: "Luxury Villas",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    },
    {
      id: 4,
      name: "Offices",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    },
    {
      id: 5,
      name: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
    },
    {
      id: 6,
      name: "Modern Homes",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  ];

  return (
    <section className="py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A2B3C] leading-tight">
            Discover Properties Designed <br/> For Every Lifestyle
          </h2>

          <p className="text-[#333] mt-4 text-base leading-relaxed">
            From modern apartments to luxury villas and commercial spaces,
            explore a range of properties tailored to meet every need and lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {types.map((type) => (

            <div
              key={type.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >

              {/* Image */}
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B3C]/80 via-transparent to-transparent flex items-end p-6">

                <h3 className="text-white text-xl font-semibold tracking-wide group-hover:text-[#C5A059] transition">
                  {type.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}