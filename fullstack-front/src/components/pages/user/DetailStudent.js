import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useUser } from "../../userProvider/UserProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function DetailStudent() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const user = useUser();
  const [isReadonly, setIsReadonly] = useState(true);
  const [ethnicity, setEthnicity] = useState([]);
  const [placeOfOrigin, setPlaceOfOrigin] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/student/get-personal-information/" + studentId,
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
        setStudent(res.data);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      id: student.id,
      gender: student.gender,
      fullName: student.fullName,
      dateOfBirth: student.dateOfBirth,
      dadName: student.dadName,
      dadJob: student.dadJob,
      momName: student.momName,
      momJob: student.momJob,
      status: student.status,
        clazz: { id: ""},
        ethnicity: { id: "" },
        placeOfOrigin: { id: ""},
    },
    onSubmit: (values) => save(values),
  });

  function save(values) {
    setIsReadonly((prevState) => !prevState);
    axios.post(
      "http://localhost:8080/student/update-student-information",
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
              navigate(`/student/get-personal-information/${studentId}`);
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
  }, []);

  const showCityOptions = placeOfOrigin.map((city) => {
    return <option value={city.id}>{city.name}</option>;
  });
  const showEthnicityOption = ethnicity.map((ethnicity) => {
    return <option value={ethnicity.id}>{ethnicity.name}</option>;
  });

  return (
    <div >
      <div className="d-flex justify-content-center row-md-6">
        <img
          src="/images/teacherpageHeader.jpg"
          className="d-block w-50 p-2 g-col-6 rounded-pill"
          alt="header"
        />
      </div>
      <div className="row  justify-content-center">Student Personal Information {student.fullName}</div>
      <form onSubmit={formik.handleSubmit}>
        <input name="id" value={formik.values.id? formik.values.id: student.id}  />
        {/* <input name="clazz.id" value={formik.values.clazz.id} /> */}
        <div className="d-flex justify-content-center row-md-6">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={formik.values.gender? formik.values.gender : student.gender}
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
              value={formik.values.fullName? formik.values.fullName : student.fullName}
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
              value={formik.values.dateOfBirth ? formik.values.dateOfBirth : student.dateOfBirth}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="dadName">Father name</label>
            <input
              name="dadName"
              className=" p-2 g-col-6"
              type="text"
              readOnly={isReadonly}
              value={formik.values.dadName ? formik.values.dadName : student.dadName}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6">
          <div className="mb-3 form-group p-2 g-col-6">
            <label htmlFor="dadJob">Father job</label>
            <input
              name="dadJob"
              type="text"
              readOnly={isReadonly}
              value={formik.values.dadJob ? formik.values.dadJob : student.dadJob}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <label htmlFor="momName">Mother name</label>
          <input
            name="momName"
            type="text"
            readOnly={isReadonly}
            value={formik.values.momName ? formik.values.momName : student.momName}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="d-flex justify-content-center row-md-6 p-2 g-col-6">
          <div className="mb-3 form-group">
            <label htmlFor="momJob">Mother job</label>
            <input
              name="momJob"
              type="text"
              readOnly={isReadonly}
              value={formik.values.momJob ? formik.values.momJob : student.momJob}
              onChange={formik.handleChange}
            ></input>
          </div>
        </div>
{/*         
        <div className="mb-3 form-group">
          <label htmlFor="ethnicity.id" className="form-check-label">
            Ethnicity
          </label>
          <select
            name="ethnicity.id"
            disabled={isReadonly}
            value={formik.values.ethnicity.id ? formik.values.ethnicity.id : student.ethnicity.id}
            onChange={formik.handleChange}
          >
            {showEthnicityOption}
          </select>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="placeOfOrigin.id" className="form-check-label">
            Place of Origin
          </label>
          <select
            name="placeOfOrigin.id"
            disabled={isReadonly}
            value={formik.values.placeOfOrigin.id ? formik.values.placeOfOrigin.id : student.placeOfOrigin.id}
            onChange={formik.handleChange}
          >
            {showCityOptions}
          </select>
        </div> */}

        <div className="d-flex justify-content-center row-md-6">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            disabled={isReadonly}
          >
            <option value="true">activate</option>
            <option value="false">disabled</option>
          </select>
        </div>
        {/* render "save" button */}
        {!isReadonly ? displayButton() : <></>}
      </form>
      {/* render "edit" button */}
      {isReadonly ? displayButton() : <></>}
    </div>
  );
}
