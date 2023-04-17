import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "./components/userProvider/UserProvider";
import Unauthorized from "./components/pages/ErrorPage/Unauthorized";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import axios from "axios";
import Login from "./components/pages/login/Login";
import TeacherHomePage from "./components/pages/teacher/TeacherHomePage";
import Home from "./components/pages/user/UserHome";
import DetailTimetable from "./components/pages/user/DetailClassTimetable";
import Timetable from "./components/pages/user/ClassTimetableList";
import Class from "./components/pages/user/ClassList";
import Teacher from "./components/pages/user/TeacherList";
import StudentList from "./components/pages/user/DetailStudentList";
import TeacherPersonalInfo from "./components/pages/teacher/TeacherPersonalInfo";
function App() {
  const user = useUser();
  const [authorities, setAuthorities] = useState([]);
  useEffect(() => {
    if (user.jwt) {
      const decoded = jwt_decode(user.jwt);
      setAuthorities(decoded.authorities);
    }
  }, []);
  useEffect(() => {
    console.log("authorities: " + authorities);
  }, [authorities]);

  return (
    <div className="App flex">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/teacher/home"
            element={
              authorities.find((role) => role === "ROLE_TEACHER") ? (
                <PrivateRoute>
                  <TeacherHomePage />
                </PrivateRoute>
              ) : (
                <Unauthorized />
              )
            }
          ></Route>
          <Route
            path="/teacher/personal-information"
            element={
              authorities.find((role) => role === "ROLE_TEACHER") ? (
                <PrivateRoute>
                  <TeacherPersonalInfo />
                </PrivateRoute>
              ) : (
                <Unauthorized />
              )
            }
          ></Route>
          <Route
            exact
            path="/teacher/home"
            element={
              <PrivateRoute>
                <TeacherHomePage />
              </PrivateRoute>
            }
          ></Route>
          {/* <Route exact path="/add-class/:classId" element = {<AddClass/>}></Route>
<Route exact path="/add-student/:classId" element={<AddStudent/>}></Route> */}
          <Route exact path="/guest/teacher" element={<Teacher />}></Route>
          <Route
            exact
            path="/guest/student/show-student-by-class/:classId"
            element={<StudentList />}
          ></Route>
          <Route exact path="/guest/student" element={<Class />}></Route>
          <Route exact path="/guest/timetable" element={<Timetable />}></Route>
          <Route
            exact
            path="/guest/timetable/show-timetable-by-class/:classId"
            element={<DetailTimetable />}
          ></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
