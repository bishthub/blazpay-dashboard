import React, { useState } from "react";
import ReqImg from "../assets/req.png";
import bgImage from "../assets/dashboard_bg.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Request = () => {
  const navigate = useNavigate();
  const receive = localStorage.getItem("username");

  const chains = ["Ethereum", "Matic"];

  const [data, setData] = useState({
    chain: "",
    username: "",
    tokens: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const SendData = await axios.post(
        "http://localhost:3000/api/transaction/request-fund",
        {
          username: data.username,
          chain: data.chain,
          tokens: data.tokens,
        },
        {
          headers: headers,
        }
      );

      if (SendData.status === 200) {
        toast.success(`Request Sent Successfully to ${data.username}`);

        setData({
          chain: "",
          username: "",
          tokens: "",
        });
      } else {
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err.config);
      toast.error("Error sending request. Please try again later.");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-orange-700 "
      style={{ width: "30rem", height: "30rem" }}
    >
      <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 text-black bg-white rounded-lg">
        <img className="w-8" src={ReqImg} alt=" " />
        <h1 className="text-black text-bold">Request</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
          <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
            Account to Receive
          </h1>
          <div className="flex items-center justify-center w-full p-2 border-2 border-orange-700 rounded-lg">
            <h1>{receive}</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5 ">
          <h1 className="mr-auto" style={{ fontSize: "1.3rem" }}>
            Request from
          </h1>
          <div className="w-full h-10 p-2 border-2 border-orange-700 rounded-lg">
            <input
              type="text"
              className="w-full text-center bg-transparent border-none focus:outline-none"
              placeholder="Enter Blazpay ID"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5 mt-3 mb-3 ">
          <div className="flex flex-row w-full h-10 p-2 border border-orange-700 rounded-lg">
            <div className="flex flex-row items-center justify-around w-3/4 border-r-2 border-orange-700 m-r-2">
              <select
                className="bg-transparent"
                name="chain"
                value={data.chain}
                onChange={handleChange}
                required
              >
                <option className="text-black" value="">
                  Select Chain
                </option>
                {chains?.map((el, idx) => (
                  <option className="text-black" key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/4">
              <input
                type="number"
                name="tokens"
                className="w-full bg-transparent border-none focus:outline-none"
                value={data.tokens}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pl-5 pr-5">
          <button
            className="flex items-center justify-center w-full h-10 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg"
            type="submit"
          >
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Request;
