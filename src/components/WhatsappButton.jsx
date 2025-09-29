import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+917306682471" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsappButton;
