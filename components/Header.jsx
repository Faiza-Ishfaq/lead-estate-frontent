"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, UserCircleIcon  } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    buy: false,
    rent: false,
    sell: false,
    agents: false,
    mortgage: false,
  });

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const { user, setUser } = useAuth();

  const logout = async () => {
    await fetch("http://localhost:4000/api/logout", {
      method: "POST",
      credentials: "include"
    });

     setUser(null);
  };

  return (
    <header className="bg-[#F8F9FA] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="text-[#1A2B3C] font-serif text-2xl font-bold">
            LeadEstate
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">

            <Link href="/" className=" px-2 py-1 rounded transition  hover:text-[#C5A059]">Home</Link>

            {/* BUY */}
            <div className="relative group">
              <Link href="/buy" className="flex items-center gap-1 px-2 py-1 rounded transition hover:text-[#C5A059]">
                Buy <ChevronDownIcon className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-[420px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Property Type</h4>
                    <Link href="/buy/houses" className="block py-1 hover:text-[#C5A059]">Houses for Sale</Link>
                    <Link href="/buy/apartments" className="block py-1 hover:text-[#C5A059]">Apartments for Sale</Link>
                    <Link href="/buy/villas" className="block py-1 hover:text-[#C5A059]">Villas for Sale</Link>
                    <Link href="/buy/commercial" className="block py-1 hover:text-[#C5A059]">Commercial for Sale</Link>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Popular Locations</h4>
                    <Link href="/buy/lahore-dha" className="block py-1 hover:text-[#C5A059]">Lahore DHA</Link>
                    <Link href="/buy/gulberg" className="block py-1 hover:text-[#C5A059]">Gulberg</Link>
                    <Link href="/buy/islamabad-f6" className="block py-1 hover:text-[#C5A059]">Islamabad F-6</Link>
                    <Link href="/buy/karachi-clifton" className="block py-1 hover:text-[#C5A059]">Clifton</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* RENT */}
            <div className="relative group">
              <Link href="/rent" className="flex items-center gap-1 px-2 py-1 rounded transition hover:text-[#C5A059]">
                Rent <ChevronDownIcon className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-[420px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Property Type</h4>
                    <Link href="/rent/apartments" className="block py-1 hover:text-[#C5A059]">Apartments</Link>
                    <Link href="/rent/houses" className="block py-1 hover:text-[#C5A059]">Houses</Link>
                    <Link href="/rent/offices" className="block py-1 hover:text-[#C5A059]">Offices</Link>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Popular Locations</h4>
                    <Link href="/rent/lahore-dha" className="block py-1 hover:text-[#C5A059]">Lahore DHA</Link>
                    <Link href="/rent/gulberg" className="block py-1 hover:text-[#C5A059]">Gulberg</Link>
                    <Link href="/rent/islamabad-f6" className="block py-1 hover:text-[#C5A059]">Islamabad F-6</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SELL */}
            <div className="relative group">
              <Link href="/sell" className="flex items-center gap-1 px-2 py-1 rounded transition hover:text-[#C5A059]">
                Sell <ChevronDownIcon className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-[420px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Selling Options</h4>
                    <Link href="/post-property" className="block py-1 hover:text-[#C5A059]">Post Property</Link>
                    <Link href="/sell/home-value" className="block py-1 hover:text-[#C5A059]">Home Value</Link>
                    <Link href="/sell/seller-guide" className="block py-1 hover:text-[#C5A059]">Seller Guide</Link>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Tools</h4>
                    <Link href="/sell/market-trends" className="block py-1 hover:text-[#C5A059]">Market Trends</Link>
                    <Link href="/sell/pricing-tools" className="block py-1 hover:text-[#C5A059]">Pricing Tools</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* AGENTS */}
            <div className="relative group">
              <Link href="/agents" className="flex items-center gap-1 px-2 py-1 rounded transition hover:text-[#C5A059]">
                Agents <ChevronDownIcon className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-[420px] bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-6 z-50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Find Agents</h4>
                    <Link href="/agents/find" className="block py-1 hover:text-[#C5A059]">Search Agents</Link>
                    <Link href="/agents/top-agents" className="block py-1 hover:text-[#C5A059]">Top Rated Agents</Link>
                    <Link href="/agents/agencies" className="block py-1 hover:text-[#C5A059]">Agencies</Link>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">For Professionals</h4>
                    <Link href="/agents/join" className="block py-1 hover:text-[#C5A059]">Become an Agent</Link>
                    <Link href="/agents/packages" className="block py-1 hover:text-[#C5A059]">Agency Packages</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* MORTGAGE */}
            <div className="relative group">
              <Link href="/mortgage" className="flex items-center gap-1 px-2 py-1 rounded transition hover:text-[#C5A059]">
                Mortgage <ChevronDownIcon className="w-4 h-4" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-70 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-4 z-50">
                <div className="flex flex-col gap-2">
                  <Link href="/mortgage/calculator" className="block py-2 px-3 rounded hover:text-[#C5A059]">Mortgage Calculator</Link>
                  <Link href="/mortgage/guide" className="block py-2 px-3 rounded hover:text-[#C5A059]">Mortgage Guide</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-4">
            { !user ? (
              <>
                <Link href="/signin" className="hover:text-[#C5A059] mt-3">Sign In</Link>
                <Link href="/signup" className="px-4 py-2 border border-[#1A2B3C] rounded hover:bg-[#C5A059]">Sign Up</Link>
                {/* <Link href="/post-property" className="bg-[#C5A059] text-white px-5 py-2 rounded">Post Property</Link> */}
              </>
            ) : (
              <div className="relative group">

                {/* Profile Icon + Name */}
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-9 h-9 bg-[#1A2B3C] text-white flex items-center justify-center rounded-full">
                    {user.fullName?.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{user.fullName}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition p-2 z-50">

                  <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    My Profile
                  </Link>

                  <Link href="/dashboard" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Dashboard
                  </Link>

                  <Link href="/my-properties" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    My Properties
                  </Link>

                  <button
                    onClick={logout}
                    className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded">
                    Logout
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-200">
            <ul className="flex flex-col gap-1 p-4">

              {/* Home */}
              <li>
                <Link href="/" className="block py-2 px-2 rounded hover:text-[#C5A059]">Home</Link>
              </li>

              {/* Buy */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("buy")}
                  className="w-full flex justify-between items-center py-2 px-2 rounded hover:bg-[#C5A059] hover:text-white transition"
                >
                 <Link href="">Buy</Link>  <ChevronDownIcon className={`w-4 h-4 transition ${mobileDropdowns.buy ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdowns.buy && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    <Link href="/buy/houses" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Houses</Link>
                    <Link href="/buy/apartments" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Apartments</Link>
                    <Link href="/buy/villas" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Villas</Link>
                  </ul>
                )}
              </li>

              {/* Rent */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("rent")}
                  className="w-full flex justify-between items-center py-2 px-2 rounded hover:text-[#C5A059] transition"
                >
                  Rent <ChevronDownIcon className={`w-4 h-4 transition ${mobileDropdowns.rent ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdowns.rent && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    <Link href="/rent/apartments" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Apartments</Link>
                    <Link href="/rent/houses" className="block py-1 px-2 rounded hover:text-[#C5A059]">Houses</Link>
                  </ul>
                )}
              </li>

              {/* Sell */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("sell")}
                  className="w-full flex justify-between items-center py-2 px-2 rounded hover:text-[#C5A059] transition"
                >
                  Sell <ChevronDownIcon className={`w-4 h-4 transition ${mobileDropdowns.sell ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdowns.sell && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    <Link href="/post-property" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Post Property</Link>
                    <Link href="/sell/home-value" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Home Value</Link>
                  </ul>
                )}
              </li>

              {/* Agents */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("agents")}
                  className="w-full flex justify-between items-center py-2 px-2 rounded hover:text-[#C5A059] transition"
                >
                  Agents <ChevronDownIcon className={`w-4 h-4 transition ${mobileDropdowns.agents ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdowns.agents && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    <Link href="/agents/find" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Find Agents</Link>
                    <Link href="/agents/join" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Become an Agent</Link>
                  </ul>
                )}
              </li>

              {/* Mortgage */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("mortgage")}
                  className="w-full flex justify-between items-center py-2 px-2 rounded hover:text-[#C5A059] transition"
                >
                  Mortgage <ChevronDownIcon className={`w-4 h-4 transition ${mobileDropdowns.mortgage ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdowns.mortgage && (
                  <ul className="pl-4 mt-1 flex flex-col gap-1">
                    <Link href="/mortgage/calculator" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Calculator</Link>
                    <Link href="/mortgage/guide" className="block py-1 px-2 rounded hover:bg-[#C5A059] hover:text-white">Guide</Link>
                  </ul>
                )}
              </li>

              {/* Sign In / Sign Up / Post */}
              { !user ? (
                <>
                  <li>
                    <Link href="/signin" className="block py-2 px-2 rounded hover:bg-[#C5A059] hover:text-white">Sign In</Link>
                    <Link href="/signup" className="block py-2 px-2 rounded hover:bg-[#C5A059] hover:text-white">Sign Up</Link>
                    {/* <Link href="/post-property" className="block py-2 px-2 rounded hover:bg-[#C5A059] hover:text-white">Post Property</Link> */}
                  </li>
                </>
              ) : (
                 <>
                  <div className="px-2 py-2 font-semibold">{user.fullName}</div>

                  <Link href="/profile" className="block py-2 px-2">Profile</Link>
                  <Link href="/dashboard" className="block py-2 px-2">Dashboard</Link>

                  <button onClick={logout} className="block py-2 px-2 text-red-500">
                    Logout
                  </button>
                </>
              )}

            </ul>
          </div>

        )}
      </div>
    </header>
  );
}