export default function SellCTA() {
  return (
    <section className="relative bg-[#F8F9FA] text-[#1A2B3C] py-16 rounded-lg overflow-hidden shadow-md mt-20">
      
      {/* Decorative Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 drop-shadow-md">
          Ready to Sell Your Property?
        </h2>
        <p className="text-lg mb-10 lg:text-xl text-[#333333] mb-8 max-w-2xl mx-auto leading-relaxed">
          Join our trusted platform and reach thousands of potential buyers. List your property quickly and easily with verified agents.
        </p>

        <a
          href="/sell-listing"
          className="inline-block mb-10 px-8 py-4 bg-[#C5A059] text-[#1A2B3C] font-semibold rounded-md 
                     hover:bg-yellow-500 hover:shadow-[0_0_25px_rgba(197,160,89,0.4)]
                     transition-all duration-300"
        >
          List Your Property
        </a>
      </div>
    </section>
  );
}