import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HeaderStyled, MenuButton } from "./styled/Header.styled";

const Header = () => {
  return (
    <HeaderStyled data-testid="Header">
      <div className="container">
        <Link to="/">
          <img src="logo.svg" alt="ejuicr logo" />
        </Link>
        <MenuButton type="button" title="menu">
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </div>
    </HeaderStyled>
  );
};

export default Header;
