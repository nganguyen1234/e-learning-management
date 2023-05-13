import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "./components/userProvider/UserProvider";
import Unauthorized from "./components/pages/ErrorPage/Unauthorized";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./components/pages/login/Login";
import TeacherHomePage from "./components/pages/teacher/TeacherHomePage";
import Home from "./components/pages/user/UserHome";
import DetailTimetable from "./components/pages/user/DetailClassTimetable";
import Timetable from "./components/pages/user/ClassTimetableList";
import Class from "./components/pages/user/ClassList";
import Teacher from "./components/pages/user/TeacherList";
import StudentList from "./components/pages/user/DetailStudentList";
import TeacherPersonalInfo from "./components/pages/teacher/TeacherPersonalInfo";
import Logout from "./components/pages/logout/Logout";
import DetailStudent from "./components/pages/user/DetailStudent";
import TeacherLayout from "./components/layout/teacherPage/TeacherLayout";
import GuestLayout from "./components/layout/guestPage/GuestLayout";
import UserHome from "./components/pages/user/UserHome";
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
            path="/teacher"
            element={
              authorities.find((role) => role == "ROLE_TEACHER") ? (
                <PrivateRoute>
                  <TeacherLayout />
                </PrivateRoute>
              ) : (
                <Unauthorized />
              )
            }
          >
            <Route exact path="home" element={<TeacherHomePage />} />
            <Route
              exact
              path="personal-information"
              element={<TeacherPersonalInfo />}
            />
            <Route
              exact
              path="show-student-list/:classId"
              element={<StudentList activeLink="active" />}
            />
            <Route
              exact
              path="get-student-information/:studentId"
              element={<DetailStudent />}
            />
          </Route>
          <Route exact path="/guest" element={<GuestLayout />}>
            <Route exact path= "home" element={<UserHome/>}/>
            <Route exact path="teacher" element={<Teacher />} />
            <Route
              exact
              path="student/show-student-by-class/:classId"
              element={<StudentList activeLink="disabled" />}
            />
            <Route exact path="student" element={<Class />} />
            <Route exact path="timetable" element={<Timetable />} />
            <Route
              exact
              path="timetable/show-timetable-by-class/:classId"
              element={<DetailTimetable />}
            />
          </Route>
          {/* <Route exact path="/guest/teacher" element={<Teacher />}></Route>
          <Route
            exact
            path="/guest/student/show-student-by-class/:classId"
            element={<StudentList activeLink="disabled" />}
          ></Route>
          <Route exact path="/guest/student" element={<Class />}></Route>
          <Route exact path="/guest/timetable" element={<Timetable />}></Route>
          <Route
            exact
            path="/guest/timetable/show-timetable-by-class/:classId"
            element={<DetailTimetable />}
          ></Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
