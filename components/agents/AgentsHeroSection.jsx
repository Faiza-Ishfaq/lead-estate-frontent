export default function AgentsHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
      {/* Background Image for Agents */}
      <img
        src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Real Estate Agents"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4">
          Meet Our Expert Agents
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl drop-shadow">
          Helping you find, buy, and sell properties across Pakistan with trusted professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary button */}
          {/* <a
            href="/agents"
            className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold 
                       hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)]
                       transition-all duration-300"
          >
            View All Agents
          </a> */}

          {/* Secondary button */}
          {/* <a
            href="/contact-agent"
            className="px-6 py-3 rounded-md border border-[#C5A059] text-white font-semibold
                       hover:bg-[#C5A059] hover:text-[#1A2B3C] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)]
                       transition-all duration-300"
          >
            Contact an Agent
          </a> */}
        </div>
      </div>
    </section>
  );
}