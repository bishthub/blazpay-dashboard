// Overlay.js

import React from "react";
import "./Overlay.css"; // Import a CSS file for styling the overlay

const Overlay = ({ children, onClose }) => {
  return (
    <div className="overlay w-full">
      <div className="overlay-content">{children}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Overlay;
