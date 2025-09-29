"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function StaffCarousel() {
  const staff = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Diana Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Bob Williams" },
    { id: 5, name: "Ethan Lee" },
    { id: 6, name: "George Miller" },
    { id: 7, name: "Fiona Garcia" },
    { id: 8, name: "Hannah Davis" },
  ];

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else setItemsPerPage(4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxPage = Math.ceil(staff.length / itemsPerPage) - 1;

  const nextPage = () => setPage((p) => (p === maxPage ? 0 : p + 1));
  const prevPage = () => setPage((p) => (p === 0 ? maxPage : p - 1));

  return (
    <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden py-12">
      {/* Section Title */}
      <div className="flex flex-col items-center space-y-4">
        <span className="bg-blue-900 text-white text-base px-6 py-2 rounded-full font-semibold uppercase font-inter">
          Our Team
        </span>
        <span className="text-center font-inter text-2xl md:text-3xl text-blue-900 font-semibold uppercase tracking-wide">
          The hearts behind <span className="text-coral">Crayons</span>
        </span>
      </div>

      {/* Carousel */}
      <div className="w-full mt-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className={`grid gap-6 justify-items-center ${
              itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-4"
            }`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, x: page === 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            {staff
              .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
              .map((member) => (
                <motion.div
                  key={member.id}
                  className="relative w-full max-w-xs sm:w-64 rounded-xl overflow-hidden shadow-lg bg-blue-100 flex flex-col items-center justify-center"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Placeholder with initials */}
                  <div className="flex-1 flex items-center justify-center p-10">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-900">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Name Overlay */}
                  <div className="w-full bg-black bg-opacity-50 text-white text-center py-2 font-semibold text-sm sm:text-base">
                    {member.name}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevPage}
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextPage}
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
