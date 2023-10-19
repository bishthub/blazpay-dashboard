import "./SlotMachine.css";
import bgImage from "../assets/dashboard_bg.png";
import jackpotlogo from "../assets/jackpotlogo.png";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  useEffect(() => {
    win();
  }, [ring3]);

  function row1() {
    if (!spin) {
      return (
        <>
          {/* <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div> */}

          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (spin && ring1 == undefined) {
      return (
        <>
          {/* <div className="ringMoving">🍓</div>
          <div className="ringMoving">🍇</div>
          <div className="ringMoving">🍊</div>
          <div className="ringMoving">🥭</div> */}

          <div className="ringMoving text-black">1</div>
          <div className="ringMoving text-black">2</div>
          <div className="ringMoving text-black">3</div>
          <div className="ringMoving text-black">4</div>
        </>
      );
    } else if (ring1 >= 1 && ring1 <= 50) {
      return (
        <>
          {/* <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div> */}

          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring1 > 50 && ring1 <= 75) {
      return (
        <>
          {/* <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div> */}

          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring1 > 75 && ring1 <= 95) {
      return (
        <>
          {/* <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div> */}

          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring1 > 95 && ring1 <= 100) {
      return (
        <>
          {/* <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div> */}

          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    }
  }

  function row2() {
    if (!spin) {
      return (
        <>
          {/* <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div> */}
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    } else if (spin && ring2 == undefined) {
      return (
        <>
          {/* <div className="ringMoving">🍓</div>
          <div className="ringMoving">🍇</div>
          <div className="ringMoving">🍊</div>
          <div className="ringMoving">🥭</div> */}

          <div className="ringMoving text-black">1</div>
          <div className="ringMoving text-black">2</div>
          <div className="ringMoving text-black">3</div>
          <div className="ringMoving text-black">4</div>
        </>
      );
    } else if (ring2 >= 1 && ring2 <= 50) {
      return (
        <>
          {/* <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div> */}
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring2 > 50 && ring2 <= 75) {
      return (
        <>
          {/* <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div> */}

          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring2 > 75 && ring2 <= 95) {
      return (
        <>
          {/* <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div> */}

          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring2 > 95 && ring2 <= 100) {
      return (
        <>
          {/* <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div> */}

          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
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
          {/* <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div> */}
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    } else if (spin && ring3 == undefined) {
      return (
        <>
          {/* <div className="ringMoving">🍓</div>
          <div className="ringMoving">🍇</div>
          <div className="ringMoving">🍊</div>
          <div className="ringMoving">🍋</div>
          <div className="ringMoving">🍍</div>
          <div className="ringMoving">🥭</div> */}

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
          {/* <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div> */}

          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
        </>
      );
    } else if (ring3 > 50 && ring3 <= 75) {
      return (
        <>
          {/* <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div> */}

          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
        </>
      );
    } else if (ring3 > 75 && ring3 <= 95) {
      return (
        <>
          {/* <div className="ringEnd">🍊</div>
          <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div> */}

          <div className="ringEnd text-black">3</div>
          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
        </>
      );
    } else if (ring3 > 95 && ring3 <= 100) {
      return (
        <>
          {/* <div className="ringEnd">🥭</div>
          <div className="ringEnd">🍓</div>
          <div className="ringEnd">🍇</div>
          <div className="ringEnd">🍊</div> */}

          <div className="ringEnd text-black">4</div>
          <div className="ringEnd text-black">1</div>
          <div className="ringEnd text-black">2</div>
          <div className="ringEnd text-black">3</div>
        </>
      );
    }
  }

  // function win() {
  //   if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
  //     setPrice(1);
  //   } else if (
  //     ring1 > 50 &&
  //     ring1 <= 75 &&
  //     ring2 > 50 &&
  //     ring2 <= 75 &&
  //     ring3 > 50 &&
  //     ring3 <= 75 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice();
  //   } else if (
  //     ring1 > 75 &&
  //     ring1 <= 95 &&
  //     ring2 > 75 &&
  //     ring2 <= 95 &&
  //     ring3 > 75 &&
  //     ring3 <= 95 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice(3);
  //   } else if (
  //     ring1 > 95 &&
  //     ring1 <= 100 &&
  //     ring2 > 95 &&
  //     ring2 <= 100 &&
  //     ring3 > 95 &&
  //     ring3 <= 100 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice(4);
  //   } else {
  //     setPrice(0);
  //   }
  // }

  function win() {
    if (
      ring1 > 75 &&
      ring1 <= 95 &&
      ring2 > 75 &&
      ring2 <= 95 &&
      ring3 > 75 &&
      ring3 <= 95 &&
      ring1 != undefined
    ) {
      setPrice("1000");
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
    } catch (err) {
      console.log(err);
    }
  }

  // function win() {
  //   if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
  //     setPrice(1);
  //     // setBalance(balance + balance * 15);
  //   } else if (
  //     ring1 > 50 &&
  //     ring1 <= 75 &&
  //     ring2 > 50 &&
  //     ring2 <= 75 &&
  //     ring3 > 50 &&
  //     ring3 <= 75 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice(2);
  //     // setBalance(balance + balance * 20);
  //   } else if (
  //     ring1 > 75 &&
  //     ring1 <= 95 &&
  //     ring2 > 75 &&
  //     ring2 <= 95 &&
  //     ring3 > 75 &&
  //     ring3 <= 95 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice(3);
  //     // setBalance(balance + balance * 25);
  //   } else if (
  //     ring1 > 95 &&
  //     ring1 <= 100 &&
  //     ring2 > 95 &&
  //     ring2 <= 100 &&
  //     ring3 > 95 &&
  //     ring3 <= 100 &&
  //     ring1 != undefined
  //   ) {
  //     setPrice(4);
  //     // setBalance(balance + jackpot);
  //     setJackpot(0);
  //   } else {
  //     setPrice(0);
  //   }
  // }

  function premio() {
    // if (price === 1 && ring3 > 1) {
    //   return (
    //     <p className="priceInd">{"🍇 X15 You've won " + realBet * 15 + "€!"}</p>
    //   );
    // } else if (price === 2 && ring3 > 1) {
    //   return (
    //     <p className="priceInd">{"🍊 X20 You've won " + realBet * 20 + "€!"}</p>
    //   );
    // } else if (price === 3 && ring3 > 1) {
    //   return (
    //     <p className="priceInd">{"🥭 X25 You've won " + realBet * 25 + "€!"}</p>
    //   );
    // }

    if (price === 4 && ring3 > 1) {
      return (
        <p className="priceInd">
          {"🍓 Jackpot! You've won: " + jackpot + "€!"}
        </p>
      );
    }
    // else if (price === 0 && ring3 > 1) {
    //   return <p className="priceInd">😧 ¡So close! But no luck...</p>;
    // } else if (price === 10) {
    //   return (
    //     <p className="priceInd">
    //       🥶 <span style={{ color: `red` }}>Not enough funds</span>{" "}
    //     </p>
    //   );
    // }
  }

  function numChecker(e) {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 0) || value === "") {
      setInput(value);
    }
  }

  // useEffect(()=>{
  //   async function jackpotSpinner(){
  //     try{

  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  // })

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
