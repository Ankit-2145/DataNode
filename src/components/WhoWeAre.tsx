"use client";

import { FaArrowRight } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section>
      <div className="max-w-6xl flex flex-col justify-center items-center mb-14">
        <div className="px-5">
          <h4 className="text-4xl lg:leading-tight max-w-7xl text-white mx-auto text-center tracking-tight font-semibold">
            The{" "}
            <span className="text-transparent bg-clip-text bg-custom-gradient">
              DataNode
            </span>{" "}
            team
          </h4>
          <p className="text-base max-w-7xl tracking-wider mt-5 mb-10 mx-auto text-muted-foreground text-center">
            At DataNode, we&apos;re mentors and problem-solvers dedicated to
            empowering future tech professionals. Inspired by our own
            experiences, we built DataNode to provide the support we wish we
            had. Join us in navigating studies, staying ahead in tech, and
            connecting with a passionate community. Let&apos;s grow together.
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
