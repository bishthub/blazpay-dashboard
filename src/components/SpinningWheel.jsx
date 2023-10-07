import React, { useState } from "react";
import axios from "axios"; // You can use Axios for making API requests
import "./SpinningWheel.css";

const SpinningWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState(null);

  const spinWheel = async () => {
    if (!isSpinning) {
      setIsSpinning(true);

      try {
        const response = await axios.post("/api/spin"); // Replace with your backend API endpoint
        const { prize } = response.data;
        setPrize(prize);
      } catch (error) {
        console.error("Error spinning the wheel:", error);
      }

      setIsSpinning(false);
    }
  };

  return (
    <div>
      <div className={`wheel ${isSpinning ? "spin" : ""}`}>
        <div className={`wheel ${isSpinning ? "spin" : ""}`}>
          {/* Wheel segments */}
          <div className="segment">Prize 1</div>
          <div className="segment">Prize 2</div>
          <div className="segment">Prize 3</div>
          <div className="segment">Prize 4</div>
          <div className="segment">Prize 5</div>
        </div>
      </div>
      <button onClick={spinWheel} disabled={isSpinning}>
        Spin
      </button>
      {prize && <div>Prize: {prize}</div>}
    </div>
  );
};

export default SpinningWheel;
