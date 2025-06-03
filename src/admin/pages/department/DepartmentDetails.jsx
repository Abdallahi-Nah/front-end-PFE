import "./DepartmentDetails.scss";
import { Link } from "react-router-dom";

const DepartmentDetails = () => {
  return (
    <>
      <div className="departmentDetails">
        <h1>Department Details</h1>
        <p>Here you can view the details of a specific department.</p>
        <div className="cellAction">
          <Link to="" style={{ textDecoration: "none", color: "inherit" }}>
            <span className="deleteButton">Retourner</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DepartmentDetails;