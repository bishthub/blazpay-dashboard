import React from "react";
import bgImage from "../assets/dashboard_bg.png";
import SendImg from "../assets/send.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Send = () => {
  return (
    // <div
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     color: "white",
    //     height: "100vh",
    //   }}
    //   className="relative flex justify-center w-full "
    // >
    <div
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-t-4 border-l-4 border-r-4 border-orange-700"
      style={{ width: "25rem", height: "20rem" }}
    >
      <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
        <img className="w-8" src={SendImg} alt=" " />
        <h1 className="text-black text-bold">Send</h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
        <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
          Recipient Address
        </h1>
        <div className="w-full h-10 p-2 border-2 border-orange-700 rounded-sm">
          <input
            type="text"
            className="w-full text-center bg-transparent border-none focus:outline-none"
            placeholder="Enter Address or BlazPay ID"
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full gap-3 text-gray-800">
          <h1 className="text-gray-500">Network fees</h1>
          <h1 className="text-gray-500">0.005 ETH</h1>
          <div className="px-4 text-black bg-orange-700 rounded-lg">Fast</div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pl-5 pr-5 mt-3">
        <Link to="/" className="w-full">
          <Button name={"Transfer"} />
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Send;
