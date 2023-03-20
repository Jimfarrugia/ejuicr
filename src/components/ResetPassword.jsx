import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { API_URL } from "../constants";

const ResetPassword = ({ cancel }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setIsLoading(true);
    const url = `${API_URL}/api/user/reset-password`;
    axios
      .post(url, { email })
      .then((response) => {
        setSuccess(
          "Check your email inbox for a link to change your password."
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(
          error.response.data.message ||
            "Failed to process the request.  Try again or contact support."
        );
        setIsLoading(false);
      });
  };

  return (
    <>
      <h3>Reset Password</h3>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      {isLoading && <Spinner />}
      {!isLoading && !success && (
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
      )}
    </>
  );
};

export default ResetPassword;
