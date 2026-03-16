import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Services = () => {
const [services, setServices] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/services")
      .then(response => {
        setServices(response?.data?.services);
      })
      .catch(error => {
        console.error("Error fetching services:", error);
      });
  }, []);

  // const handleServiceClick = (service) => {
  //   setServices(service);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setServices(null);
  // };  

  return (
    <div className='bg-blue-200 from-white to-slate-50 py-20 px-6 md:px-12'>
      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a world of authentic experiences with our comprehensive tourism services designed for unforgettable memories
          </p>
          <div className="h-1 w-24 bg-blue-200 from-orange-500 to-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-blue-200">
          {services.map((service) => (
            <div 
              key={service._id} 
              className="group bg-gray-400 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
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
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{service.title}</h3>
                <p className="text-green-800 mb-6 leading-relaxed">{service.desc}</p>

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
                <button className="w-full bg-gray-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gray-500 from-orange-500 to-red-600 rounded-2xl p-12 text-white text-center">
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