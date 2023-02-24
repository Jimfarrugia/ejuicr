import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteButtonStyled } from "./styled/DeleteButton.styled";

const DeleteButton = ({ testId, index, handler }) => {
  return (
    <DeleteButtonStyled data-testid={testId} onClick={() => handler(index)}>
      <FontAwesomeIcon icon={faTrash} />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
