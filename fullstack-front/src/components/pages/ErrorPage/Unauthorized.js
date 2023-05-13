import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <>
      {" "}
      <div>You dont have right to access this page</div>
      <Link to="/login">Login</Link>
    </>
  );
}
