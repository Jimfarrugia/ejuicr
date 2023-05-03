import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const UserProfile = ({ user }) => {
  const authProvider = user.authProvider || null;
  const profilePicAltText = `your ${authProvider} profile picture`;
  const profilePicSrc =
    (authProvider === "google" && user.googlePicture) ||
    (authProvider === "twitter" && user.twitterPicture) ||
    "#";

  return (
    <div className="user-data">
      <p>You are signed in as:</p>
      {(user.googlePicture || user.twitterPicture) && (
        <div className="user-picture">
          <img
            src={profilePicSrc}
            alt={profilePicAltText}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      {(authProvider === "google" && (
        <p>
          <FontAwesomeIcon icon={faGoogle} />
          {user.googleDisplayName}
        </p>
      )) ||
        (authProvider === "twitter" && (
          <p>
            <FontAwesomeIcon icon={faTwitter} />@{user.twitterHandle}
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
