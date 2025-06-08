import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./NewTeacher.scss";
import { useState } from "react";

const matieres = [
  { id: 1, nom: "Analyse Mathématique" },
  { id: 2, nom: "Algèbre Linéaire I" },
  { id: 3, nom: "Algèbre Linéaire II" },
  { id: 4, nom: "Statistiques" },
  { id: 5, nom: "Algèbre Genéral" },
  { id: 6, nom: "Analyse Numérique" },
];

const NewTeacher = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Ajouter ou Modifier un enseignant</h1>
        </div>
        <div className="bottom">
          <div className="imageContainer">
            <img
              src={file ? URL.createObjectURL(file) : "/images/teaher-1.jpg"}
              alt="teacher"
              className="image"
            />
            <div className="uploadSection">
              <label htmlFor="file">
                <DriveFolderUploadOutlined
                  className="icon"
                />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="formContainer">
            <form>
              <div className="formInput">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" placeholder="Diallo" />
              </div>
              <div className="formInput">
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" placeholder="Moussa" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="moussa.diallo@univ.edu"
                />
              </div>
              <div className="formInput">
                <label htmlFor="tel">Téléphone</label>
                <input type="text" id="tel" placeholder="22123456789" />
              </div>
              <div className="formInput">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Al jedide, Boutilimitt"
                />
              </div>
              <div className="formInput">
                <label htmlFor="dateNaissance">Date Naissance</label>
                <input
                  type="text"
                  id="dateNaissance"
                  placeholder="1989-05-15"
                />
              </div>
              <div className="formInput">
                <label htmlFor="diplomes">Les diplômes</label>
                <input
                  type="text"
                  id="diplomes"
                  placeholder="Doctorat en Mathématiques - Université de la Sorbonne, Paris"
                />
              </div>
              <div className="formInput">
                <input
                  style={{ marginTop: "26px" }}
                  type="text"
                  id="diplomes"
                  placeholder="Master en Analyse Mathématique - Université Cheikh Anta Diop, Dakar"
                />
              </div>
              <div className="formInput">
                <input
                  style={{ marginTop: "26px" }}
                  type="text"
                  id="diplomes"
                  placeholder="Licence en Mathématiques Appliquées - Université de Nouakchott"
                />
              </div>
              <div className="formInput">
                <label htmlFor="speciality">Spécialité</label>
                <input
                  type="text"
                  id="speciality"
                  placeholder="Mathématiques"
                />
              </div>
              <div className="formInput">
                <label htmlFor="anneesExperience">Années d'expérience</label>
                <input type="text" id="anneesExperience" placeholder="4" />
              </div>
              <div className="formInput">
                <label htmlFor="matiere">Les matières qu'il enseigne</label>
                <select id="matiere">
                  <option value="" style={{ color: "#F5F5F5" }}>
                    -- Choisir une matière --
                  </option>
                  {matieres.map((mat) => (
                    <option key={mat.id} value={mat.id}>
                      {mat.nom}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  gridColumn: "1 / -1", // occupe toute la largeur du grid (1 à la dernière colonne)
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button type="submit">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTeacher;
