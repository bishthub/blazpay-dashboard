import React from "react";
import bgImage from "../assets/dashboard_bg.png";
import ManageCard from "../components/ManageCard";
import SendImg from "../assets/send.png";
import ReceiveImg from "../assets/receive.png";
import SwapImg from "../assets/swap.png";
import RequestImg from "../assets/req.png";
import { Link } from "react-router-dom";

const ManageFunds = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
      className="relative flex justify-center w-full "
    >
      <div className="absolute flex flex-col items-center justify-center w-1/3 gap-3 m-auto mt-20 bg-black rounded-lg sm-w-full">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex items-center justify-center w-full h-14 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
            Manage Your Funds
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 p-4 ">
            <Link className="w-full" to="/manage-funds/send">
              <ManageCard name={"Send"} img={SendImg} />
            </Link>
            <Link className="w-full" to="/manage-funds/receive">
              <ManageCard name={"Receive"} img={ReceiveImg} />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 p-4">
            <Link className="w-full" to="/manage-funds/request">
              <ManageCard name={"Request"} img={RequestImg} />
            </Link>
            <Link className="w-full" to="/manage-funds/swap">
              <ManageCard name={"Swap"} img={SwapImg} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFunds;
