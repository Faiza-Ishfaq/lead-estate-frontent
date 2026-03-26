export default function PropertyAlerts() {
  return (
    <section className="py-18 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <div className="relative overflow-hidden rounded-xl shadow-xl group">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Property"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-[#1A2B3C]/40"></div>

          </div>

          {/* Content Side */}
          <div>

            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A2B3C]">
              Get Instant Property Alerts
            </h2>

            <p className="text-[#333] mt-4 max-w-md leading-relaxed">
              Be the first to discover new homes, apartments, and luxury
              properties that match your search. Receive alerts for new
              listings and price drops instantly.
            </p>

            {/* Form */}
            <div className="mt-8 space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 border border-[#E0E0E0] rounded-md focus:outline-none focus:border-[#C5A059] transition"
              />

              <input
                type="text"
                placeholder="Preferred Location"
                className="w-full px-5 py-4 border border-[#E0E0E0] rounded-md focus:outline-none focus:border-[#C5A059] transition"
              />

              <button className="w-full bg-[#1A2B3C] text-white py-4 rounded-md hover:bg-[#C5A059] transition duration-300">
                Get Property Alerts
              </button>

            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-[#333]">

              <span className="flex items-center gap-2">
                ✓ Instant Listings
              </span>

              <span className="flex items-center gap-2">
                ✓ Price Drop Alerts
              </span>

              <span className="flex items-center gap-2">
                ✓ Exclusive Deals
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}