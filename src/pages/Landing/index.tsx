import React from "react";
// assets
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="page-landing-content container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
          <img src={landingImg} alt="Landing" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
