import { Link } from "react-router-dom";
import { SidemenuStyled } from "./styled/Sidemenu.styled";

const Sidemenu = ({ toggleMenu }) => {
  return (
    <SidemenuStyled>
      <Link className="link" to="/about" onClick={toggleMenu}>
        About
      </Link>
      <Link className="link" to="/help" onClick={toggleMenu}>
        Help
      </Link>
      <Link className="link" to="/contribute" onClick={toggleMenu}>
        Contribute
      </Link>
    </SidemenuStyled>
  );
};

export default Sidemenu;
