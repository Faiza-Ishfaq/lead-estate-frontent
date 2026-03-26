// components/agents/AgentFilters.jsx
export default function AgentFilters() {
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
            placeholder="City, Area or Neighborhood"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition"
          />
        </div>

        {/* Agent Type */}
        <div className="w-48">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Agent Type
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Select Type</option>
            <option value="buyer">Buyer Agent</option>
            <option value="seller">Seller Agent</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Rating */}
        <div className="w-32">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Rating
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Any</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
        </div>

        {/* Experience */}
        <div className="w-40">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Experience (Years)
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Any</option>
            <option value="1">1+ Years</option>
            <option value="3">3+ Years</option>
            <option value="5">5+ Years</option>
            <option value="10">10+ Years</option>
          </select>
        </div>

        {/* Languages */}
        <div className="w-48">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Languages
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition">
            <option value="">Any</option>
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="punjabi">Punjabi</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-4 lg:mt-0">
          <button className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)] transition-all duration-300 w-full lg:w-auto">
            Search Agents
          </button>
        </div>

      </div>
    </section>
  );
}