"use client";
import React, { useState } from "react";
import { FormData } from "../types";
import { FaCheckCircle, FaRocket, FaTimes } from "react-icons/fa";
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

  if (isSubmitted) {
    return (
      <div className="text-center p-10 animate-fade-up">
        <div className="text-[56px] mb-4">🎉</div>
        <h3 className="text-[21px] font-bold text-dark mb-2 font-poppins">
          {brochure ? "Brochure on the Way!" : "You're Registered!"}
        </h3>
        <p className="text-gray-500 text-sm font-nunito">
          {brochure
            ? "Check your email in 2 minutes."
            : "Webinar details sent to your email!"}
        </p>
      </div>
    );
  }

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const modalVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
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

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative w-full max-w-md pointer-events-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Content */}
      <div className=" ">
        {!isSubmitted ? (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                  style={{
                    borderColor:
                      focusedField === "name" ? "#FF6B35" : "#E5E7EB",
                    backgroundColor:
                      focusedField === "name" ? "#fff" : "#F9FAFB",
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 0 4px rgba(255,107,53,0.1)"
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
                  className="w-full px-4 py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                  style={{
                    borderColor:
                      focusedField === "email" ? "#FF6B35" : "#E5E7EB",
                    backgroundColor:
                      focusedField === "email" ? "#fff" : "#F9FAFB",
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 4px rgba(255,107,53,0.1)"
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
                  className="w-full px-4 py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                  style={{
                    borderColor:
                      focusedField === "phone" ? "#FF6B35" : "#E5E7EB",
                    backgroundColor:
                      focusedField === "phone" ? "#fff" : "#F9FAFB",
                    boxShadow:
                      focusedField === "phone"
                        ? "0 0 0 4px rgba(255,107,53,0.1)"
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
                  className="w-full px-4 py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                  style={{
                    borderColor:
                      focusedField === "city" ? "#FF6B35" : "#E5E7EB",
                    backgroundColor:
                      focusedField === "city" ? "#fff" : "#F9FAFB",
                    boxShadow:
                      focusedField === "city"
                        ? "0 0 0 4px rgba(255,107,53,0.1)"
                        : "none",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full px-6 py-4 rounded-xl sm:rounded-[14px] font-bold text-sm sm:text-base text-white  bg-linear-to-r from-orange-400 via-orange-500 to-orange-400 bg-left hover:bg-right border-none cursor-pointer transition-all duration-500 flex items-center justify-center gap-2 mt-1 font-poppins shadow-[0_6px_24px_rgba(255,107,53,0.35)] hover:shadow-[0_10px_32px_rgba(255,107,53,0.45)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
              >
                {/* Primary shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]" />
                </span>

                {/* Secondary sparkle */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100 ease-out">
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]" />
                </span>

                {/* Pulsing glow */}
                <span className="absolute inset-0 bg-linear-to-r from-orange-400/0 via-orange-300/30 to-orange-400/0 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

                {/* Content */}
                <FaRocket className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-[-10deg] group-hover:scale-110" />
                <span className="relative z-10">
                  {brochure
                    ? "Download Free Brochure"
                    : "Reserve My Free Seat Now"}
                </span>
              </button>

              {/* Security Text */}
              <p className="text-xs text-gray-400 text-center mt-3">
                🔒 100% secure. No spam, ever.
              </p>
            </form>
          </>
        ) : (
          // Success State
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
              {brochure ? "Brochure on the Way!" : "You're Registered!"}
            </h3>
            <p className="text-gray-600 font-nunito">
              {brochure
                ? "Check your email in 2 minutes."
                : "Webinar details sent to your email!"}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RegistrationForm;
