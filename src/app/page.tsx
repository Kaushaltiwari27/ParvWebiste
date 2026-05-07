import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProgramHighlight from "@/components/ProgramHighlight";
import ModulesTimeline from "@/components/ModulesTimeline";
import MeetFounder from "@/components/MeetFounder";
import LiveAIDemos from "@/components/LiveAIDemos";
import SuccessStories from "@/components/SuccessStories";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black selection:bg-accent-electric selection:text-white font-general">
      <Navbar />
      <Hero />
      <TechMarquee />
      <StatsStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <ProgramHighlight />
      <ModulesTimeline />
      <MeetFounder />
      <LiveAIDemos />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
