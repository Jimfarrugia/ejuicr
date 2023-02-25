import { Link } from "react-router-dom";

const Login = () => {
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
        <button type="button" className="red">
          Cancel
        </button>
        <button type="button" className="green">
          Sign In
        </button>
      </div>
      <p>
        Need an account?
        <br />
        <Link>Sign up instead</Link>.
      </p>
      <p>
        Forgot your password?
        <br />
        <Link>Reset it here</Link>.
      </p>
    </>
  );
};

export default Login;
