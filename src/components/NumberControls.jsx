import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { NumberControlsStyled } from "./styled/NumberControls.styled";

const NumberControls = () => {
  return (
    <NumberControlsStyled>
      <button type="button">
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button type="button">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </NumberControlsStyled>
  );
};

export default NumberControls;
