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
      className={`px-8 py-3 rounded-full relative bg-custom-gradient-129 text-white text-sm hover:shadow-2xl hover:shadow-[#3624ff]/[0.5] transition duration-200 border border-slate-600 ${otherClasses} ${handleClick}`}
    >
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
