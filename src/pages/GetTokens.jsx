import React, { useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import PolygonImg from "../assets/polygon.png";
import Button from "../components/Button";
const GetTokens = () => {
  const [selectedChain, setSelectedChain] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const [select, setSelect] = useState(true);

  const HandleSelect = () => {
    setSelect(!select);
  };

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
  };

  const handleVersionChange = (event) => {
    setSelectedVersion(event.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="md:w-1/3 w-5/6 min-w-[350px] rounded-lg shadow-md ">
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col gap-4 rounded-lg"
          style={{ backgroundColor: "#171717" }}
        >
          <div className="flex justify-center bg-gradient-to-r from-[#FF3503] to-yellow-500  rounded-tl-lg rounded-tr-lg p-4">
            <h1>Get Tokens Here</h1>
          </div>
          <div className="flex flex-row items-center gap-3 px-2">
            <button
              onClick={HandleSelect}
              className={`rounded-2xl px-5 text-lg ${
                select
                  ? "bg-gradient-to-r from-[#FF3503] to-yellow-500 "
                  : " bg-white text-black"
              }`}
            >
              TestNet
            </button>
            <button
              onClick={HandleSelect}
              className={`rounded-2xl px-5 text-lg ${
                !select
                  ? "bg-gradient-to-r from-[#FF3503] to-yellow-500 "
                  : " bg-white text-black"
              }`}
            >
              TestNet
            </button>
          </div>

          <div
            className={`flex flex-col items-center justify-center w-full gap-3 px-2 ${
              select ? "block" : "hidden"
            } `}
          >
            <p className="w-full ">Select Chain to get Tokens</p>

            <div className="w-full ">
              <select
                id="chain"
                className="w-full px-3 py-2 text-sm text-black border rounded-lg focus:outline-none focus:border-blue-500"
                value={selectedChain}
                onChange={handleChainChange}
                required
              >
                <option
                  className="flex flex-row gap-4 text-black"
                  value="ethereum"
                >
                  <img src={PolygonImg} alt="" />
                  Polygon
                </option>
                <option className="text-black" value="binance">
                  Binance Smart Chain
                </option>
              </select>
            </div>

            <p className="w-full ">You will get: 10 MATIC (Testnet Tokens)</p>
            <div className="w-full pb-4">
              <Button name={"Get tokens"} />
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center w-full  gap-3 px-2 ${
              !select ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-row items-center justify-between w-full ">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="w-full">Select token</p>
                <div className="w-full">
                  <select
                    id="chain"
                    className="w-full px-3 py-2 text-sm text-black border rounded-lg focus:outline-none focus:border-blue-500"
                    value={selectedChain}
                    onChange={handleChainChange}
                    required
                  >
                    <option
                      className="flex flex-row gap-4 text-black"
                      value="ethereum"
                    >
                      <img src={PolygonImg} alt="" />
                      Polygon
                    </option>
                    <option className="text-black" value="binance">
                      Binance Smart Chain
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p>Amount</p>
                <input
                  type="number"
                  className="w-full h-10 text-black rounded-lg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h1 className="flex items-center w-full h-10 text-red-600 bg-white rounded-lg">
                You Pay: 123INR
              </h1>
            </div>
            <div className="w-full mb-2">
              <Button name={"Get tokens"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetTokens;
