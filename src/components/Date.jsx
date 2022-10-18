import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Date = () => {
  return (
    <div>
      <p>
        <Moment format="YYYY/MM/DD"></Moment>
      </p>
    </div>
  );
};

export default Date;
