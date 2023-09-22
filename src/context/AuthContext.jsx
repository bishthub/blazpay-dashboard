import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [id, setId] = useState(localStorage.getItem("id") || "");

  const login = (newToken, newUsername, newId) => {
    setToken(newToken);
    setUsername(newUsername);
    setId(newId);
    setIsAuthenticated(true);
    localStorage.setItem("token", newToken);
    localStorage.setItem("username", newUsername);
    localStorage.setItem("id", newId);
  };

  const logout = () => {
    setToken("");
    setUsername("");
    setId("");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
  };

  return (
    <AuthContext.Provider value={{ token, username, id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
