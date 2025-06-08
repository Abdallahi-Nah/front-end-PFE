import "./Student.scss";
import DataTable from "../../components/datatable/DataTable";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
  { field: "prenom", headerName: "Prenom", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "telephone", headerName: "Telephone", width: 130 },
  // { field: "specialite", headerName: "Specialite", width: 130 },
];

const rows = [
  {
    id: 1,
    nom: "Diallo",
    prenom: "Moussa",
    email: "moussa.diallo@univ.edu",
    telephone: "22123456789",
    // specialite: "Mathématiques",
  },
  {
    id: 2,
    nom: "Sy",
    prenom: "Aminata",
    email: "aminata.sy@univ.edu",
    telephone: "22134567890",
    // specialite: "Physique",
  },
  {
    id: 3,
    nom: "Ba",
    prenom: "Ibrahima",
    email: "ibrahima.ba@univ.edu",
    telephone: "22145678901",
    // specialite: "Chimie",
  },
  {
    id: 4,
    nom: "Fall",
    prenom: "Fatou",
    email: "fatou.fall@univ.edu",
    telephone: "22156789012",
    // specialite: "Informatique",
  },
  {
    id: 5,
    nom: "Sow",
    prenom: "Alioune",
    email: "alioune.sow@univ.edu",
    telephone: "22167890123",
    // specialite: "Biologie",
  },
  {
    id: 6,
    nom: "Ndiaye",
    prenom: "Mame",
    email: "mame.ndiaye@univ.edu",
    telephone: "22178901234",
    // specialite: "Géologie",
  },
  {
    id: 7,
    nom: "Diop",
    prenom: "Cheikh",
    email: "cheikh.diop@univ.edu",
    telephone: "22189012345",
    // specialite: "Électronique",
  },
  {
    id: 8,
    nom: "Thiam",
    prenom: "Awa",
    email: "awa.thiam@univ.edu",
    telephone: "22190123456",
    // specialite: "Statistiques",
  },
  {
    id: 9,
    nom: "Camara",
    prenom: "Ousmane",
    email: "ousmane.camara@univ.edu",
    telephone: "22101234567",
    // specialite: "Informatique",
  },
  {
    id: 10,
    nom: "Barry",
    prenom: "Mariama",
    email: "mariama.barry@univ.edu",
    telephone: "22112345678",
    // specialite: "Physique",
  },
  {
    id: 11,
    nom: "Kane",
    prenom: "Moustapha",
    email: "moustapha.kane@univ.edu",
    telephone: "22123456780",
    // specialite: "Mathématiques",
  },
  {
    id: 12,
    nom: "Tall",
    prenom: "Khady",
    email: "khady.tall@univ.edu",
    telephone: "22134567891",
    // specialite: "Biologie",
  },
  {
    id: 13,
    nom: "Seck",
    prenom: "Abdoulaye",
    email: "abdoulaye.seck@univ.edu",
    telephone: "22145678902",
    // specialite: "Chimie",
  },
  {
    id: 14,
    nom: "Gueye",
    prenom: "Ndeye",
    email: "ndeye.gueye@univ.edu",
    telephone: "22156789013",
    // specialite: "Statistiques",
  },
  {
    id: 15,
    nom: "Lo",
    prenom: "Babacar",
    email: "babacar.lo@univ.edu",
    telephone: "22167890124",
    // specialite: "Géologie",
  },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 300,
    renderCell: () => {
      return (
        <div className="cellAction">
          <span className="viewButton">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="single"
            >
              Voir
            </Link>
          </span>
          <span className="updateButton">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="new-student"
            >
              Modifier
            </Link>
          </span>
          <span className="deleteButton">Supprimer</span>
        </div>
      );
    },
  },
];

const Student = () => {
  return (
    <>
      <div className="student">
        <DataTable
          title="Liste des étudiants"
          columns={columns}
          rows={rows}
          actionColumn={actionColumn}
          link="new-student"
          type="student"
        >
          <Filter title="spécialité" />
        </DataTable>
      </div>
    </>
  );
};

export default Student;
