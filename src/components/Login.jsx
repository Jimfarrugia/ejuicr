import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
import { validateEmail } from "../helpers";

const Login = ({
  handleClickBack,
  handleClickResetPassword,
  handleClickSignupWithEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (userData) => {
    const response = await axios.post(`${API_URL}/api/user/login`, userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      return setError("Please fill out all fields.");
    }
    if (!validateEmail(email)) {
      return setError("Email is invalid.");
    }
    try {
      await login({ email, password });
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
      <h3>Login</h3>
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
          <button type="button" className="red" onClick={handleClickBack}>
            Cancel
          </button>
          <button type="submit" className="green">
            Sign In
          </button>
        </div>
      </form>
      <p className="small">
        Need an account?
        <br />
        <Link to="#" onClick={handleClickSignupWithEmail}>
          Sign up instead
        </Link>
        .
      </p>
      <p className="small">
        Forgot your password?
        <br />
        <Link to="#" onClick={handleClickResetPassword}>
          Reset it here
        </Link>
        .
      </p>
    </>
  );
};

export default Login;
