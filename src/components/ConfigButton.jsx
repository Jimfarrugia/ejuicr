import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ConfigButtonStyled } from "./styled/ConfigButton.styled";

const ConfigButton = ({ testId, toggle }) => {
  return (
    <ConfigButtonStyled data-testid={testId} onClick={toggle}>
      <FontAwesomeIcon icon={faGear} />
    </ConfigButtonStyled>
  );
};

export default ConfigButton;
