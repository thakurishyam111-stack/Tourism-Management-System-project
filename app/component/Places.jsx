import React from 'react'
const places = [
  {
    name: "Kathmandu Valley",
    desc: "Cultural and historical heart of Nepal. city of temples and palaces.",
    img: "https://cdn-aimdc.nitrocdn.com/FbrXgKxnupBRVYozRujieHUXZWIcKXKy/assets/images/optimized/rev-2dd7e32/excitingnepal.com/wp-content/uploads/2016/07/Kathmandu-and-Heritage-Site-Tour-6.jpg",
  },
  {
    name: "Pokhara",
    desc: "City of lakes and gateway to Annapurna.city of natural beauty.",
    img: "https://www.muktinathdarshan.com/sites/default/files/styles/large/public/destination/pokhara.jpg",
  },
  {
    name: "Lumbini Nepal",
    desc: "Birthplace of Lord Buddha.city of spiritual significance.",
    img: "https://lumbinidevtrust.gov.np/upload_file/images/album/1719708304_1101946064_15.jpg",
  },
  {
    name: "Chitwan National Park",
    desc: "Wildlife and jungle safari destination.the first national park in Nepal.",
    img: "https://www.nepalliontours.com/wp-content/uploads/2017/04/1-1.jpg",
  },
  {
    name: "Everest Base Camp",
    desc: "The Mount Everest is the highest peak in the world.",
    img: "https://www.nepalhiking.com/wp-content/uploads/2024/12/Elevation-of-Everest-Base-Camp-1135x626.jpg",
  },
  {
    name: "Ghandruk Village",
    desc: "The ghandruk is a beautiful village located in the Annapurna region.",
    img: "https://himalayan-masters.com/wp-content/uploads/2024/08/Gurung-Cottage-Ghandruk.webp",
  },
  {
    name: "Mustan Valley",
    desc: "The mustan valley is a remote and isolated region located in the northern part of Nepal.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/17/bd/muktinath-temple.jpg?w=1400&h=1400&s=1",
  },
  {
    name: "Rara Lake",
    desc: "The rara lake is the largest lake in Nepal.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6AOaZOOuFyLDqtZ61AI0QyflyriXXN8w0g&s",
  },
];

export const Places = () => {
  return (<>
  <div className='bg-gray-600'>
  <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Major Tourist Places
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <div className="relative h-40 w-full">
                <img src={place.img} alt={place.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-green-400 text-sm mt-2">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
  </>
   
  )
}
