// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from "react";
import { signIn } from "../../services/userService";

const AuthContext = createContext({});
import Router from "next/router";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
      signIn()
        .then((signedUser) => {
          setUser(signedUser);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          // setIsAuthenticated(false);
          // setUser(null)
          //redirects to login
        });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        isAuthenticated,
        user,
        setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
