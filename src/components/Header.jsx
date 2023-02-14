// import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-testid="Header">
      <Link to="/">
        <img src="logo.svg" alt="ejuicr logo" />
      </Link>
      Header component
    </header>
  );
};

export default Header;
