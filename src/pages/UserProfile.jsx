import React, { useEffect, useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import Edit from "../assets/edit.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";

import polygon from "../assets/polygon.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import loginSignupImage from "../assets/login-animation.gif";
import { ImagetoBase64 } from "../Utils/ImagetoBase64";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name Surname");
  const [profileData, setProfileData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [walletAddress, setWalletAddress] = useState([]);

  const [data, setData] = useState({
    img_url: "",
  });
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [bio, setBio] = useState("");

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
    console.log(profileData?.bio);
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
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "http://localhost:3000/api/user/profile",
        data,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        navigate("/");
      } else {
        toast.error("Profile update failed.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleBioSubmit = async (e) => {
    e.preventDefault();

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.put(
        "http://localhost:3000/api/user/profile",
        { bio },
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        toast.success("Bio updated successfully!");
        navigate("/");
      } else {
        toast.error("Profile update failed.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function WalletChains() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const ChainData = await axios.get("http://localhost:3000/api/wallet", {
        headers: headers,
      });

      if (ChainData.status === 200) {
        setWalletAddress(ChainData.data);
      } else {
        toast.warning("Session Expired");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    WalletChains();
  });
  useEffect(() => {
    console.log(walletAddress);
  }, []);
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
      <div className="w-full  h-[80vh]">
        <div
          className=" w-4/5 p-5 flex h-full flex-row items-center justify-around m-auto backdrop-blur-md bg-gray-600 opacity-70
         "
        >
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            {/* <div className="flex flex-row gap-2  w-full items-center justify-center"> */}
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <h1 className="w-full" style={{ fontSize: "1.5rem" }}>
                Profile
              </h1>

              <form
                className="flex w-full flex-col justify-center "
                // onSubmit={handleSubmit}
              >
                <div className="flex flex-row justify-center items-center">
                  <div className="relative w-28 h-28 overflow-hidden rounded-full shadow-md drop-shadow-md ">
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
                        <p className="p-1 text-sm text-white">Edit</p>
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

                  <div className="flex flex-col items-center justify-center gap-3 w-full ">
                    <h1 style={{ fontSize: "1.5rem" }}>{username}</h1>
                    {/* <div className="flex items-center justify-center gap-3">
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
              </div> */}
                  </div>
                </div>
                {/* <div className="relative w-28 h-28 overflow-hidden rounded-full shadow-md drop-shadow-md ">
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
                      <p className="p-1 text-sm text-white">Edit</p>
                    </div>
                    <input
                      type={"file"}
                      id="profileImage"
                      accept="image/*"
                      className="hidden"
                      onChange={handleUploadProfileImage}
                    />
                  </label>
                </div> */}
                <div className="w-28 mr-auto">
                  <button className="w-full " type="submit">
                    Upload
                  </button>
                </div>
              </form>
            </div>

            {/* </div> */}

            <div className="flex flex-col gap-5 w-full">
              <h1 style={{ fontSize: "1.5rem" }}>Bio</h1>

              {profileData?.bio ? (
                <div className="flex justify-start items-start  flex-col gap-3  ">
                  <div className="text-white w-full rounded-lg flex items-center">
                    {profileData?.bio}
                  </div>
                  <div className="">
                    <button className="flex w-12 items-center justify-center  p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg m-auto">
                      Edit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBioSubmit}>
                  <textarea
                    rows="5"
                    cols="70"
                    name="message"
                    placeholder="Add Bio...."
                    className="p-4 text-gray-700 rounded-lg"
                    value={bio}
                    onChange={handleBioChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full h-10 p-2 bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg text-white py-2 px-4 "
                  >
                    Save Bio
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded w-100">
            <h1 className="mr-auto w-100" style={{ fontSize: "1.5rem" }}>
              Your Addresses
            </h1>
            {walletAddress?.chains?.map((res, idx) => {
              return (
                <>
                  <div
                    className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
                    style={{ width: "25rem" }}
                  >
                    <h1 className="text-black">{res.chainName}</h1>
                    <img
                      className="pr-3 w-12 mr-auto border-r border-black border-solid"
                      src={polygon}
                      alt=""
                    />

                    {/* {profileData?.insta ? (
                <div className="mr-auto text-black ">{profileData?.insta}</div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
                    <div className="text-black text-center">
                      {res.walletAddress}
                    </div>
                  </div>
                </>
              );
            })}

            <div
              className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
              style={{ width: "25rem" }}
            >
              <img
                className="pr-3 mr-auto border-r border-black border-solid"
                src={twitter}
                alt=""
              />

              {/* {profileData?.twitter ? (
                <div className="mr-auto text-black ">
                  {profileData?.twitter}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
              <div></div>
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

              {/* {profileData?.linkedin ? (
                <div className="mr-auto text-black ">
                  {profileData?.linkedin}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
              <div></div>
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

              {/* {profileData?.discord ? (
                <div className="mr-auto text-black ">
                  {profileData?.discord}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
              <div></div>
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

              {/* {profileData?.telegram ? (
                <div className="mr-auto text-black ">
                  {profileData?.telegram}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
              <div></div>
            </div>
            {/* <Link to="/user/profile/edit" className="w-full">
              <Button name={"Edit"} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
