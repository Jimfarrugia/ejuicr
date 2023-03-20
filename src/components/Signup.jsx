import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { API_URL } from "../constants";
import { validateEmail, validatePassword } from "../helpers";

const Signup = ({ handleClickBack, handleClickLoginWithEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (!validateEmail(email)) {
      setIsLoading(false);
      return setError("Email is invalid.");
    }
    if (validatePassword(password) !== true) {
      setIsLoading(false);
      return setError(validatePassword(password));
    }
    if (password !== passwordConfirm) {
      setIsLoading(false);
      return setError("Passwords do not match.");
    }
    axios
      .post(`${API_URL}/api/user`, { email, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoading(false);
        handleClickBack();
      })
      .catch((error) => {
        console.error(error);
        setError(
          error.response.data.message || "Failed to register new account."
        );
        setIsLoading(false);
      });
  };

  return (
    <>
      <h3>Signup</h3>
      {error && <div className="error-message">{error}</div>}
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
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
              <button type="button" className="red" onClick={handleClickBack}>
                Cancel
              </button>
              <button type="submit" className="green">
                Sign Up
              </button>
            </div>
          </form>
          <p className="small">
            Already have an account?
            <br />
            <Link to="#" onClick={handleClickLoginWithEmail}>
              Sign in instead
            </Link>
            .
          </p>
        </>
      )}
    </>
  );
};

export default Signup;
