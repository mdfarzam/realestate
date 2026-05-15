import About from "@/sections/about";
import CTA from "@/sections/cta";
import FAQs from "@/sections/faqs";
import Footer from "@/sections/footer";
import Grid from "@/sections/grid";
import Hero from "@/sections/hero";
import Listing from "@/sections/listings";
import Services from "@/sections/services";
import Stats from "@/sections/stats";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Listing />
      <Stats />
      <Services/>
      <Grid/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  );
}
