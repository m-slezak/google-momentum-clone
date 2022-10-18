import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Time = () => {
  let date = new Date();

  const greeting = () => {
    if (date.getHours() >= 5 && date.getHours() < 11) {
      return "Good Morning, Michał";
    } else if (date.getHours() >= 11 && date.getHours() < 17) {
      return "Good Afternoon, Michał";
    } else if (date.getHours() >= 17 && date.getHours() < 24) {
      return "Good Evening, Michał";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <div>
      <p>
        <Moment format="LT"></Moment>
      </p>
      <p>{greeting()}</p>
    </div>
  );
};

export default Time;
