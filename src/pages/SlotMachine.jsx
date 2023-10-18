import "./SlotMachine.css";
import bgImage from "../assets/dashboard_bg.png";
import jackpotlogo from "../assets/jackpotlogo.png";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { local } from "d3";

const SlotMachine = ({ id, owned, close, expires }) => {
  const [spin, setSpin] = useState(false);
  const [ring1, setRing1] = useState();
  const [ring2, setRing2] = useState();
  const [ring3, setRing3] = useState();
  const [price, setPrice] = useState();
  const [input, setInput] = useState();
  const [realBet, setRealBet] = useState();
  const [jackpot, setJackpot] = useState(0);
  const [balance, setBalance] = useState(100000);

  const [jackpotData, setJackpotData] = useState({ result: [], reward: 0 });

  useEffect(() => {
    win();
  }, [ring3]);

  function row1() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
        </>
      );
    } else if (spin && ring1 == undefined) {
      return (
        <>
          <div className="ringMoving">🍓</div>
          <div className="ringMoving">🍇</div>
          <div className="ringMoving">🍊</div>
          <div className="ringMoving">🥭</div>
        </>
      );
    } else if (ring1 >= 1 && ring1 <= 50) {
      return (
        <>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
        </>
      );
    } else if (ring1 > 50 && ring1 <= 75) {
      return (
        <>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
        </>
      );
    } else if (ring1 > 75 && ring1 <= 95) {
      return (
        <>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
        </>
      );
    } else if (ring1 > 95 && ring1 <= 100) {
      return (
        <>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
        </>
      );
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
        </>
      );
    } else if (spin && ring2 == undefined) {
      return (
        <>
          <div className="ringMoving">🍓</div>
          <div className="ringMoving">🍇</div>
          <div className="ringMoving">🍊</div>
          <div className="ringMoving">🥭</div>
        </>
      );
    } else if (ring2 >= 1 && ring2 <= 50) {
      return (
        <>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
        </>
      );
    } else if (ring2 > 50 && ring2 <= 75) {
      return (
        <>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
        </>
      );
    } else if (ring2 > 75 && ring2 <= 95) {
      return (
        <>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
        </>
      );
    } else if (ring2 > 95 && ring2 <= 100) {
      return (
        <>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
        </>
      );
    }
  }

  function row3() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
        </>
      );
    } else if (spin && ring3 == undefined) {
      return (
        <>
          <div className="ringMoving"></div>
          <div className="ringMoving"></div>
          <div className="ringMoving"></div>
          <div className="ringMoving"></div>
          <div className="ringMoving"></div>
          <div className="ringMoving"></div>
        </>
      );
    } else if (ring3 >= 1 && ring3 <= 50) {
      return (
        <>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
        </>
      );
    } else if (ring3 > 50 && ring3 <= 75) {
      return (
        <>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
        </>
      );
    } else if (ring3 > 75 && ring3 <= 95) {
      return (
        <>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
        </>
      );
    } else if (ring3 > 95 && ring3 <= 100) {
      return (
        <>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
        </>
      );
    }
  }

  function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
      setPrice(1);
    } else if (
      ring1 > 50 &&
      ring1 <= 75 &&
      ring2 > 50 &&
      ring2 <= 75 &&
      ring3 > 50 &&
      ring3 <= 75 &&
      ring1 != undefined
    ) {
      setPrice(2);
    } else if (
      ring1 > 75 &&
      ring1 <= 95 &&
      ring2 > 75 &&
      ring2 <= 95 &&
      ring3 > 75 &&
      ring3 <= 95 &&
      ring1 != undefined
    ) {
      setPrice(3);
    } else if (
      ring1 > 95 &&
      ring1 <= 100 &&
      ring2 > 95 &&
      ring2 <= 100 &&
      ring3 > 95 &&
      ring3 <= 100 &&
      ring1 != undefined
    ) {
      setPrice(4);
    } else {
      setPrice(0);
    }
  }

  function rand() {
    setRing1(Math.floor(Math.random() * (100 - 1) + 1));
    setTimeout(function () {
      setRing2(Math.floor(Math.random() * (100 - 1) + 1));
    }, 1000);
    setTimeout(function () {
      setRing3(Math.floor(Math.random() * (100 - 1) + 1));
    }, 2000);
  }

  function play() {
    if (ring3 > 1 || !spin) {
      setRealBet(input);
      setSpin(true);
      setRing1();
      setRing2();
      setRing3();
      setBalance(balance - input);
      setJackpot(jackpot + input / 2);
      setTimeout(function () {
        rand();
      }, 2000);
    }
  }

  function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
      setPrice(1);
      // setBalance(balance + balance * 15);
    } else if (
      ring1 > 50 &&
      ring1 <= 75 &&
      ring2 > 50 &&
      ring2 <= 75 &&
      ring3 > 50 &&
      ring3 <= 75 &&
      ring1 != undefined
    ) {
      setPrice(2);
      // setBalance(balance + balance * 20);
    } else if (
      ring1 > 75 &&
      ring1 <= 95 &&
      ring2 > 75 &&
      ring2 <= 95 &&
      ring3 > 75 &&
      ring3 <= 95 &&
      ring1 != undefined
    ) {
      setPrice(3);
      // setBalance(balance + balance * 25);
    } else if (
      ring1 > 95 &&
      ring1 <= 100 &&
      ring2 > 95 &&
      ring2 <= 100 &&
      ring3 > 95 &&
      ring3 <= 100 &&
      ring1 != undefined
    ) {
      setPrice(4);
      // setBalance(balance + jackpot);
      setJackpot(0);
    } else {
      setPrice(0);
    }
  }

  function premio() {
    if (price === 1 && ring3 > 1) {
      return (
        <p className="priceInd">{"🍇 X15 You've won " + realBet * 15 + "€!"}</p>
      );
    } else if (price === 2 && ring3 > 1) {
      return (
        <p className="priceInd">{"🍊 X20 You've won " + realBet * 20 + "€!"}</p>
      );
    } else if (price === 3 && ring3 > 1) {
      return (
        <p className="priceInd">{"🥭 X25 You've won " + realBet * 25 + "€!"}</p>
      );
    } else if (price === 4 && ring3 > 1) {
      return (
        <p className="priceInd">
          {"🍓 Jackpot! You've won: " + jackpot + "€!"}
        </p>
      );
    } else if (price === 0 && ring3 > 1) {
      return <p className="priceInd">😧 ¡So close! But no luck...</p>;
    } else if (price === 10) {
      return (
        <p className="priceInd">
          🥶 <span style={{ color: `red` }}>Not enough funds</span>{" "}
        </p>
      );
    }
  }

  function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 0) || value === "") {
      setInput(value);
    }
  }

  const jackpotSpinner = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        "http://localhost:3000/api/jackpot/jackpotItemsSpinner",
        {},
        { headers: headers }
      );

      if (response.status === 200) {
        console.log(response.data);
        setJackpotData(response.data);

        console.log(jackpotData.result);
      } else {
        console.log("Something went wrong with the API request.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-1"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />
      <div className="fullSlot bg-gray-400 p-5">
        {/* <h1 className="casinoName">casino montecarlo</h1> */}
        <img src={jackpotlogo} alt="jackpot" />

        <h1 className="price">{"Jackpot: " + jackpot + "€"}</h1>
        <div className="slot">
          <div className="row">{row1()}</div>
          <div className="row">{row2()}</div>
          <div className="row">{row3()}</div>
        </div>
        <h1 className="price">{premio()}</h1>
        <div className="slotFoot">
          <button
            className="spinButton bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg"
            onClick={() => play()}
            // onClick={jackpotSpinner}
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
