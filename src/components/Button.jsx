import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-full h-10 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg">
      {name}
    </div>
  );
};

export default Button;
