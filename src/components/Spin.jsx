import React from "react";
import spin from "../assets/spin.png";
import { Link } from "react-router-dom";

const Spin = () => {
  return (
    <div className="h-full">
      <img
        className="transition-transform transform scale-100 hover:scale-110"
        src={spin}
        alt=""
      />
    </div>
  );
};

export default Spin;
