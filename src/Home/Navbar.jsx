import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import UserProfileDropdown from "../UserManagement/UserProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-4 sticky top-0 z-50 border-b border-indigo-400">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Aether Email</Link>
        </div>

        {/* User Profile Dropdown (Visible on medium and larger screens) */}
        <div className="hidden">
          <UserProfileDropdown />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> :<div className="flex items-center space-x-6 mr-4"> <UserProfileDropdown /> <FaBars /> </div> }
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex flex-col md:flex-row items-center md:space-x-6 absolute md:static bg-indigo-400 md:bg-transparent w-full md:w-auto left-0 transition-all duration-300 ease-in ${
            isOpen ? "top-16 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/services"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/about-us"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              About us
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/contact-us"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/login"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </li>

          {/* User Profile Dropdown (Hidden on mobile) */}
          <li className="hidden md:block my-2 md:my-0 w-full text-center md:w-auto">
            <UserProfileDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
