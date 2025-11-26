import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/Pageloader/PageLoader"; 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      <PageLoader onFinish={() => setLoading(false)} />

      {!loading && (
        <>
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
