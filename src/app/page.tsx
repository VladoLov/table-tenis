import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";

import GalleryPage from "@/components/GalleryPage";

import Hero from "@/components/Hero";
import News from "@/components/News";
import Sponsors from "@/components/Sponsors";
import Tranining from "@/components/Tranining";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <About />
      <Events />
      <Tranining />
      <News />
      <GalleryPage />
      <Contact />
      <Sponsors />
    </div>
  );
}
