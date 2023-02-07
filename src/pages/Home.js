import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerImage from "../assets/IMG.png";
import Offers from "../data/data.json";
const Home = () => {
  console.log(Offers);
  return (
    <div>
      <Header underlined={"home"} />
      <Banner imageSrc={BannerImage} title="Chez vous, partout et ailleurs" />
      <div>
        {Offers.map((offer) => (
          <div>
            <img src={offer.cover} />
            <h3>{offer.title}</h3>
            <p>{offer.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
