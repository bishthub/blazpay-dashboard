import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";
const Notification = ({ handleNotification }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setNotifications(notiData.data);
      } else {
        setLoading(false);
        toast.warning("Session Expired");
        navigate("/user/login");
      }
    } catch (err) {
      setLoading(false);
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
      {!loading ? (
        <div className="flex flex-col items-center justify-center w-full gap-3">
          {notifications.map((el, idx) => {
            const formattedDate = format(parseISO(el.createdAt), "dd-MM-yyyy");
            return (
              <div key={idx} className="flex flex-row justify-center w-full">
                <h1 className="">{idx + 1})</h1>
                <h1 className="text-orange-500">{el.text}</h1>
                <p style={{ whiteSpace: "nowrap" }}>{formattedDate}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Notification;
