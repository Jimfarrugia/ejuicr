import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";
import { validatePassword } from "../helpers";
import { UpdatePasswordStyled } from "./styled/UpdatePassword.styled";

const UpdatePassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const changePassword = async (password) => {
    const url = `${API_URL}/api/user/reset-password/${token}`;
    try {
      await axios.post(url, { password });
      return { status: "success" };
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message: error.response.data.message,
      };
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    if (validatePassword(password) !== true) {
      return setError(validatePassword(password));
    }
    if (password !== passwordConfirm) {
      return setError("Passwords do not match.");
    }
    const response = await changePassword(password);
    return response.status === "success"
      ? setSuccess(true)
      : setError(response.message);
  };

  return (
    <UpdatePasswordStyled>
      <h3>Change Password</h3>
      <hr />
      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Your password has been changed. You can now log in with the new
          password.
        </div>
      )}
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
    </UpdatePasswordStyled>
  );
};

export default UpdatePassword;
