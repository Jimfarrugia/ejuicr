import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const UserProfile = ({ user }) => {
  const authProvider = user.authProvider || null;
  const imgAltText = `${
    user.handle || user.displayName
  } ${authProvider} profile picture`;

  return (
    <div className="user-data">
      <p>You are signed in as:</p>
      {user.picture && (
        <div className="user-picture">
          <img
            src={user.picture}
            alt={imgAltText}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      {(authProvider === "google" && (
        <p>
          <FontAwesomeIcon icon={faGoogle} />
          {user.displayName}
        </p>
      )) ||
        (authProvider === "twitter" && (
          <p>
            <FontAwesomeIcon icon={faTwitter} />@{user.handle}
          </p>
        )) || (
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </p>
        )}
    </div>
  );
};

export default UserProfile;
