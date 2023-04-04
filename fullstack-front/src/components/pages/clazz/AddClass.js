// import React, { Component, useEffect } from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useState } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { Link, useParams } from "react-router-dom";
// export default function AddClass() {
//   const query =useParams();
//   const formik = useFormik({
//     initialValues: {
//       id: "",
//       name:"",
//       formTeacher: {id:""},
//     },
//     onSubmit: (values) => {
//       axios.post("http://localhost:8080/class/add-class", values);
//     },
//   });

//   const [gradeList, setGradeList] = useState([]);
//   const [teacherList, setTeacherList] = useState([]);
//   const [studentSet, setstudentSet] = useState([]);
//   // load data from server-side
//   useEffect(() => {
//     getGrade();
//     getTeacher();

//   }, []);
//   //load 1st grade list
//   const getGrade = async () => {
//     const list = await axios.get(
//       "http://localhost:8080/class/get-first-grade-list"
//     );
//     setGradeList(list.data);
//   };
//   //load teacher list
//   const getTeacher = async () => {
//     const list = await axios.get(
//       "http://localhost:8080/teacher/get-all-teacher"
//     );
//     setTeacherList(list.data);
//   };

//   // create options for select class tag
//   const gradeOption = gradeList.map((grade) => {
//     return (
//       <option key={grade.id} value={grade.id}>
//         {grade.name}
//       </option>
//     );
//   });
//   // create options for select teacher tag
//   const teacherOption = teacherList.map((teacher) => {
//     return (
//       <option key={teacher.id} value={teacher.id}>
//         {teacher.fullName}
//       </option>
//     );
//   });
//   // render student table
// renderStudentTable =()=>{
//   return(  <div className="pb-4">
//             {studentSet.length > 0 ? (
//               <div>
//                 <p>
//                   Class has {studentSet.length}{" "}
//                   {studentSet.length > 1 ? "students" : "student"}
//                 </p>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>STT</th>
//                       <th>Full name</th>
//                       <th>Date of birth</th>
//                       <th>Gender</th>
//                       <th>Place of origin</th>
//                     </tr>
//                   </thead>
//                   <tbody>{studentTable}</tbody>
//                 </Table>
//               </div>
//             ) : (
//               <p>Class has 0 student</p>
//             )}
//           </div>)
// }

//   const studentTable = studentSet.map((student, index) => {
//     return (
//       <tr>
//         <td>{index + 1}</td>
//         <td>{student.fullName}</td>
//         <td>{student.dateOfBirth}</td>
//         <td>{student.gender == 0 ? "female" : "male"}</td>
//         <td>{student.placeOfOrigin.name}</td>
//       </tr>
//     );
//   });

//   return (
//     <main className="  h-screen items-center flex justify-center">
//       <form onSubmit={formik.handleSubmit} className="bg-white flex rounded-lg w-1/2 font-latoRegular">
//         <div className="flex-1 text-gray-700  p-20">
//           {/* class input field */}
//           <div className="pb-4">
//             <label htmlFor="class" className="block font-latoBold text-sm pb-2">
//               Class
//             </label>
//             <br />
//             <select
//               name="id"
//               onChange={(e) => {
//                 const classId = e.target.value;
//                 formik.handleChange(e);
//                 axios
//                   .get(
//                     `http://localhost:8080/student/get-student-by-class/${classId}`
//                   )
//                   .then((response) => {
//                     setstudentSet(response.data);
//                     formik.setFieldValue("studentSet", response.data);
//                   });
//               }}
//               value={formik.values.id}
//               className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
//             >
//               <option key="0" value="0"></option>
//               {gradeOption}
//             </select>
//           </div>
//           {/* form teacher field */}
//           <div className="pb-4">
//             <label
//               htmlFor="formTeacher"
//               className="block font-latoBold text-sm pb-2"
//             >
//               Form Teacher
//             </label>
//             <br />
//             <select
//               name="formTeacher.id"
//               value={formik.values.formTeacher.id}
//               onChange={formik.handleChange}
//               className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
//             >
//               {teacherOption}
//             </select>
//           </div>

//           {/* <div className="pb-4">
//             {studentSet.length > 0 ? (
//               <div>
//                 <p>
//                   Class has {studentSet.length}{" "}
//                   {studentSet.length > 1 ? "students" : "student"}
//                 </p>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>STT</th>
//                       <th>Full name</th>
//                       <th>Date of birth</th>
//                       <th>Gender</th>
//                       <th>Place of origin</th>
//                     </tr>
//                   </thead>
//                   <tbody>{studentTable}</tbody>
//                 </Table>
//               </div>
//             ) : (
//               <p>Class has 0 student</p>
//             )}
//           </div> */}
//           <div>
//             <Link to={`/add-student/${formik.values.class}`}>Add student</Link>
//           </div>
//         </div>
//         <button type="submit" className="btn">
//           Tạo lớp
//         </button>
//       </form>
//     </main>
//   );
// }
