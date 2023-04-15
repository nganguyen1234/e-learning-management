import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import useLocalStorage from "../../util/useLocalStorage";
import jwt_decode from "jwt-decode";
import { useUser } from "../../userProvider/UserProvider";

export default function Login() {

  const user = useUser();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: sendLoginRequest,
  });

  function sendLoginRequest() {
    setErrorMessage("");
    axios
      .post(
        "http://localhost:8080/authentication/login",
        {
          username: formik.values.username,
          password: formik.values.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        user.setJwt(response.data);
        const decoded = jwt_decode(response.data);
        console.log("roles " + decoded.authorities);
        console.log(decoded);
      })
      .then(() => {
        console.log("login success with jwt: " + user.jwt);
      });
  }


  return (
    <div>
      <form className="d-flex" onSubmit={formik.handleSubmit}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="Enter username"
          aria-label="Search"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <input
          className="form-control me-2"
          type="password"
          placeholder="Enter password"
          aria-label="Search"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div>Jwt code is {user.jwt}</div>
    </div>
  );
}
