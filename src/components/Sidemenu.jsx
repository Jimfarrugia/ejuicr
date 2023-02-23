import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FooterMenu from "./FooterMenu";
import { SidemenuStyled } from "./styled/Sidemenu.styled";

const Sidemenu = ({ toggleMenu }) => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  return (
    <SidemenuStyled>
      <div className="controls">
        {(showLoginMenu && (
          <button type="button">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => setShowLoginMenu(false)}
            />
          </button>
        )) || <div />}
        <button type="button">
          <FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
        </button>
      </div>
      {(showLoginMenu && (
        <>
          <h3>Login</h3>
          <ul>
            <li>
              <button type="button">
                <FontAwesomeIcon icon={faGoogle} />
                Sign in with Google
              </button>
            </li>
            <li>
              <button type="button">
                <FontAwesomeIcon icon={faTwitter} />
                Sign in with Twitter
              </button>
            </li>
            <li>
              <button type="button">
                <FontAwesomeIcon icon={faEnvelope} />
                Sign in with Email
              </button>
            </li>
            <li>
              <button type="button">
                <FontAwesomeIcon icon={faEnvelope} />
                Sign up with Email
              </button>
            </li>
          </ul>
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
