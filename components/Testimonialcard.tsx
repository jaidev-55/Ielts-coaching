import React from "react";
import { Testimonial } from "../types";
import { HiCheckBadge, HiOutlineLightBulb } from "react-icons/hi2";

interface TestimonialCardProps {
  testimonial: Testimonial;
  visible: boolean;
  delay: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  visible,
  delay,
}) => {
  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden border-2 border-slate-100 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-amber-500/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay }}
    >
      {/* Top colored stripe */}
      <div className="h-1.5" style={{ background: testimonial.avatarBg }} />

      <div className="p-6">
        {/* Header with avatar and name */}
        <div className="flex items-start gap-3.5 mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg font-poppins shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
            style={{ background: testimonial.avatarBg }}
          >
            {testimonial.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-[#1a1a2e] text-base font-poppins truncate">
                {testimonial.name}
              </h4>
              <HiCheckBadge className="w-5 h-5 text-blue-500 shrink-0" />
            </div>
            <p className="text-sm text-[#888] font-nunito">
              {testimonial.course}
            </p>
            <p className="text-xs text-[#aaa] font-nunito mt-0.5">
              {testimonial.year}
            </p>
          </div>
        </div>

        {/* 5-star rating */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-[#555] text-sm leading-relaxed font-nunito mb-4">
          "{testimonial.text}"
        </p>

        {/* Achievement highlight badge */}
        <div className="bg-linear-to-r from-amber-50 to-amber-100/60 rounded-xl px-4 py-3 border border-amber-200/40 transition-all duration-300 group-hover:shadow-md">
          <div className="text-[10px] text-[#888] font-bold uppercase tracking-wider font-nunito mb-1">
            Achievement
          </div>
          <div className="text-sm text-amber-600 font-semibold font-nunito flex items-center gap-2">
            <HiOutlineLightBulb className="w-4 h-4 text-amber-500" />
            <span>{testimonial.highlight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
