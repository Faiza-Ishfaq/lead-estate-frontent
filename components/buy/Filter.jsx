// components/buy/BuyFilters.jsx
export default function BuyFilters() {
  return (
    <section className="bg-white shadow-md rounded-lg -mt-20 relative z-10 max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center">

        {/* Location */}
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Location
          </label>
          <input
            type="text"
            placeholder="City, Area or Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition"
          />
        </div>

        {/* Property Type */}
        <div className="w-48">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Property Type
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Select Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="w-48">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Price Range
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Select Price</option>
            <option value="0-5M">0 - 5M</option>
            <option value="5-10M">5M - 10M</option>
            <option value="10-20M">10M - 20M</option>
            <option value="20M+">20M+</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="w-32">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Bedrooms
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-4 lg:mt-0">
          <button className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)] transition-all duration-300 w-full lg:w-auto">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}