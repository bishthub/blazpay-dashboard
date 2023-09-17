import React, { useState } from "react";
import Logo from "../assets/logo_blazpay.png";
import Fire from "../assets/fire.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { logoutRedux } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
// import { HiArrowsUpDown } from "react-icons/hi";
import setting from "../assets/setting.png";
import profile from "../assets/profile.png";
import entrylogo from "../assets/entrylogo.png";
import items from "../assets/items.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutRedux());

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/user/login");
  };
  const username = useSelector((state) => state.user.username);

  const handleProfile = () => {
    setClick(!click);
  };
  return (
    <nav
      className="flex items-center justify-center w-full shadow font-bvmp "
      style={{ height: "10vh" }}
    >
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
            className="  bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg flex  flex-row   items-center justify-between p-1 relative w-full h-full"
            // style={{ width: "15rem", height: "2.5rem" }}
          >
            <span
              onClick={handleProfile}
              className="absolute flex-1 w-8 h-8 bg-white rounded-full left-1"
            ></span>
            {click ? (
              <div
                className="absolute flex flex-col items-center justify-center w-full gap-3 p-2
                ..00 bg-gray-700 rounded-lg top-full"
                style={{ zIndex: "99999999" }}
              >
                <div className="flex flex-row items-center justify-around w-full">
                  <img src={profile} alt="" />

                  <h1 className="w-full text-center">Profile</h1>
                </div>
                <div className="flex flex-row items-center justify-around w-full">
                  <img src={setting} alt="" />
                  <h1 className="w-full text-center">Setting</h1>
                </div>
                <div className="flex flex-row items-center justify-around w-full">
                  <img src={items} alt="" />
                  <h1 className="w-full text-center">My Items</h1>
                </div>
                <div className="flex flex-row items-center justify-around w-full">
                  <img src={entrylogo} alt="" />
                  <h1 className="w-full text-center">My Entry Passes</h1>
                </div>
                <div className="flex flex-row items-center justify-around w-full">
                  <h1>ok</h1>
                  <h1 className="w-full text-center">Recent Transactions</h1>
                </div>
              </div>
            ) : (
              <></>
            )}

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
