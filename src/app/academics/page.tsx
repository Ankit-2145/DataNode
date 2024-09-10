"use client";

import React from "react";
import CardSection from "@/components/academics-ui/CardSection";
import CardsHeading from "@/components/academics-ui/CardsHeading";

export default function about() {
  return (
    <>
      <main className="overflow-hidden">
        {/* Page Heading */}
        <div className="flex flex-col items-center">
          <h4 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Academics
          </h4>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
            Welcome to your academic hub! Access syllabus notes, past papers,
            and study guides to help you excel in your exams.
          </p>
        </div>
        {/* Card Heading */}
        <CardsHeading
          title="Course we offer"
          url="/view-more"
          text="view more"
        />

        <CardSection />
        <CardsHeading
          title="Course we offer"
          url="/view-more"
          text="view more"
        />

        <CardSection />
      </main>
    </>
  );
}
