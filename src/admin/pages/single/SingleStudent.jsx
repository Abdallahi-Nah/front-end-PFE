import "./SingleStudent.scss";

const SingleStudent = () => {
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Les informations d'un étudiant</h1>
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
                  value="1999-05-15"
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
                <label htmlFor="matricule">Matricule</label>
                <input
                  type="text"
                  id="matricule"
                  value="C16655"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="creditCumulatif">Crédit cumulatif</label>
                <input
                  type="text"
                  id="creditCumulatif"
                  value="60"
                  readOnly
                />
              </div>
              <div className="formInput">
                <label htmlFor="moyenneAnnuelle">Moyenne annuelle</label>
                <input
                  type="text"
                  id="moyenneAnnuelle"
                  value="12.5"
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

export default SingleStudent;
