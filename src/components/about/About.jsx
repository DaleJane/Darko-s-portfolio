import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="aboutWrapper">
      <div className="aboutHolder">
        <div className="aboutHeading">
          <div className="aboutHeadingHolder">
            <h1> About Me</h1>
            <div className="aboutLine"></div>
          </div>
        </div>
        <div className="aboutInfoWrapper">
          <div className="aboutInfoHolder">
            <div className="aboutPic"></div>
            <div className="aboutInfoMain">
              <div className="aboutInfo">
                <div className="infoLeftRight">
                  <div className="line">
                    <p>
                      <strong>Name</strong> | Darko Jankovic
                    </p>
                  </div>
                  <div className="line">
                    <p>
                      <strong>Date Of Birth</strong> | Avgust 12 1992
                    </p>
                  </div>
                  <div className="line">
                    <p>
                      <strong>Email</strong> | dalejane992@gmail.com
                    </p>
                  </div>
                </div>
                <div className="infoLeftRight">
                  <div className="line">
                    <p>
                      <strong>Country and City</strong> | Serbia, Bor
                    </p>
                  </div>
                  <div className="line">
                    <p>
                      <strong>Marriage Status</strong> | Married
                    </p>
                  </div>
                </div>
              </div>
              <div className="profiles">
                <Link to="/">
                  <i className="fa-brands fa-square-github"></i>
                </Link>
                <Link to="/">
                  <i className="fa-brands fa-upwork"></i>
                </Link>
                <Link to="/">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
