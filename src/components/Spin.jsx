import React from "react";
import spin from "../assets/spin.png";
import { Link } from "react-router-dom";

const Spin = () => {
  return (
    <Link className="w-full" to="/spin">
      <img
        className="transition-transform transform scale-100 hover:scale-110"
        src={spin}
        alt=""
      />
    </Link>
  );
};

export default Spin;
