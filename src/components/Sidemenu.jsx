import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FooterMenu from "./FooterMenu";
import { SidemenuStyled } from "./styled/Sidemenu.styled";

const Sidemenu = ({ toggleMenu }) => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  return (
    <SidemenuStyled>
      <div className="controls">
        {(showLoginMenu && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => setShowLoginMenu(false)}
          />
        )) || <div />}
        <FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
      </div>
      {(showLoginMenu && (
        <>
          <h3>Login</h3>
          <p>
            <button type="button">Sign in with Google</button>
          </p>
          <p>
            <button type="button">Sign in with Twitter</button>
          </p>
          <p>
            <button type="button">Sign in with Email</button>
          </p>
          <p>
            <button type="button">Sign up with Email</button>
          </p>
        </>
      )) || (
        <>
          <Link className="logo" to="/" onClick={toggleMenu}>
            <img src="logo.svg" alt="ejuicr logo" />
          </Link>
          <Link to="#" onClick={() => setShowLoginMenu(true)}>
            Login/Signup
          </Link>
        </>
      )}
      <hr />
      <FooterMenu toggleMenu={toggleMenu} />
    </SidemenuStyled>
  );
};

export default Sidemenu;
