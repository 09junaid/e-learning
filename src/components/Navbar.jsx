import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold uppercase tracking-widest">
            <Link to="/">Tutorify</Link>
          </div>

          {/* Nav Links (Hidden on Small Screens) */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/price"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Prices
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-[#F3994B] rounded-md hover:bg-[#F3994B] hover:text-white transition duration-300">
            <u>Sign In</u>
          </button>
          <button className="px-8 py-2 bg-[#F3994B] text-white rounded-md hover:bg-orange-600 transition duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled) */}
      {isOpen && (
        <div className="md:hidden" >
          <ul className="flex flex-col items-center space-y-2 mt-4 text-lg">
            <li >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/price"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F3994B] font-bold"
                    : "hover:text-[#F3994B] transition-colors duration-300"
                }
              >
                Prices
              </NavLink>
            </li>
          </ul>
          <div className="mt-4 flex flex-row items-center content-center justify-center space-x-4">
            <button className="px-4 py-2 bg-transparent border border-[#F3994B] text-[#F3994B] rounded-md hover:bg-[#F3994B] hover:text-white transition duration-300">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#F3994B] text-white rounded-md hover:bg-orange-600 transition duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
