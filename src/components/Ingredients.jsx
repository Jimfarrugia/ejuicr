import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Flavor from "./Flavor";
import NicConfig from "./NicConfig";
import ConfigButton from "./ConfigButton";
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

  const toggleNicConfigOpen = () => setNicConfigOpen(!nicConfigOpen);

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
        <Flavor
          key={index}
          index={index}
          flavor={flavor}
          handleChangeFlavorName={handleChangeFlavorName}
          handleChangeFlavorPercentage={handleChangeFlavorPercentage}
          handleRemoveFlavor={handleRemoveFlavor}
        />
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
