"use client";

import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background stars */}
      <div className="absolute inset-0 bg-stars-pattern opacity-20 animate-stars pointer-events-none"></div>
      
      {/* Blurry blue circle */}
      <div className="absolute w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      {/* Astronaut image */}
      <div className="relative z-10">
        <Image
          src="/images/astronaut.svg"
          alt="Lost Astronaut"
          width={350}
          height={350}
          className="animate-float"
          priority
        />
      </div>

      {/* 404 Text */}
      <h1 className="text-7xl font-bold mt-6 tracking-wide drop-shadow-lg z-10">
        404
      </h1>
      <p className="text-gray-400 mt-2 text-lg z-10">
        Lost in space? This page doesn’t exist.
      </p>

      {/* Audio Button */}
      <button
        onClick={() => new Audio("/images/fool.mp3").play()}
        className="text-gray-400 mt-4 text-lg border px-4 py-2 rounded hover:bg-gray-800 transition z-10"
      >
        This one's for you
      </button>
    </div>
  );
}
