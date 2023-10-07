// import React, { Component } from "react";
// import bgImage from "../assets/dashboard_bg.png";
// import Navbar from "../components/Navbar";
// import WheelComponent from "react-wheel-of-prizes";
// import { useState } from "react";
// import { useEffect } from "react";

// const PlayGamesMain = () => {
//   const segments = [
//     "better luck next time",
//     "won 70",
//     "won 10",
//     "better luck next time",
//     "won 2",
//     "won uber pass",
//     "better luck next time",
//     "won a voucher",
//   ];
//   const segColors = [
//     "#EE4040",
//     "#F0CF50",
//     "#815CD1",
//     "#3DA5E0",
//     "#34A24F",
//     "#F9AA1F",
//     "#EC3F3F",
//     "#FF9000",
//   ];

//   const [is, setIs] = useState(false);
//   const [res, setRes] = useState("");

//   const onFinished = (winner) => {
//     setIs("true");
//     setRes(winner);
//     console.log(winner);
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center w-full min-h-full px-1 "
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         color: "white",
//       }}
//     >
//       <Navbar />
//       {is ? (
//         <div className="flex items-center justify-center w-full">
//           <div className="w-1/2 border-2 border-orange-700 rounded-lg">
//             <h1 className="text-4xl font-bold text-center">{res}</h1>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}

//       <div className="flex items-center justify-center w-full ">
//         <div className="w-1/2 ">
//           <WheelComponent
//             segments={segments}
//             segColors={segColors}
//             winningSegment={segments}
//             onFinished={(winner) => onFinished(winner)}
//             primaryColor="black"
//             // contrastColor="white"
//             buttonText="Spin"
//             isOnlyOnce={true}
//             size={290}
//             upDuration={100}
//             downDuration={1000}
//             fontFamily="Arial"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayGamesMain;

import React from "react";
import jackpotImg from "../assets/jackpot.png";
import spinImg from "../assets/spin.png";
import { Link } from "react-router-dom";

const PlayGamesMain = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border border-orange-700 rounded-tl-lg rounded-tr-lg border-t-1 border-l-1 border-r-1"
      style={{ width: "35rem", height: "30rem" }}
    >
      <div className="absolute top-0 flex flex-row items-center justify-center w-full gap-1 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
        <h1 className="font-bold">Choose game To Play</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 pl-5 pr-5">
        <Link className="w-full " to="/user/jackpot">
          <img
            className="m-auto transition-transform transform scale-100 hover:scale-110"
            src={jackpotImg}
            alt="jackpot"
          />
        </Link>
        <Link className="w-full " to="/user/spin">
          <img
            className="m-auto transition-transform transform scale-100 hover:scale-110"
            src={spinImg}
            alt="spin"
          />
        </Link>
      </div>
    </div>
  );
};

export default PlayGamesMain;
