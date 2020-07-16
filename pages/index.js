import HeroSection from "../components/hero/heroSection";
import TrustSection from "../components/secondTop/trustSection";
import HelpSection from "../components/help/helpSection";
import InvestSection from "../components/investment/investSection";
import Info from "../components/info/infoSection";
import MarketSection from "../components/market/marketSection";
import HowToSection from "../components/howTo/howToSection";
import ExperienceSection from "../components/experience/experienceSection";
import Testimonial from "../components/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HelpSection />
      <InvestSection />
      <Info />
      <MarketSection />
      <HowToSection />
      <ExperienceSection />
      <Testimonial />
    </>
  );
}
