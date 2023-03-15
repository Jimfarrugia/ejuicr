import { useState } from "react";
import FlavorConfig from "./FlavorConfig";
import ConfigButton from "./ConfigButton";
import DeleteButton from "./DeleteButton";
import NumberControls from "./NumberControls";
import { isResultsInvalid } from "../helpers";

const Flavor = ({
  index,
  flavor,
  handleChangeFlavorName,
  handleChangeFlavorPercentage,
  handleChangeFlavorPgVg,
  handleRemoveFlavor,
  units,
}) => {
  const [flavorConfigOpen, setFlavorConfigOpen] = useState(false);

  const toggleFlavorConfigOpen = () => setFlavorConfigOpen(!flavorConfigOpen);

  const { amount, weight, name, percentage } = flavor;

  const isInvalid = isResultsInvalid(percentage, amount, weight); // ? maybe unnecessary

  return (
    <>
      <div className={`row flavor-results ${isInvalid ? "red" : ""}`}>
        {(units === "weight" && (
          <>
            <div></div>
            <div>
              <span>{`${weight}g`}</span>
            </div>
          </>
        )) ||
          (units === "volume" && (
            <>
              <div></div>
              <div>
                <span>{`${amount}mL`}</span>
              </div>
            </>
          )) || (
            <>
              <div>
                <span>{`${amount}mL`}</span>
              </div>
              <div>
                <span>{`${weight}g`}</span>
              </div>
            </>
          )}
      </div>
      <div className="row flavor">
        <div>
          <ConfigButton
            testId={`flavor${index + 1}ConfigBtn`}
            toggle={toggleFlavorConfigOpen}
          />
          <div className="input-border">
            <input
              data-testid={`flavor${index + 1}NameInput`}
              type="text"
              maxLength="60"
              value={name}
              onChange={(e) => handleChangeFlavorName(index, e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="input-border">
            <input
              data-testid={`flavor${index + 1}PercentInput`}
              type="number"
              value={percentage.toString()}
              min="0"
              max="100"
              onChange={(e) =>
                handleChangeFlavorPercentage(index, e.target.value)
              }
            />
          </div>
          <span className="label-right">%</span>
        </div>
        <div>
          <NumberControls
            incrementTestId={`flavor${index + 1}PercentIncBtn`}
            decrementTestId={`flavor${index + 1}PercentDecBtn`}
            value={percentage}
            handler={handleChangeFlavorPercentage}
            step={0.5}
            min={0}
            index={index}
          />
          <DeleteButton
            testId={`flavor${index + 1}DeleteBtn`}
            index={index}
            handler={handleRemoveFlavor}
          />
        </div>
      </div>
      {flavorConfigOpen && (
        <FlavorConfig
          index={index}
          flavor={flavor}
          handleChangeFlavorPgVg={handleChangeFlavorPgVg}
        />
      )}
      <hr />
    </>
  );
};

export default Flavor;
