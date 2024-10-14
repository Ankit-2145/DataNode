"use client";

import React from "react";
import MagicButton from "@/components/ui/MagicButton";
import { FaPenToSquare } from "react-icons/fa6";
import Link from "next/link";

export default function FeedbackForm() {
  return (
    <section>
      <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="flex flex-col justify-center items-center py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 w-full">
            <h2 className="text-4xl lg:leading-tight mt-5 max-w-5xl text-white mx-auto text-center tracking-tight font-semibold">
              We Value Your{" "}
              <span className="text-transparent bg-clip-text bg-custom-gradient">
                Feedback!
              </span>{" "}
            </h2>
            <p className="text-base tracking-wider my-6 sm:my-8 md:my-10 mx-4 sm:mx-8 md:mx-16 lg:mx-28 text-muted-foreground text-center">
              Your experience on DataNode matters to us. We&apos;re constantly
              looking to improve, and your suggestions play a crucial role in
              making DataNode better for everyone. If you have a moment, please
              share your thoughts by filling out our feedback form.
            </p>
          </div>
          <Link href="https://forms.gle/z2kRP9N95vKUng8a9" target="blank">
            <MagicButton
              title="Give Feedback Now"
              icon={<FaPenToSquare />}
              position="right"
            />
          </Link>
          <p className="text-base tracking-wider max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl my-6 sm:my-8 md:my-10 mx-4 sm:mx-auto text-muted-foreground text-center">
            Your feedback may even be featured on our website to showcase how
            we&apos;re growing with your help. Thank you for helping us enhance
            DataNode!
          </p>
        </div>
      </div>
    </section>
  );
}
