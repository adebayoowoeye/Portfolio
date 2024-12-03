import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="MainContainer">
        <section className="Menubar">
          <img src="Logo" alt=" logoSpace" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="searchbar">
            <input type="text" />
            <button>Search</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
