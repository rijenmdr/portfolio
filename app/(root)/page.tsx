import Hero from "@/container/hero/hero";
import Marquee from "@/container/hero/marque";
import About from "@/container/about/about";
import Projects from "@/container/projects/projects";
import Experience from "@/container/experience/experience";
import Contact from "@/container/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
