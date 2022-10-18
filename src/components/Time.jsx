import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Time = () => {
  let date = new Date();

  const greeting = () =>{
    if (date.getHours() >=5 && date.getHours() < 11){
        return "Good Morning, Michał"
    }
    else if (date.getHours() >=11 && date.getHours() <17){
        return "Good afternoon, Michał"
    }
    else if (date.getHours() >=17 && date.getHours()<24 ){
        return "Good evening, Michał")
    }
    else {
        return "What the heck you doing so late?"
    }
  }

  if (time.getHours() > 18 && time.getHours() <= 24)
    console.log(;
  else {
    console.log();
  }

  return (
    <div>
      <p>time</p>
      <p>Welcome Welcome Welcome Welcome Welcome</p>
    </div>
  );
};

export default Time;
