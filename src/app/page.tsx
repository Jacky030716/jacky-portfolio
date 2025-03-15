import Hero from "@/modules/sections/Hero";
import Tech from "@/modules/sections/Tech";
import About from "@/modules/sections/About";
import Contact from "@/modules/sections/Contact";
import Project from "@/modules/sections/Project";
import Experience from "@/modules/sections/Experience";
import Footer from "@/modules/sections/Footer";

export default function Home() {
  return (
    <main className="container-space w-full flex flex-col gap-12">
      <Hero />
      <About />
      <Tech />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
