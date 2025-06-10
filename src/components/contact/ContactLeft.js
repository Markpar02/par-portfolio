import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
     
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mark Angelo Par</h3>
        <p className="text-lg font-normal text-gray-400">
          Freelance Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I’m a freelance front-end developer who specializes in creating clean, responsive, and user-friendly websites and web applications. 
        I use technologies like HTML, CSS, JavaScript, and modern frameworks such as React to bring ideas to life on screen.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+639924866246</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">markangelopar@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft