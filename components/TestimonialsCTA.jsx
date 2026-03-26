"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function TestimonialsCTA() {
  const testimonials = [
    { id: 1, name: "Ali R.", text: "Found my dream home thanks to this platform. The alerts and listings were perfect!" },
    { id: 2, name: "Sara K.", text: "Amazing experience! The property types grid made it super easy to explore villas and apartments." },
    { id: 3, name: "Hassan M.", text: "Excellent service and smooth process. I highly recommend this platform to anyone looking for a property." },
    { id: 4, name: "Ayesha L.", text: "The notifications kept me updated constantly. I found a property that perfectly matched my needs!" },
    { id: 5, name: "Bilal S.", text: "Professional and reliable. The platform made property hunting so much easier than I expected." },
  ];

  return (
    <section className="py-18 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2B3C] font-heading">
            What Our Clients Say
          </h2>
          <p className="text-[#333333] mt-4 max-w-xl mx-auto font-body leading-relaxed">
            Hear from our satisfied clients who found their dream properties effortlessly.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-[#C5A059] text-3xl mb-4">“</div>
                <p className="text-[#333333] font-body leading-relaxed">
                  {item.text}
                </p>
                <h4 className="mt-6 font-semibold text-[#1A2B3C] font-heading">— {item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-[#C5A059] text-[#1A2B3C] px-10 py-4 rounded-md hover:bg-[#1A2B3C] hover:text-white transition font-semibold shadow-md hover:shadow-xl transform hover:scale-105">
            Join as an Agent
          </button>
        </div>

      </div>
    </section>
  );
}