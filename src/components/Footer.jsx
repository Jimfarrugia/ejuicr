import { Link } from "react-router-dom";
import { FooterStyled } from "./styled/Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/contribute">Contribute</Link>
          </li>
          <li>
            <a href="https://www.jimfarrugia.com.au">Jim Farrugia</a>
          </li>
          <li>
            <a href="https://www.twitter.com/ejuicr">@ejuicr</a>
          </li>
        </ul>
        <div>
          <img src="logo-gray.svg" alt="ejuicr logo" />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
