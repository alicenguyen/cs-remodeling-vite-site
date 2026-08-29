import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesStrip from "./components/ServicesStrip";
import TrustBar from "./components/TrustBar";
import ServicesDetail from "./components/ServicesDetail";
import Projects from "./components/Projects";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesStrip />
        <TrustBar />
        <ServicesDetail />
        <Projects />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
