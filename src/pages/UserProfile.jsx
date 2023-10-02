// import React, { useCallback, useEffect, useState } from "react";
// import bgImage from "../assets/dashboard_bg.png";
// import Navbar from "../components/Navbar";
// import Edit from "../assets/edit.png";

// import polygon from "../assets/polygon.png";

// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// import loginSignupImage from "../assets/login-animation.gif";
// import { ImagetoBase64 } from "../Utils/ImagetoBase64";

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState("Name Surname");
//   const [profileData, setProfileData] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [walletAddress, setWalletAddress] = useState([]);
//   const [edit, setEdit] = useState(true);

//   const [data, setData] = useState({
//     img_url: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const username = localStorage.getItem("username");
//   const [bio, setBio] = useState("");

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const renderEditButton = () => {
//     if (isEditing) {
//       return (
//         <button className="w-4 h-4 cursor-pointer" onClick={handleEditClick}>
//           Done
//         </button>
//       );
//     } else {
//       return (
//         <img
//           className="w-4 h-4 cursor-pointer"
//           src={Edit}
//           alt=""
//           onClick={handleEditClick}
//         />
//       );
//     }
//   };
//   const id = localStorage.getItem("id");
//   // async function ProfileUpdate() {
//   //   try {
//   //     setLoading(true);
//   //     const datas = await axios.get(
//   //       `http://localhost:3000/api/user/profile/${id}`
//   //     );

//   //     if (datas.status === 200) {
//   //       setLoading(false);
//   //       setProfileData(datas.data);
//   //     } else {
//   //       setLoading(false);
//   //       console.log("Something went wrong");
//   //     }
//   //   } catch (err) {
//   //     setLoading(false);
//   //     toast.warning("Session Expired");
//   //     navigate("/user/login");
//   //   }
//   // }

//   // useEffect(() => {
//   //   ProfileUpdate();
//   // }, []);

//   const ProfileUpdate = useCallback(async () => {
//     try {
//       setLoading(true); // Set loading to true when you start fetching data
//       const datas = await axios.get(
//         `http://localhost:3000/api/user/profile/${id}`
//       );

//       if (datas.status === 200) {
//         setProfileData(datas.data);
//       } else {
//         console.log("Something went wrong");
//       }
//     } catch (err) {
//       toast.warning("Session Expired");
//       navigate("/user/login");
//     } finally {
//       setLoading(false);
//     }
//   }, [id, navigate]);

//   useEffect(() => {
//     ProfileUpdate();
//   }, [ProfileUpdate, id]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((preve) => {
//       return {
//         ...preve,
//         [name]: value,
//       };
//     });
//   };

//   const handleUploadProfileImage = async (e) => {
//     const data = await ImagetoBase64(e.target.files[0]);

//     setData((preve) => {
//       return {
//         ...preve,
//         img_url: data,
//       };
//     });
//   };
//   const token = localStorage.getItem("token");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       const headers = {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       };

//       const response = await axios.post(
//         "http://localhost:3000/api/user/profile",
//         data,
//         {
//           headers: headers,
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Profile updated successfully!");
//         navigate("/");
//       } else {
//         toast.error("Profile update failed.");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error);
//     }
//   };

//   const handleBioChange = (e) => {
//     setBio(e.target.value);
//   };

//   const handleBioSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       };

//       const response = await axios.put(
//         "http://localhost:3000/api/user/profile",
//         { bio },
//         {
//           headers: headers,
//         }
//       );

//       if (response.status === 200) {
//         // toast.success("Bio updated successfully!");
//         console.log("Session Expired Photo in ProfilePAge");
//         navigate("/");
//       } else {
//         toast.error("Profile update failed.");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   async function WalletChains() {
//     try {
//       const headers = {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       };

//       const ChainData = await axios.get("http://localhost:3000/api/wallet", {
//         headers: headers,
//       });

//       if (ChainData.status === 200) {
//         setWalletAddress(ChainData.data);
//       } else {
//         console.log("Error in getting the chain data in profile page");
//       }
//     } catch (err) {
//       // toast.warning("Session Expired");
//       console.log("session Expired get wallet address in profile Page");
//       // navigate("/user/login");
//     }
//   }

//   useEffect(() => {
//     WalletChains();
//   }, [token]);
//   useEffect(() => {
//     console.log(walletAddress);
//   }, []);

//   const HandleEdit = () => {
//     setEdit(!edit);
//   };

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ImagetoBase64 } from "../Utils/ImagetoBase64";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import Edit from "../assets/edit.png";
import polygon from "../assets/polygon.png";
import loginSignupImage from "../assets/login-animation.gif";

const UserProfile = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name Surname");
  const [profileData, setProfileData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [walletAddress, setWalletAddress] = useState([]);
  const [edit, setEdit] = useState(true);
  const [bio, setBio] = useState("");

  const [data, setData] = useState({
    img_url: "",
  });

  // const handleEditClick = () => {
  //   setIsEditing(!isEditing);
  // };

  // // const ProfileUpdate = useCallback(async () => {
  // //   try {
  // //     setLoading(true);
  // //     const datas = await axios.get(
  // //       `http://localhost:3000/api/user/profile/${id}`
  // //     );
  // //     if (datas.status === 200) {
  // //       setProfileData(datas.data);
  // //     } else {
  // //       console.log("Something went wrong");
  // //     }
  // //   } catch (err) {
  // //     toast.warning("Session Expired");
  // //     navigate("/user/login");
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // }, [id, navigate]);
  // const ProfileUpdate = useMemo(() => {
  //   return async () => {
  //     setLoading(true); // Set loading to true when you start fetching data
  //     const datas = await axios.get(
  //       `http://localhost:3000/api/user/profile/${id}`
  //     );

  //     if (datas.status === 200) {
  //       setProfileData(datas.data);
  //     } else {
  //       console.log("Something went wrong");
  //     }
  //   };
  // }, [id, navigate]);

  // useEffect(() => {
  //   ProfileUpdate();
  // }, [ProfileUpdate, id]);

  // const renderEditButton = () => {
  //   return isEditing ? (
  //     <button className="w-4 h-4 cursor-pointer" onClick={handleEditClick}>
  //       Done
  //     </button>
  //   ) : (
  //     <img
  //       className="w-4 h-4 cursor-pointer"
  //       src={Edit}
  //       alt=""
  //       onClick={handleEditClick}
  //     />
  //   );
  // };

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleUploadProfileImage = async (e) => {
  //   const imageData = await ImagetoBase64(e.target.files[0]);
  //   setData((prev) => ({
  //     ...prev,
  //     img_url: imageData,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     };
  //     const response = await axios.post(
  //       "http://localhost:3000/api/user/profile",
  //       data,
  //       {
  //         headers: headers,
  //       }
  //     );
  //     if (response.status === 200) {
  //       toast.success("Profile updated successfully!");
  //       navigate("/");
  //     } else {
  //       toast.error("Profile update failed.");
  //     }
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  // const handleBioChange = (e) => {
  //   setBio(e.target.value);
  // };

  // const handleBioSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     };
  //     const response = await axios.put(
  //       "http://localhost:3000/api/user/profile",
  //       { bio },
  //       {
  //         headers: headers,
  //       }
  //     );
  //     if (response.status === 200) {
  //       console.log("Session Expired Photo in ProfilePage");
  //       navigate("/");
  //     } else {
  //       toast.error("Profile update failed.");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const WalletChains = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     };
  //     const ChainData = await axios.get("http://localhost:3000/api/wallet", {
  //       headers: headers,
  //     });
  //     if (ChainData.status === 200) {
  //       setLoading(false);
  //       setWalletAddress(ChainData.data);
  //     } else {
  //       setLoading(false);
  //       console.log("Error in getting the chain data in profile page");
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     console.log("Session Expired get wallet address in profile Page");
  //   }
  // }, [token]);
  // useEffect(() => {
  //   ProfileUpdate();
  // }, [ProfileUpdate, id]);

  // useEffect(() => {
  //   WalletChains();
  // }, [WalletChains]);

  // useEffect(() => {
  //   console.log(walletAddress);
  // }, [walletAddress]);

  // const HandleEdit = () => {
  //   setEdit(!edit);
  // };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const ProfileUpdate = useMemo(() => {
    return async () => {
      try {
        setLoading(true);
        const datas = await axios.get(
          `http://localhost:3000/api/user/profile/${id}`
        );
        if (datas.status === 200) {
          setProfileData(datas.data);
        } else {
          console.log("Something went wrong");
        }
      } catch (err) {
        toast.warning("Session Expired");
        navigate("/user/login");
      } finally {
        setLoading(false);
      }
    };
  }, [id, navigate]);

  useEffect(() => {
    ProfileUpdate();
  }, [ProfileUpdate, id]);

  const renderEditButton = () => {
    return isEditing ? (
      <button className="w-4 h-4 cursor-pointer" onClick={handleEditClick}>
        Done
      </button>
    ) : (
      <img
        className="w-4 h-4 cursor-pointer"
        src={Edit}
        alt=""
        onClick={handleEditClick}
      />
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      img_url: imageData,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
        console.log("Session Expired Photo in ProfilePage");
        navigate("/");
      } else {
        toast.error("Profile update failed.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const WalletChains = useCallback(async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const ChainData = await axios.get("http://localhost:3000/api/wallet", {
        headers: headers,
      });
      if (ChainData.status === 200) {
        setLoading(false);
        setWalletAddress(ChainData.data);
      } else {
        setLoading(false);
        console.log("Error in getting the chain data in profile page");
      }
    } catch (err) {
      setLoading(false);
      console.log("Session Expired get wallet address in profile Page");
    }
  }, [token]);

  useEffect(() => {
    ProfileUpdate();
    WalletChains();
  }, [ProfileUpdate, WalletChains, id]);

  useEffect(() => {
    console.log(walletAddress);
  }, [walletAddress]);

  const HandleEdit = () => {
    setEdit(!edit);
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

      {!loading ? (
        <div className="w-full  h-[80vh]">
          <div className="flex flex-row items-center justify-around w-4/5 h-full p-5 m-auto bg-gray-600 backdrop-blur-md opacity-90">
            <div className="flex flex-col items-center justify-center w-full gap-5">
              {/* <div className="flex flex-row items-center justify-center w-full gap-2"> */}
              <div className="flex flex-col items-center justify-center w-full gap-3">
                <h1 className="w-full" style={{ fontSize: "1.5rem" }}>
                  Profile
                </h1>

                <form
                  className="flex flex-col justify-center w-full gap-5"
                  // onSubmit={handleSubmit}
                >
                  <div className="flex flex-row items-center justify-center w-full ">
                    <div className="relative flex flex-row items-center w-full gap-5 overflow-hidden ">
                      <img
                        src={
                          profileData?.img_url
                            ? profileData?.img_url
                            : loginSignupImage
                        }
                        className="w-20 h-20 rounded-full"
                      />

                      <h1 style={{ fontSize: "1.5rem" }} className="mr-auto">
                        {username}
                      </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full gap-3 ">
                      {/* <h1 style={{ fontSize: "1.5rem" }} className="mr-auto">
                      {username}
                    </h1> */}
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
                  {/* <div className="relative overflow-hidden rounded-full shadow-md w-28 h-28 drop-shadow-md ">
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

                  {/* {edit ? (
                  <label htmlFor="profileImage">
                    <div
                      className="w-20 text-center bg-opacity-50 cursor-pointer h-1/3 bg-slate-500"
                      // onClick={HandleEdit}
                    >
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
                ) : (
                  <div
                    className="w-20 mr-auto bg-opacity-50 cursor-pointer bg-slate-500"
                    onClick={HandleEdit}
                  >
                    <button className="w-full " type="submit">
                      Upload
                    </button>
                  </div>
                )} */}
                  <label htmlFor="profileImage">
                    <div className="w-20 text-center bg-opacity-50 cursor-pointer h-1/3 bg-slate-500">
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

                  <div className="w-20 mr-auto bg-opacity-50 cursor-pointer bg-slate-500">
                    <button className="w-full " type="submit">
                      Upload
                    </button>
                  </div>
                </form>
              </div>

              {/* </div> */}

              <div className="flex flex-col w-full gap-5">
                <h1 style={{ fontSize: "1.5rem" }}>Bio</h1>

                {profileData?.bio ? (
                  <div className="flex flex-col items-start justify-start gap-3 ">
                    <div className="flex items-center w-full text-white rounded-lg">
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
                      className="flex flex-row items-center justify-center py-2 bg-white rounded-lg "
                      style={{ width: "25rem" }}
                    >
                      <div className="flex flex-row items-center justify-center w-1/3 gap-2 border-r border-black border-solid">
                        <h1 className="text-black ">{res.chainName}</h1>
                        {res.chainName == "Matic" ? (
                          <img className="w-8 " src={polygon} alt="" />
                        ) : (
                          <></>
                        )}
                      </div>

                      {/* {profileData?.insta ? (
                <div className="mr-auto text-black ">{profileData?.insta}</div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
                      <div className="w-full text-center text-black">
                        {res.walletAddress}
                      </div>
                    </div>
                  </>
                );
              })}
              {/*
            <div
              className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
              style={{ width: "25rem" }}
            >
              <img
                className="pr-3 mr-auto border-r border-black border-solid"
                src={twitter}
                alt=""
              /> */}

              {/* {profileData?.twitter ? (
                <div className="mr-auto text-black ">
                  {profileData?.twitter}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )} */}
              <div></div>
            </div>
            {/* <div
              className="flex flex-row items-center justify-center p-2 bg-white rounded-lg "
              style={{ width: "25rem" }}
            >
              <img
                className="pr-3 mr-auto border-r border-black border-solid"
                src={linkedin}
                alt=""
              />

              {profileData?.linkedin ? (
                <div className="mr-auto text-black ">
                  {profileData?.linkedin}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )}
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

              {profileData?.discord ? (
                <div className="mr-auto text-black ">
                  {profileData?.discord}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )}
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

              {profileData?.telegram ? (
                <div className="mr-auto text-black ">
                  {profileData?.telegram}
                </div>
              ) : (
                <div className="mr-auto text-black "></div>
              )}
              <div></div>
            </div>
            <Link to="/user/profile/edit" className="w-full">
              <Button name={"Edit"} />
            </Link> */}
            {/* </div> */}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default UserProfile;
