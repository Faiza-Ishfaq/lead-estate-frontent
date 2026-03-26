"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email) {
      setError("Email is required");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Show modal as success feedback
    setShowModal(true);
    setEmail("");
  };

  return (
    <div className="flex w-full min-h-screen font-inter">

      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Forgot Your Password?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-300 max-w-md text-lg mb-6"
          >
            Enter your registered email to receive a password reset link and regain access to your LeadEstate account.
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
          className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 relative"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="text-[#1A2B3C] font-serif text-2xl font-bold">
              Lead<span className="text-[#C5A059]">Estate</span>
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-2 font-playfair">
            Reset Password
          </h2>
          <p className="text-[#333333] text-sm mb-6">
            Enter your email and we'll send a link to reset your password.
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border border-[#E0E0E0] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] placeholder:text-gray-400"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-[#1A2B3C] text-white py-3 rounded-lg hover:bg-[#16222f] transition font-medium"
            >
              Send Reset Link
            </motion.button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Remember your password?{" "}
              <Link href="/signin" className="text-[#C5A059] font-medium hover:underline">
                Sign In
              </Link>
            </p>
          </form>

          {/* Animated Success Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-[#1A2B3C] mb-4 font-playfair">
                    Email Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Check your inbox. Follow the link to securely reset your LeadEstate password.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-[#C5A059] text-[#1A2B3C] px-6 py-2 rounded-full font-medium hover:bg-[#e0b75a] transition"
                  >
                    OK
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}