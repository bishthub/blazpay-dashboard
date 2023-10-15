import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/dashboard_bg.png";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import Profilecards from "./Profilecards";
import TransferModal from "./Modal"; // Import the Modal component

const Mynft = () => {
  const [details, setDetails] = useState({ total: 0, content: [] });
  const { id } = useParams();
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);
  const [selectedTokenId, setSelectedTokenId] = useState(null);
  const [selectedContractAdd, setSelectedContractAdd] = useState(null);

  const ids = "0xca1257ade6f4fa6c6834fdc42e030be6c0f5a813";

  async function MetaWalletDetails() {
    try {
      // localStorage.setItem(ids);
      // const localData = localStorage.getItem(ids);

      // if (localData) {
      //   setDetails(JSON.parse(localData));
      //   return;
      // }

      // const datas = await axios.get(
      //   `http://localhost:3000/api/nftScan/get-user-data/${ids}`
      // );

      // if (datas.status === 200) {
      //   setDetails(datas.data);
      //   localStorage.setItem(ids, JSON.stringify(datas.data));
      // } else {
      //   console.log("error");
      // }

      const localData = localStorage.getItem(ids);

      if (localData) {
        setDetails(JSON.parse(localData));
      } else {
        const datas = await axios.get(
          `http://localhost:3000/api/nftScan/get-user-data/${ids}`
        );
        if (datas.status === 200) {
          setDetails(datas.data);
          localStorage.setItem(ids, JSON.stringify(datas.data));
        } else {
          console.log("error");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  const [filteredItems, setFilteredItems] = useState([]); // New state to hold filtered items

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Load data when the component mounts
    MetaWalletDetails();

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem(ids);
    });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.removeItem(ids);
      });
    };
  }, []);

  const handleFilter = (filteredItems) => {
    setFilteredItems(filteredItems);
  };

  const handleOpenTransferModal = (tokenId, contractAdd) => {
    setSelectedTokenId(tokenId);
    setSelectedContractAdd(contractAdd);
    setTransferModalOpen(true);
  };

  const handleCloseTransferModal = () => {
    setSelectedTokenId(null);
    setTransferModalOpen(false);
  };

  const handleTransferNFT = async (toAddress, tokenId, contractAdd) => {
    console.log("Transfer NFT logic", toAddress, tokenId, contractAdd);
    try {
      const fromAddress = (
        await window.ethereum.request({ method: "eth_accounts" })
      )[0];
      const contractAddress = contractAdd;

      // This is the method id for "safeTransferFrom(address,address,uint256)" from the ERC721 standard
      const methodId = "0x42842e0e";

      const encodedToAddress = toAddress.padStart(64, "0").slice(-64);
      const encodedTokenId = parseInt(tokenId)
        .toString(16)
        .padStart(64, "0")
        .slice(-64);

      const data = `${methodId}${encodedToAddress}${encodedTokenId}`;

      const tx = {
        from: fromAddress,
        to: contractAddress,
        data: data,
      };

      // Send transaction via MetaMask
      window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [tx],
        })
        .then((txHash) => {
          alert(`Transaction sent: ${txHash}`);
        })
        .catch((error) => {
          console.error("Transaction error:", error);
        });
    } catch (error) {
      console.error("Transfer error:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      className="min-h-screen"
    >
      <Navbar />
      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={handleCloseTransferModal}
        onTransfer={handleTransferNFT}
        tokenId={selectedTokenId}
      />
      <div className="flex flex-col items-center justify-center w-full">
        {/* <SearchBar items={details.content} onFilter={handleFilter} /> */}
        <div className="flex flex-col items-center justify-center w-full gap-5 p-3">
          <h1 className="w-full mr-auto" style={{ fontSize: "1.5rem" }}>
            My Items
          </h1>
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {details.content.map((item, idx) => {
              return (
                <Profilecards
                  key={idx}
                  img={item.nftscan_uri}
                  name={item.contract_name}
                  t_id={item.token_id}
                  onClick={() =>
                    handleOpenTransferModal(item.token_id, item.contractAddress)
                  } // Handling click event
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynft;
