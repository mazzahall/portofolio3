import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/Pageloader/PageLoader";
import Lenis from "@studio-freight/lenis";
import SEO from "./components/SEO";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        smooth: true,
        duration: 1.2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, [loading]);

  return (
    <div className="relative">
      <PageLoader onFinish={() => setLoading(false)} />

      {!loading && (
        <>
          <SEO
            title="Portfolio – azzam"
            description="Portfolio resmi azzam dengan informasi skills, project, dan CTA."
          />
          <Navbar />
          <HeroSection />
          <Skills />
          <Project />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
