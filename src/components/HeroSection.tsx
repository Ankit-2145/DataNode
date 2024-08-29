import React from "react";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/ui/MagicButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaLocationArrow } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="p-5 my-20 md:my-0 md:p-24">
      {" "}
      <div>
        <Spotlight
          className="hidden md:block left-80 top-28 h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>
      <div className="flex justify-center relative my-24 z-10 antialiased">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
  
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-dark text-white flex items-center"
            >
              <span className="text-xs tracking-wider">🚀 New version v1.0.0</span>
            </HoverBorderGradient>

          {/* <p className="bg-custom-gradient-129 border p-2 rounded-full tracking-wider text-xs text-center text-blue-100 max-w-80">
            🚀 New version v1.0.0
          </p> */}
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Connecting{" "}
            <Cover>
              {" "}
              <span className="text-transparent bg-clip-text bg-custom-gradient">
                Knowledge
              </span>
            </Cover>
            , one
            <br />
            Node at a time
          </h1>
          <p className="text-gray-500 text-center md:tracking-wider mb-4 text-sm md:text-base">
            Get the latest insights on emerging tech trends, detailed syllabus
            notes, past papers, and expert tips to give you a competitive edge.
            Stay informed, stay ahead!
          </p>
          <MagicButton
            title="Get Started"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="mt-14"
          />
        </div>
      </div>
      <ShootingStars />
      <StarsBackground starDensity={0.00025} />
    </section>
  );
}
