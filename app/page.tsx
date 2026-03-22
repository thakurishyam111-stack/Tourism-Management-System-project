import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans">

     
      {/* Hero Section */}
      <section className="h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.cntraveller.in/photos/6621101e437714505a7ebe56/16:9/w_1280,c_limit/GettyImages-1439040510.jpg')",
        }}
      >
        <div className="text-center text-white  p-20 m-10 rounded">
          <h1 className="text-5xl font-bold mb-4">
            Explore Beautiful Nepal
          </h1>
          <p className="mb-6 text-lg">
            Discover amazing places with our best tour packages
          </p>
          {/* <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
            Book Now
          </button> */}
        </div>
      </section>

      {/* Destinations */}
     
        <Navbar/>
        <Footer/>
    </div>
  );
};

export default LandingPage;