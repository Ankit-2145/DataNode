"use client";

import React from "react";
import CareerGuidance from "@/components/carrers-ui/CarrerGuidance";

export default function about() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
          Careers
        </h1>
        <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
          From Student to Professional: We&apos;re With You All the Way
        </p>
      </div>
      <div className="w-full mx-auto p-6 text-white rounded-lg shadow-lg">
        <CareerGuidance />
      </div>
    </main>
  );
}
