import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import FooterMenu from "./FooterMenu";
import { SidemenuStyled } from "./styled/Sidemenu.styled";

const Sidemenu = ({ toggleMenu }) => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleClickBack = () => {
    setShowLoginMenu(!showLoginMenu);
    setShowLoginForm(false);
    setShowSignupForm(false);
    setShowResetPasswordForm(false);
  };

  const handleClickLoginWithEmail = () => {
    setShowLoginMenu(false);
    setShowSignupForm(false);
    setShowLoginForm(true);
  };

  const handleClickSignupWithEmail = () => {
    setShowLoginMenu(false);
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const handleClickResetPassword = () => {
    setShowLoginForm(false);
    setShowResetPasswordForm(true);
  };

  return (
    <SidemenuStyled>
      <div className="controls">
        {((showLoginMenu ||
          showLoginForm ||
          showSignupForm ||
          showResetPasswordForm) &&
          !user && (
            <button type="button">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handleClickBack} />
            </button>
          )) || <div />}
        <button type="button">
          <FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
        </button>
      </div>
      {(user && (
        <div className="user-data">
          <Link className="logo" to="/" onClick={toggleMenu}>
            <img src="logo.svg" alt="ejuicr logo" />
          </Link>
          <p>You are signed in as:</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </p>
          <p>
            <Link to="#">Saved Recipes</Link>
          </p>
          <p>
            <Link to="#">Settings</Link>
          </p>
          <p>
            <Link to="#" onClick={handleLogout}>
              Logout
            </Link>
          </p>
        </div>
      )) ||
        (showLoginMenu && (
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
                <button type="button" onClick={handleClickLoginWithEmail}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Sign in with Email
                </button>
              </li>
              <li>
                <button type="button" onClick={handleClickSignupWithEmail}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Sign up with Email
                </button>
              </li>
            </ul>
          </>
        )) ||
        (showLoginForm && (
          <Login
            handleClickBack={handleClickBack}
            handleClickResetPassword={handleClickResetPassword}
            handleClickSignupWithEmail={handleClickSignupWithEmail}
          />
        )) ||
        (showSignupForm && (
          <Signup
            handleClickBack={handleClickBack}
            handleClickLoginWithEmail={handleClickLoginWithEmail}
          />
        )) ||
        (showResetPasswordForm && (
          <ResetPassword cancel={handleClickBack} />
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
