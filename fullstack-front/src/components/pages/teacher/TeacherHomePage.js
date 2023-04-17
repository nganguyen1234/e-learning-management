import React, { useEffect, useState } from "react";
import { useUser } from "../../userProvider/UserProvider";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

export default function TeacherHomePage() {
  const user = useUser();
  const [decoded, setDecoded] = useState({});
  useEffect(() => {
    if (user.jwt) {
      const decoded = jwtDecode(user.jwt);
      setDecoded(decoded);
    }
  }, []);

  return (
    <div>
      <h1>
        navbar
        <h3>timetable</h3>
        <div className="dropdown">
          {/* teacher name + photo */}
          <button
            className="btn btn-secondary dropdown-toggle d-flex justify-content-end"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.user.fullName}
          </button>
          {/* when click on teacher name -> a dropdown appear*/}
          <ul className="dropdown-menu ">
            <li>
              <Link to="/teacher/personal-information" className="dropdown-item">
                Personal Information
              </Link>
            </li>
            <li>
              <Link to="/logout" className="dropdown-item">
                logout
              </Link>
            </li>
          </ul>
        </div>
      </h1>
      <div>
        {/* Autoplaying carousels without controls */}
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="/images/teacherhome2.jpg"
                className="d-block w-70"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/images/teacherhome1.jpg"
                className="d-block w-70"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/teacherhome3.jpg"
                className="d-block w-70"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h1>
        quick access
        <h2> monitoring class </h2>
        <h2> school notification </h2>
        <h2> mail box </h2>
        <h2> all other teaching class score,... </h2>
      </h1>
      <h1>teacher qualification reminder</h1>
      <h1>footer</h1>
    </div>
  );
}
