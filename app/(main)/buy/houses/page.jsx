"use client";

import PropertyGrid from "./components/PropertyGrid";
import SortBar from "./components/SortBar";
import Filter from "@/components/buy/Filter";

export default function HousesPage() {

  // TEMP DATA (later API se ayega)
  const properties = [
    {
      title: "Luxury House",
      price: "PKR 2.5 Crore",
      area: "DHA Phase 6, Lahore",
      beds: 4,
      baths: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Modern Villa",
      price: "PKR 3.2 Crore",
      area: "Bahria Town, Lahore",
      beds: 5,
      baths: 4,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      title: "Family House",
      price: "PKR 1.8 Crore",
      area: "Johar Town, Lahore",
      beds: 3,
      baths: 3,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      title: "Luxury Apartment",
      price: "PKR 1.2 Crore",
      area: "Gulberg, Lahore",
      beds: 3,
      baths: 2,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    },
    {
      title: "Modern Home",
      price: "PKR 2.1 Crore",
      area: "Model Town, Lahore",
      beds: 4,
      baths: 3,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
    },
    {
      title: "Elegant House",
      price: "PKR 3.5 Crore",
      area: "DHA Phase 8, Lahore",
      beds: 5,
      baths: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1A2B3C] font-playfair">
          Houses for Sale
        </h1>
        <p className="text-gray-600 mt-2">
          Explore the best houses available across top locations
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <Filter />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        {/* Sort */}
        <SortBar />

        {/* Grid */}
        <PropertyGrid properties={properties} />

      </div>
    </div>
  );
}