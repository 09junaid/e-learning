import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/Home/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import PricingCards from "./pages/PricingCards";

export default function App() {
  return (
    <>
    <BrowserRouter>     
     <Navbar />
     <Routes>
     <Route path="/" element={<HeroSection />} />
     <Route path='/about' element={<About/>}/>
     <Route path='/course' element={<Course/>}/>
     <Route path='/price' element={ <PricingCards/>}/>
     </Routes>
      <Footer />
      </BrowserRouter> 
    </>
  );
}
