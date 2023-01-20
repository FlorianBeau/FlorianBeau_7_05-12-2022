import "../styles/styleBanner.sass";

const Banner = ({ imageSrc, title }) => {
  return (
    <div className="BannerContainer">
      <img src={imageSrc} alt="Entête" />
      <div className="dark-filter"></div>
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
