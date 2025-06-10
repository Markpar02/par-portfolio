import React from "react";
import Banner from './components/banner/Banner'; // Adjust the import path as needed
import Contact from "./components/contact/Contact";
import TechStacks from "./components/TechStack/TechStacks";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/Certificates/Certificate";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
       <Banner />
        <TechStacks />
        <Projects />
        <Resume />
        <Certificate />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
