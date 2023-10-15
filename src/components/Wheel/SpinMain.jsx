import React, { useState } from "react";
import bgImage from "../../assets/dashboard_bg.png";
import WheelComponent from "react-wheel-of-prizes";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { setWinner } from "../../redux/WinnerSlice";

const SpinMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");
  const segments = [
    "Better Luck Next Time",
    "100",
    "Better Luck Next Time",
    "250",
    "Better Luck Next Time",
    "500",
    "Better Luck Next Time",
    "2500",
    "Better Luck Next Time",
    "10000",
    "Better Luck Next Time",
    "50000",
  ];
  const segColors = [
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
    "#892b00",
    "#f9b728",
  ];
  const onFinished = (winner) => {
    dispatch(setWinner(winner));
    // setIsSpinning(false);
    setResult(winner);

    if (winner !== "Better Luck Next Time") toast.success("Won" + winner);

    // setResult(winner);
    if (winner !== "Better Luck Next Time") {
      setTimeout(() => {
        // Replace 'home' with the actual URL of your home page
        navigate("/user/spin/win");
      }, 3000);
    } else {
      setTimeout(() => {
        // Replace 'home' with the actual URL of your home page
        navigate("/");
      }, 3000);
    }
  };

  const spinWheel = () => {
    const randomNumber = Math.random();
    let winningSegment = 0;
    while (weights[winningSegment] < randomNumber) {
      winningSegment++;
    }

    onFinished(segments[winningSegment]);
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
        <div className="flex  items-center justify-center w-full">
          <div className=" rounded-lg">
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
            primaryColor="black"
            contrastColor="white"
            buttonText="Start"
            isOnlyOnce={false}
            size={290}
            upDuration={200}
            downDuration={600}
            fontFamily="Helvetica"
            onClick={() => spinWheel()}
          />
        </div>
      </div>
    </div>
  );
};

export default SpinMain;
