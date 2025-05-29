<<<<<<< HEAD
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
=======
>>>>>>> 0541798ca4dac0feaa48a92f69233205d0c7c5f4
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
<<<<<<< HEAD
            <span className="logo">
              FST-UN
            </span>
        </div>
        <hr />
        <div className="bottom">
          <ul>
            <p className="title">Main</p>
            <li>
              <HomeIcon className="icon" />
              <span>Accueil</span>
            </li>
            <p className="title">Gestion Académique</p>
            <li>
              <ApartmentIcon className="icon" />
              <span>Les Départements</span>
            </li>
            <li>
              <SchoolIcon className="icon" />
              <span>Les Spécialités</span>
            </li>
            <li>
              <ViewModuleIcon className="icon" />
              <span>Les Modules</span>
            </li>
            <li>
              <MenuBookIcon className="icon" />
              <span>Les Matières</span>
            </li>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>Emplois du temps</span>
            </li>
            <p className="title">Gestion des Personnes</p>
            <li>
              <GroupIcon className="icon" />
              <span>Les étudiants</span>
            </li>
            <li>
              <HailIcon className="icon" />
              <HailIcon className="icon" />
              <span>Les enseignants</span>
            </li>
            <p className="title">Compte</p>
            <li>
              <LogoutIcon className="icon" />
              <span>Déconnecter</span>
            </li>
          </ul>
        </div>
=======
            <span className="logo">UN-FST</span>
        </div>
        <div className="bottom">bottom</div>
>>>>>>> 0541798ca4dac0feaa48a92f69233205d0c7c5f4
      </div>
    </>
  );
};

export default Sidebar;
