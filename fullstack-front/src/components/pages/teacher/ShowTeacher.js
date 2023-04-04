// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// export default function ShowTeacher() {
//   const { teacherList, setTeacherList } = useState([]);
//   const formik = useFormik(
//     {initialValues:{
//         name: "",
//         faculty: {id:""},
//     },
//     onsubmit: (values) => {
//       axios.get(`http://localhost:8080/teacher/search-teacher/name=${values.name}&&faculty=${values.faculty.id}`);
//     }
// }
//   )
//   useEffect(() => {
//     getTeacherList();
//   }, []);
//   //get teacher list
//   const getTeacherList = async () => {
//     const list = await axios.get(
//       "http://localhost:8080/teacher/get-all-teacher"
//     );
//     setTeacherList(list.data);
//   };
//   return (
//     <div>
//       {/* search input */}
//       <form class="d-flex" role="search">
//         <input
//           class="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button class="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//       {/* show teacher list */}
//       <table className="table table-striped">
//         <thead>
//           <tr>STT</tr>
//           <tr>Full name</tr>
//           <tr>Address</tr>
//           <tr>Phone number</tr>
//           <tr>Date of birth</tr>
//           <tr>Faculty</tr>
//           <tr>Edit</tr>
//         </thead>
//         <tbody>
//           {teacherList.map((teacher, index) => {
//             return (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{teacher.fullName}</td>
//                 <td>{teacher.address.name}</td>
//                 <td>{teacher.phoneNumber}</td>
//                 <td>{teacher.dateOfBirth}</td>
//                 <td>{teacher.faculty.name}</td>
//                 <td>
//                   <Link to={`/edit-teacher/${teacher.id}`}>Edit</Link>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }
