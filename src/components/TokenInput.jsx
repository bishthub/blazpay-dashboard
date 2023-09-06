import React from "react";

const TokenInput = () => {
  return (
    <div className="flex flex-row w-full h-10 p-2 border border-orange-700 rounded-lg">
      <div className="flex flex-row items-center justify-around w-3/4 border-r-2 border-orange-700 m-r-2">
        <h1>img</h1>
        <h1 className="pr-3">ETH</h1>
        <div className="flex items-center justify-center h-5 p-2 text-xs border border-orange-700 rounded-lg">
          Etherium
        </div>
      </div>
      <div className="w-1/4">
        <input
          type="text"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default TokenInput;
