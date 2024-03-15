import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const emailChanger = (str) => {
  let updatedStr = "";
  for (let s of str) {
    if (s === "@" || s === ".") continue;
    updatedStr += s;
  }
  return updatedStr;
};

const authContext = React.createContext({
  authToken: "",
  email: "",
  isLoggedIn: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const isLoggedIn = !!token;

  const handleAddToken = (authToken, email) => {
    const updatedEmail = emailChanger(email);

    setToken(authToken);
    setEmail(updatedEmail);
    localStorage.setItem("token", authToken);
    localStorage.setItem("email", updatedEmail);
    <Navigate to="/welcome" replace={true} />;
    // console.log(token, "login successfull");
  };

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const context = {
    authToken: token,
    email: email,
    isLoggedIn,
    login: handleAddToken,
    logout: handleDeleteToken,
  };

  return (
    <authContext.Provider value={context}>
      {props.children}
    </authContext.Provider>
  );
};

export { authContext };
export default AuthContextProvider;
