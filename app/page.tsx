import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import CompetitiveDance from "@/components/sections/CompetitiveDance";
import WeddingDance from "@/components/sections/WeddingDance";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Appearances from "@/components/sections/Appearances";
import SupportersTeaser from "@/components/sections/SupportersTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CompetitiveDance />
      <WeddingDance />
      <Pricing />
      <Contact />
      <SupportersTeaser />
      <Appearances />
    </>
  );
}
