import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Notification = ({ handleNotification }) => {
  const [notifications, setNotifications] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function fetchNotification() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const notiData = await axios.get(
        "http://localhost:3000/api/user/notifications",
        {
          headers: headers,
        }
      );

      if (notiData.status === 200) {
        setNotifications(notiData.data);
      } else {
        toast.warning("Session Expired");
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchNotification();
  }, []);
  useEffect(() => {
    console.log(notifications);
  });
  return (
    <div
      className="text-white w-80 h-[100vh] bg-black flex flex-col items-center"
      style={{ overflowY: "scroll" }}
    >
      <div className="flex flex-row items-center justify-between w-full p-2 mt-8 border-b-2 border-white ">
        <h1 className="text-2xl">Notifications</h1>
        <div className="text-2xl cursor-pointer" onClick={handleNotification}>
          <IoMdCloseCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default Notification;
