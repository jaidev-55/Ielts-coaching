"use client";
import React, { useState } from "react";
import { FormData } from "../types";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

interface RegistrationFormProps {
  brochure: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ brochure }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.city) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const successVariants: any = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        variants={successVariants}
        initial="hidden"
        animate="visible"
        className="text-center py-6 sm:py-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-3 sm:mb-4">
          <FaCheckCircle className="text-3xl sm:text-4xl text-green-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-poppins">
          {brochure ? "Brochure on the Way!" : "You're Registered!"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-nunito px-4">
          {brochure
            ? "Check your email in 2 minutes."
            : "Webinar details sent to your email!"}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
            style={{
              borderColor: focusedField === "name" ? "#FBBF24" : "#E5E7EB",
              backgroundColor: focusedField === "name" ? "#fff" : "#F9FAFB",
              boxShadow:
                focusedField === "name"
                  ? "0 0 0 3px rgba(251,191,36,0.1)"
                  : "none",
            }}
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
            style={{
              borderColor: focusedField === "email" ? "#FBBF24" : "#E5E7EB",
              backgroundColor: focusedField === "email" ? "#fff" : "#F9FAFB",
              boxShadow:
                focusedField === "email"
                  ? "0 0 0 3px rgba(251,191,36,0.1)"
                  : "none",
            }}
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
            style={{
              borderColor: focusedField === "phone" ? "#FBBF24" : "#E5E7EB",
              backgroundColor: focusedField === "phone" ? "#fff" : "#F9FAFB",
              boxShadow:
                focusedField === "phone"
                  ? "0 0 0 3px rgba(251,191,36,0.1)"
                  : "none",
            }}
          />
        </div>

        {/* City Input */}
        <div className="relative">
          <input
            type="text"
            name="city"
            placeholder="Enter Your City *"
            value={formData.city}
            onChange={handleChange}
            onFocus={() => setFocusedField("city")}
            onBlur={() => setFocusedField(null)}
            required
            className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
            style={{
              borderColor: focusedField === "city" ? "#FBBF24" : "#E5E7EB",
              backgroundColor: focusedField === "city" ? "#fff" : "#F9FAFB",
              boxShadow:
                focusedField === "city"
                  ? "0 0 0 3px rgba(251,191,36,0.1)"
                  : "none",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group relative w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-amber-400 border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mt-2 font-poppins shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
        >
          {/* Primary shimmer effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
          </span>

          {/* Secondary sparkle */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100 ease-out">
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12" />
          </span>

          {/* Pulsing glow */}
          <span className="absolute inset-0 bg-linear-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

          {/* Content */}
          <FaRocket className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-[-10deg] group-hover:scale-110 drop-shadow-sm" />
          <span className="relative z-10 drop-shadow-sm">
            {brochure ? "Download Free Brochure" : "Reserve My Free Seat Now"}
          </span>
        </button>

        {/* Security Text */}
        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3 font-nunito">
          🔒 100% secure. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
