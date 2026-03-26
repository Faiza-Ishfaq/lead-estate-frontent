"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B3C] text-[#F8F9FA] font-inter">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-2xl font-playfair font-bold mb-4">LeadEstates</h2>
          <p className="text-[#E0E0E0] mb-6">
            Luxury homes, apartments, and villas — all in one place. Find your dream property effortlessly.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#C5A059] text-[#1A2B3C] rounded-full hover:bg-[#E0C97F] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#C5A059] text-[#1A2B3C] rounded-full hover:bg-[#E0C97F] transition">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#C5A059] text-[#1A2B3C] rounded-full hover:bg-[#E0C97F] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#C5A059] text-[#1A2B3C] rounded-full hover:bg-[#E0C97F] transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#E0E0E0]">
            <li><a href="#" className="hover:text-[#C5A059] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Properties</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Agents</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-playfair font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[#E0E0E0]">
            <li><a href="#" className="hover:text-[#C5A059] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#C5A059] transition">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-playfair font-semibold mb-4">Stay Updated</h3>
          <p className="text-[#E0E0E0] mb-4">Get property alerts, offers & insights directly in your inbox.</p>
          <form className="flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-3 w-full rounded-lg border border-[#C5A059] text-[#E0C97F] shadow-sm"
            />
            <button 
              type="submit" 
              className="bg-[#C5A059] w-full mt-3  hover:bg-[#E0C97F] text-[#1A2B3C] px-6 py-3 rounded-lg font-semibold transition shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#E0E0E0]/20 mt-12 py-6 text-center text-sm text-[#E0E0E0] justify-between items-center gap-2">
        <span>&copy; {new Date().getFullYear()} LeadEstates. All rights reserved.</span>
      </div>
    </footer>
  );
}