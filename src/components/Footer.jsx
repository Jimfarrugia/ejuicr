import FooterMenu from "./FooterMenu";
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
    </FooterStyled>
  );
};

export default Footer;
