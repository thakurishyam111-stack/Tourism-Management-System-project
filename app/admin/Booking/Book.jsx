'use client'
import React, { useState } from 'react'

const Book = () => {
  const [bookings, setBookings] = useState([
    { id: 1, place: "Kathmandu Valley", date: "2024-02-15", guests: 4, status: "Confirmed" },
    { id: 2, place: "Pokhara", date: "2024-03-20", guests: 2, status: "Pending" },
  ]);

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    guests: 1,
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.place || !formData.date) {
      alert("Please fill in all fields");
      return;
    }
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

  const confirmBooking = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: "Confirmed" } : booking
    ));
    alert("Booking confirmed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">📅 Booking Management System</h1>
          <p className="text-gray-600 text-lg">Manage and track all your tourism bookings</p>
        </div>

        {/* Add Booking Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowBookingForm(true)}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            + Add New Booking
          </button>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">All Bookings</h2>

          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">ID</th>
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">📍 Destination</th>
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">📅 Travel Date</th>
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">👥 Guests</th>
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">Status</th>
                    <th className="pb-4 px-4 text-left font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                      <td className="py-4 px-4 text-gray-800 font-semibold">{booking.id}</td>
                      <td className="py-4 px-4 text-gray-800 font-semibold">{booking.place}</td>
                      <td className="py-4 px-4 text-gray-700">{booking.date}</td>
                      <td className="py-4 px-4 text-gray-700">{booking.guests} person(s)</td>
                      <td className="py-4 px-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${booking.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-3">
                          {booking.status !== "Confirmed" && (
                            <button
                              onClick={() => confirmBooking(booking.id)}
                              className="text-green-600 hover:text-green-800 font-bold transition hover:underline text-sm"
                            >
                              Confirm
                            </button>
                          )}
                          <button
                            onClick={() => cancelBooking(booking.id)}
                            className="text-red-600 hover:text-red-800 font-bold transition hover:underline text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12 text-lg">🎒 No bookings yet.</p>
          )}
        </div>

        {/* Booking Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-blue-700 mb-2">{bookings.length}</div>
            <p className="text-gray-700 font-semibold">Total Bookings</p>
            <p className="text-gray-500 text-sm mt-1">All bookings</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-green-700 mb-2">{bookings.filter(b => b.status === "Confirmed").length}</div>
            <p className="text-gray-700 font-semibold">Confirmed Bookings</p>
            <p className="text-gray-500 text-sm mt-1">Ready to go</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-600 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-yellow-700 mb-2">{bookings.filter(b => b.status === "Pending").length}</div>
            <p className="text-gray-700 font-semibold">Pending Bookings</p>
            <p className="text-gray-500 text-sm mt-1">Awaiting confirmation</p>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900">✈️ New Booking</h3>
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
                ✓ Create Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Book