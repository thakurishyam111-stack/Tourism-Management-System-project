'use client'
import React, { useState } from 'react'

import Link from 'next/link';

const places = [
  {
    id: 1,
    name: "Kathmandu Valley",
    desc: "Cultural and historical heart of Nepal. city of temples and palaces.",
    img: "https://shambalahotel.com/wp-content/themes/yootheme/cache/11/intro-places-118df2b9.jpeg",
    details: "Kathmandu Valley is the cultural and historical heart of Nepal. This UNESCO World Heritage Site is home to over 2 million people and contains some of the most important temples and palaces in Nepal. Key attractions include the Durbar Square, Pashupatinath Temple, and Boudhanath Stupa.",
    bestTime: "September to November, February to March",
    duration: "2-3 days",
    distance: "In the capital city",
    activities: ["Temple visits", "Cultural tours", "Photography", "Local markets"],
    accommodation: "Hotels, Hostels, Guest Houses",
    price: "$100-500 per day"
  },
  {
    id: 2,
    name: "Pokhara",
    desc: "City of lakes and gateway to Annapurna.city of natural beauty.",
    img: "https://www.muktinathdarshan.com/sites/default/files/styles/large/public/destination/pokhara.jpg",
    details: "Pokhara is Nepal's most charming lakeside city and the gateway to the Annapurna region. Known for its natural beauty, it offers stunning views of the Annapurna Mountain range, beautiful lakes, and adventure activities.",
    bestTime: "October to November, February to March",
    duration: "3-5 days",
    distance: "200 km west of Kathmandu",
    activities: ["Boating", "Paragliding", "Hiking", "Mountain biking", "Swimming"],
    accommodation: "Hotels, Resorts, Lake-side Lodges",
    price: "$80-400 per day"
  },
  {
    id: 3,
    name: "Lumbini Nepal",
    desc: "Birthplace of Lord Buddha.city of spiritual significance.",
    img: "https://lumbinidevtrust.gov.np/upload_file/images/album/1719708304_1101946064_15.jpg",
    details: "Lumbini is the sacred birthplace of Siddhartha Gautama, who later became known as Lord Buddha. It is one of the most important pilgrimage sites for Buddhists worldwide and is a UNESCO World Heritage Site.",
    bestTime: "October to February",
    duration: "1-2 days",
    distance: "270 km southwest of Kathmandu",
    activities: ["Religious pilgrimage", "Temple visits", "Meditation", "Museum tours"],
    accommodation: "Basic lodges, Religious hostels",
    price: "$40-200 per day"
  },
  {
    id: 4,
    name: "Chitwan National Park",
    desc: "Wildlife and jungle safari destination.the first national park in Nepal.",
    img: "https://www.nepalliontours.com/wp-content/uploads/2017/04/1-1.jpg",
    details: "Chitwan National Park is Nepal's most visited national park and a UNESCO World Heritage Site. It is home to diverse wildlife including Bengal tigers, rhinoceros, leopards, and over 500 bird species.",
    bestTime: "October to March",
    duration: "2-3 days",
    distance: "170 km south of Kathmandu",
    activities: ["Jungle safari", "Elephant ride", "Birdwatching", "Canoe rides", "Nature walks"],
    accommodation: "Jungle lodges, Resorts, Camps",
    price: "$150-600 per day"
  },
  {
    id: 5,
    name: "Everest Base Camp",
    desc: "The Mount Everest is the highest peak in the world.",
    img: "https://www.nepalhiking.com/wp-content/uploads/2024/12/Elevation-of-Everest-Base-Camp-1135x626.jpg",
    details: "Everest Base Camp is the launching point for expeditions to Mount Everest, the world's highest mountain at 8,849 meters. The trek to base camp is one of the most popular trekking routes in the world.",
    bestTime: "May-June, September-October",
    duration: "12-14 days",
    distance: "140 km northeast of Kathmandu",
    activities: ["Trekking", "Mountain climbing", "Photography", "Acclimatization"],
    accommodation: "Mountain lodges, Tea houses",
    price: "$200-1000 per day"
  },
  {
    id: 6,
    name: "Ghandruk Village",
    desc: "The ghandruk is a beautiful village located in the Annapurna region.",
    img: "https://himalayan-masters.com/wp-content/uploads/2024/08/Gurung-Cottage-Ghandruk.webp",
    details: "Ghandruk is a picturesque Gurung village in the Annapurna region, known for its traditional architecture and stunning mountain views. It's a perfect destination for those seeking authentic Nepali culture.",
    bestTime: "September to November, February to April",
    duration: "2-3 days",
    distance: "190 km northwest of Kathmandu",
    activities: ["Trekking", "Cultural immersion", "Photography", "Homestays"],
    accommodation: "Homestays, Village lodges, Teahouses",
    price: "$60-250 per day"
  },
  {
    id: 7,
    name: "Mustan Valley",
    desc: "The mustan valley is a remote and isolated region located in the northern part of Nepal.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/17/bd/muktinath-temple.jpg?w=1400&h=1400&s=1",
    details: "Mustang Valley is a remote Himalayan region known for its otherworldly landscape, ancient Buddhist culture, and Tibetan-influenced traditions. It's one of Nepal's most pristine and isolated regions.",
    bestTime: "April to May, September to October",
    duration: "14-16 days",
    distance: "220 km from Kathmandu",
    activities: ["Trekking", "Cultural exploration", "Monastery visits", "Photography"],
    accommodation: "Tea houses, Basic lodges",
    price: "$100-500 per day"
  },
  {
    id: 8,
    name: "Rara Lake",
    desc: "The rara lake is the largest lake in Nepal.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6AOaZOOuFyLDqtZ61AI0QyflyriXXN8w0g&s",
    details: "Rara Lake is Nepal's largest lake, located in the remote Jumla District. It is known for its pristine beauty, clear blue waters, and surrounding pine forests, making it a perfect destination for trekkers.",
    bestTime: "May to June, September to October",
    duration: "5-7 days",
    distance: "260 km northwest of Kathmandu",
    activities: ["Trekking", "Fishing", "Photography", "Wildlife viewing"],
    accommodation: "Basic teahouses, Local lodges",
    price: "$80-300 per day"
  },
];

export const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      <div className='bg-gray-600'>
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
                  <h3 className="text-xl text-black font-semibold">{place.name}</h3>
                  <p className="text-green-600 text-sm mt-2">{place.desc}</p>
                  <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600">
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
                  {selectedPlace.activities.map((activity, index) => (
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
