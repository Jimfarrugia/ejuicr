import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { roundToTwoDecimalPlaces } from "../helpers";
import { NumberControlsStyled } from "./styled/NumberControls.styled";

const NumberControls = ({ value, handler, step, min }) => {
  const increment = () => handler(roundToTwoDecimalPlaces(+value + step));
  const decrement = () => {
    if (min !== (undefined || null) && +value - step < min) {
      return handler(min);
    }
    handler(roundToTwoDecimalPlaces(+value - step));
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
