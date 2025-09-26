// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Hero / Landing Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Stats / Achievements */}
      <Stats />

      {/* Partners / Clients */}
      <Partners />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
