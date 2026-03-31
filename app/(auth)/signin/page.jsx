"use client";

import { loginUser } from "@/lib/api";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SigninPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const response = await loginUser(formData);

    if ( response.success) {
      alert("Login Successful!");

      window.location.href = "/";
    } else {
      alert(response.message || "Login failed");
    }
  };

  return (
    <div className="flex w-full min-h-screen font-inter">

      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Real Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2B3C]/75"></div>

        <div className="relative z-10 flex flex-col justify-center items-center px-16 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 font-playfair"
          >
            Luxury Living Awaits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-300 max-w-md text-lg mb-6"
          >
            Sign in to explore premium real estate listings and connect with top agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-md hover:bg-[#C5A059] hover:text-[#1A2B3C] transition font-medium"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8F9FA] px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="text-[#1A2B3C] font-serif text-2xl font-bold">
              Lead<span className="text-[#C5A059]">Estate</span>
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-2 font-playfair">
            Sign In
          </h2>
          <p className="text-[#333333] text-sm mb-6">
            Enter your credentials to access your LeadEstate account
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] placeholder:text-gray-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] placeholder:text-gray-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link href="/forgot">
                <span className="text-sm text-[#C5A059] cursor-pointer font-medium hover:underline">
                  Forgot Password?
                </span>
              </Link>
            </div>

            {/* Sign In button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-[#1A2B3C] text-white py-3 rounded-lg hover:bg-[#16222f] transition font-medium"
            >
              Sign In
            </motion.button>

            {/* Redirect to Signup */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link href="/signup">
                <span className="text-[#C5A059] cursor-pointer font-medium hover:underline">
                  Sign up
                </span>
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}