import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="MainContainer">
        <section className="Menubar">
          <div className="logo">
            <img src="/public/images/logo.webp" alt=" logoSpace" />
          </div>
          <div className="mainMenu">
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
          </div>
          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </section>
        <div className="bodyFrame">
          <section className="myIntro">
            <div className="intro">
              <h3>
                I'M <span>Adebayo Owoeye</span>
              </h3>
              <p>
                A software engineer with a passion for creating innovative
                solutions.
              </p>
            </div>
            <div className="profilePic">
              <img src="/public/images/profile main.JPG" alt="John Doe" />
            </div>
            {/* <div className="socialMedia">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
