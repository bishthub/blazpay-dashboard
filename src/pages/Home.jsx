import React from "react";
import bgImage from "../assets/dashboard_bg.png";
import Navbar from "../components/Navbar";
import StoreFront from "../components/StoreFront";
import Block2 from "../components/Block2";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh",
      }}
    >
      <Navbar />
      <StoreFront />

      <Block2 />
    </div>
  );
};

export default Home;
