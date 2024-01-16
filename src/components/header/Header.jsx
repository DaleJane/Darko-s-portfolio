import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import pdfCv from "../../assets/DarkoJankovicPortfolio.pdf";

export default function Header() {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/work") {
      setActivePage("work");
    } else {
      setActivePage("about");
    }
  }, [location.pathname]);

  return (
    <div className="headerWrapper">
      <div className="headerHolder">
        <div className="headerNav">
          <nav>
            <div className={activePage === "about" ? "page active" : "page"}>
              <Link
                onClick={() => {
                  setActivePage("about");
                }}
                className={activePage === "about" ? "" : "gray"}
                to="/"
              >
                ABOUT ME
              </Link>
            </div>
            <div className={activePage === "work" ? "page active" : "page"}>
              <Link
                onClick={() => {
                  setActivePage("work");
                }}
                className={activePage === "work" ? "" : "gray"}
                to="work"
              >
                WORK
              </Link>
            </div>
          </nav>
        </div>
        <div className="headerCentral">
          <div className="headerCentralHolder">
            <div className="vertical"></div>
            <div className="headerDetails">
              <p>Hello. My Name Is</p>
              <h1>Darko Jankovic</h1>
              <span>Junior React JS developer</span>
              <Link to={pdfCv} target="_blank">
                <button className="personalCV">Motivation letter</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
