import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

const ResetPassword = ({ cancel }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const resetPassword = async (email) => {
    const url = `${API_URL}/api/user/reset-password`;
    try {
      await axios.post(url, { email });
      return { status: "success" };
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message: error.response.data.message,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    const response = await resetPassword(email);
    return response.status === "success"
      ? setSuccess(true)
      : setError(response.message);
  };

  return (
    <>
      <h3>Reset Password</h3>
      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Check your email for a link to change your password.
        </div>
      )}
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
          <button type="button" className="red" onClick={cancel}>
            Cancel
          </button>
          <button type="submit" className="green">
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
