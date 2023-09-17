import React, { useState } from "react";
import bgImage from "../assets/dashboard_bg.png";
import ManageCard from "../components/ManageCard";
import SendImg from "../assets/send.png";
import ReceiveImg from "../assets/receive.png";
import SwapImg from "../assets/swap.png";
import RequestImg from "../assets/req.png";
import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import Send from "./Send";
import Overlaynew from "../components/Overlaynew";
import Receive from "./Receive";
import Request from "./Request";
import Swap from "./Swap";

const ManageFunds = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full gap-3 m-auto bg-black border-2 border-orange-700 rounded-lg "
      style={{ width: "25rem", height: "20rem" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-full bg-gradient-to-r from-[#FF3503] to-yellow-500 rounded-lg h-full">
          Manage Your Funds
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-5 p-4 ">
          <div
            className="w-full cursor-pointer"
            onClick={() => openOverlay(<Send />)}
          >
            <ManageCard name={"Send"} img={SendImg} />
          </div>
          <div
            className="w-full cursor-pointer"
            onClick={() => openOverlay(<Receive />)}
          >
            <ManageCard name={"Receive"} img={ReceiveImg} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-5 p-4">
          <div
            className="w-full cursor-pointer"
            onClick={() => openOverlay(<Request />)}
          >
            <ManageCard name={"Request"} img={RequestImg} />
          </div>
          <div
            className="w-full cursor-pointer"
            onClick={() => openOverlay(<Swap />)}
          >
            <ManageCard name={"Swap"} img={SwapImg} />
          </div>
        </div>
      </div>
      {overlayContent && (
        <Overlaynew onClose={closeOverlay}>{overlayContent}</Overlaynew>
      )}
    </div>
  );
};

export default ManageFunds;
