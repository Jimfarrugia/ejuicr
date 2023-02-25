import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ cancel, handleClickLoginWithEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Return true if email is valid, false otherwise
    return regex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6)
      return "Password is too short.  It must be at least 6 characters.";
    if (password.length > 250)
      return "Password is too long.  It must not be more than 250 characters.";
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setError("Email is invalid.");
    }
    if (validatePassword(password) !== true) {
      return setError(validatePassword(password));
    }
    if (password !== passwordConfirm) {
      return setError("Passwords do not match.");
    }
    console.log(email, password);
    console.log("submitted");
  };

  return (
    <>
      <h3>Signup</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="sidemenu-form-row">
          <div className="input-border">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="sidemenu-form-row">
          <div className="input-border">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="sidemenu-form-row">
          <div className="input-border">
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
        <div className="sidemenu-form-row">
          <button type="button" className="red" onClick={cancel}>
            Cancel
          </button>
          <button type="submit" className="green">
            Sign Up
          </button>
        </div>
      </form>
      <p>
        Already have an account?
        <br />
        <Link to="#" onClick={handleClickLoginWithEmail}>
          Sign in instead
        </Link>
        .
      </p>
    </>
  );
};

export default Signup;
