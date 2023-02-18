import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteButtonStyled } from "./styled/DeleteButton.styled";

const DeleteButton = ({ index, handler }) => {
  return (
    <DeleteButtonStyled onClick={() => handler(index)}>
      <FontAwesomeIcon icon={faTrash} />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
