import React from "react";
import refer from "../assets/refer.png";

const Refer = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-full transition-transform transform scale-100 hover:scale-110"
        src={refer}
        alt=""
      />
    </div>
  );
};

export default Refer;
