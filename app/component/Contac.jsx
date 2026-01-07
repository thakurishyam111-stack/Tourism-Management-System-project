import React from 'react'

const Contac = () => {
  return (
    <section className="p-10 bg-gray-900">
<h2 className="text-3xl font-bold text-center mb-6 text-gray-400">Contact Us</h2>
<form className="max-w-xl mx-auto bg-blue-500 p-6 rounded-xl shadow">
<input

type="text"
placeholder="Your Name"
className="w-full border p-2 mb-4 rounded-3xl text-center"
/>
<input
type="email"
placeholder="Your Email"
className="w-full border p-2 mb-4 rounded-3xl text-center"
/>
<textarea
placeholder="Your Message"
className="w-full border p-2 mb-4 rounded-3xl text-center"
></textarea>
<button className="bg-black text-white px-4 py-2 rounded text-center">
Send Message
</button>
</form>
</section>
  )
}

export default Contac