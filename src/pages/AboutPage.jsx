import React from 'react';
import { motion } from 'framer-motion';
import bgImage from "../assets/teacher.avif";
import img1 from "../assets/clss3.jpg";
import img2 from "../assets/kid5.jpg";
import img3 from "../assets/clss4.jpg";
import img4 from "../assets/kid6.jpg";
import kid from "../assets/kid4.jpg";
import ball from "../assets/ball.svg";
import lolipop from "../assets/lolipop.svg";
import smile from "../assets/smile.svg";
import bag from "../assets/bag.svg";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import Blogs from '../components/Blogs';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';

function AboutPage() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: customDelay },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="h-[80vh] md:h-screen bg-cover bg-center relative "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-4 text-center">
          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-8xl font-bold font-inter relative z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.2 }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg md:text-xl text-white font-inter font-semibold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true, amount: 0.2 }}
          >
            We help children engage their bodies and minds through fun and educational activities.
          </motion.p>
        </div>

        {/* Floating decorative SVGs */}
        <motion.img src={ball} alt="ball" loading="lazy" className="absolute top-1/3 left-6 w-16 h-16 opacity-80 animate-float brightness-0 invert"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
        />
        <motion.img src={lolipop} alt="lolipop" loading="lazy" className="absolute bottom-1/3 left-10 w-16 h-16 opacity-70 animate-float brightness-0 invert"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.img src={smile} alt="smile" loading="lazy" className="absolute top-1/3 right-6 w-16 h-16 opacity-80 animate-float brightness-0 invert"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img src={bag} alt="bag" loading="lazy" className="absolute bottom-1/3 right-10 w-16 h-16 opacity-70 animate-float brightness-0 invert"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
        />
      </section>

      {/* Community Section */}
      <section className="min-h-screen bg-blue-900 flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 gap-10 py-12">
        <motion.div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-lg"
          variants={textVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 className="text-white font-inter text-5xl lg:text-5xl font-bold" variants={textVariants} initial="hidden" whileInView="visible" custom={0.1}>
            Our <span className="text-coral">Community</span>
          </motion.h1>
          <motion.p className="text-base lg:text-lg text-white leading-relaxed font-inter font-semibold" variants={textVariants} initial="hidden" whileInView="visible" custom={0.2}>
            Our families come from neighborhoods, creating a close-knit environment and strong parent partnerships. Whether we’re close to home or near the office, our center is ideal for working families and easy to get to – for pick-up and drop-off or to stop in for a visit.
          </motion.p>
          <motion.div className="flex space-x-6 text-2xl text-[#fe7162]" variants={textVariants} initial="hidden" whileInView="visible" custom={0.3}>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-200"><FaWhatsapp /></a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-1/2">
          <motion.img src={img1} alt="Community 1" className="w-full h-[150px] sm:h-[200px] object-cover rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img src={img2} alt="Community 2" className="w-full h-[150px] sm:h-[200px] object-cover rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img src={img3} alt="Community 3" className="w-full h-[150px] sm:h-[200px] object-cover rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img src={img4} alt="Community 4" className="w-full h-[150px] sm:h-[200px] object-cover rounded-2xl lg:rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
      </section>

      {/* Graduates Section */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-screen">
        <div className="w-full lg:w-1/2">
          <motion.img src={kid} alt="kid" loading="lazy" className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-tr-3xl lg:rounded-none"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <motion.div className="flex flex-col items-center lg:items-start justify-center p-6 space-y-6 text-center lg:text-left max-w-xl mx-auto"
          initial="hidden" whileInView="visible" variants={textVariants} custom={0.1} viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 className="text-blue-900 font-inter text-5xl lg:text-5xl font-bold" variants={textVariants} initial="hidden" whileInView="visible" custom={0.2}>
            Our <span className="text-coral">Graduates</span>
          </motion.h1>
          <motion.p className="text-blue-800 text-lg lg:text-lg leading-relaxed font-inter font-semibold" variants={textVariants} initial="hidden" whileInView="visible" custom={0.3}>
            At Crayons Child Academy, we prepare educators to be confident, skilled, and compassionate.
            Our programs combine knowledge, practical experience, and leadership skills.
            Graduates are ready to guide and inspire young learners with care.
            <br /><br />
            They step into early childhood education equipped to create positive learning environments.
            With dedication and understanding, they leave a lasting impact on every child.
            Their teaching shapes bright futures and nurtures young minds with love.
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery + Blogs + CTA */}
      <Gallery />
      <Blogs />
      <CallToAction />
    </>
  );
}

export default AboutPage;
