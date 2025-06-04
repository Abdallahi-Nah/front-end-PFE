import "./SingleSpeciality.scss";

const modulesMathFondamentales = [
  "Algèbre Linéaire",
  "Analyse I",
  "Analyse II",
  "Probabilités",
  "Topologie",
  "Équations Différentielles",
  "Méthodes Numériques",
];

const SingleSpeciality = () => {
  return (
    <>
      <div className="single">
        <div className="singleContainer">
          <div className="top">
            <h1 className="title">Spécialité : Mathématiques Fondamentales</h1>
          </div>
          <div className="bottom">
            <h1 className="subtitle">
              Les modules de la spécialité : Mathématiques Fondamentales
            </h1>
            <div className="specialities">
              {modulesMathFondamentales.map((module, index) => (
                <div key={index} className="speciality">
                  <h2 className="subtitle">{module}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSpeciality;
