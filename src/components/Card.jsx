import React from "react";
import Img from "../assets/img_1.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Card = ({ img, title, prodId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    dispatch(addToCart({ prodId, title }));

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Authentication failed");
        return;
      }

      const productId = prodId;
      const quantity = 1;

      const response = await axios.post(
        "http://localhost:3000/api/cart/",
        { productId, quantity },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        console.error("Error:", response.data.message);
        return;
      }

      const cartData = response.data;
      toast.success("Added to Cart");
    } catch (error) {
      toast.error("Session Ended");
      navigate("/user/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-3/4 gap-1 py-4 border border-orange-500 rounded-lg ">
      <img
        className="w-1/2 transition-transform transform scale-100 hover:scale-110"
        src={img}
        alt=""
      />
      <div className="flex flex-row justify-around w-1/2">
        <h2>{title}</h2>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-10 p-1 border border-white rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
