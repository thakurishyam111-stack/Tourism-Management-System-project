
"use client";
import React from "react";

const Package = [
  {
    title: "Everest Base Camp Trek",
    price: "$1200",
    days: "12 Days",
    image: "https://images.unsplash.com/photo-1544739313-6fadf3b9c8b7"
  },
  {
    title: "Pokhara Adventure Tour",
    price: "$450",
    days: "5 Days",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7"
  },
  {
    title: "Chitwan Jungle Safari",
    price: "$300",
    days: "3 Days",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44"
  }
];

function Packages() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Tour Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>

                <p className="text-gray-600 mb-2">{pkg.days}</p>

                <p className="text-green-700 text-lg font-semibold mb-4">
                  {pkg.price}
                </p>

                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Package;
