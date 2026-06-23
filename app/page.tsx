import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import MoodDiscovery from "@/components/MoodDiscovery";
import FeaturedLists from "@/components/FeaturedLists";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Curators from "@/components/Curators";
import AppPreview from "@/components/AppPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileAppBar from "@/components/MobileAppBar";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header logo={<Logo />} />
      <main className="pb-20 md:pb-0">
        <Hero />
        <MoodDiscovery />
        <FeaturedLists />
        <HowItWorks />
        <Benefits />
        <Curators />
        <AppPreview />
        <FinalCTA />
      </main>
      <Footer />
      <MobileAppBar />
    </>
  );
}
