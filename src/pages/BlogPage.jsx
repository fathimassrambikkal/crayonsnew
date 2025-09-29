import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from "../assets/blog.avif";
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/clss2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/math.jpg";
import img5 from "../assets/clss6.jpg";
import img6 from "../assets/clss3.jpg";

import ball from "../assets/ball.svg";
import lolipop from "../assets/lolipop.svg";
import smile from "../assets/smile.svg";
import bag from "../assets/bag.svg";
import CallToAction from '../components/CallToAction';
import Blog from '../components/Blogs';

function BlogPage() {
  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  const blogs = [
    { 
      id: 1,
      img: img1, 
      title:"5 Tips for Parents", 
      desc:"Kindergartners who are relatively younger than their classroom peers are at risk for doing less well in school. Tips for helping your child adapt, build confidence, and stay engaged in class activities." 
    },
    { 
      id: 2,
      img: img2, 
      title:"Steps for Choosing a Learning Center", 
      desc:"No matter the motivation or your family’s needs, it’s important to find the best daycare to enroll your little one. Consider curriculum, safety, teacher qualifications, location, and cost before choosing a learning center." 
    },
    { 
      id: 3,
      img: img3, 
      title:"Choose the Best Child Care Center", 
      desc:"Your child’s first five years are key to building lifelong confidence, as they’re learning every day and in every way. Observe classroom interactions, child-teacher ratio, and enrichment activities to ensure a quality experience." 
    },
    { 
      id: 4,
      img: img4, 
      title:"The Best Learning Toys for Little Kids", 
      desc:"Building blocks, play dough, and crafts allow children to do so much more than stack and stretch their imaginations! Encourage creativity, problem-solving, and motor skills by providing a variety of learning toys at home." 
    },
    { 
      id: 5,
      img: img5, 
      title:"Things to Prepare Before Kindergarten", 
      desc:"New friends, new skills, and all-day fun: There’s a lot to look forward to in kindergarten! Prepare your child emotionally and socially, pack essentials, and talk about the school routine beforehand." 
    },
    { 
      id: 6,
      img: img6, 
      title:"Easy Gifts Preschoolers Can Make", 
      desc:"Gifts from preschoolers can be a gamble — often leaving the recipient scratching their head asking, “What is this?” Simple crafts like handmade cards, painted rocks, or decorated bookmarks make perfect gifts and encourage creativity." 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-[80vh] md:h-screen bg-cover bg-center relative">
        <img src={bgImage} alt="Blog Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-4 text-center"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-bold font-inter">Blog</h1>
        </motion.div>
        <motion.img src={ball} alt="ball" className="absolute top-1/3 left-6 w-20 h-20 opacity-80 animate-float brightness-0 invert"/>
        <motion.img src={lolipop} alt="lolipop" className="absolute bottom-1/3 left-6 w-20 h-20 opacity-80 animate-float brightness-0 invert"/>
        <motion.img src={smile} alt="smile" className="absolute top-1/3 right-6 w-20 h-20 opacity-80 animate-float brightness-0 invert"/>
        <motion.img src={bag} alt="bag" className="absolute bottom-1/3 right-6 w-20 h-20 opacity-80 animate-float brightness-0 invert"/>
      </section>

      {/* Blog Cards Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCard blog={blog} expandedId={expandedId} toggleExpand={() => toggleExpand(blog.id)} />
            </motion.div>
          ))}
        </div>
      </section>

      <Blog/>
      <CallToAction/>
    </>
  );
}

// Blog Card with 1-line preview & expandable paragraph
function BlogCard({ blog, expandedId, toggleExpand }) {
  const isExpanded = expandedId === blog.id;

  return (
    <div className="bg-white border-4 border-white p-4 rounded-2xl shadow-lg flex flex-col h-full">
      <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover rounded-lg mb-4"/>
      <h2 className="text-xl font-inter font-semibold text-blue-900 mb-2">{blog.title}</h2>

      <motion.div
        initial={{ height: 20 }}
        animate={{ height: isExpanded ? "auto" : 20 }}
        className="overflow-hidden text-blue-800 text-sm font-inter"
      >
        <p>{blog.desc}</p>
      </motion.div>

      <button
        onClick={toggleExpand}
        className="self-start mt-3 bg-coral text-white px-2 py-1 rounded text-xs hover:bg-coral/80 transition"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default BlogPage;
