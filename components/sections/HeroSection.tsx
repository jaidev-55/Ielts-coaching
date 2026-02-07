"use client";

import { FaCalendarAlt, FaClock, FaGift } from "react-icons/fa";
import CountdownTimer from "../Countdowntimer";
import RegistrationForm from "../Registrationform";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen mt-10 flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a2f6b 0%, #0b3a81 25%, #0d4aa3 50%, #0f5ec7 75%, #1170e4 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 20s ease infinite",
      }}
    >
      <Particles />

      <div
        className="absolute w-96 h-96 rounded-full -top-32 -right-32 blur-[100px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(255,140,66,0.2) 40%, transparent 70%)",
        }}
      />

      {/* Bottom-left amber glow */}
      <div
        className="absolute w-80 h-80 rounded-full -bottom-24 -left-24 blur-[90px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(247,201,72,0.35) 0%, rgba(255,193,7,0.15) 40%, transparent 70%)",
        }}
      />

      {/* Center accent glow */}
      <div
        className="absolute w-150 h-150 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-300 mx-auto w-full flex gap-8 lg:gap-15 items-center relative z-10 flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="flex-1 w-full lg:max-w-145">
          {/* Enhanced Badge */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-6 animate-[fadeUp_0.8s_ease_0.2s_both] backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,140,66,0.12) 100%)",
              border: "1.5px solid rgba(255,107,53,0.3)",
              boxShadow:
                "0 4px 16px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/50"></span>
            </span>
            <span className="font-bold text-xs sm:text-[13px] tracking-wide text-amber-400">
              LIVE IELTS WRITING WEBINAR — LIMITED SEATS
            </span>
          </div>

          {/* Enhanced Title */}
          <h1 className="text-[32px] sm:text-[42px] lg:text-[54px] font-extrabold leading-[1.18] mb-5 animate-[fadeUp_0.8s_ease_0.4s_both]">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              Master IELTS Writing
              <br />
              Task 1 & Task 2{" "}
            </span>
            <span className="inline-block text-amber-400">With Confidence</span>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            className="text-base sm:text-[17px] leading-[1.75] mb-8 max-w-full lg:max-w-122.5 animate-[fadeUp_0.8s_ease_0.6s_both]"
            style={{
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            A focused{" "}
            <strong
              className="font-bold"
              style={{
                color: "#FFFFFF",
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              2-hour IELTS Writing masterclass
            </strong>{" "}
            covering both{" "}
            <strong className="font-bold text-amber-400">
              Task 1 & Task 2
            </strong>
            . Learn how to plan, structure, and write high-scoring answers that
            meet{" "}
            <strong className="font-bold text-white">
              examiner expectations
            </strong>{" "}
            and boost your{" "}
            <strong
              className="font-bold"
              style={{
                background: "linear-gradient(135deg, #4ADE80, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Writing Band Score
            </strong>
            .
          </p>

          {/* Countdown */}
          <div className="mb-8 animate-[fadeUp_0.8s_ease_1s_both]">
            <p
              className="text-[11px] uppercase tracking-[2px] mb-3.5 font-bold flex items-center gap-2"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              ⏰ IELTS WRITING WEBINAR STARTS IN
            </p>

            <CountdownTimer />
          </div>

          {/* Enhanced Info badges */}
          <div className="flex gap-3 flex-wrap mb-7">
            {[
              {
                icon: FaCalendarAlt,
                text: "Feb 11, 2026 — 7 PM IST",
                gradient: "from-amber-400/10 to-amber-500/5",
                border: "border-amber-400/20",
              },
              {
                icon: FaClock,
                text: "2-Hour IELTS Writing Session",
                gradient: "from-amber-400/10 to-amber-500/5",
                border: "border-amber-400/20",
              },
              {
                icon: FaGift,
                text: "Free Writing Samples & Band Descriptors",
                gradient: "from-amber-400/10 to-amber-500/5",
                border: "border-amber-400/20",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-xl px-4 py-2.5 text-xs sm:text-[13px] font-semibold flex items-center gap-2.5 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.border}`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                  color: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <item.icon className="w-4 h-4" style={{ color: "#FBBF24" }} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Social proof */}
          <div className="flex items-center gap-4 animate-[fadeUp_0.8s_ease_1.2s_both]">
            <div className="flex">
              {["😊", "🤩", "😄", "🥳"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg border-2 transition-transform hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
                    borderColor: "rgba(255,255,255,0.2)",
                    marginLeft: i > 0 ? -10 : 0,
                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span
              className="text-xs sm:text-[13px]"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <strong
                style={{
                  background: "linear-gradient(135deg, #4ADE80, #22C55E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
              >
                2,847
              </strong>{" "}
              <span className="text-white/80">already registered</span>
            </span>
          </div>
        </div>

        {/* Right side - Enhanced Form */}
        <div
          className="flex-1 w-full lg:max-w-110 animate-[fadeUp_0.8s_ease_0.8s_both]"
          id="register"
        >
          <div
            className="rounded-3xl p-5 relative backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
              boxShadow: `
            0 30px 80px rgba(11, 58, 129, 0.25),
            0 10px 30px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.8)
          `,
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            {/* Enhanced Badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 font-bold text-xs px-6 py-2 rounded-full whitespace-nowrap animate-pulse"
              style={{
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #FCD34D 100%)",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: `
      0 6px 20px rgba(251, 191, 36, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255,255,255,0.3)
    `,
              }}
            >
              🔥 Only 47 Seats Left!
            </div>

            <h3
              className="text-2xl sm:text-[26px] font-extrabold text-center mb-2 mt-3"
              style={{
                background: "linear-gradient(135deg, #0b3a81 0%, #0d4aa3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Register for Free
            </h3>

            <p
              className="text-sm text-center mb-6 flex items-center justify-center gap-2"
              style={{
                color: "#6B7280",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Secure your spot in 30 seconds
            </p>

            <RegistrationForm brochure={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
