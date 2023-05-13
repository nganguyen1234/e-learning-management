import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";

export default function Class() {
  const [classList, setClasList] = useState([]);

  //lấy ds lớp từ db lưu vào state
  const getClassList = async () => {
    await axios.get("http://localhost:8080/class/get-all-class").then((res) => {
      setClasList(res.data);
    });
  };

  // dùng useEffect để đổ ra full list class lần đầu
  useEffect(() => {
    getClassList();
  }, []);
  // hiển thị ds lớp
  const renderClassList = classList.map((clazz, index) => {
    return (
      <tr>
        <td>{index+1}</td>
        <td> <Link
          style={{ textDecoration: "none" , color: "white"}}
          to={`/guest/student/show-student-by-class/${clazz.id}`}
        >
          {clazz.name}
        </Link></td>
       
      </tr>
    );
  });
  return (
    <>
      {/* <section class="services">
        <div class="container"> */}
      {/* <div class="row"> */}
      <table class="table table-dark table-striped">
       <tr>
        <td style={{color: "white"}}>STT</td>
        <td style={{color: "white"}}>Class</td>
       </tr>
        {renderClassList}</table>
      {/* {renderClassList} */}
      {/* </div> */}
    </>
    //   </section>
    // </div>
  );
}
