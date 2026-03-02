"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Place() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/places")
      .then(res => {
        setPlaces(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Tourism Places</h1>
      {places.map((place) => (
        <div key={place._id}>
          <h2>{place.name}</h2>
          <img src={place.img} width="300" alt={place.name} />
          <p>{place.desc}</p>
          <p><strong>Best Time:</strong> {place.bestTime}</p>
        </div>
      ))}
    </div>
  );
}

export default Place;