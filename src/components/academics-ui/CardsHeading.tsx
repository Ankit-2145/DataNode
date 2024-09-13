"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface CardsHeadingProps {
  title: string;
  url: string;
  text: string;
  otherClasses?: string;
  buttonClasses?: string;
}

const CardsHeading: React.FC<CardsHeadingProps> = ({
  title,
  url,
  text,
  otherClasses = "",
  buttonClasses = "",
}) => {
  return (
    <div className="flex justify-between items-center md:max-w-6xl px-4 mt-6 mx-auto md:px-8 xl:px-0 gap-3">
      <div>
        <h2
          className={`relative text-3xl font-bold tracking-tight bg-clip-text text-transparent select-none bg-gradient-to-r ${otherClasses}`}
        >
          <div
            className={`absolute -left-8 -z-10 h-12 w-32 rounded-full blur-3xl ${otherClasses}`}
            aria-hidden="true"
          ></div>
          {title}
        </h2>
      </div>
      <div>
        <Link
          href={url}
          className={`inline-flex justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background h-10 px-4 group items-center whitespace-nowrap rounded-full py-2 pl-4 pr-3 backdrop-blur-sm ${buttonClasses}`}
        >
          {text}
          <ChevronRight
            className="ml-2 h-4 w-4 stroke-[3] duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};

export default CardsHeading;
