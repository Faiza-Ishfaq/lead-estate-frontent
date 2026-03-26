"use client";
// components/agents/AgentsSectionHorizontal.jsx
import { useState } from "react";

// Example agents data
const exampleAgents = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Agent ${i + 1}`,
  location: "Lahore, Pakistan",
  rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
  experience: Math.floor(Math.random() * 10) + 1,
  propertiesSold: Math.floor(Math.random() * 50) + 5, // 5-55 properties sold
  profile: i % 3 === 0 ? null : `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
}));

export default function AgentsSectionHorizontal() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10; // show 10 cards per page

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentAgents = exampleAgents.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(exampleAgents.length / cardsPerPage);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading + Description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A2B3C] mb-4">
          Meet Our Expert Agents
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Connect with our trusted real estate professionals. Find agents with experience, local knowledge, and a record of success to help you buy, sell, or rent your property.
        </p>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {currentAgents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row items-center lg:items-start p-6 gap-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            {agent.profile ? (
              <img
                src={agent.profile}
                alt={agent.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-[#C5A059]"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-semibold text-[#1A2B3C] border-2 border-[#C5A059]">
                {agent.name.split(" ").map((n) => n[0]).join("")}
              </div>
            )}

            {/* Details */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-semibold text-[#1A2B3C] mb-1">{agent.name}</h3>
              <p className="text-gray-500 mb-3">{agent.location}</p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <span>⭐ {agent.rating}</span>
                <span>• {agent.experience} yrs exp</span>
                <span>• {agent.propertiesSold} properties sold</span>
              </div>

              <a
                href={`/contact-agent/${agent.id}`}
                className="inline-block px-6 py-2 bg-[#C5A059] text-[#1A2B3C] font-semibold rounded-full hover:bg-yellow-600 hover:shadow-[0_0_12px_rgba(197,160,89,0.6)] transition"
              >
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-medium border transition ${
              currentPage === i + 1
                ? "bg-[#C5A059] text-[#1A2B3C] border-[#C5A059] shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}