import { useState } from "react";
import FlavorConfig from "./FlavorConfig";
import ConfigButton from "./ConfigButton";
import DeleteButton from "./DeleteButton";
import NumberControls from "./NumberControls";

const Flavor = ({
  index,
  flavor,
  handleChangeFlavorName,
  handleChangeFlavorPercentage,
  handleChangeFlavorPgVg,
  handleRemoveFlavor,
}) => {
  const [flavorConfigOpen, setFlavorConfigOpen] = useState(false);

  const toggleFlavorConfigOpen = () => setFlavorConfigOpen(!flavorConfigOpen);

  return (
    <>
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
              onChange={(e) => handleChangeFlavorName(index, e.target.value)}
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
