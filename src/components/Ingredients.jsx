import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ConfigButton from "./ConfigButton";
import DeleteButton from "./DeleteButton";
import NumberControls from "./NumberControls";
import { IngredientsStyled } from "./styled/IngredientsStyled";

const Ingredients = () => {
  const [nicConfigOpen, setNicConfigOpen] = useState(false);
  const [flavorConfigOpen, setFlavorConfigOpen] = useState(false);

  const toggleNicConfigOpen = () => setNicConfigOpen(!nicConfigOpen);
  const toggleFlavorConfigOpen = () => setFlavorConfigOpen(!flavorConfigOpen);

  const NicConfig = () => {
    return (
      <div className="config-wrapper">
        <div className="row">
          <div>
            <span>PG/VG ratio</span>
          </div>
          <div>
            <div className="input-border">
              <input type="number" defaultValue="0" />
            </div>
            <span className="label-between">/</span>
            <div className="input-border">
              <input type="number" defaultValue="100" />
            </div>
          </div>
          <div>
            <NumberControls />
          </div>
        </div>
        <hr />
        <div className="row">
          <div>
            <span>Strength</span>
          </div>
          <div>
            <div className="input-border">
              <input type="number" defaultValue="50" />
            </div>
            <span className="label-right">mg/mL</span>
          </div>
          <div>
            <NumberControls />
          </div>
        </div>
      </div>
    );
  };

  const FlavorConfig = () => {
    return (
      <div className="config-wrapper">
        <div className="row">
          <div>
            <span>PG/VG ratio</span>
          </div>
          <div>
            <div className="input-border">
              <input type="number" defaultValue="0" />
            </div>
            <span className="label-between">/</span>
            <div className="input-border">
              <input type="number" defaultValue="100" />
            </div>
          </div>
          <div>
            <NumberControls />
          </div>
        </div>
      </div>
    );
  };

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
      {nicConfigOpen && <NicConfig />}
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
            <input type="text" defaultValue="Flavor 1" />
          </div>
        </div>
        <div>
          <div className="input-border">
            <input type="number" defaultValue="10" />
          </div>
          <span className="label-right">%</span>
        </div>
        <div>
          <NumberControls />
          <DeleteButton />
        </div>
      </div>
      {flavorConfigOpen && <FlavorConfig />}
      <hr />
      <button type="button" className="add-ingredient-btn">
        <FontAwesomeIcon icon={faPlus} />
        <span>Add Ingredient</span>
      </button>
      <hr />
    </IngredientsStyled>
  );
};

export default Ingredients;