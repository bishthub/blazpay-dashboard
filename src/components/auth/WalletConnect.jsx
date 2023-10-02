import React, { useState, useEffect } from "react";
import bgImage from "../../assets/dashboard_bg.png";
import logo from "../../assets/logo_blazpay.svg";
import { useNavigate, Link } from "react-router-dom";
import { ethers } from "ethers";

const WalletConnect = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // const handleConnectWallet = async () => {
  //   try {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const accounts = await provider.send("eth_requestAccounts", []);

  //       if (accounts && accounts.length > 0) {
  //         const address = accounts[0];
  //         setWalletAddress(address);
  //         setIsConnected(true);
  //       }
  //     } else {
  //       console.log("EthereumProvider not available");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [providerAvailable, setProviderAvailable] = useState(false); // Initialize as false

  useEffect(() => {
    // Check for Ethereum provider in a loop
    const checkProvider = async () => {
      while (true) {
        if (window.ethereum) {
          const provider = new ethers.providers.JsonRpcProvider(
            window.ethereum
          );

          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          if (accounts && accounts.length > 0) {
            const address = accounts[0];
            setWalletAddress(address);
            setIsConnected(true);
            setProviderAvailable(true); // Provider is available
            break; // Exit the loop once connected
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      }
    };

    checkProvider();
  }, []);

  const handleConnectWallet = async () => {
    if (providerAvailable) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts && accounts.length > 0) {
          const address = accounts[0];
          setWalletAddress(address);
          setIsConnected(true);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("EthereumProvider not available");
      return;
    }
  };

  // const handleConnectWallet = async () => {
  //   if (window.ethereum && window.ethereum.isSupported) {
  //     // Use JsonRpcProvider instead of Web3Provider
  //     const provider = new ethers.providers.JsonRpcProvider(window.ethereum);

  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });

  //     if (accounts && accounts.length > 0) {
  //       const address = accounts[0];
  //       setWalletAddress(address);
  //       setIsConnected(true);
  //     }
  //   } else {
  //     console.log("EthereumProvider not available");
  //     return;
  //   }
  // };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
  };

  const handleGetEntryPass = () => {
    navigate("/user/entrypass");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div
        style={{
          border: "1px solid #FF5500",
          backgroundColor: "#D9D9D933",
        }}
        className="md:w-1/3 w-5/6 min-w-[350px] p-4 md:p-5 rounded-lg shadow-md"
      >
        <div className="rounded-lg" style={{ backgroundColor: "#171717" }}>
          <div className="flex justify-center p-4 bg-black rounded-tl-lg rounded-tr-lg">
            <img src={logo} className="w-40 h-10 rounded-lg" alt="Logo" />
          </div>
          <div className="p-4">
            <div className="flex flex-col items-center justify-center mb-4 text-2xl">
              <span className="text-[#FF3503]">
                {isConnected ? "Wallet Connected" : "Connect Your Wallet"}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center mb-6">
              {!isConnected ? (
                <>
                  <button
                    onClick={handleConnectWallet}
                    className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)",
                      color: "white",
                    }}
                  >
                    Connect Wallet
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleDisconnectWallet}
                    className="min-w-[50%] md:w-[45%] py-1 px-3 rounded-2xl hover:bg-gradient"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF3503 0%, #FF6E01 53.15%, #FFA100 100%)",
                      color: "white",
                    }}
                  >
                    Wallet Connected
                  </button>
                </>
              )}

              {isConnected && (
                <div>
                  <Link
                    to="/user/entrypass"
                    className="mt-2 text-xs text-white"
                  >
                    Get Your Entry Pass Here
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
