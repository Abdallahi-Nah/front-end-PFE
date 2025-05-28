import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import {
  Home,
  Department,
  Speciality,
  Mod,
  Matiere,
  Emplois,
  Teacher,
  Student,
} from "./admin/index/index";
import Login from "./common/login/Login";
import Register from "./common/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="admin/department" element={<Department />} />
          <Route path="admin/speciality" element={<Speciality />} />
          <Route path="admin/module" element={<Mod />} />
          <Route path="admin/matiere" element={<Matiere />} />
          <Route path="admin/emplois" element={<Emplois />} />
          <Route path="admin/teacher" element={<Teacher />} />
          <Route path="admin/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
