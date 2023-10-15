import React from "react";
import Img from "../assets/img_01.png";

const Profilecards = ({ name, img, t_id, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full p-3 border border-orange-500 rounded-lg "
      onClick={onClick}
    >
      <img
        className="transition-transform transform scale-100 w-40 hover:scale-110"
        src={img}
        alt=""
      />
      <div className="flex flex-row justify-end w-full">
        <div className="flex-1"></div>
        <div className="flex-1">#{t_id}</div>
      </div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default Profilecards;
