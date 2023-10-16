import React, { useState, useEffect } from "react";
import axios from "axios";

const SpinCheck = () => {
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
          // User can spin
          setCanSpin(true);
        } else if (response.status === 400) {
          // User cannot spin
          setCanSpin(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkCanSpin();
  }, []);

  return (
    <div className="h-screen bg-black">
      {canSpin === null && <p>Checking...</p>}
      {canSpin === true && <p>You can spin.</p>}
      {canSpin === false && (
        <p>You've reached the maximum spins for the last 24 hours.</p>
      )}
    </div>
  );
};

export default SpinCheck;
