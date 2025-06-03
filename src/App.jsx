import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  Home,
  Department,
  New,
  Speciality,
  Mod,
  Single,
  Matiere,
  Emplois,
  Teacher,
  Student,
} from "./admin/index/index";
import Login from "./common/login/Login";
import Register from "./common/register/Register";
import Sidebar from "./admin/components/sidebar/Sidebar";
import Navbar from "./admin/components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="admin/department" element={<Department />} />
              <Route path="admin/department/new" element={<New />} />
              <Route path="admin/speciality" element={<Speciality />} />
              <Route path="admin/module" element={<Mod />} />
              <Route path="admin/department/single" element={<Single />} />
              <Route path="admin/matiere" element={<Matiere />} />
              <Route path="admin/emplois" element={<Emplois />} />
              <Route path="admin/teacher" element={<Teacher />} />
              <Route path="admin/student" element={<Student />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
