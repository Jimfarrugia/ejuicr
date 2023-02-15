import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ConfigButtonStyled } from "./styled/ConfigButton.styled";

const ConfigButton = () => {
  return (
    <ConfigButtonStyled>
      <FontAwesomeIcon icon={faGear} />
    </ConfigButtonStyled>
  );
};

export default ConfigButton;
