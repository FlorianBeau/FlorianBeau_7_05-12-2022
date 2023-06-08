import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import "../styles/styleProduct.scss"
import Offers from "../data/data.json"
import ButtonLeft from "../assets/arrow-left.png"
import ButtonRight from "../assets/arrow-right.png"
import greyStar from "../assets/grey_star.png"
import redStar from "../assets/red_star.png"
import arrowDown from "../assets/arrow_down.png"
import arrowUp from "../assets/arrow_up.png"
import { text } from "@fortawesome/fontawesome-svg-core"
import Collapse from "../components/Collapse"

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
    // console.log(offer.host.picture); // <---------------------------------- TEST
  }, [offer.rating])

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

  // const displayDiv = () => {
  //   if(isShow !== false ) {
  //     console.log("OK");
  //   }
  // }

  // Affichage du rendu visuel dans la fiche logement
 return (
  <div>
    <Header />
    {/* Container contenant le slider */}
    <main className="main">
      <div className="sliderContainer">
          <button className="sliderButtonLeft" onClick={slidePrev}><img src={ButtonLeft} alt="Left" className="arrowSlider" /></button>
        <img src={`${offer.pictures[currentImgIndex]}`} className="imgSlider" alt="picturesSlider" />
          <button className="sliderButtonRight" onClick={slideNext}><img src={ButtonRight} alt="Right" className="arrowSlider" /></button>
      </div>
      <div>
        <h1 className="h1">{offer.title}</h1>
        <div className="containerFlexDiv">
          <h2 className="localisation">{offer.location}</h2>
          <div className="containerFlexDiv">
            <div className="hostFlex"><p>{offer.host.name}</p></div>
            <div>
              <img src={offer.host.picture} className="hostImg" alt="host of this accommodation" />
            </div>
          </div>
        </div>
        <br />
        <div className="containerFlexDiv">
          <div className="containerFlexDiv">
            {offer.tags.map((tag, index) => {
              return (<div className="tags" key={index}><span>{tag}</span></div>)
            })}
          </div>
          <div className="starsContainer">
            <div className="accommodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                )
              })}
            </div>
          </div>
        </div>
</div>
      <br />
         <Collapse />

    </main>
  </div>
   );

}



export default Product;