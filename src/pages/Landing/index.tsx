import React from "react";
import { Link } from "react-router-dom";
// assets
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyImg from "../../assets/images/icons/study.svg";
import giveClassesImg from "../../assets/images/icons/give-classes.svg";
import purpleHeartImg from "../../assets/images/icons/purple-heart.svg";
// style
import "./styles.css";

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Landing" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyImg} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesImg} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartImg} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
