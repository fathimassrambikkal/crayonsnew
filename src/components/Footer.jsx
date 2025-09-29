import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="w-full px-6 sm:px-8 md:px-16 py-12 text-blue-900 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-6">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </Link>
          <div className="flex space-x-3 text-2xl text-[#fe7162]">
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-200"><FaWhatsapp /></a>
          </div>
          <p className="text-base sm:text-lg leading-relaxed font-semibold">
            Learn about <span className="text-[#fe7162]">CRAYONS CHILD ACADEMY</span>, a trusted
            playschool, daycare & afterschool newly opened in Calicut. Meet our
            experienced team and discover our commitment to early childhood
            education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-3 font-bold mt-8 lg:mt-0">
          <h4 className="text-lg sm:text-xl">Quick Links</h4>
          <Link to="/" className="hover:underline hover:text-coral font-semibold text-base sm:text-lg">Home</Link>
          <Link to="/about" className="hover:underline hover:text-coral font-semibold text-base sm:text-lg">About</Link>
          <Link to="/classes" className="hover:underline hover:text-coral font-semibold text-base sm:text-lg">Classes</Link>
          <Link to="/blog" className="hover:underline hover:text-coral font-semibold text-base sm:text-lg">Blog</Link>
          <Link to="/contact" className="hover:underline hover:text-coral font-semibold text-base sm:text-lg">Contact</Link>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-start space-y-3 font-semibold mt-8 lg:mt-0">
          <h4 className="text-lg sm:text-xl font-semibold">Get in Touch</h4>
          <p className="flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg">
            <FaMapMarkerAlt className="text-[#fe7162]" />
            <span>Calicut, Kerala, India</span>
          </p>
          <p className="flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg">
            <FaPhoneAlt className="text-[#fe7162]" />
            <a href="tel:+917306682471" className="hover:underline">+917306682471</a>
          </p>
          <p className="flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg">
            <FaEnvelope className="text-[#fe7162]" />
            <a href="mailto:Email@crayonschildacademy.org" className="hover:underline">
              Email@crayonschildacademy.org
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-start space-y-3 bg-blue-900/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg w-full mt-8 lg:mt-0">
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">Contact Us</h4>
          <form className="flex flex-col space-y-3 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 border border-white/30 outline-none focus:ring-2 focus:ring-white w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 border border-white/30 outline-none focus:ring-2 focus:ring-white w-full"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-2 rounded-2xl bg-white/20 text-white placeholder-gray-200 border border-white/30 outline-none focus:ring-2 focus:ring-white w-full resize-none"
              rows={3}
            />
            <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-white/90 hover:text-blue-700 transition w-full">
              Submit Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-blue-900 mt-12 border-t border-gray-500 pt-6">
        © {new Date().getFullYear()} Crayons Child Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
