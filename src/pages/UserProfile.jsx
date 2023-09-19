import React, { useEffect, useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import Edit from "../assets/edit.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import loginSignupImage from "../assets/login-animation.gif";
import { ImagetoBase64 } from "../Utils/ImagetoBase64";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name Surname");
  const [profileData, setProfileData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [data, setData] = useState({
    img_url: "",
  });

  const username = localStorage.getItem("username");

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
  const id = localStorage.getItem("id");
  async function ProfileUpdate() {
    const datas = await axios.get(
      `http://localhost:3000/api/user/profile/${id}`
    );
    setProfileData(datas.data);
  }

  useEffect(() => {
    ProfileUpdate();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        img_url: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("anmol" + token);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.put(
        "http://localhost:3000/api/user/profile",
        data,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        // Profile update was successful

        toast.success("Profile updated successfully!");
        navigate("/user/profile");
      } else {
        // Handle other response statuses or errors here

        toast.error("Profile update failed.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
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
              {/* <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full ">
                  

                </div>
                <input className="" type="file" />
              </div> */}

              {/* <div className="flex flex-col items-center justify-center">
          
                <div className="w-20 h-20 overflow-hidden bg-white rounded-full"></div>
                <input type="file" placeholder="image" />
              </div> */}
              <form onSubmit={handleSubmit}>
                <div className="relative w-20 h-20 m-auto overflow-hidden rounded-full shadow-md drop-shadow-md ">
                  <img
                    src={
                      profileData?.img_url
                        ? profileData?.img_url
                        : loginSignupImage
                    }
                    className="w-full h-full"
                  />

                  <label htmlFor="profileImage">
                    <div className="absolute bottom-0 w-full text-center bg-opacity-50 cursor-pointer h-1/3 bg-slate-500">
                      <p className="p-1 text-sm text-white">Upload</p>
                    </div>
                    <input
                      type={"file"}
                      id="profileImage"
                      accept="image/*"
                      className="hidden"
                      onChange={handleUploadProfileImage}
                    />
                  </label>
                </div>
                <button type="submit">Upload</button>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-100">
              <h1 style={{ fontSize: "1.5rem" }}>{username}</h1>
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
            {profileData?.insta ? (
              <div className="mr-auto text-black ">{profileData?.insta}</div>
            ) : (
              <div className="mr-auto text-black "></div>
            )}
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

            {profileData?.twitter ? (
              <div className="mr-auto text-black ">{profileData?.twitter}</div>
            ) : (
              <div className="mr-auto text-black "></div>
            )}
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

            {profileData?.linkedin ? (
              <div className="mr-auto text-black ">{profileData?.linkedin}</div>
            ) : (
              <div className="mr-auto text-black "></div>
            )}
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

            {profileData?.discord ? (
              <div className="mr-auto text-black ">{profileData?.discord}</div>
            ) : (
              <div className="mr-auto text-black "></div>
            )}
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

            {profileData?.telegram ? (
              <div className="mr-auto text-black ">{profileData?.telegram}</div>
            ) : (
              <div className="mr-auto text-black "></div>
            )}
          </div>
          <Link to="/user/profile/edit" className="w-full">
            <Button name={"Edit"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
