import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Explore Nepal</h2>
          <p className="text-gray-300">
            Discover the beauty of Nepal – mountains, culture, adventure,
            and unforgettable travel experiences.
          </p>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: info@tourismnepal.com</p>
          <p>Phone: +977 980000000</p>
          <p>Kathmandu, Nepal</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 text-center py-4 text-gray-300">
        © 2026 Explore Nepal Tourism | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
