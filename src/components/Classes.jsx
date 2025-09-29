import React from "react";
import clss1 from "../assets/kid4.jpg";
import clss2 from "../assets/clss4.jpg";
import clss3 from "../assets/clss3.jpg";
import clss4 from "../assets/clss2.jpg";

function Classes() {
  const classesData = [
    {
      id: 1,
      title: "Creative Learning Class",
      description:
        "A fun and engaging space where children explore art, music, and interactive activities that boost confidence and creativity.",
      age: "3 - 5 Years",
      seats: "30 Kids",
      classCount: "5",
      time: "9 AM - 12 PM",
      img: clss1,
    },
    {
      id: 2,
      title: "Music & Rhythm Class",
      description:
        "Kids develop rhythm, coordination, and confidence through fun musical activities and group performances.",
      age: "4 - 6 Years",
      seats: "20 Kids",
      classCount: "3",
      time: "10 AM - 1 PM",
      img: clss2,
    },
    {
      id: 3,
      title: "Art & Craft Class",
      description:
        "Children create exciting crafts, paintings, and DIY projects to build creativity and imagination.",
      age: "5 - 7 Years",
      seats: "25 Kids",
      classCount: "4",
      time: "2 PM - 5 PM",
      img: clss3,
    },
    {
      id: 4,
      title: "Science Explorer Class",
      description:
        "Fun experiments and activities that make science exciting, engaging, and easy to understand for young minds.",
      age: "6 - 8 Years",
      seats: "15 Kids",
      classCount: "2",
      time: "11 AM - 2 PM",
      img: clss4,
    },
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-16 py-12 overflow-hidden font-inter">
      {/* Gradient Background with Blur */}
      <div className="absolute inset-0 bg-white blur-3xl opacity-70 -z-10"></div>

      {/* Smaller span */}
      <span className="mx-auto w-fit block text-center bg-blue-900/80 rounded-full px-6 py-2 text-base md:text-base text-white font-inter font-semibold uppercase tracking-wide mb-8 backdrop-blur-sm">
        Popular Classes
      </span>

      {/* Grid Layout 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {classesData.map((item) => (
          <div
            key={item.id}
            className="bg-white border-8 border-white p-4 rounded-2xl shadow-lg flex flex-col"
          >
            {/* Image with Overlay */}
            <div className="relative group">
              <img
                src={item.img}
                alt={item.title} loading="lazy"
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4 rounded-lg">
                <h2 className="text-4xl font-extrabold mb-2 text-[#fe7162] font-kids">
                  {item.title}
                </h2>
                <p className="text-white text-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Info Table */}
            <div className="my-4">
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-1 font-semibold">Age:</td>
                    <td className="py-1">{item.age}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 font-semibold">Seats:</td>
                    <td className="py-1">{item.seats}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-1 font-semibold">Class:</td>
                    <td className="py-1">{item.classCount}</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-semibold">Join Time:</td>
                    <td className="py-1">{item.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Smaller Button */}
            <button className="self-start bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e65a4c] transition">
              Join Class
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
