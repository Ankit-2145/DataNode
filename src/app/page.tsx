import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between p-10 md:p-24">
      <HeroSection />
      <WhoWeAre />
      <Grid />
    </main>
  );
}
