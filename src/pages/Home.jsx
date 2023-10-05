import React from "react";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import StoreFront from "../components/StoreFront";
import Block2 from "../components/Block2";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen px-1 py-3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Navbar />
      <StoreFront />

      <Block2 />
    </div>
  );
};

export default Home;
