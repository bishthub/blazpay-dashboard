import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SessionTimeout = ({ timeoutInMinutes }) => {
  const history = useNavigate();

  useEffect(() => {
    let timeout;

    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onTimeout();
        history("/logout"); // Redirect to logout or login pages
      }, timeoutInMinutes * 1000); // Convert minutes to milliseconds
    };

    resetTimeout(); // Reset the timeout initially

    // Add event listeners to reset the timeout on user activity
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    // Cleanup event listeners on unmount
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, [timeoutInMinutes, history]);

  return null; // This component doesn't render anything
};

export default SessionTimeout;
