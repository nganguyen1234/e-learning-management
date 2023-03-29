import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/navbar";
import AddClass from "./components/pages/AddClass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/pages/AddStudent";
import AddStudentDemo from "./components/pages/AddStudentDemo";
function App() {
  return (
    <div className="App flex">
    <Router>
      <Routes>
<Route exact path="/add-class" element = {<AddClass/>}></Route>
<Route exact path="/add-student" element={<AddStudentDemo/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
