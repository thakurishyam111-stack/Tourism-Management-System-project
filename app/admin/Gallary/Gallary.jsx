import React from 'react'
const images = [
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4a/95/ac/pashupatinath-is-the.jpg?w=900&h=500&s=1",
"https://nepal360news.com/storage/post/images/oXF2y1dk51d5NdCrgQtbWeFjcDkow9y5qc3oAzQY.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUdDQKt2vIHrqvrAOo_PK9yRtUtlQUnsTuQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDwKuZWkKpTrT68cgOkD7Q7sS_jdYiI8Ggw&s",
"https://www.remotelands.com/storage/media/1076/conversions/b160822037-banner-size.jpg",
"https://peregrinetreks.com/wp-content/uploads/2022/06/Swayambhunath.jpg",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=900&h=-1&s=1",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1rIyg6PW4g1XlfPvyLgxpG4Xu0qCah4PJA&s",
"https://media.nepaltrekadventures.com/uploads/img/ghandruk-b.webp",
];
const Gallary = () => {
  return (
    <section className="p-10">
<h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
{images.map((img, index) => (
<div
key={index}
className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition"
>
<img
src={img}
alt="Nepal Tourism"
className="h-60 w-full object-cover"
/>
</div>
))}
</div>
</section>
  )
}

export default Gallary