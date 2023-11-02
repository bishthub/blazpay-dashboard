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
  const [num1, setNum1] = useState([]);
  const [num2, setNum2] = useState([]);
  const [num3, setNum3] = useState([]);

  const [apiResponse, setApiResponse] = useState({
    result: [],
    reward: 0,
  });

  let numbers1 = [1, 2, 5, 6];
  let numbers2 = [3, 4, 5, 6];
  let numbers3 = [1, 2, 3, 4];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    console.log("ok");
    shuffleArray(numbers1);
    setNum1(numbers1);
    console.log("num1", num1[0]);
    shuffleArray(numbers2);
    setNum2(numbers2);
    console.log("num2", num2[0]);
    shuffleArray(numbers3);
    setNum3(numbers3);
    console.log("num3", num3[0]);
  }, [toggle]);

  console.log(numbers1);

  useEffect(() => {
    if (ring3 !== undefined) {
      win();
      console.log("finals", finals);

      if (finals) {
        toast.success("Won 1000 Tokens");
        rewardToken();
      }
    }
  }, [ring3]);

  function row1() {
    if (!spin) {
      return (
        <>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">4</div>
        </>
      );
    } else if (spin && ring1 == undefined) {
      return (
        <>
          <div className="text-black ringMoving">1</div>
          <div className="text-black ringMoving">2</div>
          <div className="text-black ringMoving">3</div>
          <div className="text-black ringMoving">4</div>
        </>
      );
    } else if (ring1 >= 1 && ring1 <= 50) {
      return (
        <>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">4</div>
        </>
      );
    } else if (ring1 > 50 && ring1 <= 75) {
      return (
        <>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">1</div>
        </>
      );
    } else if (ring1 > 75 && ring1 <= 90) {
      return (
        <>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">2</div>
        </>
      );
    } else if (ring1 > 90 && ring1 <= 100) {
      return (
        <>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">2</div>
        </>
      );
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">{num2[0]}</div>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">3</div>
        </>
      );
    } else if (spin && ring2 == undefined) {
      return (
        <>
          <div className="text-black ringMoving">1</div>
          <div className="text-black ringMoving">2</div>
          <div className="text-black ringMoving">3</div>
          <div className="text-black ringMoving">4</div>
        </>
      );
    } else if (ring2 >= 1 && ring2 <= 50) {
      return (
        <>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">{num2[0]}</div>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">4</div>
        </>
      );
    } else if (ring2 > 50 && ring2 <= 75) {
      return (
        <>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">{num2[0]}</div>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">1</div>
        </>
      );
    } else if (ring2 > 75 && ring2 <= 90) {
      return (
        <>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">{num2[0]}</div>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">2</div>
        </>
      );
    } else if (ring2 > 90 && ring2 <= 100) {
      return (
        <>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">3</div>
        </>
      );
    }
  }

  function row3() {
    if (!spin) {
      return (
        <>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">{num3[0]}</div>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">1</div>
        </>
      );
    } else if (spin && ring3 == undefined) {
      return (
        <>
          <div className="text-black ringMoving">1</div>
          <div className="text-black ringMoving">2</div>
          <div className="text-black ringMoving">3</div>
          <div className="text-black ringMoving">6</div>
          <div className="text-black ringMoving">5</div>
          <div className="text-black ringMoving">4</div>
        </>
      );
    } else if (ring3 >= 1 && ring3 <= 50) {
      return (
        <>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">{num3[0]}</div>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">4</div>
        </>
      );
    } else if (ring3 > 50 && ring3 <= 75) {
      return (
        <>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">{num3[0]}</div>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">1</div>
        </>
      );
    } else if (ring3 > 75 && ring3 <= 90) {
      return (
        <>
          <div className="text-black ringEnd">3</div>
          <div className="text-black ringEnd">{num3[0]}</div>
          <div className="text-black ringEnd">1</div>
          <div className="text-black ringEnd">2</div>
        </>
      );
    } else if (ring3 > 90 && ring3 <= 100) {
      return (
        <>
          <div className="text-black ringEnd">4</div>
          <div className="text-black ringEnd">{num1[0]}</div>
          <div className="text-black ringEnd">2</div>
          <div className="text-black ringEnd">3</div>
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
    const r1 = Math.floor(Math.random() * (100 - 1) + 1);
    // const r1 = 94;
    // const r2 = 94;
    const r2 = Math.floor(Math.random() * (100 - 1) + 1);
    // const r3 = 95;
    const r3 = Math.floor(Math.random() * (100 - 1) + 1);

    setRing1(r1);
    console.log("ring1", ring1);

    setTimeout(function () {
      // const r2 = Math.floor(Math.random() * (100 - 1) + 1);
      // const r2 = 93;
      setRing2(r2);
      console.log("ring2", ring2);
    }, 1000);
    setTimeout(function () {
      // const r3 = Math.floor(Math.random() * (100 - 1) + 1);
      // const r3 = 93;

      setRing3(r3);

      console.log("ring3", ring3);
    }, 2000);
    // 98 < ring1 <= 100 && 98 < ring2 <= 100 && 98 < ring3 <= 100

    setTimeout(() => {
      if (r1 > 90 && r2 > 90 && r3 > 90) {
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
      setFinals(false);
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
        "http://localhost:3000/api/jackpot/jackpotSpinner",
        {},

        {
          headers: headers,
        }
      );
      if (response.status === 200) {
        // setApiResponse(response.data);

        if (response.data.canJackpots === true) setCanSpin(true);
        else setCanSpin(false);

        console.log("kyaaaaa huaaaaaaa", response.data);
      } else {
        setCanSpin(false);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      setCanSpin(false);
      console.log(err);
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
          "http://localhost:3000/api/jackpot/can-jackpot",
          {
            headers: headers,
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          if (response.data.canJackpot == true) {
            setCanSpin(true);
            console.log("Achhhaaa 2", "Can pin");
          } else {
            setCanSpin(false);
            console.log("Galatttt 2", "Cant Spin");
          }
        } else if (response.status === 400) {
          setCanSpin(false);
        } else {
          setCanSpin(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (err) {
        console.log(err);

        setCanSpin(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }

    canSpins();
  }, []);

  async function rewardToken() {
    try {
      if (canSpin) {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          "http://localhost:3000/api/jackpot/jackpotDone",
          { amount: 1000 },
          {
            headers: headers,
          }
        );

        if (response.status === 200) {
          console.log("Added Token", response.data.message);
        } else {
          navigate("/user/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      className="relative flex flex-col items-center w-full min-h-screen px-1"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />

      {canSpin ? (
        <div className="p-5 bg-gray-400 fullSlot">
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
