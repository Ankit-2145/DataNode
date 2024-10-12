"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  return (
    <>
      <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="flex flex-col items-center">
          {" "}
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            {" "}
            About DataNode{" "}
          </h1>{" "}
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-muted-foreground">
            {" "}
            Empowering Students with Knowledge and Innovation: Our Mission,
            Vision, and Journey{" "}
          </p>{" "}
        </div>{" "}
        <div className="max-w-4xl mx-auto pb-14">
          {" "}
          <p className="text-muted-foreground px-4 md:px-0 md:tracking-wider text-left text-sm md:text-base">
            {" "}
            <LinkPreview
              url="https://data-node.vercel.app"
              className="text-white"
            >
              {" "}
              DataNode{" "}
            </LinkPreview>{" "}
            is not just another educational platform; it&apos;s a product of
            real struggles and experiences we&apos;ve all encountered as students. As
            a team of passionate developers who have been in your shoes,
            we&apos;ve turned those challenges into solutions. <br /> <br /> The
            journey began with the{" "}
            <LinkPreview
              url="https://bcacommunity.netlify.app/"
              className="text-white"
            >
              {" "}
              BCA Community{" "}
            </LinkPreview>
            , launched in July 2023, as a self-funded project to support fellow
            students. It was created during the final year of BCA by the same
            team who is building DataNode. Seeing the incredible impact it had,
            we decided to bring it under{" "}
            <LinkPreview url="https://sspinnacle.com/" className="text-white">
              {" "}
              Pinnacle Smart Solutions{" "}
            </LinkPreview>
            , to further expand and enhance its offerings. <br /> <br />{" "}
            DataNode was born from the same vision but with a broader scope. Our
            personal experiences taught us how challenging it can be to find
            up-to-date study materials, decode complex programming topics, and
            stay ahead of the ever-evolving tech world. These hurdles shaped our
            mission to build a platform that simplifies the academic journey for
            everyone. <br /> <br /> We&apos;re more than just developers;
            we&apos;re problem-solvers and lifelong learners who understand the
            value of having reliable resources. At DataNode, we&apos;ve crafted
            a platform that offers not just study materials but also a community
            of like-minded individuals, all passionate about technology and
            learning. <br /> <br /> We&apos;ve poured our hearts into every
            feature, every resource, and every piece of content on DataNode.
            From the latest industry trends to comprehensive syllabus notes and
            collaborative learning opportunities, we&apos;ve designed this
            platform with you, the students, at the center. <br /> <br /> Our
            mission is simple: to empower you. We believe in your potential to
            make a difference in the tech world. With DataNode, you have
            everything you need to thrive in your academic and professional
            journey. <br /> <br /> Join us on this exciting journey. Together,
            we&apos;ll learn, grow, and shape the future of technology.{" "}
          </p>{" "}
        </div>
      </div>
    </>
  );
}
