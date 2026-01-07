import React from "react";
import Footer from "../component/Footer";
import Importance from "../component/importance";
import { Places } from "../component/Places";
import About from "../component/About";
import Gallary from "../component/Gallary";
import Contac from "../component/Contac";
import Services from "../component/Services";

const App = () => {
  return (
    <div className="font-sans">
      <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)" }}>
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Tourism in Nepal
          </h1>
          <p className="text-white mt-4 text-lg">
            Explore Nature, Culture and Adventure
          </p>
        </div>
      </div>
      <About />
      <Places />
      <Services/>
      <Gallary/>
      <Contac/>
      <Footer />



    </div>
  );
}
export default App;