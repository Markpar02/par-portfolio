import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants'; // Ensure navLinksdata is imported correctly

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div>
      {/* Desktop Navbar */}
      <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide z-50">
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <p className="text-sm text-gray-400 mt-2">
                
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
                Find me in
              </h2>
              <div className="flex gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <span className="bannerIcon text-white hover:text-designColor">
                    <FaFacebookF />
                  </span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <span className="bannerIcon text-white hover:text-designColor">
                    <FaTwitter />
                  </span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <span className="bannerIcon text-white hover:text-designColor">
                    <FaLinkedinIn />
                  </span>
                </a>
              </div>
            </div>

            {/* Close Menu */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
