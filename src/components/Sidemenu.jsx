import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import FooterMenu from "./FooterMenu";
import { SidemenuStyled } from "./styled/Sidemenu.styled";

const Sidemenu = ({ toggleMenu }) => {
  return (
    <SidemenuStyled>
      <div className="align-right">
        <FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
      </div>
      <Link className="logo" to="/" onClick={toggleMenu}>
        <img src="logo.svg" alt="ejuicr logo" />
      </Link>
      <Link to="#">Login/Signup</Link>
      <hr />
      <FooterMenu toggleMenu={toggleMenu} />
    </SidemenuStyled>
  );
};

export default Sidemenu;
