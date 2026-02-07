"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaRocket, FaCheckCircle } from "react-icons/fa";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  brochure?: boolean;
}

const ModalForm: React.FC<ModalFormProps> = ({
  isOpen,
  onClose,
  brochure = false,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.city) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", city: "" });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
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
      scale: 0.9,
      y: 20,
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9998"
            onClick={onClose}
          />

          {/* Modal Container - Mobile Optimized */}
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-100 sm:max-w-md my-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Card */}
              <div
                className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                {/* Close Button - Mobile Optimized */}
                <button
                  onClick={onClose}
                  className="absolute cursor-pointer top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center transition-all duration-200 group shadow-sm"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Top Badge - Amber Color */}
                <div
                  className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-[10px] sm:text-xs text-white z-10 shadow-lg whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #F97316 100%)",
                  }}
                >
                  🔥 Only 47 Seats Left!
                </div>

                {/* Content - Mobile Optimized Padding */}
                <div className="p-5 sm:p-8 pt-14 sm:pt-16">
                  {!isSubmitted ? (
                    <>
                      {/* Header */}
                      <div className="text-center mb-5 sm:mb-6">
                        <h3
                          className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2"
                          style={{
                            background:
                              "linear-gradient(135deg, #0b3a81 0%, #0d4aa3 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          Register for Free
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-2 font-nunito">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Secure your spot in 30 seconds
                        </p>
                      </div>

                      {/* Form - Mobile Optimized Spacing */}
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-3 sm:space-y-4"
                      >
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
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                            style={{
                              borderColor:
                                focusedField === "name" ? "#FBBF24" : "#E5E7EB",
                              backgroundColor:
                                focusedField === "name" ? "#fff" : "#F9FAFB",
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
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                            style={{
                              borderColor:
                                focusedField === "email"
                                  ? "#FBBF24"
                                  : "#E5E7EB",
                              backgroundColor:
                                focusedField === "email" ? "#fff" : "#F9FAFB",
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
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                            style={{
                              borderColor:
                                focusedField === "phone"
                                  ? "#FBBF24"
                                  : "#E5E7EB",
                              backgroundColor:
                                focusedField === "phone" ? "#fff" : "#F9FAFB",
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
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 text-gray-800 text-sm font-nunito transition-all duration-300 outline-none"
                            style={{
                              borderColor:
                                focusedField === "city" ? "#FBBF24" : "#E5E7EB",
                              backgroundColor:
                                focusedField === "city" ? "#fff" : "#F9FAFB",
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
                          className="group relative w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mt-2 font-poppins shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
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
                            {brochure
                              ? "Download Free Brochure"
                              : "Reserve My Free Seat Now"}
                          </span>
                        </button>

                        {/* Security Text */}
                        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3 font-nunito">
                          🔒 100% secure. No spam, ever.
                        </p>
                      </form>
                    </>
                  ) : (
                    // Success State - Mobile Optimized
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
                        {brochure
                          ? "Brochure on the Way!"
                          : "You're Registered!"}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 font-nunito px-4">
                        {brochure
                          ? "Check your email in 2 minutes."
                          : "Webinar details sent to your email!"}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;
