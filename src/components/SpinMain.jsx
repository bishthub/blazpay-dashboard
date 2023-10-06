import React, { Component } from "react";
import bgImage from "../assets/dashboard_bg.png";
import WheelComponent from "react-wheel-of-prizes";
import { useState } from "react";
import Navbar from "./Navbar";

const SpinMain = () => {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const [is, setIs] = useState(false);
  const [res, setRes] = useState("");

  const onFinished = (winner) => {
    setIs("true");
    setRes(winner);
    console.log(winner);
  };
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-full px-1 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />
      {is ? (
        <div className="flex items-center justify-center w-full">
          <div className="w-1/2 border-2 border-orange-700 rounded-lg">
            <h1 className="text-4xl font-bold text-center">{res}</h1>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-center w-full ">
        <div className="w-1/2 ">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment={segments}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            // contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={true}
            size={290}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinMain;

// import React, { useState, useEffect } from "react";
// import "./SpinMain.css";

// const SpinMain = () => {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [result, setResult] = useState(null);

//   const segments = [
//     "Prize 1",
//     "Prize 2",
//     "Prize 3",
//     "Prize 4",
//     "Prize 5",
//     // Add more segments as needed
//   ];

//   const spinWheel = () => {
//     if (!isSpinning) {
//       setIsSpinning(true);
//       // Simulate spinning (random result) - Replace with your logic
//       setTimeout(() => {
//         const randomIndex = Math.floor(Math.random() * segments.length);
//         setResult(segments[randomIndex]);
//         setIsSpinning(false);
//       }, 3000); // Adjust the duration as needed
//     }
//   };

//   return (
//     <div className="spinning-wheel">
//       <div className={`wheel ${isSpinning ? "spin" : ""}`}>
//         {segments.map((segment, index) => (
//           <div key={index} className="segment">
//             {segment}
//           </div>
//         ))}
//       </div>
//       <button className="spin-button" onClick={spinWheel} disabled={isSpinning}>
//         Spin
//       </button>
//       {result && <div className="result">Result: {result}</div>}
//     </div>
//   );
// };

// export default SpinMain;
