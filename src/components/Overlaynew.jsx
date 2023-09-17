// Overlay.js

import React from "react";
import "./Overlaynew.css"; // Import a CSS file for styling the overlay

const Overlaynew = ({ children, onClose }) => {
  return (
    <div className="w-full overlays">
      <div className="overlay-contents">{children}</div>
      <button className="close-buttons" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Overlaynew;
