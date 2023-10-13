import React from "react";
import Img from "../assets/img_01.png";

const Profilecards = ({ name, img, t_id }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 p-3 pt-10 pb-10 border border-orange-500 rounded-lg ">
      <img
        className="transition-transform transform scale-100 w-50 hover:scale-110"
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
