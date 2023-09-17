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
    <div className="flex flex-row items-center justify-center w-full gap-8 p-3 ">
      <div className="flex flex-row w-full gap-8">
        <div className="flex flex-col gap-8">
          <div className="w-full" onClick={() => openOverlay(<ManageFunds />)}>
            <ManageFund />
          </div>
          <div className="w-full" onClick={() => openOverlay(<Jackpot />)}>
            <Jackpot />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full" onClick={() => openOverlay(<Refer />)}>
            {" "}
            <Refer />
          </div>

          <div className="w-full" onClick={() => openOverlay(<Spin />)}>
            {" "}
            <Spin />
          </div>
        </div>
      </div>
      <div
        className="w-full h-full"
        onClick={() => openOverlay(<LeaderBoard expand={true} />)}
      >
        {" "}
        <LeaderBoard />
      </div>

      {overlayContent && (
        <Overlay onClose={closeOverlay}>{overlayContent}</Overlay>
      )}
    </div>
  );
};

export default Block2;
