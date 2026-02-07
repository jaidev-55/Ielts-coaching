import React from "react";
import { VideoTestimonial } from "../types";

interface VideoTestimonialCardProps {
  video: VideoTestimonial;
}

const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  video,
}) => {
  return (
    <div className="min-w-75 max-w-75 rounded-[20px] overflow-hidden bg-white border border-gray-100 shrink-0 snap-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:shadow-[0_20px_52px_rgba(0,0,0,0.1)] hover:-translate-y-1.5">
      {/* Thumbnail area */}
      <div
        className="relative w-full h-50 overflow-hidden"
        style={{ background: video.thumbBg }}
      >
        {/* Decorative wave pattern */}
        <svg
          className="absolute -bottom-px left-0 w-full"
          viewBox="0 0 300 30"
          preserveAspectRatio="none"
        >
          <path d="M0,20 Q75,0 150,20 T300,20 L300,30 L0,30 Z" fill="#fff" />
        </svg>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />

        {/* Play button */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-15 h-15 rounded-full bg-gradient-primary flex items-center justify-center shadow-[0_4px_24px_rgba(255,107,53,0.5)] animate-pulse-ring">
          <div className="w-0 h-0 border-t-10 border-t-transparent border-b-10 border-b-transparent border-l-16 border-l-white ml-1" />
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3.5 right-3.5 bg-black/70 backdrop-blur-sm rounded-md px-2.5 py-1 text-xs font-bold text-white font-poppins">
          {video.duration}
        </div>

        {/* Views badge */}
        <div className="absolute top-3.5 right-3.5 bg-white/15 backdrop-blur-lg rounded-md px-2.5 py-1 text-[11px] font-semibold text-white font-nunito">
          👁 {video.views} views
        </div>

        {/* Country flag */}
        <div className="absolute top-3.5 left-3.5 bg-white/15 backdrop-blur-lg rounded-lg px-2.5 py-1.5 text-lg leading-none">
          {video.flag}
        </div>

        {/* Avatar */}
        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg font-poppins border-[3px] border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
          style={{ background: video.bg }}
        >
          {video.avatar}
        </div>
      </div>

      {/* Content area */}
      <div className="px-5 py-4">
        <h4 className="font-poppins text-[15px] font-bold text-dark mb-1">
          {video.name}
        </h4>
        <p className="font-nunito text-xs text-gray-400 mb-2.5">
          {video.course} • {video.uni}
        </p>
        <p className="font-nunito text-[13px] text-gray-600 leading-relaxed italic mb-3.5">
          "{video.quote}"
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <span key={j} className="text-yellow-400 text-[13px]">
                ★
              </span>
            ))}
          </div>
          <span className="font-poppins text-[11px] font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
            Watch Story →
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialCard;
