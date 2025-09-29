import React, { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import HeroImg from "../assets/hero.png";
import blue from "../assets/blueball.svg";
import star from "../assets/star.svg";
import { MdArrowOutward } from "react-icons/md";

function Home() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  }, []);

  // Framer Motion Variants
  const lineVariants = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    }),
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 500, damping: 20 } 
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  const renderLetters = (text, color = "white") =>
    text.split("").map((letter, index) => (
      <motion.span
        key={index}
        className={`inline-block ${color === "coral" ? "text-coral" : "text-white"}`}
        variants={letterVariants}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));

  const handleClick = () => {
    navigate("/classes");
  };

  return (
    <header className="relative min-h-screen overflow-hidden py-12 md:py-20 bg-blue-900 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-8">
        
        {/* Left content */}
        <div className="relative z-10 mt-12 md:mt-0 space-y-6 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          
          {/* Animated H1 */}
          <h1 className="font-inter font-bold leading-tight text-[clamp(2rem,4vw,5rem)] sm:text-[clamp(2rem,4.5vw,5rem)] md:text-[clamp(4rem,5vw,5rem)]">
            <motion.span className="block" initial="hidden" animate="visible" variants={lineVariants} custom={0}>
              {renderLetters("Best", "white")}
              {renderLetters("Play", "coral")}
            </motion.span>
            <motion.span className="block -mt-2" initial="hidden" animate="visible" variants={lineVariants} custom={0.8}>
              {renderLetters("School", "coral")}
              {renderLetters("for", "white")}
              {renderLetters("Kids", "white")}
            </motion.span>
          </h1>

          {/* Paragraph */}
          <motion.p
            ref={textRef}
            className="text-white text-base sm:text-lg md:text-xl lg:text-start leading-relaxed w-full max-w-md md:max-w-xl font-inter break-words"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
          >
            Learn about CRAYONS CHILD ACADEMY, a trusted playschool, daycare &amp; 
            afterschool newly opened in Calicut. Meet our experienced team and 
            discover our commitment to early childhood education.
          </motion.p>

          {/* Smaller Button with circular arrow */}
          <motion.button
            ref={buttonRef}
            onClick={handleClick}
            aria-label="Learn more about Crayons Child Academy"
            className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-base md:text-lg bg-coral rounded-full text-white font-semibold flex items-center gap-2 transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.7}
          >
            Learn More
            <motion.div
              className="bg-white text-coral p-2 md:p-2.5 rounded-full flex items-center justify-center text-lg"
              initial={{ rotate: 45 }}
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <MdArrowOutward />
            </motion.div>
          </motion.button>
        </div>

        {/* Right content */}
        <div className="relative w-full flex flex-col items-center justify-center py-12 md:py-0 gap-6 lg:w-1/2">
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-coral flex items-center justify-center shadow-2xl overflow-hidden z-10">
            <img
              src={HeroImg}
              alt="Kids education illustration"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top scale-125 z-10"
            />
          </div>

          {/* Orbiting Icons */}
          <motion.div
            className="absolute inset-0 z-20 flex justify-center items-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <img
              src={blue}
              alt="Orbiting blue ball"
              className="absolute w-10 md:w-14 h-10 md:h-14 top-8 md:-top-5 bg-blue-500 rounded-full"
            />
            <img
              src={star}
              alt="Orbiting star"
              className="absolute w-10 md:w-14 h-10 md:h-14 bottom-8 md:-bottom-5 bg-blue-800 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default memo(Home);
