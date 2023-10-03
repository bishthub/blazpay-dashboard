import React, { useState, useEffect } from "react";
import Cart from "../assets/cart_bg.png";
import data from "../StoreFont.json";
import Card from "./Card";
import bgImage from "../assets/dashboard_bg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const StoreFront = () => {
  const location = useLocation();
  const [inner, setInner] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (location.pathname === "/storefront") {
      setInner(true);
    }
  }, [location]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const Prod = await axios.get("http://localhost:3000/api/product/all");
        setProducts(Prod.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/cart", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setCartItems(...cartItems, response.data.items);
      } catch (err) {
        toast.warning(err);
      }
    }

    fetchCartProducts();
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    if (item.productId) {
      total += item.productId.price * item.quantity;
    }
    return total;
  }, 0);

  const displayedData = inner ? products : products.slice(0, 4);

  return (
    <div>
      <div className="w-full p-3 " style={{ backgroundColor: "#171717" }}>
        <div className="flex flex-row items-center justify-between w-full p-1 pl-2 pr-2 ">
          <div className="flex flex-row items-center justify-center gap-8">
            <p>StoreFront</p>
            {location.pathname === "/" && (
              <Link
                to="/storefront"
                style={{ textDecoration: "none", cursor: "pointer" }}
                className="bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg flex items-center justify-center p-1"
              >
                <p>View More</p>
              </Link>
            )}
          </div>
          <div className="bg-gradient-to-r from-[#FF3503] to-yellow-500 flex items-center justify-center rounded-lg ">
            <img
              onClick={handleCart}
              className="w-12 "
              src={Cart}
              alt=""
              title="cart"
            />
            {isCartOpen ? (
              <div
                className="flex flex-col  items-center absolute top-0 right-0 w-[350px] h-[100vh] bg-slate-600"
                style={{ overflowY: "scroll", zIndex: "999" }}
              >
                <div className="flex flex-row items-center justify-between w-full p-2 mt-8 border-b-2 border-white ">
                  <h1 className="text-2xl">Cart</h1>
                  <div className="text-2xl cursor-pointer" onClick={handleCart}>
                    <IoMdCloseCircleOutline />
                  </div>
                </div>

                {cartItems.length !== 0 ? (
                  <>
                    <div className="flex flex-row justify-between w-full p-2 mt-8">
                      <h1 className="w-full text-center">
                        {cartItems.length} Items
                      </h1>
                      <h1 className="w-full text-center">Qty</h1>

                      <h1 className="w-full text-center cursor-pointer">
                        Clear All
                      </h1>
                    </div>
                    <div className="w-full">
                      {cartItems.map((item, index) => (
                        <div
                          className="flex flex-row items-center justify-between w-full p-4 border-b-2 border-white"
                          key={index}
                        >
                          <div className="w-full text-center">
                            {item.productId.title}
                          </div>
                          <div className="w-full text-center">
                            {item.quantity || 0}
                          </div>
                          <div className="w-full text-center">
                            {item.productId.price} Eth
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center justify-between w-full p-6 border-b-2 border-white">
                      <h1 className="w-full text-center">Total Price</h1>
                      <h1 className="w-full font-bold text-center text-orange-700">
                        {totalPrice} Eth
                      </h1>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full p-6 border-b-2 border-white">
                      <h1 className="w-full text-center">Payment Method</h1>
                      <h1 className="w-full text-center">Crypto</h1>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full p-2">
                      <button className="w-full h-[40px] rounded-lg bg-black flex justify-center items-center">
                        Complete Purchase
                      </button>
                    </div>
                  </>
                ) : (
                  <h1>No Items in the Cart</h1>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products?.map((item, idx) => (
            <Card
              key={idx}
              img={item.img}
              title={item.title}
              prodId={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreFront;
