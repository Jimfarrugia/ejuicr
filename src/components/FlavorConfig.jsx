import NumberControls from "./NumberControls";

const FlavorConfig = ({ index, flavor, handleChangeFlavorPgVg }) => {
  return (
    <div className="config-wrapper">
      <div className="row">
        <div>
          <span>PG/VG ratio</span>
        </div>
        <div>
          <div className="input-border">
            <input
              type="number"
              min="0"
              max="100"
              value={parseFloat(flavor.pg).toString()}
              onChange={(e) =>
                handleChangeFlavorPgVg(index, e.target.value, "pg")
              }
            />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input
              type="number"
              min="0"
              max="100"
              value={parseFloat(flavor.vg).toString()}
              onChange={(e) =>
                handleChangeFlavorPgVg(index, e.target.value, "vg")
              }
            />
          </div>
        </div>
        <div>
          <NumberControls
            index={index}
            value={flavor.pg}
            handler={handleChangeFlavorPgVg}
            step={5}
          />
        </div>
      </div>
    </div>
  );
};

export default FlavorConfig;
