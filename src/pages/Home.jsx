import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/clss6.jpg";

const slides = [
  {
    image: Hero1,
    title: "Best Play School for Kids",
    subtitle:
      "Learn about CRAYONS CHILD ACADEMY, a trusted playschool, daycare & afterschool newly opened in Calicut. Meet our experienced team and discover our commitment to early childhood education.",
    btnText: "Learn More",
    link: "/", // home page
  },
  {
    image: Hero2,
    title: "Creative Learning Class",
    subtitle:
      "Engage your child with art, music, and interactive activities for early development.",
    btnText: "Explore Classes",
    link: "/classes", // classes page
  },
  {
    image: Hero3,
    title: "Safe & Fun Environment",
    subtitle:
      "We provide a nurturing space where children grow, play and learn safely every day.",
    btnText: "Join Today",
    link: "/contact", // contact page
  },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const handleButtonClick = () => {
    navigate(slides[current].link);
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Carousel background */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-8 text-white max-w-4xl mx-auto">
        <h1 className="font-inter font-bold leading-tight text-[clamp(2rem,5vw,5rem)] mb-4">
          {slides[current].title}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          {slides[current].subtitle}
        </p>
        <motion.button
          className="px-6 py-3 bg-coral rounded-full font-semibold flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          onClick={handleButtonClick}
        >
          {slides[current].btnText}
          <MdArrowForward />
        </motion.button>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-[60%] sm:top-1/2 left-5 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full z-20 -translate-y-1/2"
      >
        <MdArrowBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[60%] sm:top-1/2 right-5 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full z-20 -translate-y-1/2"
      >
        <MdArrowForward size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-coral" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </header>
  );
}

export default memo(Home);
