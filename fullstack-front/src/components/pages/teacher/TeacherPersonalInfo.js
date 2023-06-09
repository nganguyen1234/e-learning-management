import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useUser } from "../../userProvider/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeacherPersonalInfo() {
  const user = useUser();
  // const user = props.user;
  const navigate = useNavigate();
  const [isReadonly, setIsReadonly] = useState(true);
  const [ethnicity, setEthnicity] = useState([]);
  const [placeOfOrigin, setPlaceOfOrigin] = useState([]);
  const [faculty, setFaculty] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: user.user.id,
      // user: user.user.user ,
      user: {
        id: user.user.user ? user.user.user.id : "",
      },
      gender: user.user.gender,
      fullName: user.user.fullName,
      dateOfBirth: user.user.dateOfBirth,
      idCardNumber: user.user.idCardNumber,
      address: user.user.address,
      emailAddress: user.user.emailAddress,
      phoneNumber: user.user.phoneNumber,
      // ethnicity: user.user.ethnicity,
      ethnicity: {
        id: user.user.ethnicity ? user.user.ethnicity.id : "",
      },
      placeOfOrigin: {
        id: user.user.placeOfOrigin ? user.user.placeOfOrigin.id : "",
      },
      faculty: { id: user.user.faculty ? user.user.faculty.id : "" },
    },
    enableReinitialize: true,
    onSubmit: (values) => save(values),
  });

  function save(values) {
    setIsReadonly((prevState) => !prevState);
    axios.post(
      "http://localhost:8080/teacher/update-personal-information",
      values,
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      },
      {
        withCredentials: true,
      }
    );
  }
  function displayButton() {
    if (isReadonly) {
      return (
        <div>
          <button onClick={() => setIsReadonly(false)}>Edit</button>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button type="submit">Save Test</button>
          <button
            onClick={() => {
              navigate("/teacher/personal-information");
            }}
          >
            Cancle
          </button>
        </div>
      );
    }
  }

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/common-info/get-all-ethnicity",
        user.jwt,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setEthnicity(res.data);
      });

    axios
      .get(
        "http://localhost:8080/common-info/get-all-city",
        user.jwt,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setPlaceOfOrigin(res.data);
      });

    axios
      .get(
        "http://localhost:8080/common-info/get-all-faculty",
        user.jwt,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setFaculty(res.data);
      });
  }, []);

  const showCityOptions = placeOfOrigin.map((city) => {
    return <option value={city.id}>{city.name}</option>;
  });
  const showEthnicityOption = ethnicity.map((ethnicity) => {
    return <option value={ethnicity.id}>{ethnicity.name}</option>;
  });
  const showFacultyOption = faculty.map((faculty) => {
    return <option value={faculty.id}>{faculty.name}</option>;
  });

  return (
    <div>
      <div className="d-flex justify-content-center row-md-6">
        <img
          src="/images/teacherpageHeader.jpg"
          className="d-block w-50 p-2 g-col-6 rounded-pill"
          alt="header"
        />
      </div>
      <div className="row  justify-content-center">Personal Information</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="id"
          value={formik.values.id}
          style={{ visibility: "hidden" }}
        />
        <input
          name="user.id"
          value={formik.values.user.id}
          style={{ visibility: "hidden" }}
        />
        <div className="d-flex justify-content-center row-md-6">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            disabled={isReadonly}
          >
            <option value="true">male</option>
            <option value="false">female</option>
          </select>
        </div>
        <div className="d-flex justify-content-center row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="fullName">Full name</label>
            <input
              name="fullName"
              type="text"
              readOnly={isReadonly}
              value={formik.values.fullName}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center p-2 flex-grow-1 row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              name="dateOfBirth"
              type="text"
              readOnly={isReadonly}
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="idCardNumber">Id Card Number</label>
            <input
              name="idCardNumber p-2 g-col-6"
              type="text"
              readOnly={isReadonly}
              value={formik.values.idCardNumber}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              readOnly={isReadonly}
              value={formik.values.address}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            readOnly={isReadonly}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
            <label htmlFor="emailAddress">Email address</label>
            <input
              name="emailAddress"
              type="text"
              readOnly={isReadonly}
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>

        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
            <label htmlFor="ethnicity" className="form-check-label">
              Ethnicity{" "}
            </label>
            <select
              name="ethnicity.id"
              disabled={isReadonly}
              value={formik.values.ethnicity.id}
              onChange={formik.handleChange}
            >
              {showEthnicityOption}
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
            <label htmlFor="placeOfOrigin" className="form-check-label">
              Place of Origin
            </label>
            <select
              name="placeOfOrigin.id"
              disabled={isReadonly}
              value={formik.values.placeOfOrigin.id}
              onChange={formik.handleChange}
            >
              {showCityOptions}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
            <label htmlFor="faculty.id" className="form-check-label">
              Faculty{" "}
            </label>
            <select
              name="faculty.id"
              disabled={isReadonly}
              value={formik.values.faculty.id}
              onChange={formik.handleChange}
            >
              {showFacultyOption}
            </select>
          </div>
        </div>
        {/* render "save" button  */}
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
        {!isReadonly ? displayButton() : <></>}
        </div>
        </div>
      </form>
      {/* render "edit" button  */}
      <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
      {isReadonly ? displayButton() : <></>}
      </div>
      </div>
    </div>
  );
}
