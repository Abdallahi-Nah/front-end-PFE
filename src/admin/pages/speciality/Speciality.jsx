import "./Speciality.scss";
import DataTable from "../../components/datatable/DataTable";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 200 },
];

const rows = [
  // Math-Infos (ID département : 1)
  { id: 1, nom: "Mathématiques Fondamentales" },
  { id: 2, nom: "Informatique Théorique" },
  { id: 3, nom: "Mathématiques Appliquées" },
  { id: 4, nom: "Génie Logiciel" },
  { id: 5, nom: "Analyse de Données" },

  // Physique (ID département : 2)
  { id: 6, nom: "Physique Fondamentale" },
  { id: 7, nom: "Physique Appliquée" },
  { id: 8, nom: "Physique des Matériaux" },
  { id: 9, nom: "Électronique" },
  { id: 10, nom: "Physique Quantique" },

  // Chimie (ID département : 3)
  { id: 11, nom: "Chimie Organique" },
  { id: 12, nom: "Chimie Inorganique" },
  { id: 13, nom: "Chimie Analytique" },
  { id: 14, nom: "Chimie Physique" },
  { id: 15, nom: "Génie Chimique" },

  // Biologie (ID département : 4)
  { id: 16, nom: "Biologie Cellulaire" },
  { id: 17, nom: "Microbiologie" },
  { id: 18, nom: "Biologie Moléculaire" },
  { id: 19, nom: "Biotechnologie" },
  { id: 20, nom: "Génétique" },

  // Géologie (ID département : 5)
  { id: 21, nom: "Géologie Structurale" },
  { id: 22, nom: "Géophysique" },
  { id: 23, nom: "Géochimie" },
  { id: 24, nom: "Hydrogéologie" },
  { id: 25, nom: "Pétrologie" },

  // Cloud (ID département : 6)
  { id: 26, nom: "Administration Cloud" },
  { id: 27, nom: "Sécurité Cloud" },
  { id: 28, nom: "DevOps et Cloud Computing" },
  { id: 29, nom: "Infrastructure as Code" },
  { id: 30, nom: "Architectures Distribuées" },

  // Machine Learning (ID département : 7)
  { id: 31, nom: "Apprentissage Supervisé" },
  { id: 32, nom: "Apprentissage Non Supervisé" },
  { id: 33, nom: "Traitement Automatique du Langage" },
  { id: 34, nom: "Vision par Ordinateur" },
  { id: 35, nom: "Optimisation pour ML" },

  // Deep Learning (ID département : 8)
  { id: 36, nom: "Réseaux de Neurones Profonds" },
  { id: 37, nom: "Deep Learning pour la Vision" },
  { id: 38, nom: "Traitement de la Voix avec DL" },
  { id: 39, nom: "Architectures Avancées (GANs, Transformers)" },
  { id: 40, nom: "Frameworks DL : TensorFlow & PyTorch" },

  // Data Science (ID département : 9)
  { id: 41, nom: "Statistiques pour la Data Science" },
  { id: 42, nom: "Analyse de Données Massives" },
  { id: 43, nom: "Data Engineering" },
  { id: 44, nom: "Visualisation de Données" },
  { id: 45, nom: "Éthique et Protection des Données" },
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
              to="new-speciality"
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

const Speciality = () => {
  return (
    <>
      <div className="speciality">
        <DataTable
          title="Liste des spécialités"
          columns={columns}
          rows={rows}
          actionColumn={actionColumn}
          link="new-speciality"
          type="speciality"
        >
          <Filter title="département" />
        </DataTable>
      </div>
    </>
  );
};

export default Speciality;
