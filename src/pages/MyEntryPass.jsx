import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
import EntryImg from "../assets/entry.png";
import ellipse from "../assets/ellipsenew.png";

const MyEntryPass = () => {
  return (
    <div
      className="overflow-y-auto scrollbar-hide "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
    >
      <Navbar />
      <div className="relative flex flex-col items-center justify-center w-full gap-5 px-10 backdrop-blur-lg ">
        <img
          src={ellipse}
          alt=""
          className="absolute w-1/4 h-full blur-3xl"
          style={{ zIndex: "-2" }}
        />
        <h1 className="w-full mr-auto" style={{ fontSize: "1.5rem" }}>
          My Entry passes
        </h1>
        <div className="flex flex-row items-center justify-around w-full p-10 m-auto ">
          <div className="flex flex-col items-center justify-center gap-4">
            <img className="w-60" src={EntryImg} alt="" />
            <h1 className="text-xl">BlazPay x Polygon</h1>
            <p className="text-sm">Owned Passes: 10 </p>
            <button className="w-full flex items-center justify-center  bg-gradient-to-r from-[#FF3503] to-yellow-500 text-2xl p-2 rounded-lg">
              Get More Now
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img className="w-60" src={EntryImg} alt="" />
            <h1 className="text-xl">BlazPay x Polygon</h1>
            <p className="text-sm">Owned Passes: 10 </p>
            <button className="w-full flex items-center justify-center  bg-gradient-to-r from-[#FF3503] to-yellow-500 text-2xl p-2 rounded-lg">
              Get More Now
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img className="w-60" src={EntryImg} alt="" />
            <h1 className="text-xl">BlazPay x Polygon</h1>
            <p className="text-sm">Owned Passes: 10 </p>
            <button className="w-full flex items-center justify-center  bg-gradient-to-r from-[#FF3503] to-yellow-500 text-2xl p-2 rounded-lg">
              Get More Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEntryPass;
