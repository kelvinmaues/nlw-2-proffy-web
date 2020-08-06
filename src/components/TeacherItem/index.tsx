import React from "react";
// assets
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
// styles
import "./style.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/11196828?s=460&u=3bb8fac22345e3fac52bc1becc6774ab10c37642&v=4"
          alt=".."
        />
        <div>
          <strong>Kelvin Maués</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Excepteur sint aute tempor exercitation aliquip Lorem ex qui dolore
        nulla veniam laboris pariatur exercitation. Velit duis mollit culpa quis
        officia adipisicing nostrud amet ipsum sit deserunt et officia nostrud.
        Irure ad et tempor irure et minim proident sunt nulla quis sunt nisi.
        Exercitation in minim non anim irure pariatur ullamco tempor id elit
        pariatur.
      </p>
      <footer>
        <p>
          Preço/hora<strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
