"use client";

import { useEffect, useState } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 140 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.45 + 0.2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Very subtle night atmosphere */}
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-foreground animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Very subtle atmospheric glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-foreground/[0.015] blur-3xl" />
    </div>
  );
}