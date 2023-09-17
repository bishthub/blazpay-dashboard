import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
import SwapImg from "../assets/swap.png";
import TokenInput from "../components/TokenInput";
import axios from "axios";
import { FiArrowDownCircle } from "react-icons/fi";
import Watch from "../assets/watch.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Swap = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [tokens, setTokens] = useState([]); // Store token data
  const [selectedToken, setSelectedToken] = useState(""); // Store selected token
  const [searchText, setSearchText] = useState(""); // Store user input for search

  useEffect(() => {
    // Fetch token data from PancakeSwap or your preferred API
    axios
      .get("https://api.pancakeswap.com/api/v1/tokens")
      .then((response) => {
        setTokens(response.data.tokens);
      })
      .catch((error) => {
        console.error("Error fetching tokens:", error);
      });
  }, []);

  console.log(tokens);

  // Function to handle toggle switch state changes
  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

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
      style={{ width: "30rem", height: "34rem" }}
    >
      <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
        <img className="w-8" src={SwapImg} alt=" " />
        <h1 className="text-black text-bold">Swap</h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3 text-white bg-black">
        <div className="flex flex-row items-center justify-between w-full pl-5 pr-5">
          <h1>From</h1>
          <div className="flex flex-row items-center justify-center gap-3">
            <h1>Max</h1>
            <div className="flex items-center justify-center">
              <label className="relative inline-block w-10 h-6">
                <input
                  type="checkbox"
                  className="hidden "
                  checked={isToggled}
                  onChange={toggleSwitch}
                  style={{}}
                />
                <div className="w-8 h-4 border border-orange-700 rounded-lg ">
                  <div
                    className={`${
                      isToggled ? "bg-white translate-x-full" : "bg-white"
                    } absolute left-0 w-4 h-4 rounded-full transform transition-transform ease-in duration-200 border border-orange-600 `}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full pl-5 pr-5">
          <TokenInput />
        </div>
        <div className="flex flex-row items-center w-full gap-2 pl-5 pr-5">
          <div className="w-full border-t-2 border-orange-700"></div>
          <FiArrowDownCircle
            style={{ color: "orange !important" }}
            className="w-20 text-4xl text-orange-700 "
          />
          <div className="w-full border-t-2 border-orange-700"> </div>
        </div>
        <div className="flex flex-col items-center w-full gap-3 pl-5 pr-5">
          <h1 className="mr-auto">To</h1>
          <TokenInput />
        </div>
        <div className="flex items-center justify-center w-full h-5 pl-5 pr-5">
          <div className="w-full border-b-2 border-orange-700"></div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
          <div className="flex flex-row items-center justify-between w-full">
            <h1>Best Quote</h1>
            <div className="flex flex-row items-center justify-center gap-1">
              <img src={Watch} alt="" />
              <h1 className="text-gray-500">00:55</h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h1>Exchange Rate</h1>
            <h1 className="text-gray-500">1 ETH = 1900 USDC</h1>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h1>Network fees</h1>
            <div className="flex flex-row items-center justify-center gap-1">
              <h1 className="text-gray-500">0.005 ETH</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 pr-5">
          <Link to="/manage-funds/request" className="w-full">
            <Button name={"Confirm Swap"} />
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Swap;
