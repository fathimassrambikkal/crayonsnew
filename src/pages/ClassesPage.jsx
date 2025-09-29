import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/class.webp";
import clss1 from "../assets/kid6.jpg";
import clss2 from "../assets/clss2.jpg";
import clss3 from "../assets/clss3.jpg";
import img4 from "../assets/blog1.jpg";
import img5 from "../assets/blog3.jpg";

import CallToAction from "../components/CallToAction";
import FAQ from "../components/Faq";
import Provide from "../components/Provide";

function ClassesPage() {
 
  return (
    <>
      {/* Hero */}
      <section className="h-[80vh] md:h-screen bg-cover bg-center relative">
        <motion.img
          src={bgImage}
          alt="Classes Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-inter">
            Classes & <br /> Training Programs
          </h1>
        </motion.div>
      </section>

     

      <Provide/>

      <FAQ />
      <CallToAction />
    </>
  );
}

// Card Component
function ClassCard({ cls, expandedId, toggleExpand }) {
  return (
    <div className="bg-white border-8 border-white p-4 rounded-2xl shadow-lg flex flex-col">
      <img
        src={cls.img}
        alt={cls.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-blue-900 mb-2">{cls.title}</h2>
      <p className="text-blue-800">{cls.short}</p>

      {expandedId === cls.id && (
        <div className="mt-3">
          <ul className="list-disc pl-5 space-y-1 text-blue-900 marker:text-[#FF7F50]">
            {cls.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {cls.note && (
            <p className="text-sm text-red-600 font-semibold mt-2">{cls.note}</p>
          )}
        </div>
      )}

      <button
        onClick={() => toggleExpand(cls.id)}
        className="self-start mt-3 bg-[#FF7F50] text-white px-2 py-1 rounded text-xs hover:bg-[#e65a4c] transition"
      >
        {expandedId === cls.id ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ClassesPage;
