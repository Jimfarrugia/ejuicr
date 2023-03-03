import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const UserProfile = ({ user }) => {
  const authProvider =
    (user.authProvider && user.authProvider === "google" && "google") ||
    (user.authProvider && user.authProvider === "twitter" && "twitter") ||
    null;

  const imgAltText =
    authProvider === "twitter"
      ? `${user.handle} ${authProvider} profile picture`
      : `${user.displayName} ${authProvider} profile picture`;

  return (
    <div className="user-data">
      <p>You are signed in as:</p>
      {(authProvider === "google" && (
        <>
          <div className="user-picture">
            <img
              src={user.picture}
              alt={imgAltText}
              referrerPolicy="no-referrer"
            />
          </div>
          <p>
            <FontAwesomeIcon icon={faGoogle} />
            {user.displayName}
          </p>
        </>
      )) ||
        (authProvider === "twitter" && (
          <>
            <div className="user-picture">
              <img src={user.picture} alt={imgAltText} />
            </div>
            <p>
              <FontAwesomeIcon icon={faTwitter} />@{user.handle}
            </p>
          </>
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
