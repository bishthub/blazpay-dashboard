import React from "react";
import Logo from "../assets/logo_blazpay.png";
import Fire from "../assets/fire.png";

const Navbar = () => {
  return (
    <nav className="w-full shadow font-bvmp">
      <div className="flex items-center justify-between w-full p-1 flex-column">
        <img className="w-32" src={Logo} />
        <div className="flex flex-row items-center justify-center gap-10 pt-2 pr-4">
          <div
            className="relative flex flex-row items-center justify-center bg-white rounded-lg "
            style={{ width: "10rem", height: "2.5rem" }}
          >
            <img
              className="absolute -left-2"
              style={{ width: "6rem" }}
              src={Fire}
            />
            <div className="text-black">657</div>
          </div>

          <div
            className=" pr-20 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg flex items-center justify-center p-1 relative"
            style={{ width: "15rem", height: "2.5rem" }}
          >
            <span className="absolute inline-block bg-white rounded-full w-7 h-7 left-1"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
