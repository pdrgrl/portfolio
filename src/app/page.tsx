import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="star-field" aria-hidden="true" />
      <main className="min-h-screen relative z-10">
        <Nav />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
