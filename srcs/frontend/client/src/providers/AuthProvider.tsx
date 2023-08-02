import React, { ReactNode, useEffect, useState } from "react";
import { AuthAction, AuthContext } from "../context/authContext";

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [auth, setAuth] = useState<AuthAction>({ loggedIn: false, token: null });
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) setAuth({ loggedIn: true, token });
  }, []);
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
