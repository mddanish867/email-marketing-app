import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Aether Email</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex flex-col md:flex-row items-center md:space-x-6 absolute md:static bg-gradient-to-r from-indigo-600 to-indigo-400 md:bg-transparent w-full md:w-auto left-0 transition-all duration-300 ease-in ${
            isOpen ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'
          } md:opacity-100`}
        >
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/register"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Register
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
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/forgot-password"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Forgot Password
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/account-management"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Account Management
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/role-management"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Role Management
            </Link>
          </li>
          <li className="my-2 md:my-0 w-full text-center md:w-auto">
            <Link
              to="/dashboard"
              className="text-white hover:text-gray-200 transition-colors duration-300 block md:inline-block px-4 py-2"
              onClick={toggleMenu}
            >
              Email Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
