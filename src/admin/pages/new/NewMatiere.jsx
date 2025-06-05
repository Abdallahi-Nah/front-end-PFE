import "./NewMatiere.scss";

const modules = [
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

const NewMatiere = () => {
  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Ajouter ou Modifier une matière</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInputs">
                  <div className="formInput">
                    <label htmlFor="code">Code Matière</label>
                    <input type="text" id="code" placeholder="MF345" />
                  </div>
                  <div className="formInput">
                    <label htmlFor="fullname">Nom du matière</label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Mathématiques Fondamentales"
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="credit">Crédit</label>
                    <input
                      type="number"
                      min="0"
                      max="30"
                      id="credit"
                      placeholder="0"
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="tp" style={{ marginTop: "7px" }}>
                      Avec TP
                    </label>
                    <input
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "14px",
                        cursor: "pointer",
                      }}
                      name="tp"
                      type="checkbox"
                      id="tp"
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="module">Module</label>
                    <select id="module">
                      <option value="">-- Choisir un module --</option>
                      {modules.map((mod) => (
                        <option key={mod.id} value={mod.id}>
                          {mod.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit">Enregistrer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMatiere;
