"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper"; 
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export default function LatestProperties() {

  const properties = [
    { id: 1, title: "Modern Family Home", price: "$420,000", location: "Lahore DHA", beds: 4, baths: 3, area: "3100 sqft", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
    { id: 2, title: "Luxury Villa", price: "$980,000", location: "Bahria Town", beds: 5, baths: 4, area: "5200 sqft", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227" },
    { id: 3, title: "City Apartment", price: "$280,000", location: "Islamabad", beds: 3, baths: 2, area: "1900 sqft", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
    { id: 4, title: "Modern Glass House", price: "$760,000", location: "Karachi", beds: 4, baths: 3, area: "3400 sqft", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: 5, title: "Suburban Comfort Home", price: "$350,000", location: "Lahore", beds: 3, baths: 2, area: "2600 sqft", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" },
    { id: 6, title: "Premium Penthouse", price: "$1,200,000", location: "Dubai Marina", beds: 4, baths: 4, area: "4200 sqft", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae" },
  ];

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-18 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1A2B3C] font-semibold">
              Latest Properties
            </h2>
            <p className="font-body text-base text-[#333333] mt-4 max-w-lg leading-relaxed">
              Explore our newest property listings and discover homes, apartments, and luxury villas available in top locations.
            </p>
          </div>

          {/* Desktop "View All" */}
          <button className="hidden md:block border border-[#1A2B3C] px-6 py-3 rounded-md text-[#1A2B3C] hover:bg-[#1A2B3C] hover:text-white transition">
            View All
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1A2B3C] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#C5A059] transition text-xl font-bold"
            >
            ‹
            </button>
            <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1A2B3C] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#C5A059] transition text-xl font-bold"
            >
            ›
            </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              // Attach navigation buttons after Swiper is initialized
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 cursor-pointer">
                  
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1A2B3C]">
                      {property.title}
                    </h3>
                    <p className="text-[#C5A059] font-semibold mt-2">{property.price}</p>
                    <p className="text-sm text-gray-500 mt-1">{property.location}</p>

                    <div className="flex justify-between text-sm text-[#333333] mt-4 font-body uppercase tracking-[0.05em]">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.area}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile "View All" */}
        <div className="mt-12 md:hidden text-center">
          <button className="border border-[#1A2B3C] px-6 py-3 rounded-md text-[#1A2B3C] hover:bg-[#1A2B3C] hover:text-white transition">
            View All Properties
          </button>
        </div>

      </div>
    </section>
  );
}