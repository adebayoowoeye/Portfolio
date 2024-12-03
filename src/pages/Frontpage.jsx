import React from "react";
import { useNavigate } from "react-router-dom";
import "./Frontpage.css";
import "./MainPage.jsx";

function Frontpage() {
  const navigate = useNavigate();

  const clickAccess = () => {
    navigate("/mainpage");
  };

  return (
    <div className="frontpage">
      {/* <img src="/public/images/LandingPic.png" alt="background" /> */}

      {/* <button onClick={clickAccess}> Click here to come in</button> */}
    </div>
  );
}

export default Frontpage;
