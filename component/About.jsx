import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">About Nepal</h2>
          <p className="text-xl text-gray-600">Discover the Heart of the Himalayas</p>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=612x612&w=0&k=20&c=GLKvtQt1JVoOB4yR2WI86_fYOmG8WObeZP_QV_gFG_0=" 
              alt="Nepal Mountain"
              className="w-full h-96 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Welcome to Nepal</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Nepal is a breathtaking destination in South Asia, nestled between China and India. Known as the "Land of Gods," Nepal combines natural beauty, spiritual richness, and thrilling adventure like nowhere else on Earth.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Home to 8 of the world's 10 highest mountains, including Mount Everest, Nepal attracts adventurers, trekkers, and nature enthusiasts from around the globe. Beyond its stunning landscapes, Nepal is a cultural treasure with ancient temples, vibrant festivals, and warm-hearted people.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you seek mountain adventures, spiritual enlightenment, or cultural immersion, Nepal offers an unforgettable experience that will transform your perspective on life.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 py-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl px-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">8</div>
            <p className="text-gray-700 font-semibold">Highest Peaks</p>
            <p className="text-sm text-gray-600">In the World</p>
          </div>
          <div className="text-center border-l border-gray-300">
            <div className="text-4xl font-bold text-red-600 mb-2">7</div>
            <p className="text-gray-700 font-semibold">UNESCO Sites</p>
            <p className="text-sm text-gray-600">World Heritage</p>
          </div>
          <div className="text-center border-l border-gray-300">
            <div className="text-4xl font-bold text-orange-600 mb-2">30M+</div>
            <p className="text-gray-700 font-semibold">Population</p>
            <p className="text-sm text-gray-600">Diverse Culture</p>
          </div>
          <div className="text-center border-l border-gray-300">
            <div className="text-4xl font-bold text-red-600 mb-2">2M+</div>
            <p className="text-gray-700 font-semibold">Annual Visitors</p>
            <p className="text-sm text-gray-600">From Worldwide</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Nepal?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏔️</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Majestic Mountains</h4>
              <p className="text-gray-700">Experience the world's highest peaks, pristine alpine meadows, and breathtaking panoramic views.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🙏</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Rich Spirituality</h4>
              <p className="text-gray-700">Visit sacred temples, meditate in serene monasteries, and connect with ancient spiritual traditions.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Vibrant Culture</h4>
              <p className="text-gray-700">Immerse yourself in colorful festivals, traditional cuisine, and the warmth of Nepali hospitality.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🪂</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Adventure Sports</h4>
              <p className="text-gray-700">Trek, paraglide, raft, and explore with thrilling activities for every level of adventurer.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border-l-4 border-teal-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Natural Beauty</h4>
              <p className="text-gray-700">Discover pristine forests, crystal-clear lakes, and abundant wildlife in their natural habitat.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl border-l-4 border-pink-600 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Affordable Travel</h4>
              <p className="text-gray-700">Enjoy world-class experiences at budget-friendly prices with excellent value for money.</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-xl shadow-lg p-12 border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Quick Facts About Nepal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-bold text-slate-900">Location</p>
                <p className="text-gray-600">South Asia, between China and India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💳</div>
              <div>
                <p className="font-bold text-slate-900">Currency</p>
                <p className="text-gray-600">Nepalese Rupee (NPR)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🗣️</div>
              <div>
                <p className="font-bold text-slate-900">Official Language</p>
                <p className="text-gray-600">Nepali</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🏙️</div>
              <div>
                <p className="font-bold text-slate-900">Capital</p>
                <p className="text-gray-600">Kathmandu</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🌡️</div>
              <div>
                <p className="font-bold text-slate-900">Best Season</p>
                <p className="text-gray-600">October to November, February to March</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✈️</div>
              <div>
                <p className="font-bold text-slate-900">Main Airport</p>
                <p className="text-gray-600">Tribhuvan International Airport, Kathmandu</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Experience Nepal?</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Start your incredible journey today and create memories that will last a lifetime.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition transform hover:scale-105">
            Plan Your Trip Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default About