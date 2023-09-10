// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import LeaderData from "../LeaderBoard.json";

// const LeaderBoard = () => {
//   const location = useLocation();

//   // Sort the data by rank in ascending order
//   const sortedData = [...LeaderData].sort((a, b) => a.rank - b.rank);
//   console.log(sortedData);

//   // Get the top 4 leaders for the home page or all leaders for "/top-leader" route
//   const leadersToShow =
//     location.pathname === "/leaderboard" ? sortedData : sortedData.slice(0, 4);
//   return (
//     <div className="flex flex-col w-full p-3 bg-gray-800">
//       <h1>Leader Board</h1>
//       <div className="flex flex-col items-center justify-center w-full p-2">
//         <div className="flex flex-row items-center justify-around w-full gap-2">
//           <h1 className="text-center">#</h1>
//           <h1 className="text-center">Users</h1>
//           <h1 className="text-center">Points</h1>
//         </div>
//         <div className="w-full m-2 border-b border-orange-500 border-solid -pl-5 -pr-5"></div>
//         <div className="flex flex-col items-center justify-center w-full gap-6">
//           {leadersToShow.map((data, idx) => {
//             return (
//               <div className="flex flex-row justify-around w-full item-center">
//                 <h1 className="text-center">{data.rank}</h1>

//                 <h1 className="text-center">{data.name}</h1>
//                 <h1 className="text-center">{data.points}</h1>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaderBoard;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LeaderData from "../LeaderBoard.json";

const LeaderBoard = () => {
  const location = useLocation();

  const [inner, setInner] = useState(false);
  // Sort the data by rank in ascending order
  const sortedData = [...LeaderData].sort((a, b) => a.rank - b.rank);

  // Get the top 4 leaders for the home page or all leaders for "/top-leader" route
  const leadersToShow =
    location.pathname === "/leaderboard" ? sortedData : sortedData.slice(0, 4);

  useEffect(() => {
    if (location.pathname === "/leaderboard") {
      setInner(true);
    }
  }, []);

  console.log(inner);

  return (
    <div className="flex flex-col w-full h-full gap-5 p-5 bg-gray-800">
      <h1 style={{ fontSize: "4rem" }}>Leader Board</h1>
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
                <div className="w-full text-center">{data.rank}</div>
                <div className="w-full text-center">{data.name}</div>
                <div className="w-full text-center">{data.points}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;