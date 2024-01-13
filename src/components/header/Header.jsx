import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [activePage, setActivePage] = useState("about");
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
              <Link to="/">
                <button className="personalCV">Personal CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
