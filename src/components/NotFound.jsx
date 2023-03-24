import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <hr />
      <p>The page you're looking for could not be found.</p>
      <p>It may have been removed or the URL may have changed.</p>
      <p>
        If you came to this page directly, please double-check that you entered
        the address correctly.
      </p>
      <p>
        Please contact <Link to="/help">support</Link> if you're unable to find
        what you're looking for.
      </p>
    </div>
  );
};

export default NotFound;
