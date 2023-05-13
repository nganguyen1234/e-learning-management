// import React, { useEffect } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useState } from "react";
// import {  useNavigate, useParams } from "react-router-dom";
// function BasicExample() {
//   //get class id from add-class url
//   const { classId } = useParams();
//   const navigate = useNavigate();
//   useEffect(() => {
//     getCityList();
//   }, []);
//   const formik = useFormik({
//     initialValues: {
//       fullName: "abc",
//       dateOfBirth: "",
//       gender: "",
//       placeOfOrigin: { id: "" },
//       ethnicGroup: "",
//       religion: "",
//       dadName: "",
//       dadJob: "",
//       momName: "",
//       momJob: "",
//       clazz: { id: classId },
//     },
//     onSubmit: (values) => {
//       axios
//         .post("http://localhost:8080/student/add-student-to-class", values)
//         .then((response) => {
//           console.log(response);
//         });
//       // history.goBack();
//       navigate(`/add-class/${classId}}`);
//     },
//   });

//   // set value for gender field function
//   const handleGenderChoosing = (e) => {
//     formik.values.gender = e.target.value;
//   };

//   // load city list to create place of origin dropdown
//   const [cityList, setCityList] = useState([]);
//   const getCityList = async () => {
//     const result = await axios.get(
//       "http://localhost:8080/personal-info/get-all-city"
//     );
//     setCityList(result.data);
//   };

//   const showCityOptions = cityList.map((city) => {
//     return <option value={city.id}>{city.name}</option>;
//   });

//   return (
//     <form className="form" onSubmit={formik.handleSubmit}>
//       {/* full name field */}
//       <div className="mb-3 form-group">
//         <label htmlFor="fullName">Full name</label>
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Enter student name"
//           value={formik.values.fullName}
//           onChange={formik.handleChange}
//         />
//       </div>
//       {/* date of birth field */}
//       <div className="mb-3 form-group">
//         <label htmlFor="dateOfBirth">Date of birth</label>
//         <input
//           type="date"
//           name="dateOfBirth"
//           placeholder="dd/MM/yyyy"
//           value={formik.values.dateOfBirth}
//           onChange={formik.handleChange}
//         />
//       </div>
//       {/* gender field  */}
//       <div className="mb-3 form-group">
//         <label>Gender:</label>
//         <br />
//         <input
//           type="radio"
//           value="true"
//           id="male"
//           name="gender"
//           onChange={handleGenderChoosing}
//         ></input>
//         <label className="form-check-label" htmlFor="male">
//           Male
//         </label>
//         <input
//           type="radio"
//           name="gender"
//           value="false"
//           id="female"
//           onChange={handleGenderChoosing}
//         ></input>
//         <label className="form-check-label" htmlFor="female">
//           Female
//         </label>
//       </div>
//       {/* place of origin field */}
    //   <div className="mb-3 form-group">
    //     <label htmlFor="placeOfOrigin" className="form-check-label">
    //       Place of Origin
    //     </label>
    //     <select
    //       name="placeOfOrigin.id"
    //       value={formik.values.placeOfOrigin.id}
    //       onChange={formik.handleChange}
    //     >
    //       {showCityOptions}
    //     </select>
    //   </div>

//       {/* father full name field */}
//       <div className="mb-3 form-group">
//         <label htmlFor="dadName">Father's Full Name</label>
//         <input
//           type="text"
//           value={formik.values.dadName}
//           name="dadName"
//           onChange={formik.handleChange}
//         ></input>
//       </div>

//       {/* father job field */}

//       <div className="mb-3 form-group">
//         <label htmlFor="dadJob">Father's Job</label>
//         <input
//           type="text"
//           value={formik.values.dadJob}
//           name="dadJob"
//           onChange={formik.handleChange}
//         ></input>
//       </div>

//       {/* mother full name field */}
//       <div className="mb-3 form-group">
//         <label htmlFor="momName">Mother's Full Name</label>
//         <input
//           type="text"
//           value={formik.values.momName}
//           name="momName"
//           onChange={formik.handleChange}
//         ></input>
//       </div>

//       {/* mother job field */}
//       <div className="mb-3 form-group">
//         <label htmlFor="momJob">Mother's Job</label>
//         <input
//           type="text"
//           value={formik.values.momJob}
//           name="momJob"
//           onChange={formik.handleChange}
//         ></input>
//       </div>
      
//       <button className="button" variant="primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default BasicExample;
