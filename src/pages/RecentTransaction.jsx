import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiArrowCircleDownRightDuotone } from "react-icons/pi";
import { PiArrowCircleUpRightDuotone } from "react-icons/pi";

const RecentTransaction = () => {
  const [recentTrans, setRecentTrans] = useState([]);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  async function fetchRecent() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const recentData = await axios.get(
        "http://localhost:3000/api/transaction/get-transactions",
        {
          headers: headers,
        }
      );

      if (recentData.status === 200) {
        setRecentTrans(recentData.data);
      } else {
        toast.warning("Session Expired");
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRecent();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
      className="w-full overflow-y-auto scrollbar-hide"
    >
      <Navbar />

      <div className="flex flex-col items-center w-3/4 gap-5 m-auto mb-3 bg-gray-600 backdrop-blur-md opacity-90 min-h-[60vh]">
        <h1 className="pl-10 mr-auto text-2xl font-bold">
          Recent Transactions
        </h1>

        <div className="w-full">
          <div className="grid grid-cols-5 font-bold text-center">
            <div className="col-span-1 m-1">Actions</div>
            <div className="col-span-1 m-1">In/Out</div>
            <div className="col-span-1 m-1">Chain</div>
            <div className="col-span-1 m-1">User ID</div>
            <div className="col-span-1 m-1">Qty</div>
          </div>

          {recentTrans.map((item, idx) => (
            <div key={idx} className="grid grid-cols-5 text-center">
              <div className="col-span-1 m-1">{item.moduleName}</div>
              <div className="col-span-1 m-1">
                {/* {!item.senderWalletId === id ? (
                  <RiLogoutBoxRLine  />
                ) : (
                  <RiLogoutBoxLine />
                )} */}
                <div className="flex items-center justify-center text-xl ">
                  {item.transfer === "out" ? (
                    <div className="text-2xl">
                      <PiArrowCircleUpRightDuotone className="text-green-500 " />
                    </div>
                  ) : (
                    <div className="text-2xl" style={{ color: "green" }}>
                      <PiArrowCircleDownRightDuotone />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-1 m-1">{item.chain}</div>
              <div className="col-span-1 m-1">{item.username}</div>
              <div className="col-span-1 m-1">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
