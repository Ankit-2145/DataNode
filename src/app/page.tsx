import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import WhoWeAre from "@/components/WhoWeAre";
import Feedbacks from "@/components/Feedbacks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between">
      <HeroSection />
      <WhoWeAre />
      <Grid />
      <Feedbacks />
    </main>
  );
}
