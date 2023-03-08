import { ConfirmDeleteStyled } from "./styled/ConfirmDelete.styled";

const ConfirmDelete = ({
  index,
  name,
  handleCancelDelete,
  handleConfirmDelete,
}) => {
  return (
    <ConfirmDeleteStyled
      onClick={(e) => {
        // trigger handleCancelDelete if the backdrop is clicked
        if (e.target === e.currentTarget) {
          handleCancelDelete();
        }
      }}
    >
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <p>
            Are you sure you want to delete <strong>"{name}"</strong>?
          </p>
          <div>
            <button type="button" onClick={handleCancelDelete}>
              Cancel
            </button>
            <button
              type="submit"
              className="red"
              onClick={(e) => {
                handleConfirmDelete(index);
                handleCancelDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </ConfirmDeleteStyled>
  );
};

export default ConfirmDelete;
