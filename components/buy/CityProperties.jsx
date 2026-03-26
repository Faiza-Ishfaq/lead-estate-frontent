"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CityProperties() {

  const cities = [
    {
      city: "Lahore",
      properties: [
        {
          title: "Luxury House",
          price: "PKR 2.5 Crore",
          area: "DHA Phase 6",
          beds: 4,
          baths: 3,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
          title: "Modern Villa",
          price: "PKR 3.2 Crore",
          area: "Bahria Town",
          beds: 5,
          baths: 4,
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        },
        {
          title: "Family House",
          price: "PKR 1.8 Crore",
          area: "Johar Town",
          beds: 3,
          baths: 3,
          image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        },
        {
          title: "Luxury Apartment",
          price: "PKR 1.2 Crore",
          area: "Gulberg",
          beds: 3,
          baths: 2,
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
        },
        {
          title: "Modern Home",
          price: "PKR 2.1 Crore",
          area: "Model Town",
          beds: 4,
          baths: 3,
          image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
        },
        {
          title: "Elegant House",
          price: "PKR 3.5 Crore",
          area: "DHA Phase 8",
          beds: 5,
          baths: 4,
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
        },
      ],
    },
    {
      city: "Islamabad",
      properties: [
        {
          title: "Luxury House",
          price: "PKR 4.2 Crore",
          area: "F-6",
          beds: 5,
          baths: 5,
          image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
        },
        {
          title: "Modern Apartment",
          price: "PKR 1.9 Crore",
          area: "F-11",
          beds: 3,
          baths: 2,
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        {
          title: "Beautiful House",
          price: "PKR 3.8 Crore",
          area: "DHA Phase 2",
          beds: 4,
          baths: 4,
          image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        },
        {
          title: "Modern Villa",
          price: "PKR 4.5 Crore",
          area: "Bahria Town",
          beds: 5,
          baths: 4,
          image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1"
        },
        {
          title: "Family Apartment",
          price: "PKR 1.5 Crore",
          area: "G-11",
          beds: 3,
          baths: 2,
          image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
        },
        {
          title: "Elegant Home",
          price: "PKR 3.2 Crore",
          area: "E-11",
          beds: 4,
          baths: 3,
          image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
        },
      ],
    },
    {
      city: "Karachi",
      properties: [
        {
          title: "Luxury Apartment",
          price: "PKR 1.4 Crore",
          area: "Clifton",
          beds: 3,
          baths: 2,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
          title: "Sea View Apartment",
          price: "PKR 2.1 Crore",
          area: "Defence Phase 6",
          beds: 3,
          baths: 3,
          image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1"
        },
        {
          title: "Family House",
          price: "PKR 3.3 Crore",
          area: "Gulshan-e-Iqbal",
          beds: 5,
          baths: 4,
          image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
        },
        {
          title: "Modern Villa",
          price: "PKR 4.8 Crore",
          area: "DHA Phase 8",
          beds: 5,
          baths: 5,
          image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
        },
        {
          title: "Luxury Home",
          price: "PKR 2.9 Crore",
          area: "PECHS",
          beds: 4,
          baths: 3,
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        {
          title: "Elegant Apartment",
          price: "PKR 1.7 Crore",
          area: "North Nazimabad",
          beds: 3,
          baths: 2,
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
        },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {cities.map((cityData, index) => (
        <CitySection key={index} data={cityData} />
      ))}
    </div>
  );
}

// === CITY SECTION ===
function CitySection({ data }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = sliderRef.current;
      if (!container) return;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-5 my-18">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#1A2B3C]">
          Properties in {data.city}
        </h2>
        <button className="text-[#C5A059] font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div ref={sliderRef} className="flex gap-6 overflow-x-auto no-scrollbar">
          {data.properties?.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// === PROPERTY CARD ===
function PropertyCard({ property }) {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: property?.price || "",
    propertyInterest: property?.title || "",
    visitDate: "",
    message: ""
  });

  if (!property) return null;

  const handleChange = (e) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Agent Lead:", leadData);
    setContactModalOpen(false);
    alert("Agent will contact you soon!");
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    console.log("Schedule Visit Lead:", leadData);
    setVisitModalOpen(false);
    alert("Your visit is scheduled!");
  };

  return (
    <div className="min-w-[300px] bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition relative">

      {/* Property Image */}
      <Link href="/property-details">
        <div className="cursor-pointer relative group">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-[#C5A059] text-white text-xs font-semibold px-3 py-1 rounded-md">
            FOR SALE
          </span>
        </div>
      </Link>

      {/* Property Info */}
      <div className="p-4 space-y-2">

        {/* Title + Save Icon */}
        <div className="flex justify-between items-start">
          <Link href="/property-details">
            <h3 className="text-lg font-semibold text-[#1A2B3C] cursor-pointer hover:underline">
              {property.title}
            </h3>
          </Link>
          <button className="text-gray-400 hover:text-[#C5A059] transition-colors">
            <HeartIcon className="w-7 h-7" />
          </button>
        </div>

        {/* Price */}
        <p className="text-[#C5A059] font-semibold text-md">{property.price}</p>

        {/* Area */}
        <p className="text-gray-600 text-sm">{property.area}</p>

        {/* Beds & Baths */}
        <p className="text-sm text-gray-500 flex gap-2 items-center">
          <span>{property.beds} Beds</span>
          <span>•</span>
          <span> {property.baths} Baths</span>
        </p>

        {/* Lead Actions */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setContactModalOpen(true)}
            className="flex-1 bg-[#1A2B3C] text-white py-2 rounded-lg hover:bg-[#14202d] text-sm transition"
          >
            Contact Agent
          </button>

          <button
            onClick={() => setVisitModalOpen(true)}
            className="flex-1 border border-[#1A2B3C] text-[#1A2B3C] py-2 rounded-lg hover:bg-gray-100 text-sm transition"
          >
            Schedule Visit
          </button>
          
        </div>
      </div>

      {/* ===== CONTACT MODAL ===== */}
      {contactModalOpen && (
        <Modal title="Contact Agent" onClose={() => setContactModalOpen(false)}>
          <form onSubmit={handleContactSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={leadData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={leadData.phone}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={leadData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="budget"
              placeholder="Budget"
              value={leadData.budget}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="propertyInterest"
              placeholder="Property Interest"
              value={leadData.propertyInterest}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100"
            />
            <button
              type="submit"
              className="w-full bg-[#1A2B3C] text-white py-2 rounded hover:bg-[#14202d]"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}

      {/* ===== VISIT MODAL ===== */}
      {visitModalOpen && (
        <Modal title="Schedule Visit" onClose={() => setVisitModalOpen(false)}>
          <form onSubmit={handleVisitSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={leadData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={leadData.phone}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={leadData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="date"
              name="visitDate"
              value={leadData.visitDate}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Optional Message"
              value={leadData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-[#1A2B3C] text-white py-2 rounded hover:bg-[#14202d]"
            >
              Schedule Visit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

// === MODAL COMPONENT ===
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold text-[#1A2B3C] mb-4">{title}</h2>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-[#C5A059]"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
}