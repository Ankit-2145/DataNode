"use client";

import ComingSoon from "@/components/ui/ComingSoon";
import React from "react";

export default function TechTrendsIndustryInsights() {
  return (
    <main className="overflow-hidden">
      <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 pb-2 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Tech Trends & Industry Insights
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
            Discover the Latest Advancements and Future Directions
          </p>
        </div>
        <ComingSoon />
      </div>
    </main>
  );
}
