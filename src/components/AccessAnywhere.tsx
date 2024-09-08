"use client";

import React from "react";
import { FaArrowRight, FaUnlock } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import MagicButton from "@/components/ui/MagicButton";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "High paying jobs",
    description: "DataNode",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "New user enrolled",
    description: "DataNode",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New courses Added",
    description: "DataNode",
    time: "5m ago",
    icon: "📚",
    color: "#FF3D71",
  },
  {
    name: "Projects updated",
    description: "DataNode",
    time: "just now",
    icon: "📂",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const AccessAnywhere = ({ className }: { className?: string }) => {
  return (
    <section className="max-w-6xl">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 my-14 p-5 lg:p-0">
        <div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-dark text-white flex items-center"
          >
            <span className="flex items-center gap-2 text-xs tracking-wider">
              <FaUnlock className="text-pink-600" /> Unlock Knowledge,
              Anytime, Anywhere
            </span>
          </HoverBorderGradient>
          <h4 className="text-4xl leading-normal mt-5 text-white tracking-tight font-semibold">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-custom-gradient">
              Learning,{" "}
            </span>
            <br />
            Always Within{" "}
            <span className="text-transparent bg-clip-text bg-custom-gradient">
              Reach!
            </span>
          </h4>
          <p className="text-base tracking-wider leading-8 mt-5 mb-10 text-gray-500">
            No matter where you are or what time it is, DataNode makes learning
            accessible. With our platform, you can dive into valuable resources,
            study notes, and tech trends from any device, whenever you need
            them. Whether you're on the go or at your desk, we ensure that your
            academic journey remains uninterrupted.
          </p>
          <MagicButton
            title="Read More"
            icon={<FaArrowRight />}
            position="right"
          />
        </div>
        <div
          className={cn(
            "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg mb-14 md:mb-0 bg-background md:shadow-xl",
            className
          )}
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
};

export default AccessAnywhere;
