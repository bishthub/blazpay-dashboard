import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CartSidebar = ({ setIsCart, isCart }) => {
  const handleClick = () => {
    setIsCart(false);
  };
  return (
    // <div
    //   className="absolute flex items-center justify-center bg-black "
    //   style={{ zIndex: "555", height: "30rem" }}
    // >
    //   <div className="flex flex-col items-center justify-center w-full">
    //     <div className="flex flex-row items-center justify-center w-full">
    //       <h1>Cart</h1>
    //       <FaTimes style={{ fontSize: "3rem" }} />
    //     </div>
    //   </div>
    // </div>
    <div
      className="absolute t-0 r-0 w-[350px]  h-[100vh] bg-gray-700 "
      style={{ zIndex: "555" }}
    >
      <div className="flex flex-col justify-center h-full px-2">
        <div className="flex flex-row items-center justify-between w-full px-4 py-2 border-b-2 border-white">
          <h1 className="text-white">Cart</h1>
          <IoMdCloseCircleOutline />
        </div>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default CartSidebar;
