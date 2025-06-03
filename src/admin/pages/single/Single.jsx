import "./Single.scss";

import React from "react";

const Single = () => {
  return (
    <>
      <div className="single">
        <div className="singleContainer">
          <div className="top">
            <h1 className="title">Département : Math-Infos</h1>
          </div>
          <div className="bottom">
            <h1 className="subtitle">Les spécialités du département</h1>
            <div className="specialities">
              <div className="speciality">
                <h2 className="subtitle">Informatique</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Mathématiques Appliquées</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Statistiques</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Statistiques</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Statistiques</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Statistiques</h2>
              </div>
              <div className="speciality">
                <h2 className="subtitle">Statistiques</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
