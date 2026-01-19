'use client'
import React, { useState } from "react";
import Footer from "../../component/Footer";
import { Places } from "../../component/Places";
import About from "../../component/About";
import Services from "../../component/Services";

const App = () => {
  const [bookings, setBookings] = useState([
    { id: 1, place: "Kathmandu Valley", date: "2024-02-15", guests: 4, status: "Confirmed" },
    { id: 2, place: "Pokhara", date: "2024-03-20", guests: 2, status: "Pending" },
  ]);

  const [stats] = useState({
    totalBookings: 1,
    upcomingTrips: 12,
    placesVisited: 8,
    totalSpent: "$5,450",
  });

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    guests: 1,
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: bookings.length + 1,
      place: formData.place,
      date: formData.date,
      guests: formData.guests,
      status: "Pending",
    };
    setBookings([...bookings, newBooking]);
    setFormData({ place: "", date: "", guests: 1 });
    setShowBookingForm(false);
    alert("Booking submitted successfully!");
  };

  const cancelBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    alert("Booking cancelled!");
  };

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
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
            >
              📅 Book Your Adventure Today
            </button>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-4 text-center text-slate-900">My Travel Dashboard</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Manage your bookings and track your adventures</p>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stats.totalBookings}</div>
                <p className="text-gray-700 font-semibold">Active Bookings</p>
                <p className="text-gray-500 text-sm mt-1">Your current trips</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-green-700 mb-2">✈️ {stats.upcomingTrips}</div>
                <p className="text-gray-700 font-semibold">Available Trips</p>
                <p className="text-gray-500 text-sm mt-1">Ready to explore</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-purple-700 mb-2">🌍 {stats.placesVisited}</div>
                <p className="text-gray-700 font-semibold">Places Explored</p>
                <p className="text-gray-500 text-sm mt-1">Destinations visited</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-amber-700 mb-2">💵 {stats.totalSpent}</div>
                <p className="text-gray-700 font-semibold">Total Invested</p>
                <p className="text-gray-500 text-sm mt-1">In your journeys</p>
              </div>
            </div>

            {/* My Bookings Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900">📌 My Bookings</h3>
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-6 rounded-lg transition transform hover:scale-105"
                >
                  + Add New Booking
                </button>
              </div>

              {bookings.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="pb-4 text-left font-bold text-gray-700 px-4">📍 Destination</th>
                        <th className="pb-4 text-left font-bold text-gray-700 px-4">📅 Travel Date</th>
                        <th className="pb-4 text-left font-bold text-gray-700 px-4">👥 Guests</th>
                        <th className="pb-4 text-left font-bold text-gray-700 px-4">Status</th>
                        <th className="pb-4 text-left font-bold text-gray-700 px-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                          <td className="py-4 px-4 text-gray-800 font-semibold">{booking.place}</td>
                          <td className="py-4 px-4 text-gray-700">{booking.date}</td>
                          <td className="py-4 px-4 text-gray-700">{booking.guests} person(s)</td>
                          <td className="py-4 px-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold ${booking.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button
                              onClick={() => cancelBooking(booking.id)}
                              className="text-red-600 hover:text-red-800 font-bold transition hover:underline"
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-12 text-lg">🎒 No bookings yet. Start your adventure now!</p>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-slate-900">🏔️ Top Destinations</h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200 hover:bg-gray-50 p-2 rounded transition">
                    <span className="text-gray-800 font-semibold">Everest Base Camp Trek</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-200 hover:bg-gray-50 p-2 rounded transition">
                    <span className="text-gray-800 font-semibold">Pokhara Lake City</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full w-4/6"></div>
                    </div>
                  </li>
                  <li className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition">
                    <span className="text-gray-800 font-semibold">Kathmandu Valley</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full w-11/12"></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-slate-900">🎉 Exclusive Offers</h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500 hover:shadow-md transition">
                    <p className="text-red-700 font-bold text-lg">🎯 Everest Trek Special</p>
                    <p className="text-gray-600 text-sm mt-2">Get 20% discount on bookings this month</p>
                    <p className="text-red-600 font-semibold text-sm mt-2">Limited time offer!</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500 hover:shadow-md transition">
                    <p className="text-green-700 font-bold text-lg">🌿 Nature Package Deal</p>
                    <p className="text-gray-600 text-sm mt-2">Explore 5 destinations with 15% savings</p>
                    <p className="text-green-600 font-semibold text-sm mt-2">Valid till next month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900">✈️ Book Your Trip</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-3xl text-gray-400 hover:text-gray-700 transition"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-bold mb-3">Select Your Destination</label>
                  <select
                    value={formData.place}
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700 font-semibold"
                  >
                    <option value="">-- Choose a place --</option>
                    <option value="Kathmandu Valley">🏛️ Kathmandu Valley</option>
                    <option value="Pokhara">🏞️ Pokhara</option>
                    <option value="Lumbini Nepal">🙏 Lumbini Nepal</option>
                    <option value="Chitwan National Park">🐅 Chitwan National Park</option>
                    <option value="Everest Base Camp">🏔️ Everest Base Camp</option>
                    <option value="Ghandruk Village">🏘️ Ghandruk Village</option>
                    <option value="Mustan Valley">🏜️ Mustan Valley</option>
                    <option value="Rara Lake">💎 Rara Lake</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-3">📅 When will you travel?</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-3">👥 How many guests?</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 mt-8 text-lg"
                >
                  ✓ Confirm Booking
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Main Content */}
        <About />
        <Places />
        <Services />
        
        <Footer />
      </div>
    </>
  );
}
export default App;