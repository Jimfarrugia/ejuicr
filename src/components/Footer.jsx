import FooterMenu from "./FooterMenu";
import { FooterStyled } from "./styled/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <FooterMenu />
        <div>
          <img src="logo-gray.svg" alt="ejuicr logo" />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
