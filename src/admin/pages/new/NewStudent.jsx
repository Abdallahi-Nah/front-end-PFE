import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./NewStudent.scss";
import { useState } from "react";

const NewStudent = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Ajouter ou Modifier un étudiant</h1>
        </div>
        <div className="bottom">
          <div className="imageContainer">
            <img
              src={file ? URL.createObjectURL(file) : "/images/teaher-1.jpg"}
              alt="student"
              className="image"
            />
            <div className="uploadSection">
              <label htmlFor="file">
                <DriveFolderUploadOutlined
                  className="icon"
                  style={{
                    cursor: "pointer",
                  }}
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
                  placeholder="1999-05-15"
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
                <label htmlFor="matricule">Matricule</label>
                <input type="text" id="matricule" placeholder="C16655" />
              </div>
              <div
                style={{
                  gridColumn: "1 / -1",
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

export default NewStudent;
