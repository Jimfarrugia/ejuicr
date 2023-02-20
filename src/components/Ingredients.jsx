import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Flavor from "./Flavor";
import NicConfig from "./NicConfig";
import ConfigButton from "./ConfigButton";
import { IngredientsStyled } from "./styled/IngredientsStyled";
import { roundToTwoDecimalPlaces } from "../helpers";

const Ingredients = ({
  nicConfig,
  nicResults,
  handleChangeNicConfigStrength,
  handleChangeNicConfigPgVg,
  targetPg,
  targetVg,
  pgRequired,
  vgRequired,
  flavors,
  handleChangeFlavorName,
  handleChangeFlavorPercentage,
  handleChangeFlavorPgVg,
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
          <span>
            Nic. ({`${nicConfig.strength}mg, ${nicConfig.pg}/${nicConfig.vg}`})
          </span>
        </div>
        <div>
          <span>{`${nicResults.percentage}%`}</span>
        </div>
        <div>
          <span>{`${nicResults.amount}mL`}</span>
        </div>
        <div>
          {/*// TODO - Adjust the weight per mL based on pg/vg ratio */}
          <span>{`${roundToTwoDecimalPlaces(
            nicResults.amount * 1.036
          )}g`}</span>
        </div>
      </div>
      {nicConfigOpen && (
        <NicConfig
          nicConfig={nicConfig}
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
          <span>{`${targetPg}%`}</span>
        </div>
        <div>
          <span>{`${pgRequired}mL`}</span>
        </div>
        <div>
          <span>{`${roundToTwoDecimalPlaces(pgRequired * 1.036)}g`}</span>
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span className="base-ingredient">VG</span>
        </div>
        <div>
          <span>{`${targetVg}%`}</span>
        </div>
        <div>
          <span>{`${vgRequired}mL`}</span>
        </div>
        <div>
          <span>{`${roundToTwoDecimalPlaces(pgRequired * 1.26)}g`}</span>
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
          handleChangeFlavorPgVg={handleChangeFlavorPgVg}
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
