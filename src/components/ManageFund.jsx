import React from "react";
import fund from "../assets/fund.png";
import { Link } from "react-router-dom";

const ManageFund = () => {
  return (
    <div className="w-full h-full cursor-pointer">
      <div className="flex flex-row items-center justify-center w-full h-full transition-transform transform scale-100 bg-gray-900 border border-orange-500 rounded-lg zIndex-22 hover:scale-110">
        <h1 className="text-2xl font-extrabold">Manage Funds</h1>
        <img src={fund} alt="" />
      </div>
    </div>
  );
};

export default ManageFund;
