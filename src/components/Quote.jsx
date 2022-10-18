import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

const Quote = () => {
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
  if (!data) return null;

  console.log(data);
  return (
    <div className="p-10 m-auto text-center mx-20">
      <p className=" lg:text-xl md:text-base sm:text-sm ">
        "{data.quotes[0].text}"
      </p>
      <p className="lg:text-xl py-4 md:text-base sm:text-sm">
        - {data.quotes[0].author}
      </p>
    </div>
  );
};

export default Quote;
