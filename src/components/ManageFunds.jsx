import React from "react";
import fund from "../assets/fund.png";

const ManageFunds = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full gap-3 transition-transform transform scale-100 border border-orange-500 rounded-lg zIndex-22 hover:scale-110 ">
      <h1>Manage Funds</h1>
      <img src={fund} alt="" />
    </div>
  );
};

export default ManageFunds;
