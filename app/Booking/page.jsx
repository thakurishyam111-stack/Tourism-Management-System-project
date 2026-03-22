"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    guests: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLoggedInUser(user);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to book a tour");
      router.push("/Login");
    }
  }, [router]);

  
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!formData.place || !formData.date) {
      alert("Please fill in all fields");
      return;
    }

    // Convert form date and today to Date objects
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Only consider date, ignore time

    if (selectedDate < today) {
      alert("⚠️ You cannot book a past date!");
      return;
    }

    // If all ok, create new booking
    const newBooking = {
      id: bookings.length + 1,
      userEmail: loggedInUser.email,
      place: formData.place,
      date: formData.date,
      guests: formData.guests,
      status: "Pending",
    };

    setBookings([...bookings, newBooking]);
    setFormData({ place: "", date: "", guests: 1 });
    setShowBookingForm(false);
    alert("✅ Booking submitted successfully!");
  };
  const cancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    alert("Booking cancelled!");
  };

  const confirmBooking = (id) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: "Confirmed" } : booking,
      ),
    );
    alert("Booking confirmed!");
  };

  return (
    <div className=" bg-gray-800 min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        /{/* Add Booking Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowBookingForm(true)}
            className="bg-blue-500 from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            + Add New Booking
          </button>
        </div>
      </div>
      {/* Booking Status Section */}
      <div className="bg-gray-400 rounded-xl shadow-lg p-8 border border-gray-100 mt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
          Booking Status
        </h2>

        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-200">
                  <th className="pb-4 px-4 text-center font-bold text-gray-700 p-2 ">
                    ID
                  </th>
                  <th className="pb-4 px-4 text-center font-bold text-gray-700 p-2 ">
                    Destination
                  </th>
                  <th className="pb-4 px-4 text-center font-bold text-gray-700 p-2 ">
                    Travel Date
                  </th>
                  <th className="pb-4 px-4 text-center font-bold text-gray-700 p-2 ">
                    Guests
                  </th>
                  <th className="pb-4 px-4 text-center font-bold text-gray-700 p-2 ">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings
                  .filter((b) => b.userEmail === loggedInUser.email)
                  .map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                      <td className="py-4 px-4 text-gray-800 font-semibold">{booking.id}</td>
                      <td className="py-4 px-4 text-gray-800 font-semibold">{booking.place}</td>
                      <td className="py-4 px-4 text-gray-700">{booking.date}</td>
                      <td className="py-4 px-4 text-gray-700">{booking.guests}</td>
                      <td className="py-4 px-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${booking.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12 text-lg">
            🎒 No bookings yet.
          </p>
        )}
      </div>
      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900">
                ✈️ New Booking
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-3xl text-gray-400 hover:text-gray-700 transition"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-bold mb-3">
                  Select Your Destination
                </label>
                <select
                  value={formData.place}
                  onChange={(e) =>
                    setFormData({ ...formData, place: e.target.value })
                  }
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700 font-semibold"
                >
                  <option value="">-- Choose a place --</option>
                  <option value="Kathmandu Valley">🏛️ Kathmandu Valley</option>
                  <option value="Pokhara">🏞️ Pokhara</option>
                  <option value="Lumbini Nepal">🙏 Lumbini Nepal</option>
                  <option value="Chitwan National Park">
                    🐅 Chitwan National Park
                  </option>
                  <option value="Everest Base Camp">
                    🏔️ Everest Base Camp
                  </option>
                  <option value="Ghandruk Village">🏘️ Ghandruk Village</option>
                  <option value="Mustan Valley">🏜️ Mustan Valley</option>
                  <option value="Rara Lake">💎 Rara Lake</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-3">
                  📅 When will you travel?
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-bold mb-3">
                  👥 How many guests?
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guests: parseInt(e.target.value),
                    })
                  }
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 mt-8 text-lg"
              >
                ✓ Create Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
