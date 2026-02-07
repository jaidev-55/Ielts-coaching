"use client";
import React from "react";
import { useCountdown } from "../hooks";

interface TimeBlockProps {
  value: number;
  label: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => (
  <div className="text-center">
    <div className="bg-white/10 backdrop-blur-md rounded-xl px-4.5 py-3.5 min-w-16.5 text-[30px] font-bold text-white font-poppins border border-white/15">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-[11px] text-white/55 mt-2 uppercase tracking-widest font-bold font-nunito">
      {label}
    </div>
  </div>
);

const CountdownTimer: React.FC = () => {
  const time = useCountdown();

  return (
    <div className="flex gap-3.5  flex-wrap">
      <TimeBlock value={time.d} label="Days" />
      <TimeBlock value={time.h} label="Hours" />
      <TimeBlock value={time.m} label="Mins" />
      <TimeBlock value={time.s} label="Secs" />
    </div>
  );
};

export default CountdownTimer;
