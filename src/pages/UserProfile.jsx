import React, { useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import Edit from "../assets/edit.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";
const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name Surname");

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const renderEditButton = () => {
    if (isEditing) {
      return (
        <button className="w-4 h-4 cursor-pointer" onClick={handleEditClick}>
          Done
        </button>
      );
    } else {
      return (
        <img
          className="w-4 h-4 cursor-pointer"
          src={Edit}
          alt=""
          onClick={handleEditClick}
        />
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
    >
      <Navbar />

      <div className="flex flex-row items-center justify-around w-100">
        <div className="flex flex-col items-center justify-center gap-5 w-100">
          <div className="flex flex-row gap-10 mr-auto w-100">
            <div className="flex flex-col items-center justify-center gap-3 w-100">
              <h1 style={{ fontSize: "1.5rem" }}>Profile</h1>
              <div className="w-20 h-20 bg-white rounded-full "></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-100">
              <h1 style={{ fontSize: "1.5rem" }}>User@blazpay</h1>
              <div className="flex items-center justify-center gap-3">
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    style={{
                      fontSize: "1.5rem",

                      borderRadius: "1rem",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                    }}
                    className="p-1"
                  />
                ) : (
                  <h1 style={{ fontSize: "1.5rem" }}>{name}</h1>
                )}
                {renderEditButton()}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-100">
            <h1 style={{ fontSize: "1.5rems" }}>Bio</h1>
            <textarea
              rows="5"
              cols="70"
              name="message"
              placeholder="Add Bio...."
              className="p-4 text-gray-700 rounded-lg"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded w-100">
          <h1 className="mr-auto w-100" style={{ fontSize: "1.5rem" }}>
            Social Links
          </h1>
          <div
            className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
            style={{ width: "25rem" }}
          >
            <img
              className="pr-3 mr-auto border-r border-black border-solid"
              src={insta}
              alt=""
            />

            <div className="mr-auto text-black ">anmol_123</div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
            style={{ width: "25rem" }}
          >
            <img
              className="pr-3 mr-auto border-r border-black border-solid"
              src={twitter}
              alt=""
            />

            <div className="mr-auto text-black ">anmol_123</div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
            style={{ width: "25rem" }}
          >
            <img
              className="pr-3 mr-auto border-r border-black border-solid"
              src={linkedin}
              alt=""
            />

            <div className="mr-auto text-black ">anmol_123</div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
            style={{ width: "25rem" }}
          >
            <img
              className="pr-3 mr-auto border-r border-black border-solid"
              src={discord}
              alt=""
            />

            <div className="mr-auto text-black ">anmol_123</div>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
            style={{ width: "25rem" }}
          >
            <img
              className="pr-3 mr-auto border-r border-black border-solid"
              src={telegram}
              alt=""
            />

            <div className="mr-auto text-black ">anmol_123</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
