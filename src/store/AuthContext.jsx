import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const authContext = React.createContext({
  authToken: "",
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");

  const handleAddToken = (authToken) => {
    setToken(authToken);
    <Navigate to="/welcome" replace={true} />;
    console.log(token, "login successfull");
  };

  const context = {
    token,
    login: handleAddToken,
  };

  return (
    <authContext.Provider value={context}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
