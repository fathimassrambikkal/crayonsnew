import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";

function About() {
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16">
      {/* Section Title */}
      <motion.span
        className="bg-blue-900 rounded-full px-6 py-2 text-white font-semibold uppercase tracking-wide mb-24 font-kids"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true, amount: 0.2 }}
      >
        About Us
      </motion.span>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="absolute w-[70%] max-w-xs sm:max-w-sm md:max-w-md aspect-square bg-blue-900 rounded-full"></div>
          <img
            src={AboutImg}
            alt="About Crayons Academy"
            loading="lazy"
            className="relative z-10 rounded-full object-cover w-[70%] max-w-xs sm:max-w-sm md:max-w-md aspect-square object-top"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-blue-900 font-inter font-bold leading-tight max-w-full md:max-w-xl mx-auto md:mx-0 text-[clamp(2rem,5vw,4.5rem)] mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, amount: 0.2 }}
          >
            Best <span className="text-coral">School</span>
            <br />
            For Your <span className="text-coral">Kids</span>
          </motion.h1>

          <motion.p
            className="leading-relaxed font-inter font-semibold text-base sm:text-lg md:text-lg text-blue-800 max-w-full md:max-w-xl mx-auto md:mx-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true, amount: 0.2 }}
          >
            At CRAYONS CHILD ACADEMY, we believe in nurturing young minds with
            the best early childhood education in Calicut. Our play school,
            daycare & afterschool offer a safe and stimulating environment where
            children can learn, grow, and flourish.
            <br />
            <br />
            We are more than just a play school and daycare; we are a vibrant
            community dedicated to the growth and development of young children.
            Our deep passion for early childhood education drives us to create a
            supportive and enriching environment where every child is encouraged
            to explore, learn, and thrive.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
