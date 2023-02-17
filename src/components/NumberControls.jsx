import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { NumberControlsStyled } from "./styled/NumberControls.styled";

const NumberControls = ({ value, handler, step }) => {
  const increment = () => handler(value + step);
  const decrement = () => handler(value - step);

  return (
    <NumberControlsStyled>
      <button type="button" onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button type="button" onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </NumberControlsStyled>
  );
};

export default NumberControls;
