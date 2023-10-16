import React, { useState } from "react";

function TransferModal({ isOpen, onClose, onTransfer, tokenId, contractAdd }) {
  const [toAddress, setToAddress] = useState("");

  const handleTransfer = () => {
    console.log(contractAdd);
    onTransfer(toAddress, tokenId, contractAdd);
    onClose();
  };

  return isOpen ? (
    <div className="px-10 modal">
      <div className="modal-content">
        <span className="p-2 m-2 text-black bg-white rounded-full">
          <span
            className="text-3xl text-black cursor-pointer close"
            onClick={onClose}
          >
            &times;
          </span>
        </span>

        <h2 className="font-semibold">Transfer NFT #{tokenId}</h2>
        <div>
          <label className="font-semibold">To Address: </label>
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            className="p-2 text-black rounded-lg"
          />
        </div>
        <button
          className="p-2 font-semibold text-black bg-white rounded-lg"
          onClick={handleTransfer}
        >
          Transfer
        </button>
      </div>
    </div>
  ) : null;
}

export default TransferModal;
