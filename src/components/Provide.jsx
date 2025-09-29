import React, { useState } from "react";
import { motion } from "framer-motion";
import clss1 from "../assets/kid6.jpg";
import clss2 from "../assets/clss2.jpg";
import clss3 from "../assets/clss3.jpg";
import img4 from "../assets/blog1.jpg";
import img5 from "../assets/blog3.jpg";
import daycareImg from "../assets/kid2.jpg";

function Provide() {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  // ✅ Combined programs (Children + Teacher)
  const allPrograms = [
    {
      id: 1,
      title: "Play Class",
      short: "Fun-filled start for little learners.",
      highlights: [
        "Child-centered playful learning",
        "Safe & caring teachers",
        "Music, dance, art & outdoor play",
      ],
      img: clss1,
      note: "📌 Admissions open at Crayons Child Academy, Nallalam Post, Kozhikode.",
    },
    {
      id: 2,
      title: "Pre-KG",
      short: "Strong foundation for growth.",
      highlights: [
        "Age-appropriate early curriculum",
        "Boosts motor & communication skills",
        "Storytelling, music & creative play",
      ],
      img: clss2,
      note: "📌 Admissions open January–June every year.",
    },
    {
      id: 3,
      title: "Afterschool Care",
      short: "Safe care after school hours.",
      highlights: [
        "Homework & study support",
        "Arts, crafts & reading time",
        "Balanced routine of play & rest",
      ],
      img: clss3,
      note: "📌 Admissions open throughout the year at Crayons Child Academy, Nallalam Post, Kozhikode.",
    },
    {
      id: 4,
      title: "Daycare ",
      short: "Safe, nurturing & engaging environment for children.",
      highlights: [
        "Safe & Hygienic Environment – child-friendly space with continuous care.",
        "Nutritious Meals & Rest Time – promoting healthy habits and balanced routines.",
        "Activity-Based Learning – storytelling, art, play, and music keep children engaged.",
        "Flexible Timings – designed to support the needs of working parents.",
      ],
      img: daycareImg,
      note: "📌 Admissions are open throughout the year for our Daycare program at Crayons Child Academy, Nallalam Post, Kozhikode.",
    },
    {
      id: 5,
      title: "Faculty Training Program",
      short: "Professional development for aspiring and current teachers.",
      highlights: [
        "Advanced Montessori Training – practical sessions for effective teaching.",
        "Classroom Management & Engagement – strategies for all programs.",
        "Professional Development – communication & holistic child development.",
        "Modern Teaching Tools – integrate digital and activity-based learning.",
      ],
      img: img4,
      note: "📌 Admissions for the 2026–27 batch will be announced soon.",
    },
    {
      id: 6,
      title: "Montessori Teacher Training",
      short: "Comprehensive Montessori training for aspiring educators.",
      highlights: [
        "Comprehensive Curriculum – Montessori philosophy and methods.",
        "Hands-On Training – real classroom experience with expert guidance.",
        "Professional Development – communication, management, child psychology.",
        "Career Opportunities – work in schools, play classes, and daycare centers.",
      ],
      img: img5,
      note: "📌 Admissions for the upcoming academic year are now open at Crayons Child Academy, Nallalam Post, Kozhikode.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative px-6 md:px-16 py-12 overflow-hidden">
      <span className="mx-auto w-fit block text-center bg-blue-900/80 rounded-full px-6 py-2 text-white font-inter font-semibold uppercase tracking-wide mb-8 backdrop-blur-sm">
        Programs at Crayons Child Academy
      </span>

      {/* ✅ Single grid for all 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {allPrograms.map((cls, index) => (
          <motion.div
            key={cls.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
          >
            <ClassCard
              cls={cls}
              expandedId={expandedId}
              toggleExpand={toggleExpand}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

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
            <p className="text-sm text-red-600 font-semibold mt-2">
              {cls.note}
            </p>
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

export default Provide;
