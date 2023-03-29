import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { Field, useFormik } from "formik";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";
import { FormCheck, ToggleButtonGroup } from "react-bootstrap";
import { Formik } from "formik";
function BasicExample() {
  const [checked, setChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "abc",
      dateOfBirth: "",
      gender: "",
      placeOfOrigin: "",
      ethnicGroup: "",
      religion: "",
    },
  });

  return (
    <Formik>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student name"
            value={formik.values.fullName}
            // name="fullName"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="dd/MM/yyyy"
            value={formik.values.dateOfBirth}
            // name="dateOfBirth"
            onChange={formik.handleChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
      <Form.Label>Gender</Form.Label>
    <Form.Select value={formik.values.gender} onChange={formik.handleChange}>
      <option key="" value="">Select gender</option>
      <option key="male" value="Male">Male</option>
      <option key="female" value="Female">Female</option>
    </Form.Select>
    </Form.Group> */}
        <div className="form-group">
          <div className="form-check">
             <Field
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            id="male"
          ></Field>
          <label className="form-check-label" htmlFor="male">Male</label>
          </div>
         
          <div className="form-check">
             <Field
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            id="female"
          ></Field>
          <label className="form-check-label" htmlFor="female">Female</label>
          </div>
         

        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}

export default BasicExample;
