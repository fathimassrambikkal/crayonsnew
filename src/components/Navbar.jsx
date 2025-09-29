import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 w-full fixed top-0 left-0 z-50 shadow-md bg-white transition-colors duration-300">
      <div className="max-w-7xl flex items-center justify-between h-16 mx-auto px-4">
        {/* Logo */}
        <div className="flex-shrink-0" >
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo" loading="lazy"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>
          </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-bold font-inter items-center text-blue-900">
          <li>
            <Link to="/" className="hover:text-blue-400 md:text-lg">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 md:text-lg">About</Link>
          </li>
          <li>
            <Link to="/classes" className="hover:text-blue-400 md:text-lg">Classes</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-400 md:text-lg">Blog</Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full md:text-lg bg-blue-900 text-white hover:bg-blue-700"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-4 focus:outline-none text-blue-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-center p-6 space-y-6 bg-white text-blue-900 font-bold font-kids"
          >
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/classes" onClick={() => setIsOpen(false)} className="hover:text-blue-400 text-lg">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-400 text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-blue-900 rounded-full text-white hover:bg-blue-600 transition text-lg"
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
