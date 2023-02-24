import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom/client"

import Header from "../components/Header"
import "../styles/styleFicheLogement.sass"
import Offers from "../data/data.json"

const FicheLogement = () => {
  const idOffer = useParams().id
  const [offer, setOffer] = useState({ pictures: [] })
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  useEffect(() => {
    setOffer(Offers.find((item) => item.id === idOffer))
  }, [])
  console.log(offer)
  const slidePrev = () => {
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1)
    } else {
      setCurrentImgIndex(offer.pictures.length - 1)
    }
  }

  const slideNext = () => {
    if (currentImgIndex < offer.pictures.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1)
    } else {
      setCurrentImgIndex(0)
    }
  }

  return (
    <div>
      <Header />
      <div className="offerContainer">
        <div>
          <button onClick={slidePrev}>Prev</button>
          <button onClick={slideNext}>Next</button>
          <img
            src={offer.pictures[currentImgIndex]}
            alt={offer.title}
            className="img"
          />
        </div>
        <div>
          <h1 className="h1">{offer.title}</h1>
          <h2 className="localisation">{offer.location}</h2>
          <div className="tags">
            <ul>{offer.tags}</ul>
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
