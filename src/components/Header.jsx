import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyled, MenuButton } from "./styled/Header.styled";
import logoImg from "../assets/logo.svg";

const Header = ({ toggleMenu }) => {
  const handleClick = () => {
    // force page refresh if logo is clicked from "/" route
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <HeaderStyled>
      <div className="container">
        <Link to="/" onClick={handleClick}>
          <img src={logoImg} alt="ejuicr logo" />
        </Link>
        <MenuButton type="button" title="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </div>
    </HeaderStyled>
  );
};

export default Header;
