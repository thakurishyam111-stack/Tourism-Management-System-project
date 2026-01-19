import React from 'react'

const services = [
  { 
    id: 1,
    icon: "🏔️",
    title: "Mountain Trekking", 
    desc: "Experience world-class trekking routes including Everest, Annapurna, and Langtang. Professional guides and accommodation included.",
    features: ["Expert Guides", "Safety Gear", "Meals Included", "Custom Routes"]
  },
  { 
    id: 2,
    icon: "🏨",
    title: "Hotel & Lodging", 
    desc: "Stay in premium hotels, eco-lodges, and authentic homestays throughout Nepal with comfort and cultural immersion.",
    features: ["5-Star Hotels", "Eco-Lodges", "Homestays", "Free Wi-Fi"]
  },
  { 
    id: 3,
    icon: "👨‍🏫",
    title: "Professional Tour Guides", 
    desc: "Certified and experienced local guides who speak multiple languages and know hidden gems of Nepal.",
    features: ["Multilingual", "Certified", "Local Expert", "24/7 Support"]
  },
  { 
    id: 4,
    icon: "🚍",
    title: "Safe Transportation", 
    desc: "Comfortable vehicles with professional drivers for all your travel needs across Nepal.",
    features: ["Modern Fleet", "Experienced Drivers", "Insurance", "AC Vehicles"]
  },
  { 
    id: 5,
    icon: "🏛️",
    title: "Cultural Tours", 
    desc: "Immerse yourself in Nepal's rich heritage, temples, and traditions with expert storytelling.",
    features: ["Temple Tours", "Local Markets", "Cooking Classes", "Meditation"]
  },
  { 
    id: 6,
    icon: "🪂",
    title: "Adventure Sports", 
    desc: "Adrenaline-pumping activities like paragliding, river rafting, and bungee jumping.",
    features: ["Paragliding", "White Water Rafting", "Bungee Jumping", "Rock Climbing"]
  },
];

const Services = () => {
  return (
    <div className='bg-gradient-to-b from-white to-slate-50 py-20 px-6 md:px-12'>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a world of authentic experiences with our comprehensive tourism services designed for unforgettable memories
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Service Header with Icon */}
              <div className="h-24 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-600 transition">
                <div className="text-6xl">{service.icon}</div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore Nepal?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is ready to customize the perfect tour package for you. Get in touch with us today!
          </p>
          <button className="bg-white text-orange-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition transform hover:scale-105">
            📞 Contact Us Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services