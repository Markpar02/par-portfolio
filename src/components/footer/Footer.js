import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";  // Updated icons

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaInstagram />  {/* Added Instagram Icon */}
          </span>
          <span className="bannerIcon">
            <FaTelegramPlane />  {/* Added Telegram Icon */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
