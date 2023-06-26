import React from "react"
import Banner from "../components/Banner"
import BannerImage from "../assets/picture_homePage.png"
import Offers from "../data/data.json"
import "../styles/styleHome.scss"
import { NavLink } from "react-router-dom"
import Header from "../components/Header"

/* Composant permettant l'affichage des composants ainsi que des différentes locations
disponibles sur la page d'accueil */
const Home = () => {
  return (
    <div className="pageContainer">
      <Header underlined={"home"} />
      <br/>
      <Banner imageSrc={BannerImage} className="titleBanner" title="Chez vous, partout et ailleurs"/>
      <div className="containerOffer">
        {Offers.map((offer) => (
          <NavLink key={offer.id} to={"/Fiche_logement/" + offer.id}>
            {" "}
            <div className="containerDiv">
              <div className="div_img">
                <img
                  className="img"
                  src={offer.cover}
                  alt="Aperçu de l'offre"
                />
              </div>
              <div className="div_txt">
                <div>
                  <h3>{offer.title}</h3>
                </div>
                <div>
                  <p>{offer.location}</p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home
