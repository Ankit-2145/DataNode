import HeroSection from "@/components/HeroSection";
import ScrollText from "@/components/ScrollText";
import FAQs from "@/components/FAQs";
import BuiltBy from "@/components/BuiltBy";
import AccessAnywhere from "@/components/AccessAnywhere";
import FeedbackForm from "@/components/FeedbackForm";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-between" aria-hidden="true">
      <HeroSection />
      <ScrollText />
      <BuiltBy />
      <Features />
      <AccessAnywhere />
      <FAQs />
      <FeedbackForm />
    </main>
  );
}
