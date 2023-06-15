import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerImage from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../styles/styleProduct.scss";
import "../styles/styleAbout.scss";
import arrowDown from "../assets/arrow_down.png";
import arrowUp from "../assets/arrow_up.png";

const About = () => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);


  return (
    <div>
      <Header underlined={"about"} />
      <br/>
      <Banner imageSrc={BannerImage} title="" />
      <br />
      {/* Collapse "Fiabilité" */}
      {isShow1 ? (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3>Fiabilité</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow1(false)}>
                  <img src={arrowUp} alt="arrow_Up" />
                </button>
              </div>
            </div>
            <div>
              <p className="p_Description">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3 className="textWhite">Fiabilité</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow1(true)}>
                  <img src={arrowDown} alt="arrow_Down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapse "Respect" */}
      {isShow2 ? (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3>Respect</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow2(false)}>
                  <img src={arrowUp} alt="arrow_Up" />
                </button>
              </div>
            </div>
            <div>
              <p className="p_Description">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3 className="textWhite">Respect</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow2(true)}>
                  <img src={arrowDown} alt="arrow_Down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Collapse "Service" */}
      {isShow3 ? (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3>Service</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow3(false)}>
                  <img src={arrowUp} alt="arrow_Up" />
                </button>
              </div>
            </div>
            <div>
              <p className="p_Description">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3 className="textWhite">Service</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow3(true)}>
                  <img src={arrowDown} alt="arrow_Down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapse "Sécurité" */}
      {isShow4 ? (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3>Sécurité</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow4(false)}>
                  <img src={arrowUp} alt="arrow_Up" />
                </button>
              </div>
            </div>
            <div>
              <p className="p_Description">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="containerCollapse">
            <div className="divUp2">
              <div>
                <h3 className="textWhite">Sécurité</h3>
              </div>
              <div>
                <button className="divButton" onClick={() => setIsShow4(true)}>
                  <img src={arrowDown} alt="arrow_Down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;