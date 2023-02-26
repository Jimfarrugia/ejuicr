import { useState } from "react";
import { useParams } from "react-router-dom";
import { UpdatePasswordStyled } from "./styled/UpdatePassword.styled";

const UpdatePassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <UpdatePasswordStyled>
      <h3>Change Password</h3>
      <hr />
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
