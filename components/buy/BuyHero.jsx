"use client";
import { motion } from "framer-motion";

export default function BuyHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
      {/* Background Image from Unsplash */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
        alt="Luxury House"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-white drop-shadow-lg mb-4 font-playfair"
          >
           Find Your Dream Home
        </motion.h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl drop-shadow">
          Explore the best properties for sale across top locations. Luxury, comfort, and convenience at one place.
        </p>

        {/* CTA Button with gold glow animation */}
        <a
          href="/buy"
          className="px-6 py-3 rounded-md bg-[#C5A059] text-[#1A2B3C] font-semibold 
                     hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(197,160,89,0.6)]
                     transition-all duration-300"
        >
          Browse Listings
        </a>
      </div>
    </section>
  );
}