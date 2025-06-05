import "./Matiere.scss";
import DataTable from "../../components/datatable/DataTable";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 200 },
  { field: "credit", headerName: "Crédit", width: 70 },
];

const rows = [
  // Math-Infos (ID département : 1)
  { id: 1, nom: "Mathématiques Fondamentales", credit: 2 },
  { id: 2, nom: "Informatique Théorique", credit: 2 },
  { id: 3, nom: "Mathématiques Appliquées", credit: 2 },
  { id: 4, nom: "Génie Logiciel", credit: 2 },
  { id: 5, nom: "Analyse de Données", credit: 2 },

  // Physique (ID département : 2)
  { id: 6, nom: "Physique Fondamentale", credit: 2 },
  { id: 7, nom: "Physique Appliquée", credit: 2 },
  { id: 8, nom: "Physique des Matériaux", credit: 2 },
  { id: 9, nom: "Électronique", credit: 2 },
  { id: 10, nom: "Physique Quantique", credit: 2 },

  // Chimie (ID département : 3)
  { id: 11, nom: "Chimie Organique", credit: 2 },
  { id: 12, nom: "Chimie Inorganique", credit: 2 },
  { id: 13, nom: "Chimie Analytique", credit: 2 },
  { id: 14, nom: "Chimie Physique", credit: 2 },
  { id: 15, nom: "Génie Chimique", credit: 2 },

  // Biologie (ID département : 4)
  { id: 16, nom: "Biologie Cellulaire", credit: 6 },
  { id: 17, nom: "Microbiologie", credit: 6 },
  { id: 18, nom: "Biologie Moléculaire", credit: 6 },
  { id: 19, nom: "Biotechnologie", credit: 6 },
  { id: 20, nom: "Génétique", credit: 6 },

  // Géologie (ID département : 5)
  { id: 21, nom: "Géologie Structurale", credit: 6 },
  { id: 22, nom: "Géophysique", credit: 6 },
  { id: 23, nom: "Géochimie", credit: 6 },
  { id: 24, nom: "Hydrogéologie", credit: 6 },
  { id: 25, nom: "Pétrologie", credit: 6 },

  // Cloud (ID département : 6)
  { id: 26, nom: "Administration Cloud", credit: 3 },
  { id: 27, nom: "Sécurité Cloud", credit: 3 },
  { id: 28, nom: "DevOps et Cloud Computing", credit: 3 },
  { id: 29, nom: "Infrastructure as Code", credit: 3 },
  { id: 30, nom: "Architectures Distribuées", credit: 3 },

  // Machine Learning (ID département : 7)
  { id: 31, nom: "Apprentissage Supervisé", credit: 3 },
  { id: 32, nom: "Apprentissage Non Supervisé", credit: 3 },
  { id: 33, nom: "Traitement Automatique du Langage", credit: 3 },
  { id: 34, nom: "Vision par Ordinateur", credit: 3 },
  { id: 35, nom: "Optimisation pour ML", credit: 3 },

  // Deep Learning (ID département : 8)
  { id: 36, nom: "Réseaux de Neurones Profonds", credit: 4 },
  { id: 37, nom: "Deep Learning pour la Vision", credit: 4 },
  { id: 38, nom: "Traitement de la Voix avec DL", credit: 4 },
  { id: 39, nom: "Architectures Avancées (GANs, Transformers)", credit: 4 },
  { id: 40, nom: "Frameworks DL : TensorFlow & PyTorch", credit: 4 },

  // Data Science (ID département : 9)
  { id: 41, nom: "Exploration de Données", credit: 4 },
  { id: 42, nom: "Statistiques pour Data Science", credit: 4 },
  { id: 43, nom: "Visualisation de Données", credit: 4 },
  { id: 44, nom: "Big Data et Hadoop", credit: 4 },
  { id: 45, nom: "Python pour Data Science", credit: 4 }
];


const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 300,
    renderCell: () => {
      return (
        <div className="cellAction">
          <span className="updateButton">Modifier</span>
          <span className="deleteButton">Supprimer</span>
        </div>
      );
    },
  },
];

const Matiere = () => {
  return (
    <>
      <div className="matiere">
        <DataTable
          title="Liste des matieres"
          columns={columns}
          rows={rows}
          actionColumn={actionColumn}
          link="new-matiere"
          type="matiere"
        >
          <Filter title="module" />
        </DataTable>
      </div>
    </>
  );
};

export default Matiere;
