import React from 'react'

const services = [
 {
id: 1,
icon: "🏔️",
title: "Mountain Trekking",
img: "https://api.swotahtravel.com/images/blogs/cover/trekking-in-Nepal.jpg",
desc: "Experience world-class trekking routes including Everest, Annapurna, and Langtang. Professional guides and accommodation included.",
features: ["Expert Guides", "Safety Gear", "Meals Included", "Custom Routes"]
},

{
id: 2,
icon: "🏨",
title: "Hotel & Homestays",
img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
desc: "Stay in premium hotels, eco-lodges, and authentic homestays throughout Nepal with comfort and cultural immersion.",
features: ["5-Star Hotels", "Eco-Lodges", "Homestays", "Free Wi-Fi"]
},

{
id: 3,
icon: "👨‍🏫",
title: "Professional Tour Guides",
img: "https://static.nepsetrading.com/nepsetrading-assets/blogs/1767594637722-image.jpeg",
desc: "Certified and experienced local guides who speak multiple languages and know hidden gems of Nepal.",
features: ["Multilingual", "Certified", "Local Expert", "24/7 Support"]
},

{
id: 4,
icon: "🚍",
title: "Transportation Services",
img: "https://www.nepaltrekkinginhimalaya.com/images/articles/wCM2p-open-visit-nepal.jpg",
desc: "Comfortable vehicles with professional drivers for all your travel needs across Nepal.",
features: ["Modern Fleet", "Experienced Drivers", "Insurance", "AC Vehicles"]
},

{
id: 5,
icon: "🏛️",
title: "Cultural Tours",
img: "https://marditreknepal.com/wp-content/uploads/2025/05/nepal-festival.webp",
desc: "Immerse yourself in Nepal's rich heritage, temples, and traditions with expert storytelling.",
features: ["Temple Tours", "Local Markets", "Cooking Classes", "Meditation"]
},

{
id: 6,
icon: "🪂",
title: "Adventure Activities",
img: "https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1468123073306-QVCM88JW71C83O3XO748/adve.jpg?format=2500w",
desc: "Adrenaline-pumping activities like paragliding, river rafting, and bungee jumping.",
features: ["Paragliding", "White Water Rafting", "Bungee Jumping", "Rock Climbing"]
},{
id: 7,
icon: "🛕",
title: "Pilgrimage Tours",
img: "https://karnaliexcursions.com/wp-content/uploads/2025/10/prilgimage-tour-three.jpg",
desc: "Visit sacred temples and spiritual destinations like Pashupatinath, Lumbini, and Muktinath.",
features: ["Temple Visits", "Religious Guides", "Comfort Travel", "Group Tours"]
},

{
id: 8,
icon: "🦏",
title: "Wildlife Safari",
img: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/08/Chitwan-National-Park-Elephant-Safari.jpg",
desc: "Explore Nepal's national parks like Chitwan and Bardia with jungle safaris and wildlife spotting.",
features: ["Jeep Safari", "Bird Watching", "Nature Walk", "National Parks"]
},

{
id: 9,
icon: "🧗",
title: "Rock Climbing",
img: "https://pureexploration.com/cdn/shop/articles/PHOTO-2021-03-30-03-12-39_jpg.jpg?v=1710968414",
desc: "Enjoy thrilling rock climbing experiences in scenic locations with expert supervision.",
features: ["Safety Equipment", "Professional Trainers", "Beginner Friendly", "Outdoor Adventure"]
},

{
id: 10,
icon: "🚴",
title: "Mountain Biking",
img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/0266104ef9f93a2e091c552e0f4499bda4e506b3/big-857544853ee8c11dfda82c624664e3f8.jpg",
desc: "Ride through scenic trails, hills, and villages with guided mountain biking tours.",
features: ["Bike Rental", "Guided Tours", "Safety Gear", "Scenic Trails"]
},



{
id: 12,
icon: "🍛",
title: "Local Food Tours",
img: "https://holidaytravelpackage.com/wp-content/uploads/2019/10/nepali-food.jpg",
desc: "Taste authentic Nepali cuisine like momo, dal bhat, and Newari dishes with local guides.",
features: ["Street Food", "Traditional Dishes", "Cooking Experience", "Local Restaurants"]
},{
id: 15,
icon: "🌄",
title: "Sunrise & Sunset Tours",
img: "https://nepaltraveller.com/images/main/1768283842.sidetrackimagemanungkot.jpeg",
desc: "Witness spectacular sunrise and sunset views from famous viewpoints like Nagarkot and Sarangkot.",
features: ["Mountain Views", "Photography Spots", "Peaceful Environment", "Short Trips"]
},

{
id: 16,
icon: "🏞️",
title: "National Park Tours",
img: "https://www.magnificenthimalayan.com/public/uploads/chitwan-jungle-safari.jpg",
desc: "Explore Nepal's beautiful national parks with wildlife and jungle experiences.",
features: ["Jungle Safari", "Bird Watching", "Nature Walk", "Wildlife Spotting"]
},

{
id: 17,
icon: "🎎",
title: "Festival Tours",
img: "https://www.guideinhimalaya.com/uploads/img/nepal-festival-tours-and-treks-banner.jpg",
desc: "Experience vibrant Nepali festivals like Dashain, Tihar, and Holi with local communities.",
features: ["Local Culture", "Traditional Food", "Festival Celebrations", "Cultural Experience"]
},

{
id: 18,
icon: "🛶",
title: "River Rafting",
img: "https://www.thirdrockadventures.com/assets-back/images/blog/rafting-in-nepal.jpgHpB.jpg",
desc: "Thrilling white water rafting adventures on rivers like Trishuli, Seti, and Bhote Koshi.",
features: ["Professional Guides", "Safety Equipment", "Camping", "Adventure Experience"]
}
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
              {/* Service Header with Icon or Image */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
                {service.img ? (
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-600 transition">
                    <div className="text-6xl">{service.icon}</div>
                  </div>
                )}
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