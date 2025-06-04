import { DriveFolderUploadOutlined } from "@mui/icons-material";
import "./NewDepartment.scss";

const NewDepartment = () => {
  return (
    <>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Ajouter un département</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="fullname">Nom du département</label>
                  <input type="text" id="fullname" placeholder="Math-Infos" />
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

export default NewDepartment;
