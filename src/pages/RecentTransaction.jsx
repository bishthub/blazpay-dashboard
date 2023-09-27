import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
import Data from "../RecentTransaction.json";
import Img from "../assets/polygon.png";

const RecentTransaction = () => {
  console.log(Img);
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
      className="w-full overflow-y-auto scrollbar-hide "
    >
      <Navbar />

      <div
        className="flex flex-col items-center justify-center w-3/4 gap-5 m-auto mb-3 opacity-50"
        style={{ backgroundColor: "#444444", zIndex: "-1" }}
      >
        <h1
          className="pl-10 mr-auto font-bold"
          style={{ fontSize: "1.5rem", zIndex: "999" }}
        >
          Recent Transactions
        </h1>

        <div className="flex flex-col items-center justify-between w-full gap-3 ">
          <div className="flex flex-row items-center justify-center w-full gap-3 font-semibold">
            <h1 className="w-full text-center">Actions</h1>
            <h1 className="w-full text-center">Chain</h1>
            <h1 className="w-full text-center">User ID</h1>
            <h1 className="w-full text-center">Asset</h1>
          </div>

          {Data.map((item) => {
            return (
              <div className="flex flex-row items-center justify-center w-full gap-3">
                <h1 className="w-full text-center">{item.action}</h1>
                <div className="flex flex-row items-center justify-center w-full gap-2 text-center">
                  <img
                    className="w-10"
                    src={`/src/assets/` + item.chainImg}
                    alt=""
                  />
                  <h1>{item.chainName}</h1>
                </div>
                <h1 className="w-full text-center">{item.userId}</h1>
                <div className="flex flex-col items-center justify-center w-full">
                  <h1>{item.assetCrypto}</h1>
                  <h1>{item.assetUsd}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
