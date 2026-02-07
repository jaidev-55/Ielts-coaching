"use client";

import { COUNTRIES } from "@/constants";

const CountriesSection = () => {
  return (
    <section className="relative py-12 px-6 bg-linear-to-br from-[#1A1A2E] to-[#16213E] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-yellow-400/10 text-yellow-400">
            Study Destinations
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-white">
            8 Countries. Endless Possibilities.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="text-center rounded-2xl border border-white/10 bg-white/5 px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white/10"
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <div className="font-poppins font-bold text-white">
                {country.name}
              </div>
              <div className="text-sm text-yellow-400 font-semibold mt-1">
                {country.unis} Universities
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
