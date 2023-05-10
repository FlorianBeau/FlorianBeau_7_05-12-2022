import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import ReactDOM from "react-dom/client"

import Header from "../components/Header"
import "../styles/styleFicheLogement.sass"
import Offers from "../data/data.json"
import ButtonLeft from "../assets/arrow-left.png"
import ButtonRight from "../assets/arrow-right.png"

// Fonction fléchée permettant l'affichage du détail de la fiche logement
const FicheLogement = () => {
  const idOffer = useParams().id
  const [offer, setOffer] = useState({ pictures: [] })
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [stars, setStars] = useState([])

  // Fonction fléchée permettant l'affichage du nombre d'étoiles pour la note du logement
  const starMaker = (rating) => {
    let stars_ = []
    for (let i = 1; i <= 5; i++) {
      stars_.push(i <= rating ? "redStar" : "whiteStar")
    }
    setStars(stars_)
  }

  // Utilisation du hook React "UseEffect" cumulé à "UseState" afin d'afficher chaque
  // fiche produit suivant son id. On prends la liste des logements, on utilise la
  // méthode find pour trouver chaque produit de offer que l'on nomme item. Puis on
  // indique que chaque item est égal à chaque offer.
  useEffect(() => {
    const offer_ = Offers.find((item) => item.id === idOffer)
    starMaker(offer_.rating)
    setOffer(offer_)
  }, [])
  console.log(offer)

  // Fonction fléchée permettant de créer le slider (image précédente)
  const slidePrev = () => {
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1)
    } else {
      setCurrentImgIndex(offer.pictures.length - 1)
    }
  }

    // Fonction fléchée permettant de créer le slider (image suivante)
  const slideNext = () => {
    if (currentImgIndex < offer.pictures.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1)
    } else {
      setCurrentImgIndex(0)
    }
  }

  // Affichage du rendu visuel dans la fiche logement
  return (
    <div>
      <Header />
      <div className="offerContainer">
          <img src={offer.pictures[currentImgIndex]} alt={offer.title} className="img"/>
        <div>
          <div className="flex-start">
          <button className="sliderButton" onClick={slideNext}><img src={ButtonLeft} /></button>
        </div>
        <div className="flex-end">
          <button className="sliderButton" onClick={slideNext}><img src={ButtonRight} /></button>
        </div>
        </div>
        
        <div>
          <h1 className="h1">{offer.title}</h1>
          <h2 className="localisation">{offer.location}</h2>
          <div className="tags">
            <ul>{offer.tags}</ul>
            <div className="starsContainer">
              {stars.map((star, index) => (
                <div className={star} key={index}></div>
              ))}
            </div>
          </div>
          {/* Container "Description" and "Equipements": */}
          <div className="containerFlexDiv">
            <div className="borderStyle">
              <div>
                <h3 className="titleFlexDiv">Description</h3>
              </div>
              <div>
                <ul>
                  <p className="redText">{offer.description}</p>
                </ul>
              </div>
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
  )
}

export default FicheLogement
