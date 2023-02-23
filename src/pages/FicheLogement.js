import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/styleFicheLogement.sass";
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
      <div className="offerContainer">
        <div>
          <img src={offer.cover} alt="offer picture" className="img" />
        </div>
        <div>
          <h1 className="h1">{offer.title}</h1>
          <h2 className="localisation">{offer.location}</h2>
          <p className="tags">{offer.tags}</p>
          {/* Container "Description" and "Equipements": */}
          <div className="containerFlexDiv borderStyle">
            <div className="borderStyle">
              <h3 className="titleFlexDiv">Description</h3>
              <ul>
                <p className="redText">{offer.description}</p>
              </ul>
            </div>
            <div className="borderStyle">
              <h3 className="titleFlexDiv">Equipements</h3>
              <ul>
                <p className="redText">{offer.equipments}</p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default FicheLogement;
