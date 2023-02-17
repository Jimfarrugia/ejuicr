import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { NumberControlsStyled } from "./styled/NumberControls.styled";

const NumberControls = ({ value, handler, step, min }) => {
  const increment = () => handler(value + step);
  const decrement = () => {
    // If the min prop is not nullish and the result would be < min, return min
    if (min !== (undefined || null) && value - step < min) {
      return handler(min);
    }
    handler(value - step);
  };

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
