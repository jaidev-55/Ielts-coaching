"use client";
import { TOPICS } from "@/constants";
import { HiOutlineBell, HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AgendaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const headerVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-b from-white via-[#FAFAFA] to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#FF6B35]/3 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-275 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-amber-400/15 to-amber-500/10 text-amber-400 font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full mb-5 tracking-[1.4px] font-poppins uppercase shadow-sm border border-amber-400/20">
              <HiOutlineBell className="w-3.5 h-3.5" />
              Course Curriculum
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="font-poppins text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#1a1a2e] mb-4 leading-[1.2]"
          >
            Master IELTS Writing
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Task 1 & Task 2 for Higher Band Scores
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
            className="text-[#666] text-[15px] sm:text-[16px] max-w-150 mx-auto font-nunito leading-[1.75]"
          >
            A structured{" "}
            <span className="font-semibold text-[#1a1a2e]">
              IELTS Writing course
            </span>{" "}
            designed to help you clearly understand and confidently handle{" "}
            <span className="font-semibold text-amber-500">
              Task 1 and Task 2
            </span>{" "}
            using proven frameworks, real exam strategies, and examiner-aligned
            writing techniques. Learn how to plan answers effectively, structure
            responses logically, and avoid common mistakes — so you can improve
            your{" "}
            <span className="font-semibold text-[#1a1a2e]">
              IELTS Writing Band Score
            </span>
            .
          </motion.p>
        </div>

        {/* Topics Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TOPICS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#ECECF3] cursor-pointer shadow-sm hover:shadow-[0_18px_50px_rgba(245,158,11,0.18)] hover:border-amber-400/40 transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,158,11,0.04) 0%, transparent 100%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-amber-500 mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.07) 100%)",
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Icon className="text-2xl sm:text-[28px]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1a1a2e] mb-3 font-poppins leading-[1.4] group-hover:text-amber-500 transition-colors duration-300">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#6F6F7A] leading-[1.7] font-nunito">
                    {t.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{
                    background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 sm:mt-14"
        >
          <p className="text-sm text-[#777] font-nunito">
            <motion.span
              className="inline-block mr-1"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <HiOutlineLightBulb className="w-5  h-5 text-amber-400" />
            </motion.span>
            Each topic is explained with clear examples and guided support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
