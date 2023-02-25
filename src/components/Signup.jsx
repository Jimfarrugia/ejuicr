import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
import { validateEmail, validatePassword } from "../helpers";

const Signup = ({ handleClickBack, handleClickLoginWithEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/user`, userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      return setError("Email is invalid.");
    }
    if (validatePassword(password) !== true) {
      return setError(validatePassword(password));
    }
    if (password !== passwordConfirm) {
      return setError("Passwords do not match.");
    }
    try {
      await registerUser({ email, password });
    } catch (error) {
      setError(
        error.response.data.message || "Failed to register new account."
      );
      return console.log(error);
    }
    handleClickBack();
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
          <button type="button" className="red" onClick={handleClickBack}>
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
