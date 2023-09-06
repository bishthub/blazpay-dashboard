import React, { useState, useEffect } from "react";
import axios from "axios";

function TokenInput() {
  const [tokens, setTokens] = useState([]); // Store token data
  const [selectedToken, setSelectedToken] = useState(""); // Store selected token
  const [searchText, setSearchText] = useState(""); // Store user input for search

  useEffect(() => {
    // Fetch token data from PancakeSwap or your preferred API
    axios
      .get("https://api.pancakeswap.com/api/v1/tokens")
      .then((response) => {
        setTokens(response.data.tokens);
      })
      .catch((error) => {
        console.error("Error fetching tokens:", error);
      });
  }, []);

  const handleTokenSelect = (tokenSymbol) => {
    setSelectedToken(tokenSymbol);
    setSearchText(""); // Clear search input when a token is selected
  };

  // Filter tokens based on user input
  const filteredTokens = tokens.filter((token) =>
    token.symbol.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-64 relative ">
      <input
        type="text"
        placeholder="Select a token"
        className="w-full p-2 border border-orange-700 rounded"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="absolute top-10 left-0 w-full border border-orange-800 bg-gray-700 shadow-md rounded mt-1">
        {filteredTokens.map((token) => (
          <div
            key={token.address}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleTokenSelect(token.symbol)}
          >
            {token.name} ({token.symbol})
          </div>
        ))}
      </div>
      {selectedToken && (
        <div className="mt-2">Selected Token: {selectedToken}</div>
      )}
    </div>
  );
}

export default TokenInput;
