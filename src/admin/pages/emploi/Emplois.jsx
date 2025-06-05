import "./Emplois.scss";
import DataTable from "../../components/datatable/DataTable";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "jours", headerName: "Les Jours", width: 130 },
  { field: "horaire", headerName: "Horaire", width: 130 },
  { field: "matiere", headerName: "Matière", width: 130 },
  { field: "professeur", headerName: "Le professeur", width: 130 },
  { field: "lieu", headerName: "Lieu", width: 130 },
  { field: "enseignements", headerName: "Enseignements", width: 130 },
];

const rows = [
  {
    id: 1,
    jours: "Lundi",
    horaire: "08:00-10:00",
    matiere: "Maths",
    professeur: "M. Diallo",
    lieu: "Salle 101",
    enseignements: "Cours",
  },
  {
    id: 2,
    jours: "Lundi",
    horaire: "10:00-12:00",
    matiere: "Physique",
    professeur: "Mme Sow",
    lieu: "Salle 102",
    enseignements: "TP",
  },
  {
    id: 3,
    jours: "Lundi",
    horaire: "14:00-16:00",
    matiere: "Chimie",
    professeur: "M. Ba",
    lieu: "Salle 103",
    enseignements: "TD",
  },
  {
    id: 4,
    jours: "Lundi",
    horaire: "16:00-18:00",
    matiere: "Biologie",
    professeur: "Mme Sy",
    lieu: "Salle 104",
    enseignements: "Cours",
  },

  {
    id: 5,
    jours: "Mardi",
    horaire: "08:00-10:00",
    matiere: "Informatique",
    professeur: "M. Kane",
    lieu: "Salle 201",
    enseignements: "Cours",
  },
  {
    id: 6,
    jours: "Mardi",
    horaire: "10:00-12:00",
    matiere: "Algèbre",
    professeur: "Mme Diop",
    lieu: "Salle 202",
    enseignements: "TD",
  },
  {
    id: 7,
    jours: "Mardi",
    horaire: "14:00-16:00",
    matiere: "Statistiques",
    professeur: "M. Fall",
    lieu: "Salle 203",
    enseignements: "TP",
  },
  {
    id: 8,
    jours: "Mardi",
    horaire: "16:00-18:00",
    matiere: "Analyse",
    professeur: "Mme Ndiaye",
    lieu: "Salle 204",
    enseignements: "Cours",
  },

  {
    id: 9,
    jours: "Mercredi",
    horaire: "08:00-10:00",
    matiere: "Maths",
    professeur: "M. Diallo",
    lieu: "Salle 301",
    enseignements: "TD",
  },
  {
    id: 10,
    jours: "Mercredi",
    horaire: "10:00-12:00",
    matiere: "Physique",
    professeur: "Mme Sow",
    lieu: "Salle 302",
    enseignements: "Cours",
  },
  {
    id: 11,
    jours: "Mercredi",
    horaire: "14:00-16:00",
    matiere: "Chimie",
    professeur: "M. Ba",
    lieu: "Salle 303",
    enseignements: "TP",
  },
  {
    id: 12,
    jours: "Mercredi",
    horaire: "16:00-18:00",
    matiere: "Biologie",
    professeur: "Mme Sy",
    lieu: "Salle 304",
    enseignements: "TD",
  },

  {
    id: 13,
    jours: "Jeudi",
    horaire: "08:00-10:00",
    matiere: "Informatique",
    professeur: "M. Kane",
    lieu: "Salle 401",
    enseignements: "TP",
  },
  {
    id: 14,
    jours: "Jeudi",
    horaire: "10:00-12:00",
    matiere: "Algèbre",
    professeur: "Mme Diop",
    lieu: "Salle 402",
    enseignements: "Cours",
  },
  {
    id: 15,
    jours: "Jeudi",
    horaire: "14:00-16:00",
    matiere: "Statistiques",
    professeur: "M. Fall",
    lieu: "Salle 403",
    enseignements: "TD",
  },
  {
    id: 16,
    jours: "Jeudi",
    horaire: "16:00-18:00",
    matiere: "Analyse",
    professeur: "Mme Ndiaye",
    lieu: "Salle 404",
    enseignements: "Cours",
  },

  {
    id: 17,
    jours: "Vendredi",
    horaire: "08:00-10:00",
    matiere: "Maths",
    professeur: "M. Diallo",
    lieu: "Salle 501",
    enseignements: "TP",
  },
  {
    id: 18,
    jours: "Vendredi",
    horaire: "10:00-12:00",
    matiere: "Physique",
    professeur: "Mme Sow",
    lieu: "Salle 502",
    enseignements: "TD",
  },
  {
    id: 19,
    jours: "Vendredi",
    horaire: "14:00-16:00",
    matiere: "Chimie",
    professeur: "M. Ba",
    lieu: "Salle 503",
    enseignements: "Cours",
  },
  {
    id: 20,
    jours: "Vendredi",
    horaire: "16:00-18:00",
    matiere: "Biologie",
    professeur: "Mme Sy",
    lieu: "Salle 504",
    enseignements: "TP",
  },

  {
    id: 21,
    jours: "Samedi",
    horaire: "08:00-10:00",
    matiere: "Informatique",
    professeur: "M. Kane",
    lieu: "Salle 601",
    enseignements: "TD",
  },
  {
    id: 22,
    jours: "Samedi",
    horaire: "10:00-12:00",
    matiere: "Algèbre",
    professeur: "Mme Diop",
    lieu: "Salle 602",
    enseignements: "TP",
  },
  {
    id: 23,
    jours: "Samedi",
    horaire: "14:00-16:00",
    matiere: "Statistiques",
    professeur: "M. Fall",
    lieu: "Salle 603",
    enseignements: "Cours",
  },
  {
    id: 24,
    jours: "Samedi",
    horaire: "16:00-18:00",
    matiere: "Analyse",
    professeur: "Mme Ndiaye",
    lieu: "Salle 604",
    enseignements: "TD",
  },

  {
    id: 25,
    jours: "Dimanche",
    horaire: "08:00-10:00",
    matiere: "Maths",
    professeur: "M. Diallo",
    lieu: "Salle 701",
    enseignements: "Cours",
  },
  {
    id: 26,
    jours: "Dimanche",
    horaire: "10:00-12:00",
    matiere: "Physique",
    professeur: "Mme Sow",
    lieu: "Salle 702",
    enseignements: "TD",
  },
  {
    id: 27,
    jours: "Dimanche",
    horaire: "14:00-16:00",
    matiere: "Chimie",
    professeur: "M. Ba",
    lieu: "Salle 703",
    enseignements: "TP",
  },
  {
    id: 28,
    jours: "Dimanche",
    horaire: "16:00-18:00",
    matiere: "Biologie",
    professeur: "Mme Sy",
    lieu: "Salle 704",
    enseignements: "Cours",
  },
  {
    id: 29,
    jours: "Dimanche",
    horaire: "18:00-20:00",
    matiere: "Informatique",
    professeur: "M. Kane",
    lieu: "Salle 705",
    enseignements: "Cours",
  },
  {
    id: 30,
    jours: "Dimanche",
    horaire: "20:00-22:00",
    matiere: "Analyse",
    professeur: "Mme Ndiaye",
    lieu: "Salle 706",
    enseignements: "TP",
  },
];

const Emplois = () => {
  return (
    <>
      <div className="emplois">
        <DataTable
          title="Liste des emplois"
          columns={columns}
          rows={rows}
          link="new-emplois"
        ></DataTable>
        <div className="cellAction">
          <span className="updateButton">Modifier</span>
          <span className="deleteButton">Supprimer</span>
        </div>
      </div>
    </>
  );
};

export default Emplois;
