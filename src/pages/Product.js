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
  const offer = { pictures: [] }
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const [stars, setStars] = useState([])

  // Recherche une offre dont l'id est égal à idOffer
  const offer_ = Offers.find((item) => item.id === idOffer)

  // Affichage de la note du logement (nombres d'éoiles)
  const starMaker = (rating) => {
    let stars_ = []
    for (let i = 1; i <= 5; i++) {
      stars_.push(i <= rating ? "redStar" : "greyStar")
    }
    setStars(stars_)
  }

  useEffect(() => {
    // Affectation de la note
    starMaker(offer_.rating)
    // setOffer(offer_) <----------------------------------------- MIT EN COMMENTAIRE
    console.log(offer);
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
   { /* CODE PRECEDENT : const rating = Offers[0].rating; */ }


  // --------------------------------------------------------------------------------- //

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
          <h2 className="localisation">{offer.location}</h2>
          

        {/* CONTAINER TAGS A TERMINER ------------------------------------------------------- */} 
          <div className="tags">

							{offer.tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>

						{/* {offer.tags.map((tags, index) => { return(<span key={index}>{tags}</span>)
							)}} */}

        {/* CONTAINER TAGS A TERMINER ------------------------------------------------------- */} 

{/* CONTAINER STARS A TERMINER ------------------------------------------------------- */}
            {/* <div className="starsContainer">
              {stars.map((star, index) => (
                <div className={star} key={index}></div>
              ))}
            </div> */}

{/* CONTAINER STARS A TERMINER ------------------------------------------------------- */}
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