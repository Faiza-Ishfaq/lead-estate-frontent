"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function RecentlySold() {

  const properties = [
    {
      title: "Luxury Villa",
      location: "DHA Phase 6, Lahore",
      price: "PKR 3.2 Crore",
      beds: "5 Beds",
      baths: "4 Baths",
      area: "10 Marla",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      title: "Modern Apartment",
      location: "Bahria Town, Lahore",
      price: "PKR 1.4 Crore",
      beds: "3 Beds",
      baths: "2 Baths",
      area: "6 Marla",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      title: "Commercial Plaza",
      location: "Gulberg, Lahore",
      price: "PKR 5.8 Crore",
      beds: "Office Space",
      baths: "3 Baths",
      area: "8 Marla",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
    },
    {
      title: "Family House",
      location: "DHA Karachi",
      price: "PKR 2.9 Crore",
      beds: "4 Beds",
      baths: "3 Baths",
      area: "8 Marla",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
    },
    {
      title: "Luxury Penthouse",
      location: "Clifton, Karachi",
      price: "PKR 4.6 Crore",
      beds: "4 Beds",
      baths: "4 Baths",
      area: "12 Marla",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      title: "Townhouse",
      location: "Bahria Town Karachi",
      price: "PKR 1.9 Crore",
      beds: "3 Beds",
      baths: "3 Baths",
      area: "5 Marla",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2B3C] mb-4">
            Recently Sold Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover properties that were recently sold through our platform
            across top cities in Pakistan.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`${property.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />

                  {/* Sold Badge */}
                  <span className="absolute top-3 left-3 bg-[#C5A059] text-[#1A2B3C] text-xs font-semibold px-3 py-1 rounded">
                    SOLD
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A2B3C]">
                    {property.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {property.location}
                  </p>
                  <p className="text-[#C5A059] font-semibold mt-2 text-sm">
                    {property.price}
                  </p>
                  <div className="text-xs text-gray-500 mt-2 flex justify-between">
                    <span>{property.beds}</span>
                    <span>{property.baths}</span>
                    <span>{property.area}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}