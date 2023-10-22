import "./SlotMachine.css";
import bgImage from "../assets/dashboard_bg.png";
import jackpotlogo from "../assets/jackpotlogo.png";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SlotMachine = ({ id, owned, close, expires }) => {
  const [spin, setSpin] = useState(false);
  const [ring1, setRing1] = useState();
  const [ring2, setRing2] = useState();
  const [ring3, setRing3] = useState();
  const [price, setPrice] = useState();
  const [input, setInput] = useState();
  const [realBet, setRealBet] = useState();
  const [jackpot, setJackpot] = useState(1000);
  const [balance, setBalance] = useState(100000);
  const navigate = useNavigate();
  const [canSpin, setCanSpin] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [final, setFinal] = useState(false);
  const [finals, setFinals] = useState(false);

  const [apiResponse, setApiResponse] = useState({
    result: [],
    reward: 0,
  });

  const numbers1 = [1, 2, 5, 6];
  const numbers2 = [3, 4, 5, 6];
  const numbers3 = [1, 2, 3, 4];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(numbers1);
  shuffleArray(numbers2);
  shuffleArray(numbers3);

  // useEffect(() => {

  //   console.log("number1", numbers1);
  //   // console.log(numbers2);
  // }, [apiResponse]);

  console.log(numbers1);

  useEffect(() => {
    if (ring3 !== undefined) {
      win();
    }
  }, [ring3]);

  function row1() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (spin && ring1 == undefined) {
      return (
        <>
          <div className="ringMoving text-black">1</div>
          <div className="ringMoving text-black">2</div>
          <div className="ringMoving text-black">3</div>
          <div className="ringMoving text-black">4</div>
        </>
      );
    } else if (ring1 >= 1 && ring1 <= 50) {
      return (
        <>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring1 > 50 && ring1 <= 75) {
      return (
        <>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring1 > 75 && ring1 <= 98) {
      return (
        <>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring1 > 98 && ring1 <= 100) {
      return (
        <>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">{numbers2[0]}</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    } else if (spin && ring2 == undefined) {
      return (
        <>
          <div className="ringMoving text-black">1</div>
          <div className="ringMoving text-black">2</div>
          <div className="ringMoving text-black">3</div>
          <div className="ringMoving text-black">4</div>
        </>
      );
    } else if (ring2 >= 1 && ring2 <= 50) {
      return (
        <>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">{numbers2[0]}</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring2 > 50 && ring2 <= 75) {
      return (
        <>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">{numbers2[0]}</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring2 > 75 && ring2 <= 98) {
      return (
        <>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">{numbers2[0]}</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring2 > 98 && ring2 <= 100) {
      return (
        <>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    }
  }

  function row3() {
    if (!spin) {
      return (
        <>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">{numbers3[0]}</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (spin && ring3 == undefined) {
      return (
        <>
          <div className="ringMoving text-black">1</div>
          <div className="ringMoving text-black">2</div>
          <div className="ringMoving text-black">3</div>
          <div className="ringMoving text-black">6</div>
          <div className="ringMoving text-black">5</div>
          <div className="ringMoving text-black">4</div>
        </>
      );
    } else if (ring3 >= 1 && ring3 <= 50) {
      return (
        <>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">{numbers3[0]}</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring3 > 50 && ring3 <= 75) {
      return (
        <>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">{numbers3[0]}</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring3 > 75 && ring3 <= 98) {
      return (
        <>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">{numbers3[0]}</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring3 > 98 && ring3 <= 100) {
      return (
        <>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">{numbers1[0]}</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    }
  }

  function win() {
    // if (
    //   ring1 > 75 &&
    //   ring1 <= 95 &&
    //   ring2 > 75 &&
    //   ring2 <= 95 &&
    //   ring3 > 75 &&
    //   ring3 <= 95 &&
    //   ring1 != undefined
    // ) {
    //   setPrice("1000");
    // }
  }

  function rand() {
    // setFinals(false);
    const r1 = Math.floor(Math.random() * (100 - 1) + 1);
    setRing1(r1);
    console.log("ring1", ring1);

    setTimeout(function () {
      const r2 = Math.floor(Math.random() * (100 - 1) + 1);
      setRing2(r2);
      console.log("ring2", ring2);
    }, 1000);
    setTimeout(function () {
      const r3 = Math.floor(Math.random() * (100 - 1) + 1);

      setRing3(r3);

      console.log("ring3", ring3);
    }, 2000);
    // 98 < ring1 <= 100 && 98 < ring2 <= 100 && 98 < ring3 <= 100

    setTimeout(() => {
      if (ring1 > 98 && ring2 > 98 && ring3 > 98) {
        setFinals(true);
      } else {
        setFinals(false);
      }
    }, 2000);
  }

  function play() {
    if (ring3 > 1 || !spin) {
      setRealBet(input);
      setSpin(true);
      setRing1();
      setRing2();
      setRing3();
      // setBalance(balance - input);
      // setJackpot(jackpot + input / 2);
      setTimeout(function () {
        rand();
      }, 2000);
    }
    setToggle(!toggle);
    SpinJackpot();
  }

  async function SpinJackpot() {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "http://localhost:3000/api/jackpot/jackpotItemsSpinner",
        {},
        {
          headers: headers,
        }
      );
      if (response.status === 200) {
        setApiResponse(response.data);

        console.log(apiResponse.result);
      } else {
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function premio() {
    return (
      <>{finals ? <h1>Won 1000 tokens</h1> : <h1>Better Luck Next Time</h1>}</>
    );
  }

  useEffect(() => {
    async function canSpins() {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          "http://localhost:3000/api/jackpot/can-spin",
          {
            headers: headers,
          }
        );

        if (response.status === 200) {
          // setCanSpin(true);
          if (response.data.canSpin == true) setCanSpin(true);
          else setCanSpin(false);

          console.log(response.data);
        } else if (response.status === 400) {
          setCanSpin(false);
        } else {
          navigate("/user/login");
        }
      } catch (err) {
        console.log(err);
        toast.error(err);
        setCanSpin(false);
      }
    }

    canSpins();
  }, [toggle]);

  return (
    <div
      className="relative flex flex-col items-center  w-full min-h-screen px-1"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />

      {canSpin ? (
        <div className="fullSlot bg-gray-400 p-5">
          <h1 className="casinoName">BlazPay</h1>
          <img src={jackpotlogo} alt="jackpot" />

          <h1 className="price">{"Jackpot: " + jackpot + " tokens"}</h1>
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
            >
              Spin
            </button>
          </div>
        </div>
      ) : (
        <h1 className="w-full font-extrabold text-center">You Cant Spin </h1>
      )}
    </div>
  );
};

export default SlotMachine;
