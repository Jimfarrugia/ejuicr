import NumberControls from "./NumberControls";

const NicConfig = ({
  nicConfig,
  setNicConfig,
  handleChangeNicConfigStrength,
  handleChangeNicConfigPgVg,
}) => {
  const handleStepNicConfigStrength = (value) => {
    setNicConfig({
      ...nicConfig,
      strength: value,
    });
  };

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
              value={parseFloat(nicConfig.pg).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeNicConfigPgVg(e.target.value, "pg")}
            />
          </div>
          <span className="label-between">/</span>
          <div className="input-border">
            <input
              type="number"
              value={parseFloat(nicConfig.vg).toString()}
              min="0"
              max="100"
              onChange={(e) => handleChangeNicConfigPgVg(e.target.value, "vg")}
            />
          </div>
        </div>
        <div>
          <NumberControls
            value={nicConfig.pg}
            handler={handleChangeNicConfigPgVg}
            step={5}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div>
          <span>Strength</span>
        </div>
        <div>
          <div className="input-border">
            <input
              type="number"
              className="wide"
              value={nicConfig.strength.toString()}
              min="0"
              onChange={(e) => handleChangeNicConfigStrength(e.target.value)}
            />
          </div>
          <span className="label-right">mg/mL</span>
        </div>
        <div>
          <NumberControls
            value={nicConfig.strength}
            handler={handleStepNicConfigStrength}
            step={5}
            min={0}
          />
        </div>
      </div>
    </div>
  );
};

export default NicConfig;
