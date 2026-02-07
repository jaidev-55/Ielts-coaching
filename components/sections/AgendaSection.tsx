"use client";
import { TOPICS } from "@/constants";
import { HiOutlineBell } from "react-icons/hi";
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
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-[#FF6B35]/10 to-[#FF6B35]/5 text-[#FF6B35] font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full mb-5 tracking-[1.4px] font-poppins uppercase shadow-sm border border-[#FF6B35]/10">
              <HiOutlineBell className="w-3.5 h-3.5" />
              Webinar Agenda
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
                background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Task 1 & Task 2 with Confidence
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
            className="text-[#666] text-[15px] sm:text-[16px] max-w-150 mx-auto font-nunito leading-[1.75]"
          >
            A focused{" "}
            <span className="font-semibold text-[#1a1a2e]">
              2-hour IELTS Writing masterclass
            </span>{" "}
            covering both{" "}
            <span className="font-semibold text-[#FF6B35]">
              Task 1 and Task 2
            </span>
            . Learn how to plan, structure, and write high-scoring answers that
            meet examiner expectations and boost your{" "}
            <span className="font-semibold text-[#1a1a2e]">
              Writing Band Score
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
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E8F0] cursor-pointer shadow-sm hover:shadow-[0_20px_60px_rgba(255,107,53,0.12)] hover:border-[#FF6B35]/30 transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,107,53,0.02) 0%, transparent 100%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-[#FF6B35] mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.05) 100%)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Icon className="text-2xl sm:text-[28px]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1a1a2e] mb-3 font-poppins leading-[1.4] group-hover:text-[#FF6B35] transition-colors duration-300">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#777] leading-[1.7] font-nunito">
                    {t.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{
                    background: "linear-gradient(90deg, #FF6B35, #FF8C42)",
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
          <p className="text-sm text-[#999] font-nunito">
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
              💡
            </motion.span>
            Each topic includes live Q&A and downloadable resources
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
