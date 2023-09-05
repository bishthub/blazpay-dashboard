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
      }}
      className="w-100"
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-5 w-100">
        <h1 className="mr-auto">Recent Transactions</h1>
        <div className="flex flex-col items-center justify-center gap-5 w-100">
          <div className="flex flex-row items-center justify-around gap-5 w-100">
            <h1>Actions</h1>
            <h1>Chain</h1>
            <h1>User ID</h1>
            <h1>Asset</h1>
          </div>

          {Data.map((item) => {
            return (
              <div className="flex flex-row items-center justify-around gap-5 w-100">
                <h1>{item.action}</h1>
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="w-10"
                    src={`/src/assets/` + item.chainImg}
                    alt=""
                  />
                  <h1>{item.chainName}</h1>
                </div>
                <h1>{item.userId}</h1>
                <div className="flex flex-col items-center justify-center">
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
