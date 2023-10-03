import React, { useCallback, useEffect, useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import SendImg from "../assets/send.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import TokenInput from "../components/TokenInput";
import axios from "axios";
const Send = () => {
  const [walletAddress, setWalletAddress] = useState([]);
  const token = localStorage.getItem("token");
  const WalletChains = useCallback(async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const ChainData = await axios.get("http://localhost:3000/api/wallet", {
        headers: headers,
      });
      if (ChainData.status === 200) {
        setWalletAddress(ChainData.data);
        console.log(walletAddress);
      } else {
        console.log("Error in getting the chain data in profile page");
      }
    } catch (err) {
      setLoading(false);
      console.log("Session Expired get wallet address in profile Page");
    }
  }, [token]);

  useEffect(() => {
    WalletChains();
  }, [WalletChains]);

  useEffect(() => {
    console.log(walletAddress);
  }, [walletAddress]);
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-t-4 border-l-4 border-r-4 border-orange-700"
      style={{ width: "25rem", height: "20rem" }}
    >
      <form className="w-full">
        <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
          <img className="w-8" src={SendImg} alt=" " />
          <h1 className="text-black text-bold">Send</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
          <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
            Recipient Address
          </h1>
          <div className="w-full h-10 p-2 border-2 border-orange-700 rounded-sm">
            {" "}
            <select
              // value={selectedWallet}
              // onChange={handleSelectChange}
              className="w-full text-center bg-transparent border-none focus:outline-none"
            >
              <option value="">Select Wallet Address</option>
              {walletAddress.chains.map((val, idx) => (
                <option key={idx} value={val.chainName}>
                  {val.chainName}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-full text-center bg-transparent border-none focus:outline-none"
              placeholder="Enter Address or BlazPay ID"
            />
          </div>
          {/* <div className="flex flex-row items-center justify-between w-full gap-3 text-gray-800">
          <h1 className="text-gray-500">Network fees</h1>
          <h1 className="text-gray-500">0.005 ETH</h1>
        </div> */}
          {/* <TokenInput /> */}
          <div className="flex flex-row w-full h-10 p-2 border border-orange-700 rounded-lg">
            <div className="flex flex-row items-center justify-around w-3/4 border-r-2 border-orange-700 m-r-2">
              {/* <h1>img</h1> */}
              <h1 className="pr-3">ETH</h1>
              <div className="flex items-center justify-center h-5 p-2 text-xs border border-orange-700 rounded-lg">
                Etherium
              </div>
            </div>
            <div className="w-1/4">
              {/* <input
                type="text"
                className="w-full bg-transparent border-none focus:outline-none"
              /> */}

              <input
                type="number"
                name="tokens"
                className="w-full bg-transparent border-none focus:outline-none"
                value={formData.tokens}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 pr-5 mt-3">
          <Link to="/" className="w-full">
            <Button name={"Transfer"} />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Send;
