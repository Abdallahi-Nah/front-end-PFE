import "./NewSpeciality.scss";

const departments = [
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

const NewSpeciality = () => {
  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Ajouter ou Modifier une spécialité</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInputs">
                  <div className="formInput">
                    <label htmlFor="fullname">Nom du spécialité</label>
                    <input
                      type="text"
                      id="fullname"
                      placeholder="Mathématiques Fondamentales"
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="department">Département</label>
                    <select id="department">
                      <option value="">-- Choisir un département --</option>
                      {departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.nom}
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

export default NewSpeciality;
