"use client";

import { FaArrowRight } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section>
      <div className="max-w-6xl flex flex-col justify-center items-center mb-20">
        <div className="px-5">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl text-white mx-auto text-center tracking-tight font-semibold">
            The{" "}
            <span className="text-transparent bg-clip-text bg-custom-gradient">
              DataNode
            </span>{" "}
            team
          </h4>
          <p className="text-sm lg:text-base max-w-7xl md:tracking-wider mt-5 mb-10 mx-auto text-gray-500 text-center font-medium">
            At DataNode, we're mentors and problem-solvers dedicated to
            empowering future tech professionals. Inspired by our own
            experiences, we built DataNode to provide the support we wish we
            had. Join us in navigating studies, staying ahead in tech, and
            connecting with a passionate community. Let's grow together.
          </p>
        </div>
        <Link href="/about">
          <MagicButton
            title="Read More"
            icon={<FaArrowRight />}
            position="right"
          />
        </Link>
      </div>
    </section>
  );
};

export default WhoWeAre;
