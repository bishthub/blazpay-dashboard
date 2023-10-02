// web3-check.js

// Check for Web3 or Ethereum provider
if (
  typeof window.ethereum !== "undefined" ||
  typeof window.web3 !== "undefined"
) {
  // Web3 is available
  console.log("Web3 is supported in your browser.");

  // If you want to check if Ethereum is enabled in MetaMask
  if (window.ethereum && window.ethereum.isMetaMask) {
    console.log("MetaMask is installed and active.");
  }
} else {
  // Web3 is not available
  console.log("Web3 is not supported in your browser.");
}
