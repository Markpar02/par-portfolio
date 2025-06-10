import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiTelegram, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Beginner Coder.", "Front-End Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="w-full lg:w-1/2 flex flex-col gap-20 px-6 py-8">
      {/* Text Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal text-white">Watashi no sekai e yōkoso</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mark Angelo Par</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-white">
          I focus on simplifying experiences by carefully designing each interaction. My goal is to make everything feel natural and meaningful, not just decorative or complicated.
        </p>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon text-white hover:text-designColor">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon text-white hover:text-designColor">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon text-white hover:text-designColor">
                <FaInstagram />
              </span>
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon text-white hover:text-designColor">
                <SiTelegram />
              </span>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">Best Skill On</h2>
          <div className="flex gap-4">
            <span className="bannerIcon text-white hover:text-designColor">
              <FaReact />
            </span>
            <span className="bannerIcon text-white hover:text-designColor">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon text-white hover:text-designColor">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon text-white hover:text-designColor">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftBanner;
