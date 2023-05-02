import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Spinner from "./Spinner";
import { API_URL } from "../constants";
import { MyAccountStyled } from "./styled/MyAccount.styled";
import { validatePassword } from "../helpers";
import { ConfirmDeleteStyled } from "./styled/ConfirmDelete.styled";
import googleLogo from "../assets/google-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [authProvider, setAuthProvider] = useState(undefined);
  const [imgAltText, setImgAltText] = useState(undefined);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [isLoadingChangePassword, setIsLoadingChangePassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  const { token } = JSON.parse(localStorage.getItem("user"));
  const headers = { Authorization: `Bearer ${token}` };

  const onSubmitChangePassword = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setIsLoadingChangePassword(true);
    if (validatePassword(newPassword) !== true) {
      setIsLoadingChangePassword(false);
      return setError(validatePassword(newPassword));
    }
    if (newPassword !== newPasswordConfirm) {
      setIsLoadingChangePassword(false);
      return setError("Passwords do not match.");
    }
    axios
      .post(
        `${API_URL}/api/user/change-password`,
        { password, newPassword },
        { headers }
      )
      .then((response) => {
        setSuccess("Your password has been changed.");
        setIsLoadingChangePassword(false);
      })
      .catch((error) => {
        console.error(error);
        setError(
          error.response.data.message ||
            "Failed to change the password.  Try again or contact support."
        );
        setIsLoadingChangePassword(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("settings");
    window.location.reload();
  };

  const handleClickDeleteAccount = () => setShowDeleteDialogue(true);
  const handleCancelDelete = () => setShowDeleteDialogue(false);
  const handleConfirmDelete = () => {
    axios
      .delete(`${API_URL}/api/user`, { headers })
      .then((response) => {
        localStorage.removeItem("user");
        localStorage.removeItem("settings");
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/user/me`, { headers })
      .then((response) => {
        setUser(response.data);
        setAuthProvider(response.data.authProvider);
        setImgAltText(
          `${response.data.handle || response.data.displayName} ${
            response.data.authProvider
          } profile picture`
        );
      })
      .catch((error) => console.error(error));
    axios
      .get(`${API_URL}/api/recipes`, { headers })
      .then((response) => {
        setRecipes(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <MyAccountStyled>
        <h3>My Account</h3>
        <hr />
        <div className="profile">
          {user.picture && (
            <div className="user-picture">
              <img
                src={user.picture}
                alt={imgAltText}
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          {(authProvider === "twitter" && (
            <p>
              <FontAwesomeIcon icon={faTwitter} /> @{user.handle}
            </p>
          )) ||
            (authProvider === "google" && (
              <p>
                <FontAwesomeIcon icon={faGoogle} /> {user.displayName}
              </p>
            ))}
          {user.email && (
            <p>
              {!authProvider && <FontAwesomeIcon icon={faEnvelope} />}{" "}
              {user.email}
            </p>
          )}
          {recipes.length > 0 && (
            <p>
              <Link to="/recipes">
                {`${recipes.length} Saved Recipe${
                  recipes.length > 1 ? "s" : ""
                }`}
              </Link>
            </p>
          )}
          <p>
            <button type="button" onClick={(e) => handleLogout()}>
              Sign Out
            </button>
          </p>
        </div>
        {(user.hasTwitterLinked || user.hasGoogleLinked) && (
          <>
            <h4>Linked Accounts</h4>
            <hr />
            <p>
              These accounts are linked to your ejuicr account so you can sign
              in without having to enter a password. You can see the data which
              has been shared with ejuicr below.
            </p>
            <div className="linked-accounts">
              {user.hasGoogleLinked && (
                <div>
                  <div>
                    <img src={googleLogo} alt="Google logo" />
                  </div>
                  <div>
                    <h5>Google</h5>
                    <h6>Data Collected:</h6>
                    <p>Display name, email, profile picture.</p>
                  </div>
                </div>
              )}
              {user.hasTwitterLinked && (
                <div>
                  <div>
                    <img src={twitterLogo} alt="Twitter logo" />
                  </div>
                  <div>
                    <h5>Twitter</h5>
                    <h6>Data Collected:</h6>
                    <p>Handle, display name, email, profile picture.</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        {user.hasPassword && (
          <>
            <h4>Change Password</h4>
            <hr />
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            {(isLoadingChangePassword && <Spinner />) || (
              <form onSubmit={onSubmitChangePassword}>
                <div className="form-row">
                  <div className="input-border">
                    <input
                      type="password"
                      placeholder="Current Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-border">
                    <input
                      type="password"
                      autoComplete="off"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-border">
                    <input
                      type="password"
                      autoComplete="off"
                      placeholder="Confirm New Password"
                      value={newPasswordConfirm}
                      onChange={(e) => setNewPasswordConfirm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <button type="submit">Change Password</button>
                </div>
              </form>
            )}
          </>
        )}
        <h4>Delete Account</h4>
        <hr />
        <p>
          You can permanently delete your ejuicr account and personal data from
          the database as well as all of your saved recipes.{" "}
          <strong className="red">This can not be undone.</strong>
        </p>
        <button
          className="red"
          type="button"
          onClick={handleClickDeleteAccount}
        >
          Delete Account
        </button>
      </MyAccountStyled>
      {showDeleteDialogue && (
        <ConfirmDelete
          handleCancelDelete={handleCancelDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

const ConfirmDelete = ({ handleCancelDelete, handleConfirmDelete }) => {
  return (
    <ConfirmDeleteStyled
      onClick={(e) => {
        // trigger handleCancelDelete if the backdrop is clicked
        if (e.target === e.currentTarget) {
          handleCancelDelete();
        }
      }}
    >
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <p>
            The following data will be <strong>permanently deleted</strong>:
          </p>
          <ul>
            <li>Your login credentials.</li>
            <li>Your profile information.</li>
            <li>Your saved recipes.</li>
            <li>Your saved settings.</li>
          </ul>
          <p>
            <strong>
              <em>This can not be undone.</em>
            </strong>
          </p>
          <p>Are you absolutely sure you want to delete your account?</p>
          <div>
            <button type="button" onClick={handleCancelDelete}>
              Cancel
            </button>
            <button
              type="submit"
              className="red"
              onClick={(e) => {
                handleConfirmDelete();
                handleCancelDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </ConfirmDeleteStyled>
  );
};

export default MyAccount;
