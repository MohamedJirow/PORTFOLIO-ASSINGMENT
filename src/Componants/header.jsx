import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setisOpen] = useState(false);

  const handleIsopen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };

  return (
    <div className="bg-[#4b4030] px-4 flex flex-col md:flex-row justify-between items-center py-4 animate-fade-in relative">
      <h1 className="text-1xl font-semibold text-white md:text-3xl">
        Mohamed Sharmake
      </h1>

      {/* Bars icon */}
      <div
        onClick={handleIsopen}
        className="cursor-pointer md:hidden relative w-8 h-8"
      >
        <i
          className={`fa-solid fa-bars text-white text-2xl absolute top-[-25px] left-36 transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Open menu"
        ></i>
      </div>

      {/* X icon */}
      <div
        onClick={handleClose}
        className="cursor-pointer md:hidden relative w-8 h-8"
      >
        <i
          className={`fa-solid fa-xmark text-white text-2xl absolute top-[-50px] left-36 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Close menu"
        ></i>
      </div>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex gap-4 text-2xl font-semibold text-white md:mt-0`}
      >
        <li>
          <NavLink to="/" className="hover:text-[#c4a35a] cursor-pointer" onClick={handleClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="hover:text-[#c4a35a] cursor-pointer" onClick={handleClose}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="hover:text-[#c4a35a] cursor-pointer" onClick={handleClose}>
            Contact
          </NavLink>
        </li>
      </ul>

      <Link
        to="/Contact"
        className="hidden md:block bg-[#6d6040] text-white text-2xl px-4 py-1 rounded-md font-semibold mt-2 md:mt-0"
      >
        Contact Me
      </Link>
    </div>
  );
}

export default Header;
