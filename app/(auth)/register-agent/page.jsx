"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function AgentSignupPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    agency: "",
    experience: "",
    city: "",
    serviceArea: "",
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
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Invalid email";
      if (!/^\d{10,}$/.test(formData.phone))
        newErrors.phone = "Invalid phone number";
    }

    if (step === 2) {
      if (!formData.agency.trim()) newErrors.agency = "Agency is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.serviceArea.trim()) newErrors.serviceArea = "Service area required";
    }

    if (step === 3) {
      if (formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.terms)
        newErrors.terms = "You must accept terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);

    try {
      console.log("Agent Registered:", formData);
      // TODO: connect API here
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-inter">

      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 bg-[#1A2B3C] text-white items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-4xl font-playfair mb-4">Become an Agent</h1>
          <p className="text-gray-300">
            Join our platform and start receiving high quality property leads.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F8F9FA] px-4">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-xl text-center font-playfair mb-4">
            Agent Registration
          </h2>

          {/* Progress */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded ${
                  s <= step ? "bg-[#C5A059]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-3">
              <div>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="input"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="input"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-3">
              <div>
                <input
                  name="agency"
                  value={formData.agency}
                  onChange={handleChange}
                  placeholder="Agency Name"
                  className="input"
                />
                {errors.agency && <p className="text-red-500 text-sm">{errors.agency}</p>}
              </div>

              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience (years)"
                className="input"
              />

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
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>

              <div>
                <input
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  placeholder="Service Area (e.g DHA, Bahria)"
                  className="input"
                />
                {errors.serviceArea && <p className="text-red-500 text-sm">{errors.serviceArea}</p>}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2"
                >
                  {showPassword ? <EyeSlashIcon className="w-5" /> : <EyeIcon className="w-5" />}
                </button>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2"
                >
                  {showConfirmPassword ? <EyeSlashIcon className="w-5" /> : <EyeIcon className="w-5" />}
                </button>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              <label className="text-sm flex gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                Accept Terms
              </label>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
            </div>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button onClick={prevStep} className="btn-outline">
                Back
              </button>
            )}

            {step < 3 ? (
              <button onClick={nextStep} className="btn">
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn bg-[#1A2B3C] text-white"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
