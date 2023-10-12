import React from "react";
import Navbar from "../Navbar";
import bgImage from "../../assets/dashboard_bg.png";
import blackcircle from "../../assets/blackcircle.png";
import { useSelector } from "react-redux";

const SpinWin = () => {
  const winner = useSelector((state) => state.winner);
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-1 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        <img className="" src={blackcircle} alt="circle" />
        <h1 className="absolute flex flex-col items-center justify-center text-5xl font-bold ">
          <span
            className="text-2xl font-semi-bold"
            style={{ color: "red", textShadow: "0 0 10px golden" }}
          >
            You Won
          </span>{" "}
          {winner}
        </h1>
      </div>
    </div>
  );
};

export default SpinWin;
