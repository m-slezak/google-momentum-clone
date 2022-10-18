import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Date = () => {
  return (
    <div>
      <p className="lg:text-2xl md:text-xl px-4">
        <Moment format="YYYY/MM/DD"></Moment>
      </p>
    </div>
  );
};

export default Date;
