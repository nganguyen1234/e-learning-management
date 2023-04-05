import React, { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
export default function Teacher() {
  const [teacherList, setTeacherList] = useState([]);
  const [facultyList, setFacultyList] = useState([]);

  //dùng useEffect để đổ ra full list teacher lần đầu
  useEffect(() => {
    getTeacherList();
    getFacultyList();
  }, []);

  // tạo formik để search teacher theo tên và facultyId
  const formik = useFormik({
    initialValues: {
      teacherName: "",
      facultyId: 0,
    },
    onSubmit: () => {
      getTeacherList();
    },
    //  onSubmit: values => {
    //     getTeacherList();
    //   },
  });

  //lấy data(ds teacher) từ db, lưu trong state
  const getTeacherList = async () => {
    await axios
      .get("http://localhost:8080/teacher/search-teacher", {
        params: {
          fullName: formik.values.teacherName,
          facultyId: formik.values.facultyId,
        },
      })
      .then((res) => {
        setTeacherList(res.data);
      });
  };

  // chuyển data ds teacher từ state sang table
  const renderTeacherList = teacherList.map((teacher, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td colSpan="2">{teacher.fullName}</td>
        <td colSpan="2">{teacher.dateOfBirth}</td>
        <td colSpan="2">{teacher.placeOfOrigin.name}</td>
        <td colSpan="2">{teacher.phoneNumber}</td>
        <td colSpan="2">{teacher.emailAddress}</td>
        <td colSpan="2">{teacher.faculty.name}</td>
      </tr>
    );
  });

  //lấy data(ds faculty) từ db để làm dropdown selection giúp tìm kiếm teacher:
  const getFacultyList = async () => {
    await axios
      .get("http://localhost:8080/personal-info/get-all-faculty")
      .then((res) => {
        setFacultyList(res.data);
      });
  };

  // chuyển data ds faculty từ state sang dropdown selection
  const renderFacultyList = facultyList.map((faculty) => {
    return <option value={faculty.id}>{faculty.name}</option>;
  });

  return (
    <div>
      {/* search teacher form */}
      <div>
        <form className="d-flex" onSubmit={formik.handleSubmit}>
          <select
            className="form-select"
            name="facultyId"
            value={formik.facultyId}
            onChange={formik.handleChange}
          >
            <option defaultValue={0} value="0">
              Choose the faculty
            </option>
            {renderFacultyList}
          </select>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="teacherName"
            onChange={formik.handleChange}
            value={formik.values.teacherName}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* teacher list */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full name</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Place of origin</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email address</th>
              <th scope="col">Faculty</th>
            </tr>
          </thead>
          <tbody>{renderTeacherList}</tbody>
        </table>
      </div>
    </div>
  );
}
