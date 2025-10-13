"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-[75vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-stars-pattern opacity-20 animate-stars"></div>

      <div className="absolute w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-40"></div>

      <div className="relative">
        <Image
          src="/images/astronaut.svg"
          alt="Lost Astronaut"
          width={350}
          height={350}
          className="animate-float"
        />
      </div>

      <h1 className="text-7xl font-bold mt-6 tracking-wide drop-shadow-lg">
        404
      </h1>
      <p className="text-gray-400 mt-2 text-lg">
        Lost in space? This page doesn’t exist.
      </p>
    </div>
  );
}
