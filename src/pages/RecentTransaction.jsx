import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
// import Data from "../RecentTransaction.json";
// import Img from "../assets/polygon.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RecentTransaction = () => {
  const [recentTrans, setRecentTrans] = useState([]);
  const token = localStorage.getItem("token");
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

  useEffect(() => {
    console.log(recentTrans);
  });
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
        className="flex flex-col items-center justify-center w-3/4 gap-5 m-auto mb-3 bg-gray-600 backdrop-blur-md opacity-90"
        // style={{ backgroundColor: "#444444", zIndex: "-1" }}
      >
        <h1
          className="pl-10 mr-auto font-bold"
          style={{ fontSize: "1.5rem", zIndex: "999" }}
        >
          Recent Transactions
        </h1>

        <div className="flex flex-col items-center justify-between w-full gap-3 ">
          <div className="flex flex-row items-center justify-center w-full gap-3 font-semibold font-bold">
            <h1 className="w-full text-center">Actions</h1>
            <h1 className="w-full text-center">Chain</h1>
            <h1 className="w-full text-center">User ID</h1>
            <h1 className="w-full text-center">Qty</h1>
          </div>

          {recentTrans.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row items-center justify-center w-full gap-3"
              >
                <h1 className="w-full text-center">{item.moduleName}</h1>

                {/* <img
                    className="w-10"
                    src={`/src/assets/` + item.chainImg}
                    alt=""
                  /> */}

                <h1 className="w-full text-center">{item.chain}</h1>

                <h1 className="w-full text-center ">{item._id}</h1>

                <h1 className="w-full text-center">{item.amount}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
