import React from "react"
import Header from "../components/Header"
import Banner from "../components/Banner"
import BannerImage from "../assets/IMG.png"
import Offers from "../data/data.json"
import "../styles/styleHome.sass"
import { NavLink } from "react-router-dom"

const Home = () => {
  // console.log(Offers);
  return (
    <div>
      <Header underlined={"home"} />
      <Banner imageSrc={BannerImage} title="Chez vous, partout et ailleurs" />
      <div className="containerOffer">
        {Offers.map((offer) => (
          <NavLink key={offer.id} to={"/Fiche_logement/" + offer.id}>
            {" "}
            <div className="containerDiv">
              <div className="div_img">
                <img
                  className="img"
                  src={offer.cover}
                  alt="Aperçus de l'offre"
                />
              </div>
              <div className="div_txt">
                <div>
                  {" "}
                  <h3>{offer.title}</h3>
                </div>
                <div>
                  <p>{offer.location}</p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>{" "}
    </div>
  )
}

export default Home
