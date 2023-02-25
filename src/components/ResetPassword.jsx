const ResetPassword = ({ cancel }) => {
  return (
    <>
      <h3>Reset Password</h3>
      <div className="sidemenu-form-row">
        <div className="input-border">
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="sidemenu-form-row">
        <button type="button" className="red" onClick={cancel}>
          Cancel
        </button>
        <button type="button" className="green">
          Confirm
        </button>
      </div>
    </>
  );
};

export default ResetPassword;
