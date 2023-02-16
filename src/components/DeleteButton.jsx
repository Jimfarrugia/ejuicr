import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeleteButtonStyled } from "./styled/DeleteButton.styled";

const DeleteButton = () => {
  return (
    <DeleteButtonStyled>
      <FontAwesomeIcon icon={faTrash} />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
