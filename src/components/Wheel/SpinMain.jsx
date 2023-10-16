// import React, { useState } from "react";
// import bgImage from "../../assets/dashboard_bg.png";
// import WheelComponent from "react-wheel-of-prizes";

// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import { useDispatch } from "react-redux";
// import { setWinner } from "../../redux/WinnerSlice";

// const SpinMain = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [result, setResult] = useState("");
//   const segments = [
//     // "Better Luck Next Time",
//     "100",
//     // "Better Luck Next Time",
//     "250",
//     // "Better Luck Next Time",
//     "500",
//     // "Better Luck Next Time",
//     "1000",
//     // "Better Luck Next Time",
//     "2500",
//     // "Better Luck Next Time",
//     "5000",
//     // "Better Luck Next Time",
//     "10000",
//     // "Better Luck Next Time",
//     "50000",
//   ];
//   const segColors = [
//     "#892b00",
//     "#f9b728",
//     "#892b00",
//     "#f9b728",
//     "#892b00",
//     "#f9b728",
//     "#892b00",
//     "#f9b728",

//   ];
//   const onFinished = (winner) => {
//     dispatch(setWinner(winner));
//     // setIsSpinning(false);
//     setResult(winner);

//     if (winner !== "Better Luck Next Time") toast.success("Won" + winner);

//     // setResult(winner);
//     if (winner !== "Better Luck Next Time") {
//       // setTimeout(() => {
//       //   // Replace 'home' with the actual URL of your home page
//       //   navigate("/user/spin/win");
//       // }, 3000);
//     } else {
//       setTimeout(() => {
//         // Replace 'home' with the actual URL of your home page
//         navigate("/");
//       }, 3000);
//     }
//   };

//   const spinWheel = () => {
//     // const randomNumber = Math.random();
//     // let winningSegment = 0;
//     // while (weights[winningSegment] < randomNumber) {
//     //   winningSegment++;
//     // }

//     // onFinished(segments[winningSegment]);
//     const randomNum = Math.floor(Math.random() * 100000) + 1;
//     let winningSegment;

//     if (randomNum <= 70000) {
//       winningSegment = "100";
//     } else if (randomNum <= 85000) {
//       winningSegment = "250";
//     } else if (randomNum <= 92987) {
//       winningSegment = "500";
//     } else if (randomNum <= 96987) {
//       winningSegment = "1000";
//     } else if (randomNum <= 98987) {
//       winningSegment = "2500";
//     } else if (randomNum <= 99987) {
//       winningSegment = "5000";
//     } else if (randomNum <= 99997) {
//       winningSegment = "10000";
//     } else {
//       winningSegment = "50000";
//     }

//     // onFinished(winningSegment);
//     onFinished(winningSegment);
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
//       {result && (
//         <div className="flex items-center justify-center w-full">
//           <div className="rounded-lg ">
//             <h1 className="text-4xl font-bold text-center">{result}</h1>
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-center w-full ">
//         <div className="w-1/2 ">
//           <WheelComponent
//             segments={segments}
//             segColors={segColors}
//             winningSegment="MM"
//             onFinished={(winner) => onFinished(winner)}
//             primaryColor="black"
//             contrastColor="white"
//             buttonText="Start"
//             isOnlyOnce={false}
//             size={290}
//             upDuration={200}
//             downDuration={600}
//             fontFamily="Helvetica"
//             // onClick={() => spinWheel()}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpinMain;

import React, { useEffect, useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import bgImage from "../../assets/dashboard_bg.png";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SpinMain = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const [canSpin, setCanSpin] = useState(null);

  useEffect(() => {
    async function checkCanSpin() {
      try {
        // Replace with the actual URL of your backend API

        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        // Replace with the actual URL of your backend API

        // Make the request with the configured headers
        const response = await axios.get(
          "http://localhost:3000/api/jackpot/can-spin",
          {
            headers: headers,
          }
        );

        if (response.status === 200) {
          setCanSpin(true);
        } else if (response.status === 400) {
          setCanSpin(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkCanSpin();
  }, []);
  const segments = ["", "", "", "", "", "", "", ""];
  const segColors = [
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
  ];

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100000) + 1;
  };

  const onFinished = (winner) => {
    const randomNum = generateRandomNumber();
    console.log(randomNum);

    let prize = 0;

    if (randomNum <= 70000) prize = 100;
    else if (randomNum <= 85000) prize = 250;
    else if (randomNum <= 92987) prize = 500;
    else if (randomNum <= 96987) prize = 1000;
    else if (randomNum <= 98987) prize = 2500;
    else if (randomNum <= 99987) prize = 5000;
    else if (randomNum <= 99997) prize = 10000;
    else prize = 50000;

    setResult(prize);

    if (prize !== "Better Luck Next Time") {
      toast.success("Won " + prize);
      // Add any other actions you want to perform
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
      {canSpin ? (
        <>
          {" "}
          <div className="flex flex-row items-center justify-center w-full gap-10">
            <h1 className="text-3xl font-extrabold">Chances of Winning</h1>
            <div className="flex flex-row items-center justify-center gap-10">
              <h1 className="text-xl font-bold text-yellow-500">10000</h1>
              <h1 className="text-xl font-bold text-green-800">5000</h1>
              <h1 className="text-xl font-bold text-yellow-500">1000</h1>
              <h1 className="text-xl font-bold text-green-800">500</h1>
              <h1 className="text-xl font-bold text-yellow-500">250</h1>
              <h1 className="text-xl font-bold text-green-800">100</h1>
            </div>
          </div>
          {result && (
            <div className="flex items-center justify-center w-full mt-5 mb-5">
              <div className="rounded-lg ">
                <h1 className="text-4xl font-bold text-center">{result}</h1>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center w-full ">
            <div className="w-1/2 ">
              <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment="MM"
                onFinished={(winner) => onFinished(winner)}
                // onFinished={onFinished}
                primaryColor="black"
                contrastColor="white"
                buttonText="Start"
                isOnlyOnce={true}
                size={290}
                upDuration={200}
                downDuration={600}
                fontFamily="Helvetica"
              />
            </div>
          </div>
        </>
      ) : (
        <h1 className="w-full font-extrabold text-center">You Cant Spin </h1>
      )}
    </div>
  );
};

export default SpinMain;
