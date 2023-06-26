import React from "react";
import Header from "../components/Header";
import "../styles/styleError404.scss"

// Composant permettant d'afficher le composant Header, ainsi que la phrase
// indiquant l'erreur.

const Error404 = () => {
  return (
    <div className="pageContainer">
      <Header underlined={"about"} />
      <div className="title404Div">
        <h1 className="title404">404</h1>
        <h2 className="oups">Oups! La page que vous demandez n'existe pas.</h2>
        <h3 className="backlink"><a className="link" href="/">Retourner vers la page d'accueil</a></h3>
      </div>
      <br />
    </div>
  );
};

export default Error404;
