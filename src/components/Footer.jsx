import FooterMenu from "./FooterMenu";
import { Link } from "react-router-dom";
import { FooterStyled } from "./styled/Footer.styled";
import logoGrayImg from "../assets/logo-gray.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <FooterMenu />
        <div>
          <img src={logoGrayImg} alt="ejuicr logo" />
        </div>
      </div>
      <p className="fine-print">
        <Link to="/terms-of-service">Terms of Service</Link> |{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </FooterStyled>
  );
};

export default Footer;
