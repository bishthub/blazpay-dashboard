import React, { useState } from "react";
import LeaderBoard from "./LeaderBoard";
import ManageFund from "./ManageFund";
import ManageFunds from "../pages/ManageFunds";
import Jackpot from "./Jackpot";
import Refer from "./Refer";
import Spin from "./Spin";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import PlayGames from "./PlayGames";
import PlayGamesMain from "../pages/PlayGamesMain";

const Block2 = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-5">
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-2">
        <div onClick={() => openOverlay(<ManageFunds />)}>
          <ManageFund />
        </div>
        <div onClick={() => openOverlay(<Jackpot />)}>
          <Jackpot />
        </div>
        <div onClick={() => openOverlay(<Refer />)}>
          <Refer />
        </div>
        <div onClick={() => openOverlay(<PlayGamesMain />)}>
          <PlayGames />
        </div>
      </div>

      <div className="w-full">
        <Link to="/leaderboard">
          <LeaderBoard />
        </Link>
      </div>
      {overlayContent && (
        <Overlay onClose={closeOverlay}>{overlayContent}</Overlay>
      )}
    </div>
  );
};

export default Block2;
