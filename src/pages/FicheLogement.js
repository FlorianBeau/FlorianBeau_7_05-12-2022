import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

import Offers from "../data/data.json";

const FicheLogement = () => {
  const idOffer = useParams().id;
  const [offer, setOffer] = useState({});
  useEffect(() => {
    setOffer(Offers.find((item) => item.id === idOffer));
  }, []);
  console.log(offer);
  return (
    <div>
      <Header />
      <h1>Offres de locations</h1>
      <p>Offres du jour</p>
      <p>{offer.title}</p>
      <p>{offer.description}</p>
      <p>{offer.location}</p>
      <p>{offer.equipments}</p>

      <br />
    </div>
  );
};

export default FicheLogement;
