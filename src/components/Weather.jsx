import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&appid=51a63434bef5e5bc4aaaaa394f7c0090";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  if (!data) return null;

  return (
    <div>
      <p className="md:text-3xl font-bold px-4 pt-4 sm:text-xl ">Gdańsk</p>
      <p className="md:text-4xl bold py-1 italic sm:text-xl ">
        {data.main.temp.toFixed(0)}°C
      </p>
    </div>
  );
};

export default Weather;
