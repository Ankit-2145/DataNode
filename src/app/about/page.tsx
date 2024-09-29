"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
          About DataNode
        </h1>
        <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
          Empowering Students with Knowledge and Innovation: Our Mission,
          Vision, and Journey
        </p>
      </div>
      <div className="max-w-4xl mx-auto mb-14">
        <p className="text-gray-500 px-4 md:px-0 md:tracking-wider text-left text-sm md:text-base">
          <LinkPreview url="https://data-node.vercel.app" className="text-white">
            DataNode
          </LinkPreview>{" "}
          isn&apos;t just another educational platform: it&apos;s a project born out of my
          real struggles and experiences as someone who once stood where you are
          now. While pursuing my BCA, I built the{" "}
          <LinkPreview
            url="https://bcacommunity.netlify.app/"
            className="text-white"
          >
            BCA Community
          </LinkPreview>
          , a platform dedicated to supporting fellow students. I launched it on
          July 26, 2023, during my final year as a self-funded project. As the
          creator of the{" "}
          <LinkPreview
            url="https://bcacommunity.netlify.app/"
            className="text-white"
          >
            BCA Community
          </LinkPreview>{" "}
          , I later brought it under Pinnacle Smart Solutions, a company
          established by one of my teachers during my BCA, to expand its reach
          and impact. This evolution inspired me to take things a step further,
          leading to the creation of DataNode.
          <br />
          <br />
          At{" "}
          <LinkPreview url="https://sspinnacle.com/" className="text-white">
            Pinnacle Smart Solutions
          </LinkPreview>
          , my journey began as a BCA student, driven by curiosity and a desire
          to succeed. However, I quickly realized that the path to success was
          filled with challenges. The resources I needed were scattered,
          outdated, or simply non-existent. I spent countless hours hunting for
          reliable study materials, deciphering complex programming concepts,
          and trying to stay up-to-date with the rapidly evolving tech
          landscape. It wasn&apos;t easy, and I often felt like navigating a
          maze without a map.
          <br />
          <br />
          But those challenges didn&apos;t deter me. Instead, they fueled a
          vision—a vision to create something better for the next generation of
          students. I knew there had to be a way to make the academic journey
          smoother, more informed, and less overwhelming for those who would
          follow in my footsteps. And that&apos;s how DataNode was born.
          <br />
          <br />
          DataNode is more than just a website; it&apos;s my way of giving back.
          I took all the lessons I learned, the obstacles I overcame, and the
          tools I wished I had, and I built a platform that embodies everything
          I believe in.
          <br />
          <br />
          I am more than just a developer, I am a problem-solver, and
          lifelong learner who understands the importance of having the right
          resources at your fingertips. I wanted to create a space where
          students could find not just study materials but a community of
          like-minded individuals passionate about learning and growing in the
          tech world.
          <br />
          <br />
          I poured my heart into DataNode. I meticulously crafted every feature,
          every resource, and every piece of content with you in mind. I wanted
          to ensure that no student would ever feel as lost as I did. Whether
          it&apos;s accessing the latest tech trends, diving into comprehensive
          study notes, or connecting with peers for collaborative learning,
          DataNode is here to support you every step of the way.
          <br />
          <br />
          I built DataNode to be the resource I wished I had—because I believe
          in the power of knowledge, the importance of community, and the
          potential of every student to achieve greatness. My mission is to
          empower you, the next generation of tech professionals, to push the
          boundaries of what&apos;s possible and to succeed in your academic and
          professional journey.
          <br />
          <br />
          Join me on this exciting adventure. Together, we&apos;ll continue to
          grow, learn, and redefine what&apos;s possible in the world of tech.
          DataNode is here for you because I&apos;ve been there, and I believe
          in your potential to change the world.
        </p>
      </div>
    </>
  );
}
