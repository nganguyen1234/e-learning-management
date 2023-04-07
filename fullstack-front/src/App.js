import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/navbar";
import AddClass from "./components/pages/clazz/AddClass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/pages/clazz/AddStudent";
import Teacher from "./components/pages/user/teacher";
import Class from "./components/pages/user/Class";
import StudentList from "./components/pages/user/StudentList";
import Timetable from "./components/pages/user/Timetable";
import DetailTimetable from "./components/pages/user/DetailTimetable";
function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          {/* <Route exact path="/add-class/:classId" element = {<AddClass/>}></Route>
<Route exact path="/add-student/:classId" element={<AddStudent/>}></Route> */}
          <Route exact path="/guest/teacher" element={<Teacher />}></Route>
          <Route exact path="/guest/student/show-student-by-class/:classId" element={<StudentList/>}></Route>
          <Route exact path="/guest/student" element={<Class/>}></Route>
          <Route exact path="/guest/timetable" element={<Timetable/>}></Route>
          <Route exact path="/guest/timetable/show-timetable-by-class/:classId" element={<DetailTimetable/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
