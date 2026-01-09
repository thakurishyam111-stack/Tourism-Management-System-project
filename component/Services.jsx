import React from 'react'
const services = [
{ title: "Trekking", desc: "Everest, Annapurna, Langtang trekking routes." },
{ title: "Hotel & Lodging", desc: "Comfortable hotels and homestays." },
{ title: "Tour Guide", desc: "Professional and local guides." },
{ title: "Transportation", desc: "Safe and reliable transport services." },
{ title: "Cultural Tours", desc: "Explore Nepal's rich heritage." },
{ title: "Adventure Sports", desc: "Paragliding, rafting, and more." },
];
const Services = () => {
  return (
<div className='bg-gray-500'> 
  <section className="p-10">
<h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Our Services</h2>
<div className="grid md:grid-cols-3 gap-6  ">
{services.map((s, i) => (
<div key={i} className="p-6 shadow rounded-xl">
<h3 className="text-xl font-semibold mb-2">{s.title}</h3>
<p className="text-gray-300">{s.desc}</p>
</div>
))}
</div>
</section>
</div>   
  )
}

export default Services