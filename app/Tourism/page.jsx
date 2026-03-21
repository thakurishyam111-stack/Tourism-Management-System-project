'use client'
import React from "react";
import Footer from "../../component/Footer";
import { Places } from "../../component/Places";
import About from "../../component/About";
import Services from "../../component/Services";
import Navbar from "../../component/Navbar";
import Package from "../../component/Package";

const App = () => {
  return (
    <>
    <Navbar/>
      <div className="font-sans bg-white">

        {/* Hero Section */}
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden" 
        style={{ backgroundImage: "url(https://montaxe.com/wp-content/uploads/2024/04/Nepal-tourism.webp)" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          <div className="relative z-10 text-center max-w-3xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Discover Nepal
            </h1>
            <p className="text-2xl md:text-2xl text-white mb-8 drop-shadow-md font-light">
              Experience the magic of mountains, culture, and adventure
            </p>
          </div>
        </div>

        {/* Main Content */}
        <About />
        <Places />
        <Services />
        {/* <Package/> */}

        <Footer />
      </div>
    </>
  );
}
export default App;