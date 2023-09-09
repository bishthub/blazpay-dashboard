import React from "react";
import jackpot from "../assets/jackpot.png";

const Jackpot = () => {
  return (
    <div className="h-full">
      <img
        className="transition-transform transform scale-100 hover:scale-110"
        src={jackpot}
        alt=""
      />
    </div>
  );
};

export default Jackpot;
