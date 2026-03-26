"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative h-[520px] flex items-center justify-center bg-[url('/images/hero.jpeg')] bg-cover bg-center">

      {/* Overlay */}
      <div className="absolute insHeroet-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Heading */}
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-5xl font-bold mb-4 font-playfair"
          >
           Find Your Dream Property
        </motion.h1>

        <p className="text-gray-200 mb-10">
          Search homes, apartments, villas and more
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-xl flex items-center p-2 max-w-2xl mx-auto">

          <input
            type="text"
            placeholder="Search by city, property type or price..."
            className="flex-1 px-6 py-3 rounded-full outline-none text-gray-700"
          />

          <button className="bg-[#1A2B3C] text-white px-8 py-3 rounded-full hover:bg-[#162232] transition">
            Search
          </button>

        </div>

      </div>
    </section>
  );
}