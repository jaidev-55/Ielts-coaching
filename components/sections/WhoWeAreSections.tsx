"use client";

import { FaCheckCircle } from "react-icons/fa";
import { useInView } from "@/hooks";

const WhoWeAreSections = () => {
  const [aboutRef, aboutVis] = useInView(0.2);

  const features = [
    "Personalized Mentorship",
    "Limited Batch Size",
    "End-to-End Support",
    "Post-Arrival Care",
  ];

  return (
    <>
      <section
        ref={aboutRef}
        className="px-4 sm:px-6 lg:px-8 pt-10 bg-linear-to-b from-[#FAFAFA] to-white"
      >
        <div className="max-w-225 mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-linear-to-r from-amber-400/10 to-amber-500/10 text-amber-600 font-bold text-xs px-5 py-2 rounded-full tracking-[1.5px] font-poppins uppercase border border-amber-400/20">
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-poppins text-center text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#1a1a2e] mb-6 leading-[1.2] transition-all duration-700 ${
              aboutVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            India's Trusted Study Abroad
            <br />
            Consultants Since{" "}
            <span className="bg-linear-to-r from-[#FF6B35] to-[#F7C948] bg-clip-text text-transparent">
              2009
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-[#666] text-sm sm:text-[15px] lg:text-base leading-[1.8] max-w-175 mx-auto text-center mb-10 font-nunito transition-all duration-700 delay-200 ${
              aboutVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Based in Anna Nagar, Chennai, Abroad Scholars delivers end-to-end
            support — from course selection to visa approval and post-arrival
            care. We only enroll limited students per batch so each one receives
            our undivided attention.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-xl px-5 py-4 border border-[#F0F0F5] hover:border-[#FF6B35]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  aboutVis
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                {/* Gradient line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#FF6B35] to-[#F7C948] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-3">
                  {/* Check Icon */}
                  <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-[#10B981]/10 to-[#10B981]/20 flex items-center justify-center">
                    <FaCheckCircle className="text-[#10B981] text-lg" />
                  </div>

                  {/* Text */}
                  <span className="font-bold text-sm sm:text-[15px] text-[#1a1a2e] font-poppins group-hover:text-[#FF6B35] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreSections;
