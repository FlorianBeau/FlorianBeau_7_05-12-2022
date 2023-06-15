import LogoFooter from "../assets/logo_footer.png"
import "../styles/styleProduct.scss"

// Composant permettant de créer le footer
const Footer = () => {
    return (
        <div className="footer">
            <h1 className="logoFooter">K<img src={LogoFooter} alt="logo footer"></img>sa</h1>
            <p className="paragraphFooter">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;