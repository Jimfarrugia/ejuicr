import { Link } from "react-router-dom";

const Signup = ({ cancel }) => {
  return (
    <>
      <h3>Signup</h3>
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
        <div className="input-border">
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="sidemenu-form-row">
        <button type="button" className="red" onClick={cancel}>
          Cancel
        </button>
        <button type="button" className="green">
          Sign Up
        </button>
      </div>
      <p>
        Already have an account?
        <br />
        <Link>Sign in instead</Link>.
      </p>
    </>
  );
};

export default Signup;
