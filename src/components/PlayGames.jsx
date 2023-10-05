import React from "react";
import play from "../assets/play.png";

const PlayGames = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full ">
      <img className="w-full h-full" src={play} alt="play" />
      <h1 className="absolute text-4xl font-extrabold"> Play Games</h1>
    </div>
  );
};

export default PlayGames;
