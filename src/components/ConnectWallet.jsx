// import { ethers } from "ethers";
// import React, { useState } from "react";

// const ConnectWallet = () => {
//   const [walletAddress, setWalletAddress] = useState("");
//   //   async function RequestAcc() {
//   //     console.log("requesting accessListify....");
//   //     if (window.ethereum) {
//   //       console.log("detected");

//   //       try {
//   //         const accounts = await window.ethereum.request({
//   //           method: "eth_requestAccounts",
//   //         });
//   //         setWalletAddress(accounts[0]);
//   //       } catch (err) {
//   //         console.log("error Connecting ...");
//   //       }
//   //     } else {
//   //       alert("Metamask Not Detected");
//   //     }
//   //   }

//   function ReqAcc() {
//     if (window.ethereum) {
//       window.ethereum
//         .request({
//           method: "wallet_requestPermissions",
//           params: [
//             {
//               eth_accounts: {},
//             },
//           ],
//         })
//         .then((permissions) => {
//           if (permissions.length > 0) {
//             setWalletAddress(); // Clear wallet-related data
//           }
//         })
//         .catch((err) => {
//           console.error("Error disconnecting:", err);
//         });
//     } else {
//       console.error("Metamask Not Detected");
//     }
//   }

//   async function ConnectWallets() {
//     if (typeof window.ethereum !== "undefined") {
//       //   await RequestAcc();
//       await ReqAcc();

//       const provider = new ethers.providers.Web3Provider(window.Ethereum);

//       console.log("provider", provider);
//     } else {
//       console.log(error + "Ho gya");
//     }
//   }

//   return (
//     <div className="bg-black h-[100vh] flex justify-center items-center flex-col gap-5">
//       <h1>Wallet Address:{walletAddress}</h1>
//       <button
//         className="font-bold text-orange-500 bg-white w-[5rem] rounded-lg"
//         onClick={ConnectWallets}
//       >
//         Connect Wallet
//       </button>
//       {/* <button onClick={DisconnectWallet}>Disconnect Wallet</button> */}
//       {/* <h1>Wallet Address:{walletAddress}</h1> */}
//     </div>
//   );
// };

// export default ConnectWallet;

// import { ethers } from "ethers";
// import React, { useState, useEffect } from "react";

// const ConnectWallet = () => {
//   const [walletAddress, setWalletAddress] = useState("");
//   const [isConnecting, setIsConnecting] = useState(false);

//   // Function to request wallet permissions and connect the wallet
//   async function connectWallet() {
//     if (window.ethereum) {
//       setIsConnecting(true);

//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });

//         setWalletAddress(accounts[0]);
//       } catch (err) {
//         console.error("Error connecting:", err);
//       } finally {
//         setIsConnecting(false);
//       }
//     } else {
//       alert("Metamask Not Detected");
//     }
//   }

//   // Function to disconnect the wallet
//   function disconnectWallet() {
//     if (window.ethereum && window.ethereum.disconnect) {
//       window.ethereum.disconnect();
//       setWalletAddress(""); // Clear wallet address
//     } else {
//       console.error("Metamask Not Detected or disconnect method not available");
//     }
//   }

//   // useEffect to check for wallet connection on component load
//   useEffect(() => {
//     if (window.ethereum && window.ethereum.selectedAddress) {
//       setWalletAddress(window.ethereum.selectedAddress);
//     }
//   }, []);

//   return (
//     <div className="bg-black h-[100vh] flex justify-center items-center flex-col gap-5">
//       <h1>Wallet Address: {walletAddress}</h1>
//       {!walletAddress ? (
//         <button
//           className={`font-bold text-orange-500 bg-white w-[5rem] rounded-lg ${
//             isConnecting ? "cursor-wait" : ""
//           }`}
//           onClick={connectWallet}
//           disabled={isConnecting}
//         >
//           Connect Wallet
//         </button>
//       ) : (
//         <button
//           className="font-bold text-red-500 bg-white w-[5rem] rounded-lg"
//           onClick={disconnectWallet}
//         >
//           Disconnect Wallet
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWallet;

// import { ethers } from "ethers";
// import React, { useState, useEffect } from "react";

// const ConnectWallet = () => {
//   const [walletAddress, setWalletAddress] = useState("");
//   const [isConnecting, setIsConnecting] = useState(false);

//   // Initialize ethers provider
//   const provider = new ethers.providers.Web3Provider(window.ethereum);

//   // Function to request wallet permissions and connect the wallet
//   async function connectWallet() {
//     if (window.ethereum) {
//       setIsConnecting(true);

//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });

//         setWalletAddress(accounts[0]);
//       } catch (err) {
//         console.error("Error connecting:", err);
//       } finally {
//         setIsConnecting(false);
//       }
//     } else {
//       alert("Metamask Not Detected");
//     }
//   }

//   // Function to disconnect the wallet
//   function disconnectWallet() {
//     // Reset the wallet connection by switching to a new provider
//     const newProvider = new ethers.providers.Web3Provider(window.ethereum);
//     provider.send("wallet_switchEthereumChain", [{ chainId: "0x1" }]);

//     setWalletAddress(""); // Clear wallet address
//   }

//   // useEffect to check for wallet connection on component load
//   useEffect(() => {
//     if (window.ethereum && window.ethereum.selectedAddress) {
//       setWalletAddress(window.ethereum.selectedAddress);
//     }
//   }, []);

//   return (
//     <div className="bg-black h-[100vh] flex justify-center items-center flex-col gap-5">
//       <h1>Wallet Address: {walletAddress}</h1>
//       {!walletAddress ? (
//         <button
//           className={`font-bold text-orange-500 bg-white w-[5rem] rounded-lg ${
//             isConnecting ? "cursor-wait" : ""
//           }`}
//           onClick={connectWallet}
//           disabled={isConnecting}
//         >
//           Connect Wallet
//         </button>
//       ) : (
//         <button
//           className="font-bold text-red-500 bg-white w-[5rem] rounded-lg"
//           onClick={disconnectWallet}
//         >
//           Disconnect Wallet
//         </button>
//       )}
//     </div>
//   );
// };

// export default ConnectWallet;

import { ethers } from "ethers";
import React, { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const [balance, setBalance] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  async function connectWallet() {
    if (window.ethereum) {
      setIsConnecting(true);

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);

        // Get the chainId
        const network = await provider.getNetwork();
        setChainId(network.chainId);

        // Get the wallet balance
        const balance = await provider.getBalance(accounts[0]);
        setBalance(ethers.utils.formatEther(balance));
      } catch (err) {
        console.error("Error connecting:", err);
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("Metamask Not Detected");
    }
  }

  function disconnectWallet() {
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    provider.send("wallet_switchEthereumChain", [{ chainId: "0x1" }]);
    setWalletAddress("");
    setChainId("");
    setBalance("");
  }

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setWalletAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return (
    <div className="bg-black h-[100vh] flex justify-center items-center flex-col gap-5">
      <h1>Wallet Address: {walletAddress}</h1>
      <h1>Chain ID: {chainId}</h1>
      <h1>Wallet Balance: {balance} ETH</h1>
      {!walletAddress ? (
        <button
          className={`font-bold text-orange-500 bg-white w-[5rem] rounded-lg ${
            isConnecting ? "cursor-wait" : ""
          }`}
          onClick={connectWallet}
          disabled={isConnecting}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="font-bold text-red-500 bg-white w-[5rem] rounded-lg"
          onClick={disconnectWallet}
        >
          Disconnect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
