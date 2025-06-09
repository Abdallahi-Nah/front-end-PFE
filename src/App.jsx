import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  Home,
  Department,
  NewDepartment,
  NewSpeciality,
  Speciality,
  NewModule,
  NewMatiere,
  NewTeacher,
  NewStudent,
  AjouterModifierEmplois,
  Mod,
  Single,
  SingleSpeciality,
  SingleModule,
  SingleTeacher,
  SingleStudent,
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
              <Route path="admin/department/new-department" element={<NewDepartment />} />
              <Route path="admin/speciality" element={<Speciality />} />
              <Route path="admin/speciality/new-speciality" element={<NewSpeciality />} />
              <Route path="admin/module" element={<Mod />} />
              <Route path="admin/module/new-module" element={<NewModule />} />
              <Route path="admin/department/single" element={<Single />} />
              <Route path="admin/speciality/single" element={<SingleSpeciality />} />
              <Route path="admin/module/single" element={<SingleModule />} />
              <Route path="admin/teacher/single" element={<SingleTeacher />} />
              <Route path="admin/student/single" element={<SingleStudent />} />
              <Route path="admin/matiere" element={<Matiere />} />
              <Route path="admin/matiere/new-matiere" element={<NewMatiere />} />
              <Route path="admin/emplois" element={<Emplois />} />
              <Route path="admin/emplois/new-emplois" element={<AjouterModifierEmplois />} />
              <Route path="admin/teacher" element={<Teacher />} />
              <Route path="admin/teacher/new-teacher" element={<NewTeacher />} />
              <Route path="admin/student" element={<Student />} />
              <Route path="admin/student/new-student" element={<NewStudent />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
