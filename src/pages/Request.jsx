import React from "react";
import ReqImg from "../assets/req.png";
import bgImage from "../assets/dashboard_bg.png";
import SelectAccount from "../components/SelectAccount";
import TokenInput from "../components/TokenInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Request = () => {
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
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-orange-700 "
      style={{ width: "30rem", height: "30rem" }}
    >
      <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
        <img className="w-8" src={ReqImg} alt=" " />
        <h1 className="text-black text-bold">Request</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
        <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
          Select Account to Receive
        </h1>
        <div className="w-full">
          <SelectAccount />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5 ">
        <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
          Request from
        </h1>
        <div className="w-full h-10 p-2 border-2 border-orange-700 rounded-lg">
          <input
            type="text"
            className="w-full text-center bg-transparent border-none focus:outline-none"
            placeholder="Enter Blazpay ID"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
        <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
          Asset
        </h1>
        <TokenInput />
      </div>
      <div className="flex items-center justify-center w-full pl-5 pr-5">
        <Link to="/manage-funds/receive" className="w-full">
          <Button name={"Send Request"} />
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Request;
