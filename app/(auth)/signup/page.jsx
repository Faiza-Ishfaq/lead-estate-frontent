"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignupPage() {

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        localStorage.setItem("token", data.token);
        alert("Account created successfully!");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (error) {
        console.error(error);
        alert("Server error, try again later");
    }
  };


  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    agency: "",
    city: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid Email";
      if (!formData.phone.match(/^\d{10,}$/)) newErrors.phone = "Invalid Phone Number";
    }

    if (step === 2) {
      if (!formData.role) newErrors.role = "Select a Role";
      if (formData.role === "agent" && !formData.agency) newErrors.agency = "Agency Name required";
      if (!formData.city.trim()) newErrors.city = "City is required";
    }

    if (step === 3) {
      const password = formData.password;
      if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
      if (!/[A-Z]/.test(password)) newErrors.password = "Include at least one uppercase letter";
      if (!/\d/.test(password)) newErrors.password = "Include at least one number";
      if (!/[!@#$%^&*]/.test(password)) newErrors.password = "Include at least one special character";
      if (password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
      if (!formData.terms) newErrors.terms = "You must agree to Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex w-full min-h-screen font-inter">

      {/* LEFT HERO IMAGE */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1691782905586-8d5813257035?q=80&w=401&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Find Your Dream Property
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-300 max-w-md text-lg mb-6"
          >
            Join the most trusted real estate platform. Discover homes, connect with agents, and unlock exclusive deals.
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
              Back to LeadEstate
            </Link>
          </motion.div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8F9FA] px-6 py-12">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10"
        >

          {/* Heading */}
          <h2 className="text-xl font-semibold text-[#1A2B3C] mb-4 text-center font-playfair">
            Create Your Account
          </h2>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-10 h-2 rounded-full ${s <= step ? "bg-gradient-to-r from-[#C5A059] to-[#E0E0E0]" : "bg-gray-300"}`}
              />
            ))}
          </div>

          {/* Step Forms */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input"
                  placeholder="Full Name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select Role</option>
                  <option value="buyer">Buyer / Renter</option>
                  <option value="owner">Property Owner</option>
                  <option value="agent">Agent / Broker</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
              </div>
              {formData.role === "Agent / Broker" && (
                <div>
                  <input
                    name="agency"
                    value={formData.agency}
                    onChange={handleChange}
                    className="input"
                    placeholder="Agency Name (if Agent)"
                  />
                  {errors.agency && <p className="text-red-500 text-sm mt-1">{errors.agency}</p>}
                </div>
              )}
              <div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Select City</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              {/* Password */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="input pr-10"
                  placeholder="Password"
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

              {/* Confirm Password */}
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input pr-10"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
                
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                I agree to <Link href="/terms" className="text-[#C5A059] hover:underline">Terms & Conditions</Link>
              </label>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button onClick={prevStep} className="btn-outline">Back</button>
            ) : <div></div>}
            {step < 3 ? (
              <button onClick={nextStep} className="btn">Next</button>
            ) : (
              <button onClick={handleSubmit} className="btn bg-[#1A2B3C] text-white hover:bg-[#16222f]">Create Account</button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}