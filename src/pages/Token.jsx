import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

function Token() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    async function initializeProvider() {
      // Connect to an Ethereum provider (e.g., MetaMask)
      if (window.ethereum) {
        const ethereumProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setProvider(ethereumProvider);

        try {
          const accounts = await ethereumProvider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error("Error connecting to Ethereum provider:", error);
        }
      } else {
        console.error(
          "Ethereum provider not detected. Please install MetaMask."
        );
      }
    }

    initializeProvider();
  }, []);

  const swapTokens = async () => {
    if (provider && account) {
      // Replace with the actual addresses and ABIs for the tokens and router
      const tokenInAddress = "0xTokenInAddress";
      const tokenOutAddress = "0xTokenOutAddress";
      const routerAddress = "0xRouterAddress";

      const tokenIn = new ethers.Contract(
        tokenInAddress,
        ["function approve(address spender, uint256 amount)"],
        provider.getSigner()
      );
      const router = new ethers.Contract(
        routerAddress,
        [
          "function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)",
        ],
        provider.getSigner()
      );

      const amountIn = ethers.utils.parseUnits("10", 18); // Replace with the amount you want to swap
      const amountOutMin = 0; // Minimum amount of tokenOut expected

      try {
        // Approve the router to spend your tokenIn
        await tokenIn.approve(routerAddress, amountIn);

        // Swap tokens
        await router.swapExactTokensForTokens(
          amountIn,
          amountOutMin,
          [tokenInAddress, tokenOutAddress],
          account, // The recipient of the swapped tokens
          Math.floor(Date.now() / 1000) + 60 * 10 // 10-minute deadline
        );

        console.log("Token swap successful!");
      } catch (error) {
        console.error("Error swapping tokens:", error);
      }
    }
  };

  return (
    <div className="text-black">
      <h1>Token Swap</h1>
      {account ? (
        <button onClick={swapTokens}>Swap Tokens</button>
      ) : (
        <p>Please connect your wallet to perform the swap.</p>
      )}
    </div>
  );
}

export default Token;
