import React from "react";
import Img from "../assets/img_1.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const Card = ({ img, title, prodId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    // Dispatch the addToCart action with product information
    dispatch(addToCart({ prodId, title }));

    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        // Handle authentication error, show a message to the user, or redirect to login
        console.error("Authentication failed");
        return;
      }

      // Replace 'productId' and 'quantity' with the actual values you want to send to the server
      const productId = prodId; // Replace with the actual productId
      const quantity = 1; // Replace with the desired quantity

      const response = await axios.post(
        "http://localhost:3000/api/cart",
        { productId, quantity }, // Send the productId and quantity in the request body
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
          },
        }
      );

      if (response.status !== 200) {
        // Handle error responses from the server
        console.error("Error:", response.data.message);
        return;
      }

      const cartData = response.data; // Assuming the server responds with updated cart data
      console.log("Cart updated:", cartData);
      // You can update your UI to reflect the updated cart state
    } catch (error) {
      console.error("Error:", error);
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
