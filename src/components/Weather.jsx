import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=51a63434bef5e5bc4aaaaa394f7c0090";

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
      <p>{data.main.name}</p>
      <p>{data.main.temp}</p>
    </div>
  );
};

export default Weather;
