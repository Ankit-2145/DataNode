import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between p-10 md:p-24">
      <HeroSection />
      <Grid />
    </main>
  );
}
