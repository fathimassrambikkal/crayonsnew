import React from "react";
import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid4.jpg";
import kid3 from "../assets/kid3.jpg";
import kid4 from "../assets/kid6.jpg";
import kid6 from "../assets/kid2.jpg";
import kid7 from "../assets/kid5.jpg";

function Gallery() {
  // Mix of local + Unsplash images
  const images = [
    { id: 1, src: kid1, },
    { id: 2, src: kid2,  },
    { id: 6, src: kid6, },
    { id: 7, src: kid7,  },
     { id: 3, src: kid3,  },
    { id: 4, src: kid4,  },
  ];

  return (
    <section className="px-6 md:px-16 py-12">
      {/* Title */}
      <div className="mx-auto max-w-6xl mb-8 text-center">
        <span className="inline-block bg-blue-900 text-white rounded-full px-6 py-2 text-base font-semibold font-inter tracking-wider uppercase">
          Our Gallery
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-coral font-inter">
          Moments from Our Classroom
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img) => (
            <figure
              key={img.id}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden relative group"
            >
              <img
                src={img.src}
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Overlay */}
              <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {/* Badge on hover */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-white/90 text-blue-900 px-3 py-1 rounded-full">
                  {img.alt}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
