import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Class() {
    const [classList, setClasList] = useState([]);

//lấy ds lớp từ db lưu vào state
const getClassList = async () =>{
    await axios.get("http://localhost:8080/class/get-all-class")
    .then((res) => {setClasList(res.data)})
}

// dùng useEffect để đổ ra full list class lần đầu
useEffect(()=>{
    getClassList();
},[])
// hiển thị ds lớp 
const renderClassList = classList.map((clazz,index)=>{
    return(
        <Link className="btn btn-primary" to={`/guest/student/show-student-by-class/${clazz.id}`}>{clazz.name}</Link>
    )
})
  return (
    <div>
{renderClassList}
    </div>
  )
}
