import React, { useState } from "react";

function TransferModal({ isOpen, onClose, onTransfer, tokenId, contractAdd }) {
  const [toAddress, setToAddress] = useState("");

  const handleTransfer = () => {
    onTransfer(toAddress, tokenId, contractAdd);
    onClose();
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Transfer NFT</h2>
        <div>
          <label>To Address: </label>
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
        </div>
        <button onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  ) : null;
}

export default TransferModal;
