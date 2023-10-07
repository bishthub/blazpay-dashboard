// import React, { Component } from "react";
// import bgImage from "../assets/dashboard_bg.png";
// import WheelComponent from "react-wheel-of-prizes";
// import { useState } from "react";
// import Navbar from "./Navbar";

// const SpinMain = () => {
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

// export default SpinMain;

import React, { useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import WheelComponent from "react-wheel-of-prizes";
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

  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");

  const onFinished = (winner) => {
    setIsSpinning(false);
    setResult(winner);
  };

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      // Simulate spinning (you can replace this logic with your backend call)
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * segments.length);
        const winner = segments[randomIndex];
        onFinished(winner);
      }, 3000); // Adjust the duration as needed
    }
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
      {result && (
        <div className="flex items-center justify-center w-full">
          <div className="w-1/2 border-2 border-orange-700 rounded-lg">
            <h1 className="text-4xl font-bold text-center">{result}</h1>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center w-full">
        <div className="w-1/2">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment={segments}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            buttonText="Spin"
            isOnlyOnce={false}
            size={290}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
            isSpinning={isSpinning} // Pass the isSpinning state
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <button
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          onClick={spinWheel}
          disabled={isSpinning}
        >
          Spin
        </button>
      </div>
    </div>
  );
};

export default SpinMain;
