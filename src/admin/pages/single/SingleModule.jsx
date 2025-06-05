import "./SingleModule.scss";

const matieresInformatiqueTheorique = [
  "Logique Mathématique",
  "Théorie des Automates",
  "Langages Formels",
  "Théorie de la Calculabilité",
  "Théorie de la Complexité",
  "Algèbre Booléenne",
  "Sémantique des Langages",
  "Preuves et Vérification de Programmes",
  "Combinatoire sur les Mots",
  "Cryptographie Théorique" ,
];

const SingleModule = () => {
  return (
    <>
      <div className="single">
        <div className="singleContainer">
          <div className="top">
            <h1 className="title">Module : Informatique Théorique</h1>
          </div>
          <div className="bottom">
            <h1 className="subtitle">
              Les matières de la module : Informatique Théorique
            </h1>
            <div className="modules">
              {matieresInformatiqueTheorique.map((matiere, index) => (
                <div key={index} className="module">
                  <h2 className="subtitle">{matiere}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleModule;