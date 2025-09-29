import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/baloo-2"; 


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import WhatsappButton from "./components/WhatsappButton";

// Landing page sections (keep these normally imported)
import Home from "./pages/Home";
import Provide from "./components/Provide";
import Classes from "./components/Classes";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Blogs from "./components/Blogs";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/Faq";


// ✅ Lazy load full pages
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ClassesPage = React.lazy(() => import("./pages/ClassesPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function LandingPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      <section id="provide">
        <Provide />
      </section>
 
      <section id="classes">
        <Classes />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="calltoaction">
        <CallToAction />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* ✅ Navbar always visible */}
      <Navbar />

      {/* Floating WhatsApp Button */}
      <WhatsappButton />

      <Scroll />

      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      {/* ✅ Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;