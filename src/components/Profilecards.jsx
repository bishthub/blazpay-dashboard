import React from "react";
import Img from "../assets/img_01.png";
import { BsFillSendFill } from "react-icons/bs";

const Profilecards = ({ name, img, t_id, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-3 border border-orange-500 rounded-lg ">
      <img
        className="w-40 transition-transform transform scale-100 hover:scale-110"
        src={img}
        alt=""
      />
      <div className="flex flex-row justify-end w-full">
        <div className="flex-1 text-center text-yellow-500">#{t_id}</div>
        <div className="flex items-center justify-center flex-1 text-center">
          <BsFillSendFill onClick={onClick} className="text-center" />
        </div>
      </div>
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default Profilecards;
