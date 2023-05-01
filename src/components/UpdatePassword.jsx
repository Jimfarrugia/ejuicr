import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { API_URL } from "../constants";
import { validatePassword } from "../helpers";
import { UpdatePasswordStyled } from "./styled/UpdatePassword.styled";

const UpdatePassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setIsLoading(true);
    if (validatePassword(password) !== true) {
      setIsLoading(false);
      return setError(validatePassword(password));
    }
    if (password !== passwordConfirm) {
      setIsLoading(false);
      return setError("Passwords do not match.");
    }
    const url = `${API_URL}/api/user/reset-password/${token}`;
    axios
      .post(url, { password })
      .then((response) => {
        setSuccess(
          "Your password has been changed. You can now log in with the new password."
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(
          error.response.data.message ||
            "Failed to set new password.  Try again or contact support."
        );
        setIsLoading(false);
      });
  };

  return (
    <UpdatePasswordStyled>
      <h3>Change Password</h3>
      <hr />
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      {isLoading && <Spinner />}
      {!isLoading && !success && (
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="input-border">
              <input
                type="password"
                autoComplete="new-password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-border">
              <input
                type="password"
                value={passwordConfirm}
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </UpdatePasswordStyled>
  );
};

export default UpdatePassword;
