// SellHero.jsx
export default function SellHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1670648472060-36b4b42b23a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sell Property"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A2B3C]/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">
          Sell Your Property Faster
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl drop-shadow">
          List your house, apartment, or commercial property and connect with
          thousands of serious buyers across top cities.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/sell-property"
            className="px-5 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold
                       hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)]
                       transition-all duration-300"
          >
            List Your Property
          </a>
          <a
            href="/agents"
            className="px-5 py-3 rounded-md border border-white text-white font-semibold
                       hover:bg-white hover:text-[#1A2B3C] transition-all duration-300"
          >
            Find Agents
          </a>
        </div>
      </div>

      {/* ✅ Spacer div to force bottom space */}
      <div className="absolute -bottom-16 w-full h-16"></div>
    </section>
  );
}