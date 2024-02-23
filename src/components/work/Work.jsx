import React from "react";
import "./work.scss";
import { Link } from "react-router-dom";
import scss from "../../assets/scssIcon.png";
import redux from "../../assets/reduxIcon.png";

export default function Work() {
  return (
    <div className="workWrapper">
      <div className="workHolder">
        <div className="workHeading">
          <div className="workHeadingHolder">
            <h1>Work</h1>
            <div className="workLine"></div>
          </div>
        </div>
        <div className="previousWork">
          <div className="previousP">
            <p>Check out my previous work:</p>
          </div>
          <div className="previousWorkList">
            <div className="projectList">
              <Link to="https://darkoreactprojectcomics.com/" target="_blank">
                #1 COMIC CORNER
              </Link>
            </div>
            <div className="projectList">
              <Link to="/">#2 COMIC SHOP</Link>
            </div>
          </div>
        </div>
        <div className="techlogyInUseWrapper">
          <div className="technologyHeading">
            <h2>My work is based on:</h2>
          </div>
          <div className="technologyInUse">
            <div className="singleTechnology">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="singleTechnology">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <div className="singleTechnologyPic">
              <img src={scss} alt="scss-logo" />
            </div>
            <div className="singleTechnology">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="singleTechnologyPic">
              <img src={redux} alt="redux-logo" />
            </div>
            <div className="singleTechnology">
              <i className="fa-brands fa-js"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
