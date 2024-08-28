import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import WhoWeAre from "@/components/WhoWeAre";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between p-10 md:p-24">
      <HeroSection />
      <WhoWeAre />
      <Grid />
      <div className="h-[20rem] md:h-[28rem] flex items-center justify-center text-white">
        <TextHoverEffect text="DataNode" />
      </div>
    </main>
  );
}
