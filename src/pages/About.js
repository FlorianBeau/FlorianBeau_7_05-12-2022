import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerImage from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../styles/styleAbout.scss";
import arrowDown from "../assets/arrow_down.png";
import arrowUp from "../assets/arrow_up.png";

const About = () => {
  const [isShow2, setIsShow2] = useState(false);

  return (
    <div>

      <Header underlined={"about"} />
      <Banner imageSrc={BannerImage} title="" />
      <br />

      {isShow2 ? (
        <div className="containerCollapse">
            {/* Collapse une fois ouvert */}
            <div className="divCollapseOpen">
                <div>
                    <h3>Fiabilité</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow2(false)}>
                        <img src={arrowUp} alt="arrow_Up" />
                    </button>
                </div>
            </div>
            <div>
                <p className="p_Description"></p>
            </div>
        </div>) : (
          <div className="containerCollapse">
            <div className="divCollpaseClosed">
                <div>
                    <h3 className="textWhite">Description</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow2(true)}>
                        <img src={arrowDown} alt="arrow_Down" />
                    </button>
                </div>
            </div>
        </div>      )

<div className="divUp">
                <div>
                    <h3>Description</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow(false)}>
                        <img src={arrowUp} alt="arrow_Up" />
                    </button>
                </div>
            </div>
            <div>
                <p className="p_Description">{offer.description}</p>
            </div>
        </div>
                ) : (
        <div>
            <div className="divUp">
                <div>
                    <h3 className="textWhite">Description</h3>
                </div>
                <div>
                    <button className="divButton" onClick={() => setIsShow(true)}>
                        <img src={arrowDown} alt="arrow_Down" />
                    </button>
                </div>
            </div>
        </div>
        )


      }
    </div>
  );
};

export default About;
