import React, { useState } from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-gray-600 px-6 md:px-12">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center gap-5">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                         relative transition-all duration-300 ease-in-out 
                         hover:text-designColor hover:scale-110 
                         hover:shadow-md hover:shadow-designColor/50 px-4 py-2 rounded-md"
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
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-gray-800 shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id} className="py-2 text-white text-lg hover:text-designColor">
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
