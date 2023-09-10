import React from "react";
import Logo from "../assets/logo_blazpay.png";
import Fire from "../assets/fire.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useSelector((state) => state.user.username);
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
            className="  bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg flex  flex-row   items-center justify-between p-1 relative"
            style={{ width: "15rem", height: "2.5rem" }}
          >
            <span className="absolute flex-1 w-8 h-8 bg-white rounded-full left-1"></span>
            <h1 className="flex-1 w-full m-auto font-semibold text-center text-black">
              {username}
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
