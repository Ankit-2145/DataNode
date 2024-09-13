"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function Resources() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
          Resources
        </h1>
        <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
          Unlock a Wealth of Knowledge: Dive into Expert-Curated Articles,
          Guides, and Tools
        </p>
      </div>
      <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
          Ask DataNode Anything
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </main>
  );
}
