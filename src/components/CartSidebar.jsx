import React from "react";
import { FaTimes } from "react-icons/fa";

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
      className="fixed top-0 right-0 h-full bg-black"
      style={{ zIndex: "555", width: "30rem" }}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-row items-center justify-between w-full px-4 py-2">
          <h1 className="text-white">Cart</h1>
          <FaTimes
            onClick={handleClick}
            style={{ fontSize: "3rem", color: "white", zIndex: "9999" }}
          />
        </div>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default CartSidebar;
