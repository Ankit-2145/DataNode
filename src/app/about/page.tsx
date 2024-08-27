"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function about() {
  return (
    <>
      <div className="h-[20rem] md:h-[28rem] flex items-center justify-center text-white">
        <TextHoverEffect text="About Us" />
      </div>
      <div className="max-w-4xl mx-auto mb-14">
        <h2 className="text-xl md:text-3xl text-center my-5 text-transparent bg-clip-text bg-custom-gradient">
          The Story Behind DataNode
        </h2>
        <p className="text-gray-500 px-4 md:px-0 md:tracking-wider text-left text-sm md:text-base">
          <LinkPreview url="https://sspinnacle.com" className="text-white">
            DataNode
          </LinkPreview>{" "}
          isn't just another educational platform, it's a project born out of
          the real struggles and experiences of a group of passionate
          individuals who once stood where you are now. While pursuing our BCA,
          we built the{" "}
          <LinkPreview
            url="https://bcacommunity.netlify.app/"
            className="text-white"
          >
            BCA Community
          </LinkPreview>
          , a platform dedicated to supporting our fellow students. We launched
          it on July 26, 2023, during our final year as a self-funded project.
          As the founders of the{" "}
          <LinkPreview
            url="https://bcacommunity.netlify.app/"
            className="text-white"
          >
            BCA Community
          </LinkPreview>{" "}
          , we later brought it under Pinnacle Smart Solutions, a company we
          also founded, to expand its reach and impact. This evolution inspired
          us to take things a step further, leading to the creation of DataNode.
          <br />
          <br />
          At{" "}
          <LinkPreview url="https://sspinnacle.com/" className="text-white">
            Pinnacle Smart Solutions
          </LinkPreview>
          , our journey began as a team of eager BCA students, just like you. We
          were driven by curiosity and a desire to succeed, but we quickly
          realized that the path to success was filled with challenges. The
          resources we needed were scattered, outdated, or simply non-existent.
          We spent countless hours hunting for reliable study materials,
          deciphering complex programming concepts, and trying to stay
          up-to-date with the rapidly evolving tech landscape. It wasn't easy,
          and we often felt like we were navigating a maze without a map.
          <br />
          <br />
          But those challenges didn't deter us. Instead, they fueled a vision—a
          vision to create something better for the next generation of students.
          We knew there had to be a way to make the academic journey smoother,
          more informed, and less overwhelming for those who would follow in our
          footsteps. And that's how DataNode was born.
          <br />
          <br />
          DataNode is more than just a website; it's our way of giving back. We
          took all the lessons we learned, the obstacles we overcame, and the
          tools we wished we had, and we built a platform that embodies
          everything we believe in.
          <br />
          <br />
          We are more than just developers. We are mentors, problem-solvers, and
          lifelong learners who understand the importance of having the right
          resources at your fingertips. We wanted to create a space where
          students could find not just study materials, but a community of
          like-minded individuals who are passionate about learning and growing
          in the tech world.
          <br />
          <br />
          Our team at Pinnacle Smart Solutions poured our hearts into DataNode.
          We meticulously crafted every feature, every resource, and every piece
          of content with you in mind. We wanted to ensure that no student would
          ever feel as lost as we did. Whether it's accessing the latest tech
          trends, diving into comprehensive study notes, or connecting with
          peers for collaborative learning, DataNode is here to support you
          every step of the way.
          <br />
          <br />
          We built DataNode to be the resource we wished we had—because we
          believe in the power of knowledge, the importance of community, and
          the potential of every student to achieve greatness. Our mission is to
          empower you, the next generation of tech professionals, to push the
          boundaries of what's possible and to succeed in your academic and
          professional journey.
          <br />
          <br />
          Join us on this exciting adventure. Together, we'll continue to grow,
          learn, and redefine what's possible in the world of tech. DataNode is
          here for you, because we've been there, and we believe in your
          potential to change the world.
        </p>
      </div>
    </>
  );
}
