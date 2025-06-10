import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import HailIcon from "@mui/icons-material/Hail";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <span className="logo">
            <img
              src="/images/4-UN (1).jpg"
              style={{ width: "100px", height: "100px" }}
              alt="Logo"
            />
          </span>
        </div>
        <div className="bottom">
          <ul>
            <p className="title">Main</p>
            <li>
              <HomeIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="/"
                >
                  Accueil
                </Link>
              </span>
            </li>
            <p className="title">Gestion Académique</p>
            <li>
              <ApartmentIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/department"
                >
                  Les Départements
                </Link>
              </span>
            </li>
            <li>
              <SchoolIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/speciality"
                >
                  Les Spécialités
                </Link>
              </span>
            </li>
            <li>
              <ViewModuleIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/module"
                >
                  Les Modules
                </Link>
              </span>
            </li>
            <li>
              <MenuBookIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/matiere"
                >
                  Les Matières
                </Link>
              </span>
            </li>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/emplois"
                >
                  Emplois du temps
                </Link>
              </span>
            </li>
            <p className="title">Gestion des Personnes</p>
            <li>
              <HailIcon className="icon" />
              <HailIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/teacher"
                >
                  Les enseignants
                </Link>
              </span>
            </li>
            <li>
              <GroupIcon className="icon" />
              <span>
                <Link
                  style={{ textDecoration: "none", all: "inherit" }}
                  to="admin/student"
                >
                  Les étudiants
                </Link>
              </span>
            </li>
            <p className="title">Compte</p>
            <li>
              <LogoutIcon className="icon" />
              <span>Déconnecter</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
