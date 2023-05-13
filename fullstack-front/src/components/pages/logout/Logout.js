import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../userProvider/UserProvider";

export default function Logout() {
  const user = useUser();
  useEffect(() => {
    logout();
  });
  const logout = async () => {
    await axios.get(
      "http://localhost:8080/authentication/logout",
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      },
      { withCredentials: true }
    );
  };
  return <Navigate to="/" />;
}
