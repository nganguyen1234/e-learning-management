import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [jwt, setJwt] = useState(Cookies.get("jwt") ? Cookies.get("jwt") : "");
  const [user, setUser] = useState({});

useEffect(()=>{
  if (jwt) {
    const decoded = jwtDecode(jwt);
    const username = decoded.sub;
    axios
      .get(`http://localhost:8080/teacher/get-personal-info/${username}`,{
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      },{
        "withCredentials": true
      },)
      .then((res) => {
       setUser(res.data);
      });
  }
},[])

  const value = { jwt, setJwt , user, setUser};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export { useUser, UserProvider };
