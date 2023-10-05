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

const Block2 = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <div className="flex flex-row items-start justify-start flex-1 w-full gap-2 px-3 pt-8">
      <div className="grid w-1/2 grid-cols-2 grid-rows-2 gap-2">
        <div onClick={() => openOverlay(<ManageFunds />)}>
          <ManageFund />
        </div>
        <div onClick={() => openOverlay(<Jackpot />)}>
          <Jackpot />
        </div>
        <div onClick={() => openOverlay(<Refer />)}>
          <Refer />
        </div>
        <div onClick={() => openOverlay(<Spin />)}>
          <PlayGames />
        </div>
      </div>
      <div className="w-1/2">
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
