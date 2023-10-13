import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LeaderBoard = ({ expand }) => {
  const location = useLocation();

  const [inner, setInner] = useState(false);

  const token = localStorage.getItem("token");

  const [leaderboardData, setLeaderboardData] = useState([]);

  async function fetchLeaderData() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        "http://localhost:3000/api/user/leaderboard",
        { headers: headers }
      );

      if (response.status === 200) {
        setLeaderboardData(response.data);
      } else {
        toast.warning("Session Timeout");
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchLeaderData();
  }, []);

  const sortedData = [...leaderboardData].sort((a, b) => a.rank - b.rank);

  const leadersToShow =
    location.pathname === "/leaderboard" ? sortedData : sortedData.slice(0, 4);

  useEffect(() => {
    if (location.pathname === "/leaderboard") {
      setInner(true);
    }
  }, [location.pathname]);

  return (
    <div
      className={`flex flex-col ${expand ? "w-4" : "w-full"} ${
        inner ? "h-screen" : "h-full"
      } ${inner ? "overflow-y-scroll" : "overflow-none"} gap-5 p-2 bg-gray-800`}
    >
      <h1 style={{ fontSize: "2rem" }}>Leader Board</h1>
      <div className="flex flex-col items-center justify-center w-full p-2">
        <div className="flex flex-row items-center justify-around w-full gap-2">
          <div className="w-full text-center">#</div>
          <div className="w-full text-center">Users</div>
          <div className="w-full text-center">Points</div>
        </div>
        <div className="w-full m-2 border-b border-orange-500 border-solid"></div>
        <div className="flex flex-col items-center justify-center w-full gap-6">
          {leadersToShow.map((data, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row items-center justify-around w-full"
              >
                <div className="w-full text-center">{idx + 1}</div>
                <div className="w-full text-center">{data.username}</div>
                <div className="w-full text-center">
                  {data.totalTokens ? data.totalTokens : 0}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
