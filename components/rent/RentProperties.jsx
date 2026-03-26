// components/rent/RentProperties.jsx
"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RentProperties() {
  const cities = [
    {
      city: "Lahore",
      properties: [
        { title: "Luxury Apartment", rent: "PKR 120k / month", area: "1800 sqft", type: "Apartment", beds: 3, baths: 2, furnished: true, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80" },
        { title: "Modern Villa", rent: "PKR 250k / month", area: "3500 sqft", type: "Villa", beds: 4, baths: 3, furnished: false, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1470&q=80" },
        { title: "Family House", rent: "PKR 85k / month", area: "1500 sqft", type: "House", beds: 3, baths: 2, furnished: true, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1470&q=80" },
        { title: "Commercial Space", rent: "PKR 180k / month", area: "2000 sqft", type: "Commercial", beds: 0, baths: 2, furnished: false, image: "https://images.unsplash.com/photo-1572120360610-d971b9baf3fa?auto=format&fit=crop&w=1470&q=80" },
        { title: "Modern Apartment", rent: "PKR 130k / month", area: "1600 sqft", type: "Apartment", beds: 2, baths: 2, furnished: true, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1470&q=80" },
        { title: "Elegant Villa", rent: "PKR 300k / month", area: "4000 sqft", type: "Villa", beds: 5, baths: 4, furnished: false, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1470&q=80" },
      ],
    },
    {
      city: "Islamabad",
      properties: [
        { title: "Luxury Apartment", rent: "PKR 220k / month", area: "2000 sqft", type: "Apartment", beds: 4, baths: 3, furnished: true, image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1470&q=80" },
        { title: "Modern Apartment", rent: "PKR 95k / month", area: "1200 sqft", type: "Apartment", beds: 2, baths: 2, furnished: false, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1470&q=80" },
        { title: "Family House", rent: "PKR 180k / month", area: "2500 sqft", type: "House", beds: 3, baths: 3, furnished: true, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1470&q=80" },
        { title: "Commercial Space", rent: "PKR 200k / month", area: "2200 sqft", type: "Commercial", beds: 0, baths: 2, furnished: false, image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1470&q=80" },
        { title: "Elegant Villa", rent: "PKR 350k / month", area: "3800 sqft", type: "Villa", beds: 5, baths: 4, furnished: true, image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1470&q=80" },
        { title: "Modern Apartment", rent: "PKR 125k / month", area: "1500 sqft", type: "Apartment", beds: 3, baths: 2, furnished: false, image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80" },
      ],
    },
    {
      city: "Karachi",
      properties: [
        { title: "Luxury Apartment", rent: "PKR 150k / month", area: "1800 sqft", type: "Apartment", beds: 3, baths: 2, furnished: true, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80" },
        { title: "Sea View Apartment", rent: "PKR 220k / month", area: "2000 sqft", type: "Apartment", beds: 3, baths: 3, furnished: true, image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1470&q=80" },
        { title: "Family House", rent: "PKR 180k / month", area: "2400 sqft", type: "House", beds: 4, baths: 3, furnished: false, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1470&q=80" },
        { title: "Modern Villa", rent: "PKR 300k / month", area: "3800 sqft", type: "Villa", beds: 5, baths: 4, furnished: true, image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1470&q=80" },
        { title: "Commercial Space", rent: "PKR 250k / month", area: "2200 sqft", type: "Commercial", beds: 0, baths: 2, furnished: false, image: "https://images.unsplash.com/photo-1572120360610-d971b9baf3fa?auto=format&fit=crop&w=1470&q=80" },
        { title: "Elegant Apartment", rent: "PKR 130k / month", area: "1600 sqft", type: "Apartment", beds: 3, baths: 2, furnished: true, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1470&q=80" },
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
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
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
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#1A2B3C]">Popular in {data.city}</h2>
        <button className="text-[#C5A059] font-medium hover:underline">View All</button>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10">
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="flex gap-6 overflow-x-auto no-scrollbar">
          {data.properties.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10">
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
    name: "", phone: "", email: "", rent: property?.rent || "", propertyInterest: property?.title || "", visitDate: "", message: ""
  });

  const handleChange = (e) => setLeadData({ ...leadData, [e.target.name]: e.target.value });
  const handleContactSubmit = (e) => { e.preventDefault(); console.log("Lead:", leadData); setContactModalOpen(false); alert("Agent will contact you soon!"); };
  const handleVisitSubmit = (e) => { e.preventDefault(); console.log("Visit Lead:", leadData); setVisitModalOpen(false); alert("Your visit is scheduled!"); };

  return (
    <div className="min-w-[300px] md:min-w-[250px] lg:min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition relative">

      {/* Image */}
      <Link href="/property-details">
        <div className="cursor-pointer relative group">
          <img src={property.image} alt={property.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
          <span className="absolute top-3 left-3 bg-[#C5A059] text-white text-xs font-semibold px-3 py-1 rounded-md">FOR RENT</span>
          <span className={`absolute top-3 right-3 text-white text-xs font-semibold px-2 py-1 rounded-md ${property.furnished ? 'bg-[#1A2B3C]' : 'bg-gray-500'}`}>{property.furnished ? 'Furnished' : 'Unfurnished'}</span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 px-3 py-3 space-y-1">
        <div className="flex justify-between items-start">
          <Link href="/property-details">
            <h3 className="text-md font-semibold text-[#1A2B3C] cursor-pointer hover:underline">{property.title}</h3>
          </Link>
          <button className="text-gray-400 hover:text-[#C5A059]"><HeartIcon className="w-6 h-6"/></button>
        </div>
        <p className="text-[#C5A059] font-semibold">{property.rent}</p>
        <p className="text-gray-600 text-sm">{property.area}</p>
        <p className="text-sm text-gray-500 flex gap-2 items-center">
          <span>Rooms {property.beds}</span>
          <span>•</span>
          <span>Bathrooms {property.baths}</span>
          <span>•</span>
          <span>{property.type}</span>
        </p>

        {/* Lead Actions */}
        <div className="flex gap-2 mt-2">
          <button onClick={() => setContactModalOpen(true)} className="flex-1 bg-[#1A2B3C] text-white py-1 rounded-lg hover:bg-[#14202d] text-sm transition">Contact Agent</button>
          <button onClick={() => setVisitModalOpen(true)} className="flex-1 border border-[#1A2B3C] text-[#1A2B3C] py-1 rounded-lg hover:bg-gray-100 text-sm transition">Schedule Visit</button>
        </div>
      </div>

      {/* Modals */}
      {contactModalOpen && <Modal title="Contact Agent" onClose={() => setContactModalOpen(false)}>
        <form onSubmit={handleContactSubmit} className="space-y-2">
          <input type="text" name="name" placeholder="Name" value={leadData.name} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="text" name="phone" placeholder="Phone" value={leadData.phone} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="email" name="email" placeholder="Email" value={leadData.email} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="text" name="rent" placeholder="Rent" value={leadData.rent} onChange={handleChange} className="w-full border px-2 py-1 rounded"/>
          <input type="text" name="propertyInterest" placeholder="Property Interest" value={leadData.propertyInterest} readOnly className="w-full border px-2 py-1 rounded bg-gray-100"/>
          <button type="submit" className="w-full bg-[#1A2B3C] text-white py-1 rounded hover:bg-[#14202d]">Submit</button>
        </form>
      </Modal>}

      {visitModalOpen && <Modal title="Schedule Visit" onClose={() => setVisitModalOpen(false)}>
        <form onSubmit={handleVisitSubmit} className="space-y-2">
          <input type="text" name="name" placeholder="Name" value={leadData.name} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="text" name="phone" placeholder="Phone" value={leadData.phone} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="email" name="email" placeholder="Email" value={leadData.email} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <input type="date" name="visitDate" value={leadData.visitDate} onChange={handleChange} required className="w-full border px-2 py-1 rounded"/>
          <textarea name="message" placeholder="Optional Message" value={leadData.message} onChange={handleChange} className="w-full border px-2 py-1 rounded"/>
          <button type="submit" className="w-full bg-[#1A2B3C] text-white py-1 rounded hover:bg-[#14202d]">Schedule Visit</button>
        </form>
      </Modal>}

    </div>
  );
}

// === MODAL COMPONENT ===
function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold text-[#1A2B3C] mb-4">{title}</h2>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-[#C5A059]">
          <XMarkIcon className="w-6 h-6"/>
        </button>
        {children}
      </div>
    </div>
  );
}