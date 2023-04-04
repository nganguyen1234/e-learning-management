// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import React from "react";
// import { Field } from "formik";
// // import ButtonGroup from "react-bootstrap/ButtonGroup";
// // import ToggleButton from "react-bootstrap/ToggleButton";
// // import { useState } from "react";
// // import { FormCheck, ToggleButtonGroup } from "react-bootstrap";
// import { Formik } from "formik";
// import axios from "axios";
// function BasicExample() {
// const handleSubmit = async (values,{setSubmitting}) => {
// const result = await axios.post("http://localhost:8080/student/add-student-to-class",values);
// setSubmitting(false);
// console.log(result);
// }
//   return (
//     <Formik initialValues={{fullName :'',dateOfBirth :'',gender :'',placeOfOrigin:'',ethnicGroup:'',religion:''}} onSubmit={handleSubmit}>
//         <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Full name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter student name"
//             name="fullName"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Date of birth</Form.Label>
//           <Form.Control
//             type="date"
//             placeholder="dd/MM/yyyy"
//             name="dateOfBirth"
//           />
//         </Form.Group>
//         <div className="form-group">
//           <div className="form-check">
//              <Field
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="male"
//             id="male"
//           ></Field>
//           <label className="form-check-label" htmlFor="male">Male</label>
//           </div>
//           <div className="form-check">
//              <Field
//             className="form-check-input"
//             type="radio"
//             name="gender"
//             value="female"
//             id="female"
//           ></Field>
//           <label className="form-check-label" htmlFor="female">Female</label>
//           </div>
//         </div>
//         <Button variant="primary" type="submit">
//         Submit
//         </Button>
//         </Form>
//     </Formik>
//   );
// }

// export default BasicExample;
