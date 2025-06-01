import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import Widget from "../../components/widget/Widget";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import HailIcon from "@mui/icons-material/Hail";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget
              title="LES DEPARTEMENTS"
              counter="6"
              icon={<ApartmentIcon className="icon" />}
            />
            <Widget
              title="LES SPECIALITES"
              counter="45"
              icon={<SchoolIcon className="icon" />}
            />
            <Widget
              title="LES MODULES"
              counter="250"
              icon={<ViewModuleIcon className="icon" />}
            />
            <Widget
              title="LES MATIERES"
              counter="600"
              icon={<MenuBookIcon className="icon" />}
            />
            <Widget
              title="LES ENSEIGNANTS"
              counter="130"
              icon={<HailIcon className="icon" />}
            />
            <Widget
              title="LES ETUDIANTS"
              counter="5560"
              icon={<GroupIcon className="icon" />}
            />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
