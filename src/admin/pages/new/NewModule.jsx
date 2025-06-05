import "./NewModule.scss";

const semestres = [
  { id: 1, nom: "S1" },
  { id: 2, nom: "S2" },
  { id: 3, nom: "S3" },
  { id: 4, nom: "S4" },
  { id: 5, nom: "S5" },
  { id: 6, nom: "S6" },
];

const specialities = [
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

const NewModule = () => {
  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Ajouter ou Modifier une module</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInputs">
                  <div className="formInput">
                    <label htmlFor="fullname">Nom du module</label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Mathématiques Fondamentales"
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="semestre">Semestre</label>
                    <select id="semestre">
                      <option value="">-- Choisir un semestre --</option>
                      {semestres.map((semestre) => (
                        <option key={semestre.id} value={semestre.id}>
                          {semestre.nom}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="formInput">
                    <label htmlFor="speciality">Spécialité</label>
                    <select id="speciality">
                      <option value="">-- Choisir une spécialité --</option>
                      {specialities.map((speciality) => (
                        <option key={speciality.id} value={speciality.id}>
                          {speciality.nom}
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

export default NewModule;
