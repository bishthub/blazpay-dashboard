import React from "react";
import bgImage from "../assets/dashboard_bg.png";
import ReceiveImg from "../assets/receive.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Receive = () => {
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
      <div className="absolute flex flex-col items-center justify-center w-1/4 gap-3 m-auto mt-20 bg-black ">
        <div className="flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
          <img className="w-8" src={ReceiveImg} alt=" " />
          <h1 className="text-black text-bold">Receive</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
          <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
            Your BlazPay ID
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Receive;
