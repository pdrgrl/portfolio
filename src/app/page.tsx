import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
