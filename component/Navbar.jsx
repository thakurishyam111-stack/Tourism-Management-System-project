"use client";

import Link from "next/link";
import { useState } from "react";
import { Bell, User, Globe, Search } from "lucide-react";

const Navbar = () => {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", search);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              NepLa Tourism
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 px-6">
            <form onSubmit={handleSearch} className="relative w-full">
              
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search places, tours, hotels..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
            </form>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            <Link href="/Login">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
                Register
              </button>
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-3 ml-2">

              <Bell className="w-5 h-5 text-gray-600 hover:text-indigo-600 hover:scale-110 transition cursor-pointer" />

              <User className="w-5 h-5 text-gray-600 hover:text-indigo-600 hover:scale-110 transition cursor-pointer" />

              <Globe className="w-5 h-5 text-gray-600 hover:text-indigo-600 hover:scale-110 transition cursor-pointer" />

            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;