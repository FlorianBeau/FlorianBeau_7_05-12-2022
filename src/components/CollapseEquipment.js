import React, { useState } from "react";
import Offers from "../data/data.json"
import "../styles/styleProduct.scss"
import arrowDown from "../assets/arrow_down.png"
import arrowUp from "../assets/arrow_up.png"
import { useParams } from "react-router-dom"

const CollapseEquipment = () => {
  const [isShow, setIsShow] = useState(false);
    const idOffer = useParams().id;

    // Recherche une offre dont l'id est égal à idOffer
    const offer = Offers.find((item) => item.id === idOffer)

  return isShow ? (
        // First div (Description)
        <div className="divContent">
            <div className="divUp">
                <div>
                    <h3>Equipements</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow(false)}>
                        <img src={arrowUp} alt="arrow_Up" />
                    </button>
                </div>
            </div>
            <div className="divText">
                    {offer.equipments.map((equipment, index) => {
                        return (<ul className="ul_Equipement" key={index}>{equipment}
                   </ul>)
                    })}
            </div>
        </div>
                ) : (
        <div>
            <div className="divUp">
                <div>
                    <h3 className="textWhite">Equipements</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow(true)}>
                        <img src={arrowDown} alt="arrow_Down" />
                    </button>
                </div>
            </div>
        </div>
        )
};
    export default CollapseEquipment;