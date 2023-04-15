import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/pages/clazz/AddStudent";
import Teacher from "./components/pages/user/teacher";
import Class from "./components/pages/user/Class";
import StudentList from "./components/pages/user/StudentList";
import Timetable from "./components/pages/user/Timetable";
import DetailTimetable from "./components/pages/user/DetailTimetable";
import { useEffect, useState } from "react";
import { useUser } from "./components/userProvider/UserProvider";
import Unauthorized from "./components/pages/ErrorPage/Unauthorized";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import axios from "axios";
import Login from "./components/pages/login/Login";
import TeacherHomePage from "./components/pages/teacher/TeacherHomePage";
import Home from "./components/pages/user/UserHome";
function App() {
  const user = useUser();
  const [authorities, setAuthorities] = useState([]);
  useEffect(()=>{
    if(user.jwt){
      const decoded = jwt_decode(user.jwt);
      setAuthorities(decoded.authorities);
        }
      
  },[])
  useEffect(()=>{
    console.log("authorities: " + authorities);

  },[authorities])

  return (
    <div className="App flex">
      <div>Homepage with jwt = {user.jwt}</div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route
            exact
            path="/teacher/home"
            element={
              roles.find((role) => role === "ROLE_TEACHER") ? (
                <PrivateRoute>
                  <Home></Home>
                </PrivateRoute>
              ) : (
                <PrivateRoute>
                  <Unauthorized />
                </PrivateRoute>
              )
            }
          ></Route> */}
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
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Router>
    </div>
  );
}

export default App;
