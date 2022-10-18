import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Time = () => {
  let date = new Date();

  const greeting = () => {
    if (date.getHours() >= 5 && date.getHours() < 11) {
      return "Good Morning, Michał.";
    } else if (date.getHours() >= 11 && date.getHours() < 17) {
      return "Good Afternoon, Michał.";
    } else if (date.getHours() >= 17 && date.getHours() < 24) {
      return "Good Evening, Michał.";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <div>
      <p className="lg:text-9xl tracking-tighter py-4 font-bold md:text-5xl sm:text-3xl">
        <Moment format="LT"></Moment>
      </p>
      <p className="lg:text-6xl md:text-3xl sm:text-xl ">{greeting()}</p>
    </div>
  );
};

export default Time;
