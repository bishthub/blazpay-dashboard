import React from "react";
import Logo from "../assets/logo_blazpay.png";
import Fire from "../assets/fire.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { logoutRedux } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogout = (e) => {
    e.preventDefault();

    // Dispatch logoutSuccess action
    dispatch(logoutRedux());

    // Clear localStorage or perform any other necessary cleanup
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/user/login");
  };
  const username = useSelector((state) => state.user.username);
  return (
    <nav className="w-full shadow font-bvmp">
      <div className="flex items-center justify-between w-full p-1 flex-column">
        <Link to="/" className="w-full">
          <img className="w-32" src={Logo} />
        </Link>

        <div className="flex flex-row items-center justify-center gap-10 pt-2 pr-4">
          <button className="pointer" name={"Logout"} onClick={HandleLogout}>
            Logout
          </button>

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
