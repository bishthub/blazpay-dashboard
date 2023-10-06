import React, { useCallback, useEffect, useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import SendImg from "../assets/send.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import TokenInput from "../components/TokenInput";
import axios from "axios";
import { toast } from "react-toastify";
const Send = () => {
  const [walletAddress, setWalletAddress] = useState([]);
  const token = localStorage.getItem("token");
  // const [formData, setFormData] = useState({
  //   username: "",
  //   chain: "",
  //   tokens: 0,
  // });

  const [chain, setChain] = useState("");
  const [tokens, setTokens] = useState(0);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [message, setMessage] = useState(""); // To display success/error messages

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleToken = (e) => {
    setTokens(e.target.value);
  };
  const handleChain = (e) => {
    setChain(e.target.value);
  };

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
      } else {
        console.log("Session Expired");
      }
    } catch (err) {
      // setLoading(false);
      console.log("Session Expired get wallet address in profile Page");
    }
  }, [token]);

  useEffect(() => {
    WalletChains();
  }, []);

  useEffect(() => {
    console.log(walletAddress);
  }, [walletAddress]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, tokens, chain);

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const SendData = await axios.post(
        "http://localhost:3000/api/transaction/send-fund",
        {
          username,
          chain,
          tokens,
        },
        { headers: headers }
      );

      if (SendData.status === 200) {
        toast.success("Successfully Sent");

        setUsername("");
        setTokens(0);
        setChain("");
      } else {
        console.log("Session Expired");
        navigate("/user/login");
      }
    } catch (err) {
      console.log("kyoooo");
      console.log(err);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-t-4 border-l-4 border-r-4 border-orange-700 "
      style={{ width: "25rem", height: "20rem" }}
    >
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
          <img className="w-8" src={SendImg} alt=" " />
          <h1 className="font-bold text-black">Send</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
          <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
            Recipient Address
          </h1>
          <div className="w-full h-10 p-2 border-2 border-orange-700 rounded-sm">
            {" "}
            <input
              type="text"
              className="w-full text-center bg-transparent border-none focus:outline-none"
              placeholder="Username"
              value={username}
              onChange={handleUsername}
              required
            />
          </div>

          <div className="flex flex-row w-full h-10 p-2 border border-orange-700 rounded-lg">
            <div className="flex flex-row items-center justify-around w-3/4 border-r-2 border-orange-700 m-r-2">
              <select
                className="bg-transparent"
                name="chain"
                value={chain} // Set the selected value to the chain in formData
                onChange={handleChain}
                required
              >
                <option className="text-black" value="">
                  Select Chain
                </option>
                {walletAddress?.chains?.map((el, idx) => (
                  <option className="text-black" key={idx} value={el.chainName}>
                    {el.chainName}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/4">
              <input
                type="number"
                name="tokens"
                className="w-full bg-transparent border-none focus:outline-none"
                value={tokens}
                onChange={handleToken}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 pr-5 mt-3">
          <button
            className="flex items-center justify-center w-full h-10 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg"
            type="submit"
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Send;
