"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function PopularAgents() {

  const agents = [
    {
      name: "Ali Khan",
      area: "DHA Lahore Specialist",
      sold: "35 Properties Sold",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
    },
    {
      name: "Sara Ahmed",
      area: "Bahria Town Expert",
      sold: "28 Properties Sold",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Usman Malik",
      area: "Gulberg Property Advisor",
      sold: "41 Properties Sold",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      name: "Hassan Raza",
      area: "Karachi Real Estate",
      sold: "32 Properties Sold",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
      name: "Ayesha Noor",
      area: "Islamabad Consultant",
      sold: "30 Properties Sold",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296"
    },
    {
      name: "Bilal Ahmed",
      area: "Lahore Investment Expert",
      sold: "27 Properties Sold",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2B3C] mb-4">
            Work With Top Real Estate Agents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with experienced agents who can help you sell your property
            faster and at the best possible price.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >

          {agents.map((agent, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center p-6">

                <div className="flex justify-center mt-4 mb-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#F1F1F1]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#1A2B3C]">
                  {agent.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {agent.area}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {agent.sold}
                </p>

                <p className="text-[#C5A059] font-semibold mt-2">
                  ⭐ {agent.rating}
                </p>

                <button className="mt-5 w-full bg-[#1A2B3C] text-white py-2 rounded-md hover:bg-[#C5A059] hover:text-[#1A2B3C] transition">
                  Contact Agent
                </button>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}