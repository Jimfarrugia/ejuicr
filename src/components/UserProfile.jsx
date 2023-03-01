import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const UserProfile = ({ user }) => {
  return (
    <div className="user-data">
      <p>You are signed in as:</p>
      {(user.authProvider && user.authProvider === "google" && (
        <>
          <div className="user-picture">
            <img
              src={user.picture}
              alt={`${user.displayName} google profile picture`}
              referrerPolicy="no-referrer"
            />
          </div>
          <p>
            <FontAwesomeIcon icon={faGoogle} />
            {user.displayName}
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
