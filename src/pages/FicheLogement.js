import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
const FicheLogement = () => {
  const idOffer = useParams().id;
  console.log(idOffer);
  return (
    <div>
      <Header />

      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <br />
    </div>
  );
};

export default FicheLogement;
