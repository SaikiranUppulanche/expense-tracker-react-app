import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const authContext = React.createContext({
  authToken: "",
  email: "",
  isLoggedIn: null,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const isLoggedIn = !!token;

  const handleAddToken = (authToken, email) => {
    setToken(authToken);
    setEmail(email);
    <Navigate to="/welcome" replace={true} />;
    console.log(token, "login successfull");
  };

  const context = {
    authToken: token,
    email: email,
    isLoggedIn,
    login: handleAddToken,
  };

  return (
    <authContext.Provider value={context}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
