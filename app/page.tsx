import Navbar from "@/component/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans">

     
      {/* Hero Section */}
      <section className="h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.kimkim.com/files/a/content_articles/featured_photos/95553f94d93aea6a42ea8ee16315830ac41fcd7a/big-742b52a5e89568dd813531fc63897836.jpg')",
        }}
      >
        <div className="text-center text-white bg-black/50 p-10 rounded">
          <h1 className="text-5xl font-bold mb-4">
            Explore Beautiful Nepal
          </h1>
          <p className="mb-6 text-lg">
            Discover amazing places with our best tour packages
          </p>
          <button className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Pokhara</h3>
              <p>Enjoy lakes, mountains and adventure sports.</p>
            </div>
          </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Kathmandu</h3>
              <p>Explore temples, culture and heritage sites.</p>
            </div>
          </div>

          <div className="bg-white shadow rounded overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544739313-3b0c4b2a1d7a" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Everest Region</h3>
              <p>Experience trekking near the world's highest peak.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Packages */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tour Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Pokhara Tour</h3>
            <p className="mb-3">3 Days / 2 Nights</p>
            <p className="mb-4 font-semibold">$150</p>
            <button className="bg-blue-500 px-4 py-2 text-white rounded">
              Book Now
            </button>
          </div>

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Kathmandu Tour</h3>
            <p className="mb-3">2 Days / 1 Night</p>
            <p className="mb-4 font-semibold">$100</p>
            <button className="bg-blue-500 px-4 py-2 text-white rounded">
              Book Now
            </button>
          </div>

          <div className="border p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Everest Trek</h3>
            <p className="mb-3">10 Days</p>
            <p className="mb-4 font-semibold">$900</p>
            <button className="bg-blue-500 px-4 py-2 text-white rounded">
              Book Now
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-5">
        <Navbar/>
      </footer>

    </div>
  );
};

export default LandingPage;