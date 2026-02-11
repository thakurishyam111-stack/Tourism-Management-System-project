'use client'
import React from "react";
import Footer from "../../component/Footer";
import { Places } from "../../component/Places";
import About from "../../component/About";
import Services from "../../component/Services";
import Book from "../admin/Booking/Book";

const App = () => {
  return (
    <>
      <div className="font-sans bg-white">
        {/* Hero Section */}
        <div className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          <div className="relative z-10 text-center max-w-3xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Discover Nepal
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md font-light">
              Experience the magic of mountains, culture, and adventure
            </p>
          </div>
        </div>

        {/* Main Content */}
        <About />
        <Places />
        <Services />
        <Book/>

        <Footer />
      </div>
    </>
  );
}
export default App;