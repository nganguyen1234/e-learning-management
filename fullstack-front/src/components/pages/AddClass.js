import React, { Component, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
export default function AddClass() {
  const formik = useFormik({
    initialValues: {
      class: "",
      formTeacher: "",
      studentList: "",
    },
  });

  const [gradeList, setGradeList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  // load data from server-side
  useEffect(() => {
    getGrade();
    getTeacher();
  }, []);

  const getGrade = async () => {
    const list = await axios.get(
      "http://localhost:8080/class/get-first-grade-list"
    );
    setGradeList(list.data);
  };

  const getTeacher = async () => {
    const list = await axios.get(
      "http://localhost:8080/teacher/get-all-teacher"
    );
    setTeacherList(list.data);
  };

  // create options for select tag (class, teacher)
  const gradeOption = gradeList.map((grade) => {
    return (
      <option key={grade.id} value={grade.id}>
        {grade.name}
      </option>
    );
  });
  const teacherOption = teacherList.map((teacher) => {
    return (
      <option key={teacher.id} value={teacher.id}>
        {teacher.fullName}
      </option>
    );
  });
  // render student table
  const studentTable = studentList.map((student, index) => {
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{student.fullName}</td>
          <td>{student.dateOfBirth}</td>
          <td>{student.gender == 0 ? "female" : "male"}</td>
          <td>{student.placeOfOrigin}</td>
        </tr>
   
    );
  });
  // add new student to class
  const addStudent = () =>
  {

  }
  return (
    <main className="  h-screen items-center flex justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700  p-20">
          <div className="pb-4">
            <label htmlFor="class" className="block font-latoBold text-sm pb-2">
              Class
            </label>
            <br />
            <select
              name="class"
              onChange={(e) => {
                const classId = e.target.value;
                formik.handleChange(e);
                axios
                  .get(
                    `http://localhost:8080/student/get-student-by-class/${classId}`
                  )
                  .then((response) => {
                    setStudentList(response.data);
                    formik.setFieldValue("studentList", response.data);
                  });
              }}
              value={formik.values.class}
              className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
            >
              <option key="0" value="0"></option>
              {gradeOption}
            </select>
          </div>
          <div className="pb-4">
            <label
              htmlFor="formTeacher"
              className="block font-latoBold text-sm pb-2"
            >
              Form Teacher
            </label>
            <br />
            <select
              name="formTeacher"
              value={formik.values.formTeacher}
              onChange={formik.handleChange}
              className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
            >
              {teacherOption}
            </select>
          </div>
          <div className="pb-4">
            {studentList.length > 0 ? (
              <div>
                <p>Class has {studentList.length} {studentList.length > 1? "students" : "student"}</p>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Full name</th>
                      <th>Date of birth</th>
                      <th>Gender</th>
                      <th>Place of origin</th>
                    </tr>
                  </thead>
                  <tbody>{studentTable}</tbody>
                </Table>
              </div>
            ) : (
              <p>Class has 0 student</p>
            )}
          </div>
          <div>
          {/* <Button variant="primary" onClick={}>Primary</Button> */}
          </div>
        </div>
      </form>
    </main>
  );
}
