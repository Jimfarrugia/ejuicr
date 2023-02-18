import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { roundToTwoDecimalPlaces } from "../helpers";
import { NumberControlsStyled } from "./styled/NumberControls.styled";

const NumberControls = ({ value, handler, step, min, index = null }) => {
  const increment = () => {
    return index !== (undefined || null)
      ? handler(index, roundToTwoDecimalPlaces(+value + step))
      : handler(roundToTwoDecimalPlaces(+value + step));
  };
  const decrement = () => {
    if (min !== (undefined || null) && +value - step < min) {
      // if there is a minimum and value is less than minimum
      return index !== (undefined || null) ? handler(index, min) : handler(min);
    }
    return index !== (undefined || null)
      ? handler(index, roundToTwoDecimalPlaces(+value - step))
      : handler(roundToTwoDecimalPlaces(+value - step));
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
