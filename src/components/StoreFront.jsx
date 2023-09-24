import React, { useState, useEffect } from "react";
import Cart from "../assets/cart_bg.png";
import data from "../StoreFont.json";
import Card from "./Card";
import bgImage from "../assets/dashboard_bg.png";
import { Link, useLocation } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import { useSelector } from "react-redux";
import axios from "axios";

const StoreFront = () => {
  const location = useLocation();
  const [inner, setInner] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (location.pathname === "/storefront") {
      setInner(true);
    }
  }, [location]);

  async function FetchProd() {
    try {
      const Prod = await axios.get("http://localhost:3000/api/product/all");
      setProducts(Prod.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    FetchProd();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);

  const displayedData = inner ? products : products.slice(0, 4);

  return (
    <div>
      <div className="w-full p-3 " style={{ backgroundColor: "#171717" }}>
        <div className="relative flex flex-row items-center justify-between w-full p-1 pl-2 pr-2">
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
          <div className="bg-gradient-to-r from-[#FF3503] to-yellow-500 flex items-center justify-center rounded-lg">
            <img
              onClick={handleCart}
              className="w-12 "
              src={Cart}
              alt=""
              // style={{ zIndex: "999" }}
            />
            {isCartOpen ? <CartSidebar isCart={isCartOpen} /> : <></>}
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
