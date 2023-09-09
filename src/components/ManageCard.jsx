import React from "react";

const ManageCard = ({ name, img }) => {
  return (
    <div
      className="flex flex-row items-center justify-center w-full text-black bg-white rounded-lg "
      style={{ height: "5rem" }}
    >
      <img className="w-8" src={img} alt="" />
      <h2 className="text-black">{name}</h2>
    </div>
  );
};

export default ManageCard;
