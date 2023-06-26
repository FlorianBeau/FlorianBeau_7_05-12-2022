import React, { useState } from "react";
import Offers from "../data/data.json"
import "../styles/styleProduct.scss"
import arrowDown from "../assets/arrow_down.png"
import arrowUp from "../assets/arrow_up.png"
import { useParams } from "react-router-dom"

const CollapseDescription = () => {
  const [isShow2, setIsShow2] = useState(false);
    const idOffer = useParams().id;

    // Recherche une offre dont l'id est égal à idOffer
    const offer = Offers.find((item) => item.id === idOffer)

  return isShow2 ? (
    // First div (Description)
        <div className="divContent">
            <div className="divUp">
                <div>
                    <h3>Description</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow2(false)}>
                        <img src={arrowUp} alt="arrow_Up" />
                    </button>
                </div>
            </div>
            <div>
                <p className="p_Description">{offer.description}</p>
            </div>
        </div>
                ) : (
        <div className="collapseWidth">
            <div className="divUp">
                <div>
                    <h3 className="textWhite">Description</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow2(true)}>
                        <img src={arrowDown} alt="arrow_Down" />
                    </button>
                </div>
            </div>
        </div>
        )
};
export default CollapseDescription;
