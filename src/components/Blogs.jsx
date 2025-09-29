import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import clss1 from "../assets/kid3.jpg";
import clss2 from "../assets/clss3.jpg";
import clss3 from "../assets/kid4.jpg";

function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const articles = [
    { id: 1, title: "The Importance of Early Learning", description: "Discover how early childhood education shapes the future of kids.", img: clss1, link: "#" },
    { id: 2, title: "Fun Activities for Kids at Home", description: "Creative and engaging activities that help kids learn while having fun.", img: clss2, link: "#" },
    { id: 3, title: "Building Social Skills in Children", description: "Why social interaction is important and how parents can encourage it.", img: clss3, link: "#" },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slider for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % articles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, articles.length]);

  // Animate slide change
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [current]);

  // Touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent(prev => (prev + 1) % articles.length);
      else setCurrent(prev => (prev - 1 + articles.length) % articles.length);
    }
  };

  return (
    <div className="px-6 md:px-10 py-16">
      <h1 className="text-5xl font-bold text-blue-900 mb-12 flex justify-center items-center font-inter">
        Latest <span className="text-coral">&nbsp;News</span>
      </h1>

      {isMobile ? (
        <div className="relative">
          <div
            ref={slideRef}
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="p-6 bg-white shadow-lg font-inter flex flex-col items-center transition-all">
              <img
                src={articles[current].img}
                alt={articles[current].title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-900 mb-3">{articles[current].title}</h2>
              <p className="text-blue-700 mb-6">{articles[current].description}</p>
              <a
                href={articles[current].link}
                className="text-coral font-semibold hover:underline self-start"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === current ? "bg-coral" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition flex flex-col"
            >
              <img
                src={article.img}
                alt={article.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-900 mb-3">{article.title}</h2>
              <p className="text-blue-700 mb-6 flex-grow">{article.description}</p>
              <a
                href={article.link}
                className="text-coral font-semibold hover:underline self-start"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;
