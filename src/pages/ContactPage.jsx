import React from 'react';
import { motion } from 'framer-motion';
import bgImage from "../assets/contact.avif";

import ball from "../assets/ball.svg";
import lolipop from "../assets/lolipop.svg";
import smile from "../assets/smile.svg";
import bag from "../assets/bag.svg";

function ContactPage() {
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
      <section className="h-[80vh] md:h-screen bg-cover bg-center relative">
        {/* Background image */}
        <img
          src={bgImage}
          alt="Contact Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-4 text-center">
          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-8xl font-bold font-inter relative z-10"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.2 }}
          >
            Contact Us
          </motion.h1>
        </div>

        {/* Decorative SVGs */}
        <img src={ball} alt="ball" loading="lazy" className="absolute top-1/3 left-6 w-16 h-16 opacity-80 animate-float brightness-0 invert" />
        <img src={lolipop} alt="lolipop" loading="lazy" className="absolute bottom-1/3 left-6 w-16 h-16 opacity-80 animate-float brightness-0 invert" />
        <img src={smile} alt="smile" loading="lazy" className="absolute top-1/3 right-6 w-16 h-16 opacity-80 animate-float brightness-0 invert" />
        <img src={bag} alt="bag" loading="lazy" className="absolute bottom-1/3 right-6 w-16 h-16 opacity-70 animate-float brightness-0 invert" />
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 flex flex-col items-center">
        <h1 className="font-inter text-blue-900 text-3xl md:text-5xl font-bold text-center mb-12">
          Do You <span className="text-coral">Have Questions?</span>
        </h1>

        <form
          className="bg-white rounded-3xl shadow-lg p-10 md:p-16 max-w-4xl w-full space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;

            const name = form.userName.value;
            const phone = form.phone.value;
            const email = form.email.value;
            const age = form.age.value;
            const comments = form.comments.value;

            const whatsappNumber = "+917306682471";

            const message = `Hello, I would like to contact you:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Age of Child: ${age}%0A
Comments: ${comments}`;

            const url = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(url, "_blank");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-bold text-blue-900">Name*</label>
              <input
                type="text"
                name="userName"
                placeholder="Your Name"
                className="rounded-full border border-blue-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold text-blue-900">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="rounded-full border border-blue-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold text-blue-900">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-full border border-blue-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-bold text-blue-900">Age of Child*</label>
              <input
                type="number"
                name="age"
                placeholder="Age of Child"
                className="rounded-full border border-blue-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coral"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-bold text-blue-900">Comments*</label>
            <textarea
              name="comments"
              placeholder="Leave us your comments"
              className="rounded-xl border border-blue-900 px-4 py-3 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-coral"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-3 bg-coral text-white font-inter font-semibold text-xl rounded-full hover:bg-blue-900 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="w-2/3 mx-auto h-[200px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.63826813447!2d75.80271479999999!3d11.214377099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6598f2b026b91%3A0x8ad9a2be30eb9ecb!2sCrayons%20Child%20Academy!5e0!3m2!1sen!2sin!4v1757516185693!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

export default ContactPage;
