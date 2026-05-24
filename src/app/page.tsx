import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Starfield } from '@/components/portfolio-utils';

export default function Home() {
  return (
    <div className="text-gray-300 min-h-screen font-sans selection:bg-violet-500/30 overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src="/webBG.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-[#08080f]/25" />
      </div>
      <Starfield />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
