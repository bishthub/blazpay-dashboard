import React, { useState } from "react";
import LeaderBoard from "./LeaderBoard";
import ManageFund from "./ManageFund";
import ManageFunds from "../pages/ManageFunds";
import Jackpot from "./Jackpot";
import Refer from "./Refer";
import Spin from "./Spin";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";

const Block2 = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full gap-2 px-3 pt-8">
      <div className="flex flex-row w-full h-full gap-8">
        <div className="flex flex-col items-center justify-between">
          <div
            className="h-full w-ful"
            onClick={() => openOverlay(<ManageFunds />)}
          >
            <ManageFund />
          </div>
          <div
            className="w-full h-full"
            onClick={() => openOverlay(<Jackpot />)}
          >
            <Jackpot />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full h-full" onClick={() => openOverlay(<Refer />)}>
            {" "}
            <Refer />
          </div>

          <div className="w-full h-full" onClick={() => openOverlay(<Spin />)}>
            {" "}
            <Spin />
          </div>
        </div>
      </div>
      <Link
        to="/leaderboard"
        className="w-full h-full"
        // onClick={() =>
        //   openOverlay(
        //     <LeaderBoard style={{ OverflowY: "scroll" }} expand={true} />
        //   )
        // }
      >
        <LeaderBoard />
      </Link>

      {overlayContent && (
        <Overlay onClose={closeOverlay}>{overlayContent}</Overlay>
      )}
    </div>
  );
};

export default Block2;
