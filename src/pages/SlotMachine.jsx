// import React from "react";
// import Machine from "./machine";
// import "./SlotMachine.css";

// const SlotMachine = () => {
//   const apple = "https://img.icons8.com/emoji/96/000000/red-apple.png";
//   const banana = "https://img.icons8.com/emoji/96/000000/banana-emoji.png";
//   const coconut = "https://img.icons8.com/emoji/96/000000/coconut-emoji.png";
//   const grapes = "https://img.icons8.com/emoji/96/000000/grapes-emoji.png";
//   const mango = "https://img.icons8.com/emoji/96/000000/mango-emoji.png";

//   return (
//     <div className="main">
//       <Machine x={apple} y={coconut} z={banana} />
//       <Machine x={banana} y={banana} z={banana} />
//       <Machine x={banana} y={grapes} z={mango} />
//     </div>
//   );
// };

// export default SlotMachine;

import React, { useState } from "react";

import "./SlotMachine.css";
import Machine from "./machine";

const SlotMachine = () => {
  const apple = "https://img.icons8.com/emoji/96/000000/red-apple.png";
  const banana = "https://img.icons8.com/emoji/96/000000/banana-emoji.png";
  const coconut = "https://img.icons8.com/emoji/96/000000/coconut-emoji.png";
  const grapes = "https://img.icons8.com/emoji/96/000000/grapes-emoji.png";
  const mango = "https://img.icons8.com/emoji/96/000000/mango-emoji.png";

  const [isSpinning, setIsSpinning] = useState(false);

  const handleStart = () => {
    setIsSpinning(true);
  };

  return (
    <div className="main">
      <button onClick={handleStart} disabled={isSpinning}>
        Start
      </button>
      <Machine x={apple} y={coconut} z={banana} isSpinning={isSpinning} />
      <Machine x={banana} y={banana} z={banana} isSpinning={isSpinning} />
      <Machine x={banana} y={grapes} z={mango} isSpinning={isSpinning} />
    </div>
  );
};

export default SlotMachine;
