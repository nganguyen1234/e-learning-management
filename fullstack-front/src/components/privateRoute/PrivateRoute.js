import React from "react";
import useLocalStorage from "../util/useLocalStorage";
import { Navigate } from "react-router-dom";
import { useUser } from "../userProvider/UserProvider";

export default function PrivateRoute({ children }) {
  const user = useUser();
  return user.jwt ? children : <Navigate to="/login" />;
}
