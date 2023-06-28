import "../styles/styleBanner.css"

  // Composant permettant de créer la bannière dans une div avec son titre et son
  // image
const Banner = ({ imageSrc, title }) => {
  return (
    <div className="bannerContainer">
      <img src={imageSrc} alt="Entête"/>
      <div className="dark-filter"></div>
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
