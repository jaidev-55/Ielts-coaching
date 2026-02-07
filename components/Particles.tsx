import React from "react";

const Particles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: 3 + Math.random() * 5,
            height: 3 + Math.random() * 5,
            background: `rgba(255,255,255,${0.06 + Math.random() * 0.12})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
