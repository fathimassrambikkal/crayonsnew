import React from "react";
import { Link } from "react-router-dom";
import ball from "../assets/ball.svg";
import lolipop from "../assets/lolipop.svg";
import smile from "../assets/smile.svg";
import bag from "../assets/bag.svg";

function CallToAction() {
  return (
    <section className="px-6 md:px-16 py-8 md:py-12">
      <div className="relative text-center mx-auto bg-coral text-white py-20 px-8 md:px-40 rounded-[3rem] md:rounded-[5rem] overflow-hidden">
        {/* Decorative SVGs */}
        <img
          src={ball}
          alt="ball" loading="lazy"
          className="absolute top-6 left-16 sm:left-10 sm:top-6 w-14 h-14 opacity-80 animate-bounce-slow brightness-0 invert"
        />
        <img
          src={lolipop}
          alt="lolipop" loading="lazy"
          className="absolute bottom-8 left-20 sm:left-12 sm:bottom-10 w-14 h-14 opacity-80 animate-float brightness-0 invert"
        />
        <img
          src={smile}
          alt="smile" loading="lazy"
          className="absolute top-6 right-20 sm:right-10 sm:top-6 w-14 h-14 opacity-80 animate-bounce-slow brightness-0 invert"
        />
        <img
          src={bag}
          alt="bag" loading="lazy"
          className="absolute bottom-8 right-24 sm:right-12 sm:bottom-10 w-14 h-14 opacity-80 animate-float brightness-0 invert"
        />

        {/* Content */}
        <h2 className="text-3xl md:text-5xl font-bold font-inter leading-snug relative z-10">
          Ready to Give Your Child <br /> the Best Start
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white/90 text-base md:text-xl relative z-10 font-inter">
          With experienced educators, a safe and engaging environment, and a
          focus on individual growth.
        </p>

        {/* Enquire Now Button */}
        <Link
          to="/contact"
          className="mt-8 inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition relative z-10 "
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
