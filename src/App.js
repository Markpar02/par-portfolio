import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages/Sections
import Banner from './components/banner/Banner';
import Contact from "./components/contact/Contact";
import TechStacks from "./components/TechStack/TechStacks";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Certificate from "./components/Certificates/Certificate";
import ResumeImage from "./components/resume/ResumeImage"; // Add this import

// Home page layout
const Home = () => (
  <>
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
  </>
);

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-image" element={<ResumeImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
