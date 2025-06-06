import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
