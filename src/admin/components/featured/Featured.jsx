import "./Featured.scss";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Nombre total de cours</h1>
          <AssignmentOutlinedIcon className="icon" fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.95,
                    trailColor: "#82ca9d",
                    pathColor: "#210876",
                    textColor: "#210876",
                  })}
                />
              )}
            </ChangingProgressProvider>
          </div>
          <p className="title">Total de cours</p>
          <p className="amount">2500</p>
          <p className="desc">
            Statistiques
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <span className="resultAmount">10000</span>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult negative">
                <span className="resultAmount">200</span>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <span className="resultAmount">800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
// This code defines a React component named "Featured" that renders a div with the class "featured".
