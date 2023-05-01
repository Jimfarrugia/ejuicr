import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      return setError("Please fill out all fields.");
    }
    if (!validateEmail(email)) {
      setIsLoading(false);
      return setError("Email is invalid.");
    }
    axios
      .post(`${API_URL}/api/user/login`, { email, password })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoading(false);
        navigate("/");
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
      <h3>Login</h3>
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
      )}
    </>
  );
};

export default Login;
