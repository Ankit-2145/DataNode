"use client";
import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function WhyChooseUs() {
  return (
    <section className="my-14">
      <h4 className="text-4xl lg:leading-tight max-w-5xl text-white mx-auto text-center tracking-tight font-semibold">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-custom-gradient">
          choose
        </span>{" "}
        us ?
      </h4>
      <p className="text-base max-w-2xl mx-auto font-medium text-center py-2 px-3 text-gray-700">
        Trusted by students for delivering top-notch educational support.
      </p>
      <div className="py-16 flex flex-col lg:flex-row items-center max-w-6xl justify-center bg-black w-full my-14 gap-4">
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            life.status = Growth
          </span>
        </NeonGradientCard>
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            life.status = Growth
          </span>
        </NeonGradientCard>
        <NeonGradientCard className="max-w-sm items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            life.status = Growth
          </span>
        </NeonGradientCard>
      </div>
    </section>
  );
}
