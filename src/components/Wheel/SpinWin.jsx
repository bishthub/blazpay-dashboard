import React from "react";
import Navbar from "../Navbar";
import bgImage from "../../assets/dashboard_bg.png";
import blackcircle from "../../assets/blackcircle.png";
import { useSelector } from "react-redux";

const SpinWin = () => {
  const winner = useSelector((state) => state.winner);
  return (
    <div
      className="flex flex-col items-center justify-center  w-full min-h-screen px-1 relative "
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

      <div className="flex justify-center items-center w-full h-full relative">
        <img className=" " src={blackcircle} alt="circle" />
        <h1 className="absolute font-bold text-5xl flex justify-center items-center flex-col ">
          <span
            className="font-semi-bold text-2xl"
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
