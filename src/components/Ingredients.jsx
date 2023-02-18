import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NicConfig from "./NicConfig";
import FlavorConfig from "./FlavorConfig";
import ConfigButton from "./ConfigButton";
import DeleteButton from "./DeleteButton";
import NumberControls from "./NumberControls";
import { IngredientsStyled } from "./styled/IngredientsStyled";

const Ingredients = ({
  nicConfig,
  setNicConfig,
  handleChangeNicConfigStrength,
  handleChangeNicConfigPgVg,
  flavors,
  handleChangeFlavorName,
  handleChangeFlavorPercentage,
  handleRemoveFlavor,
  handleAddFlavor,
}) => {
  const [nicConfigOpen, setNicConfigOpen] = useState(false);
  const [flavorConfigOpen, setFlavorConfigOpen] = useState(false);

  const toggleNicConfigOpen = () => setNicConfigOpen(!nicConfigOpen);
  const toggleFlavorConfigOpen = () => setFlavorConfigOpen(!flavorConfigOpen);

  return (
    <IngredientsStyled>
      <h3>Ingredients</h3>
      <hr />
      <div className="row">
        <div>
          <ConfigButton toggle={toggleNicConfigOpen} />
          <span>Nic. (50mg, 0/100)</span>
        </div>
        <div>
          <span>10%</span>
        </div>
        <div>
          <span>12mL</span>
        </div>
        <div>
          <span>12.48g</span>
        </div>
      </div>
      {nicConfigOpen && (
        <NicConfig
          nicConfig={nicConfig}
          setNicConfig={setNicConfig}
          handleChangeNicConfigStrength={handleChangeNicConfigStrength}
          handleChangeNicConfigPgVg={handleChangeNicConfigPgVg}
        />
      )}
      <hr />
      <div className="row">
        <div>
          <span className="base-ingredient">PG</span>
        </div>
        <div>
          <span>20%</span>
        </div>
        <div>
          <span>60mL</span>
        </div>
        <div>
          <span>62.4g</span>
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span className="base-ingredient">VG</span>
        </div>
        <div>
          <span>66%</span>
        </div>
        <div>
          <span>198mL</span>
        </div>
        <div>
          <span>249.48g</span>
        </div>
      </div>
      <hr />
      {flavors.map((flavor, index) => (
        <React.Fragment key={index}>
          <div className="row flavor-results">
            <div>
              <span>15mL</span>
            </div>
            <div>
              <span>15.62g</span>
            </div>
          </div>
          <div className="row flavor">
            <div>
              <ConfigButton toggle={toggleFlavorConfigOpen} />
              <div className="input-border">
                <input
                  type="text"
                  maxLength="60"
                  value={flavor.name}
                  onChange={(e) =>
                    handleChangeFlavorName(index, e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <div className="input-border">
                <input
                  type="number"
                  value={flavor.percentage.toString()}
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
                value={flavor.percentage}
                handler={handleChangeFlavorPercentage}
                step={0.5}
                min={0}
                index={index}
              />
              <DeleteButton index={index} handler={handleRemoveFlavor} />
            </div>
          </div>
          {flavorConfigOpen && <FlavorConfig />}
          <hr />
        </React.Fragment>
      ))}
      <button
        type="button"
        className="add-ingredient-btn"
        onClick={handleAddFlavor}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add Flavor</span>
      </button>
      <hr />
    </IngredientsStyled>
  );
};

export default Ingredients;
