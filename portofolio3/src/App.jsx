import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Project />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
