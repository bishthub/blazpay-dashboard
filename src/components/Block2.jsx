import React from "react";
import LeaderBoard from "./LeaderBoard";
import ManageFunds from "./ManageFunds";
import Jackpot from "./Jackpot";
import Refer from "./Refer";
import Spin from "./Spin";
import { Link } from "react-router-dom";

const Block2 = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-8 p-5 ">
      <div className="flex flex-row w-full gap-8">
        <div className="flex flex-col gap-8">
          <Link className="w-full" to="/manage-funds">
            <ManageFunds />
          </Link>
          <Link className="w-full" to="/jackpot">
            <Jackpot />
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          <Link className="w-full" to="refer">
            <Refer />
          </Link>
          <Link className="w-full" to="/spin">
            <Spin />
          </Link>
        </div>
      </div>
      <Link className="w-full" to="/leaderboard">
        <LeaderBoard />
      </Link>
    </div>
  );
};

export default Block2;
