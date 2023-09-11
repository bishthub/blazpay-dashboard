import React from "react";
import bgImage from "../assets/dashboard_bg.png";
const GetTokens = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div
        style={{
          border: "1px solid #FF5500",
          backgroundColor: "#D9D9D933",
        }}
        className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
      >
        <div className="rounded-lg" style={{ backgroundColor: "#171717" }}>
          <div className="flex justify-center bg-gradient-to-r from-[#FF3503] to-yellow-500  rounded-tl-lg rounded-tr-lg p-4">
            <h1>Get Tokens Here</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTokens;
