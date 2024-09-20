import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`px-8 py-3 rounded-lg relative bg-custom-gradient-129 text-white text-sm hover:shadow-2xl transition duration-200 border border-slate-600 group ${otherClasses} ${handleClick}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <span className="relative z-20">
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center">
          {position === "left" && icon}
          {title} &nbsp;
          {position === "right" && icon}
        </span>
      </span>
    </button>
  );
};

export default MagicButton;
