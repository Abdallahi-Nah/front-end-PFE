import "./SingleTeacher.scss";

const SingleTeacher = () => {
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Les informations d'un enseignant</h1>
        </div>
        <div className="bottom">
          <div className="imageContainer">
            <img src="/images/teaher-1.jpg" alt="teacher" className="image" />
          </div>
          <div className="formContainer">
            <form>
              <div className="formInput">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" value="Diallo" readOnly />
              </div>
              <div className="formInput">
                <label htmlFor="prenom">Prenom</label>
                <input type="text" id="prenom" value="Moussa" readOnly />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value="moussa.diallo@univ.edu"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="tel">Téléphone</label>
                <input type="text" id="tel" value="22123456789" readOnly />
              </div>
              <div className="formInput">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  value="Al jedide, Boutilimitt"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="dateNaissance">Date Naissance</label>
                <input
                  type="text"
                  id="dateNaissance"
                  value="1989-05-15"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="diplomes">Les diplômes</label>
                <input
                  type="text"
                  id="diplomes"
                  value="Doctorat en Mathématiques - Université de la Sorbonne, Paris"
                  readOnly
                />
              </div>
              <div className="formInput">
                <input
                  style={{ marginTop: "26px" }}
                  type="text"
                  id="diplomes"
                  value="Master en Analyse Mathématique - Université Cheikh Anta Diop, Dakar"
                  readOnly
                />
              </div>
              <div className="formInput">
                <input
                  style={{ marginTop: "26px" }}
                  type="text"
                  id="diplomes"
                  value="Licence en Mathématiques Appliquées - Université de Nouakchott"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="speciality">Spécialité</label>
                <input
                  type="text"
                  id="speciality"
                  value="Mathématiques"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="anneesExperience">Années d'expérience</label>
                <input
                  type="text"
                  id="anneesExperience"
                  value="4"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="matieres">Les matières qu'il enseigne</label>
                <input
                  type="text"
                  id="matieres"
                  value="Analyse Mathématique, Algèbre Linéaire, Statistiques"
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
