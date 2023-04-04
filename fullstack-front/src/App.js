import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/navbar";
import AddClass from "./components/pages/clazz/AddClass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/pages/clazz/AddStudent";
import Teacher from "./components/pages/user/teacher";
function App() {
  return (
    <div className="App flex">
      <Router>
        <Routes>
          {/* <Route exact path="/add-class/:classId" element = {<AddClass/>}></Route>
<Route exact path="/add-student/:classId" element={<AddStudent/>}></Route> */}
          <Route exact path="/guest/teacher" element={<Teacher />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
