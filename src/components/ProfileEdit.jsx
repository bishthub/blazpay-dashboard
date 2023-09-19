import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import bgImage from "../assets/dashboard_bg.png";
import logo from "../assets/logo_blazpay.svg";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    linkedin: "",
    twitter: "",
    insta: "",
    discord: "",
    telegram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(formData);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.put(
        "http://localhost:3000/api/user/profile",
        formData,
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
    // <div className="bg-black">
    //   <h1>Enter Your Social Media Links</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="linkedin">LinkedIn:</label>
    //       <input
    //         className="text-black"
    //         type="text"
    //         id="linkedin"
    //         name="linkedin"
    //         placeholder="Enter your LinkedIn URL"
    //         value={formData.linkedin}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="twitter">Twitter:</label>
    //       <input
    //         className="text-black"
    //         type="text"
    //         id="twitter"
    //         name="twitter"
    //         placeholder="Enter your Twitter URL"
    //         value={formData.twitter}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="discord">Discord:</label>
    //       <input
    //         className="text-black"
    //         type="text"
    //         id="discord"
    //         name="discord"
    //         placeholder="Enter your Discord URL"
    //         value={formData.discord}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="telegram">Telegram:</label>
    //       <input
    //         className="text-black"
    //         type="text"
    //         id="telegram"
    //         name="telegram"
    //         placeholder="Enter your Telegram URL"
    //         value={formData.telegram}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="instagram">Instagram:</label>
    //       <input
    //         className="text-black"
    //         type="text"
    //         id="instagram"
    //         name="insta"
    //         placeholder="Enter your Instagram URL"
    //         value={formData.insta}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
      }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid #FF5500", backgroundColor: "#D9D9D933" }}
        className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
      >
        <div className="rounded-lg" style={{ backgroundColor: "#171717" }}>
          <div className="flex justify-center p-4 bg-black rounded-tl-lg rounded-tr-lg">
            <img src={logo} className="w-40 h-10 rounded-lg" alt="Logo" />
          </div>
          <div className="p-4">
            <div className="flex flex-col items-center justify-center mb-4 text-2xl">
              <span className="text-[#FF3503]">
                Enter Your Social Media Links
              </span>
            </div>

            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                // id="linkedin"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="LinkedIn"
                value={formData.linkedin}
                name="linkedin"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                name="twitter"
                id="twitter"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                id="discord"
                name="discord"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Discord"
                value={formData.discord}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                id="telegram"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <input
                type="text"
                id="instagram"
                className="w-[85%] md:w-[70%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-sm text-left text-black"
                placeholder="Instagram"
                name="insta"
                value={formData.insta}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-[45%] md:w-[30%] py-1 px-3 rounded-2xl hover:bg-gradient"
                style={{
                  background:
                    "linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)",
                  color: "white",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
