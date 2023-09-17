import React from "react";
import Img from "../assets/img_1.png";

const Card = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 gap-1 py-2 border border-orange-500 rounded-lg ">
      <img
        className="w-1/2 transition-transform transform scale-100 hover:scale-110"
        src={img}
        alt=""
      />
      <div className="flex flex-row justify-around w-1/2">
        <h2>{title}</h2>
        <button className="flex items-center justify-center w-10 p-1 border border-white rounded-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
