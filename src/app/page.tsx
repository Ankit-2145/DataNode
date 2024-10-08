import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import WhoWeAre from "@/components/WhoWeAre";
import Feedbacks from "@/components/Feedbacks";
import FAQs from "@/components/FAQs";
import BuiltBy from "@/components/BuiltBy";
import AccessAnywhere from "@/components/AccessAnywhere";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between">
      <HeroSection />
      <WhoWeAre />
      <BuiltBy />
      <Grid />
      <AccessAnywhere />
      <Feedbacks />
      <FAQs />
    </main>
  );
}
