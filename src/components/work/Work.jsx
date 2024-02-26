import React from "react";
import "./work.scss";
import { Link } from "react-router-dom";
import scss from "../../assets/scssIcon.png";
import redux from "../../assets/reduxIcon.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

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
            {/* <div className="projectList">
              <Link to="https://darkoreactprojectcomics.com/" target="_blank">
                #1 COMIC CORNER
              </Link>
            </div>
            <div className="projectList">
              <Link
                to="https://darkoreactprojectcomicsshop.com/"
                target="_blank"
              >
                #2 COMIC SHOP
              </Link>
            </div> */}

            <div className="cardProjectHolder">
              <div className="cardImageHolder">
                <img src={project1} alt="project1" />
              </div>
              <div className="cardTextButtonHolder">
                <div className="cardText">
                  <h3>#1 COMIC CORNER</h3>
                </div>
                <div className="cardButton">
                  <button>Go to project</button>
                </div>
              </div>
            </div>
            <div className="cardProjectHolder">
              <div className="cardImageHolder">
                <img src={project2} alt="project2" />
              </div>
              <div className="cardTextButtonHolder">
                <div className="cardText">
                  <h3>#2 COMIC SHOP</h3>
                </div>
                <div className="cardButton">
                  <button>Go to project</button>
                </div>
              </div>
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
