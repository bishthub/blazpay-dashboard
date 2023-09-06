import React, { useState, useEffect } from "react";
import Cart from "../assets/cart_bg.png";
import data from "../StoreFont.json";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";

const StoreFront = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the query parameter showAllCards is present and set showAllCards state accordingly
    const params = new URLSearchParams(location.search);
    const showAll = params.get("showAllCards");
    setShowAllCards(showAll === "true");
  }, [location]);

  const toggleShowAllCards = () => {
    const newPath = `/storefront?showAllCards=${!showAllCards}`;

    return (
      <Link to={newPath} style={{ textDecoration: "none" }}>
        <span
          className="bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg flex items-center justify-center p-1"
          style={{ cursor: "pointer" }}
        >
          <span className="inline-block rounded-full">
            {showAllCards ? "View Less" : "View More"}
          </span>
        </span>
      </Link>
    );
  };

  const displayedData = showAllCards ? data : data.slice(0, 4);
  return (
    <div className="w-full p-3 " style={{ backgroundColor: "#171717" }}>
      <div className="flex items-center justify-between w-full p-1 pl-2 pr-2 flex-column">
        <div className="flex flex-row items-center justify-center gap-8">
          <p>StoreFront</p>
          {toggleShowAllCards()} {/* Render the Link */}
        </div>
        <div className="bg-gradient-to-r from-[#FF3503] to-yellow-500 flex items-center justify-center rounded-lg">
          <img className="w-12" src={Cart} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {displayedData?.map((item, idx) => {
          return (
            <Card
              key={idx}
              img={`/src/assets/` + item.imgSrc}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StoreFront;
