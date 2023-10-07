import React from "react";
import jackpot from "../assets/jackpot.png";

const Jackpot = () => {
  return (
    <div className="w-full h-full cursor-pointer">
      <img
        className="w-full h-full transition-transform transform scale-100 hover:scale-110"
        src={jackpot}
        alt=""
      />
    </div>
  );
};

export default Jackpot;
