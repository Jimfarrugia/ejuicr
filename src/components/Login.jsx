import { Link } from "react-router-dom";

const Login = ({
  cancel,
  handleClickResetPassword,
  handleClickSignupWithEmail,
}) => {
  return (
    <>
      <h3>Login</h3>
      <div className="sidemenu-form-row">
        <div className="input-border">
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="sidemenu-form-row">
        <div className="input-border">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="sidemenu-form-row">
        <button type="button" className="red" onClick={cancel}>
          Cancel
        </button>
        <button type="button" className="green">
          Sign In
        </button>
      </div>
      <p>
        Need an account?
        <br />
        <Link to="#" onClick={handleClickSignupWithEmail}>
          Sign up instead
        </Link>
        .
      </p>
      <p>
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
