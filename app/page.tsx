import React from 'react'

const page = () => {
  return (
    <main className="relative">
      {/* hero section with background image */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to NepLa Tourism</h1>
          <p className="mt-4 text-xl">
            Explore the beauty of Nepal with us.
          </p>
        </div>
      </section>
    </main>
  );
}

export default page