import "./Department.scss";
import DataTable from "../../components/datatable/DataTable";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
];

const rows = [
  { id: 1, nom: "Math-Infos" },
  { id: 2, nom: "Physique" },
  { id: 3, nom: "Chimie" },
  { id: 4, nom: "Biologie" },
  { id: 5, nom: "Géologie" },
  { id: 6, nom: "Cloud" },
  { id: 7, nom: "Machine Learning" },
  { id: 8, nom: "Deep Learning" },
  { id: 9, nom: "Data Science" },
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
            <Link style={{ textDecoration: "none", color: "inherit" }}
              to="single"
            >
              Voir
            </Link>
          </span>
          <span className="updateButton">Modifier</span>
          <span className="deleteButton">Supprimer</span>
        </div>
      );
    },
  },
];

const Department = () => {
  return (
    <>
      <div className="department">
        <DataTable
          title="Liste des départements"
          columns={columns}
          rows={rows}
          actionColumn={actionColumn}
          link="new-department"
        >
        </DataTable>
      </div>
    </>
  );
};

export default Department;
