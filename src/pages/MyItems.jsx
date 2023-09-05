import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/dashboard_bg.png";
import Profilecards from "../components/Profilecards";
import Data from "../ProfileCards.json";

const MyItems = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-5 p-3 w-100">
        <h1 className="mr-auto w-100" style={{ fontSize: "1.5rem" }}>
          My Items
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-100 ">
          {Data.map((item, idx) => {
            return (
              <Profilecards
                id={idx}
                img={`/src/assets/` + item.img}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
