import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router";
export default function StudentList() {
const [studentList,setStudentList] = useState([]);


//lấy classId được truyền từ url:
const query = useParams();
const classId = query.classId;
// const className = "";
// lấy ds student theo classId từ db lưu vào state
const getStudentList = async () => {
    await axios.get(`http://localhost:8080/student/get-student-by-class/${classId}`)
    .then((res)=>{setStudentList(res.data)})
}

//dùng useEffect để load danh sách student từ khi trang được load lần đầu
useEffect(()=>{
    getStudentList();
    // className = studentList[0].clazz.name;
})

//hiển thị ds student ra table
const renderStudentList = studentList.map((student,index)=>{
return(
    <tr>
    <th scope="row">{index+1}</th>
    <td>{student.fullName}</td>
    <td>{student.gender}</td>
    <td>{student.dateOfBirth}</td>
    <td>{student.placeOfOrigin.name}</td>
  </tr>
)
})

  return (
    <div>
{/* <h2>Class {className}</h2> */}
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full name</th>
      <th scope="col">Gender</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Place of origin</th>
    </tr>
  </thead>
  <tbody>
{renderStudentList}
  </tbody>
</table>

    </div>
  )
}
