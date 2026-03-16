'use client'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Link from 'next/link';

export const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
     axios.get("http://localhost:8080/places")
     .then((response) => {
       setPlaces(response?.data?.places);
     })
     .catch((error) => {
       console.error("Error fetching places:", error);
     });
  },[])

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlace(null);
  };

  return (
    <>
      <div className='bg-gray-500'>
        <section className="p-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Major Tourist Places
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {places.map((place) => (
              <div
                key={place.id}
                onClick={() => handlePlaceClick(place)}
                className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer bg-white"
              >
                <div className="relative h-40 w-full">
                  <img src={place.img} alt={place.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-black text-center font-semibold">{place.name}</h3>
                  <p className="text-gray-800 text-sm mt-2">{place.desc}</p>
                  <button className="mt-3 bg-green-500 text-white text-center px-4 py-1 rounded text-sm hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for Place Details */}
      {showModal && selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto">
            {/* Close Button */}
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-3xl font-bold">{selectedPlace.name}</h2>
              <button
                onClick={closeModal}
                className="text-4xl font-bold text-gray-600 hover:text-gray-900 w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              <img
                src={selectedPlace.img}
                alt={selectedPlace.name}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />

              {/* Description */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedPlace.details}
              </p>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">🗓️ Best Time to Visit</h4>
                  <p className="text-gray-700">{selectedPlace.bestTime}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">⏱️ Recommended Duration</h4>
                  <p className="text-gray-700">{selectedPlace.duration}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-900 mb-2">📍 Distance from Kathmandu</h4>
                  <p className="text-gray-700">{selectedPlace.distance}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-2">💰 Average Cost</h4>
                  <p className="text-gray-700">{selectedPlace.price}</p>
                </div>
              </div>

              {/* Activities */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-3 text-gray-800">🎯 Popular Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {(selectedPlace.activities || []).map((activity, index) => (
                    <span key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accommodation */}
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800">🏨 Accommodation Options</h4>
                <p className="text-gray-700">{selectedPlace.accommodation}</p>
              </div>

              {/* Booking Section */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Ready to explore?</h4>
                <p className="mb-4">Book your tour now and create unforgettable memories!</p>
                <Link href={`/Tourism/${selectedPlace.id}`}>
                  <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded hover:bg-gray-100 w-full">
                    Book Tour Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
