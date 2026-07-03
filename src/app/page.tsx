import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CinematicStoryScroll from "@/components/CinematicStoryScroll";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProgramHighlight from "@/components/ProgramHighlight";
import ModulesTimeline from "@/components/ModulesTimeline";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <div className="h-[500px] my-32 animate-pulse bg-white/5 rounded-3xl max-w-7xl mx-auto" />
});

const MeetFounder = dynamic(() => import("@/components/MeetFounder"), {
  ssr: false,
  loading: () => <div className="h-[400px] my-32 animate-pulse bg-white/5 rounded-3xl max-w-7xl mx-auto" />
});

const LiveAIDemos = dynamic(() => import("@/components/LiveAIDemos"), {
  ssr: false,
  loading: () => <div className="h-[600px] my-32 animate-pulse bg-white/5 rounded-3xl max-w-7xl mx-auto" />
});

const SuccessStories = dynamic(() => import("@/components/SuccessStories"), {
  ssr: false,
  loading: () => <div className="h-[450px] my-32 animate-pulse bg-white/5 rounded-3xl max-w-7xl mx-auto" />
});

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black selection:bg-accent-electric selection:text-white font-general">
      <Navbar />
      <Hero />
      <CinematicStoryScroll />
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
