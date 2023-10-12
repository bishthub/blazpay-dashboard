import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/dashboard_bg.png";
import { ethers } from "ethers"; // Import the ethers.js library
import { useParams } from "react-router-dom";
import axios from "axios";

const Mynft = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    async function MetaWalletDetails() {
      try {
        const data = await axios.get(
          `http://localhost:3000/api/nftScan/get-user-data/${id}`
        );

        if (data.status === 200) {
          setDetails(data.data);
          console.log(details);
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }

    MetaWalletDetails();
  }, []);

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
      <div>
        {/* {walletAddress ? (
          <p>Connected Wallet Address: {walletAddress}</p>
        ) : (
          <p>Wallet Not Connected</p>
        )} */}
        <h1>Total - {details.total}</h1>
      </div>
    </div>
  );
};

export default Mynft;
