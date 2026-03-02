"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Bell, User, Globe } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // implement search logic or redirect to results page
    console.log("searching for", search);
  };

  return (
    <nav className="w-full bg-transparent absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* brand/logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              NepLa Tourism
            </Link>
          </div>

          {/* search bar */}
          <div className="flex-1 px-4">
            <form onSubmit={handleSearch} className="w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tours, destinations..."
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </form>
          </div>

          {/* right side buttons/icons */}
          <div className="flex items-center space-x-4">
            <Link href="/Login">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                Register
              </button>
            </Link>

            {/* optional icons */}
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            <Bell className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
            <Globe className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
