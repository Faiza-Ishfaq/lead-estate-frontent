export default function RentHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
      {/* Background Image for Rentals */}
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1470&q=80"
        alt="Luxury Apartment"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">
          Find Your Ideal Rental Home
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl drop-shadow">
          Browse the best apartments, condos, and houses available for rent. Comfort, convenience, and style in one place.
        </p>

        {/* CTA Button with gold glow animation */}
        <a
          href="/rent"
          className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold 
                     hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)]
                     transition-all duration-300"
        >
          Browse Rentals
        </a>
      </div>
    </section>
  );
}