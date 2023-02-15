import { Link } from "react-router-dom";

const FooterMenu = ({ toggleMenu }) => {
  return (
    <ul>
      <li>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="/help" onClick={toggleMenu}>
          Help
        </Link>
      </li>
      <li>
        <Link to="/contribute" onClick={toggleMenu}>
          Contribute
        </Link>
      </li>
      <li>
        <a
          href="https://www.jimfarrugia.com.au"
          target="blank"
          onClick={toggleMenu}
        >
          Jim Farrugia
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com/ejuicr"
          target="blank"
          onClick={toggleMenu}
        >
          @ejuicr
        </a>
      </li>
    </ul>
  );
};

export default FooterMenu;
