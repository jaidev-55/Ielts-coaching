"use client";

import CountUp from "react-countup";
import { SUMMARY_STATS } from "@/constants";
import { useInView } from "../../hooks";

const StatsSection = () => {
  const [ref, visible] = useInView(0.2);

  const iconColors = [
    "text-[#FF6B35]",
    "text-[#4ADE80]",
    "text-[#3B82F6]",
    "text-[#10B981]",
  ];

  return (
    <section
      ref={ref}
      className="bg-white border-b border-gray-100 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 py-8 sm:py-11">
        {SUMMARY_STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Icon with individual color */}
            <div
              className={`text-2xl sm:text-3xl lg:text-[30px] mb-1.5 flex justify-center ${iconColors[idx]}`}
            >
              <stat.icon />
            </div>

            {/* Counter */}
            <div className="font-poppins text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-dark">
              {visible && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  separator=","
                />
              )}
            </div>

            {/* Label */}
            <div className="text-xs sm:text-sm text-gray-400 font-semibold font-nunito mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
