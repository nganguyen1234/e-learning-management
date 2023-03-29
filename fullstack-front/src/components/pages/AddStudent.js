import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Field, useFormik } from "formik";
import { Formik } from "formik";
import axios from "axios";
function BasicExample() {
  const formik = useFormik({
    initialValues: {
      fullName: "abc",
      dateOfBirth: "",
      gender: "",
      placeOfOrigin: "",
      ethnicGroup: "",
      religion: "",
    },
    onSubmit :(values) => {
      axios.post("http://localhost:8080/student/add-student-to-class",values)
      .then((response) => {console.log(response)});
    },
  });

  const handleGenderChoosing = (e) => {
    formik.values.gender = e.target.value;
  }

  return (
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="mb-3 form-group" >
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter student name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="dd/MM/yyyy"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
             <input
            className="form-check-input"
            type="radio"
            value="male"
            id="male"
            name="gender"
            onChange={handleGenderChoosing}
          ></input>
          <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
             <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleGenderChoosing}
          ></input>
          <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        <button className="button" variant="primary" type="submit">
          Submit
        </button>
      </form>

  );
}

export default BasicExample;
