import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import "../styles/styleProduct.scss"
import Offers from "../data/data.json"
import ButtonLeft from "../assets/arrow-left.png"
import ButtonRight from "../assets/arrow-right.png"
import greyStar from "../assets/grey_star.png"
import redStar from "../assets/red_star.png"

const Product = () => {
  const idOffer = useParams().id
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [stars, setStars] = useState([])

  // Recherche une offre dont l'id est égal à idOffer
  const offer = Offers.find((item) => item.id === idOffer)

  // Affichage de la note du logement (nombres d'étoiles)
  const starMaker = (rating) => {
    let stars_ = []
    for (let i = 1; i <= 5; i++) {
      stars_.push(i <= rating ? "redStar" : "greyStar")
    }
    setStars(stars_)
  }

  useEffect(() => {
    // Affectation de la note
    starMaker(offer.rating)
    console.log(offer.host.picture); // <---------------------------------- TEST
  }, [])


  // Composant permettant de créer le slider (image précédente)
  const slidePrev = () => {
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1)
    } else {
      setCurrentImgIndex(offer.pictures.length - 1)
    }
  }

    // Composant permettant de créer le slider (image suivante)
  const slideNext = () => {
    if (currentImgIndex < offer.pictures.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1)
    } else {
      setCurrentImgIndex(0)
    }
  }

  const rating = offer.rating;

  // Affichage du rendu visuel dans la fiche logement
  return (
    <div>
      <Header />
      {/* Container contenant le slider*/}
      <div className="offerContainer">
          <div className="sliderContainer" style= {{backgroundImage: `url(${offer.pictures[currentImgIndex]})` }}>
            <button className="sliderButton" onClick={slidePrev}><img src={ButtonLeft} alt="Left" /></button>
            <button className="sliderButton" onClick={slideNext}><img src={ButtonRight} alt="Right" /></button>
          </div>
        <div>
          <h1 className="h1">{offer.title}</h1>
          <div className="containerFlexDiv">
            <h2 className="localisation">{offer.location}</h2>
            <div className="containerFlexDiv">
              <div className="hostFlex"><p>{offer.host.name}</p></div>
              <div>
                <img src={offer.host.picture} className="hostImg" alt="host of this accomodation" />
                </div>
            </div>
            
          </div>
                <br/>

            <div className="containerFlexDiv">
              <div className="containerFlexDiv">
                  {offer.tags.map((tag, index) => {
                    return (<div className="tags"><span key={index}>{tag}</span></div>)
                  })}
              </div>
                <div className="starsContainer">
                  <div className="accomodation_content_host_stars">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                      )
                    })}
                  </div>
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
         
export default Product;