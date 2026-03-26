"use client";

export default function MortgageHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg mb-16">
      <img
        src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1470&q=80"
        alt="Mortgage Home Finance"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">
          Estimate Your Mortgage Easily
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 max-w-3xl drop-shadow">
          Use our tools to calculate monthly payments, explore loan options, and plan your dream home purchase.
        </p>
        <div className="flex flex-row gap-4 mt-6 flex-wrap justify-center">
          <a
            href="/mortgage/calculator"
            className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold 
                       hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
          >
            Mortgage Calculator
          </a>
          <a
            href="/mortgage/guide"
            className="px-6 py-3 rounded-md border-2 border-[#C5A059] text-white font-semibold 
                       hover:bg-[#C5A059] hover:text-[#1A2B3C] hover:shadow-lg transition-all duration-300"
          >
            Mortgage Guide
          </a>
        </div>
      </div>
    </section>
  );
}