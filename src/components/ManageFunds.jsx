import React from "react";
import fund from "../assets/fund.png";
import { Link } from "react-router-dom";

const ManageFunds = () => {
  return (
    <Link to="/manage-fund">
      <div className="flex flex-row items-center justify-center w-full h-full gap-3 transition-transform transform scale-100 border border-orange-500 rounded-lg zIndex-22 hover:scale-110 ">
        <h1>Manage Funds</h1>
        <img src={fund} alt="" />
      </div>
    </Link>
  );
};

export default ManageFunds;
