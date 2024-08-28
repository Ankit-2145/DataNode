"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function about() {
  return (
    <>
      <div className="h-[20rem] md:h-[28rem] flex items-center justify-center text-white">
        <TextHoverEffect text="Careers" />
      </div>
    </>
  );
}
