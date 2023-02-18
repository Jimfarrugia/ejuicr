import NumberControls from "./NumberControls";

const NicConfig = ({
  nicConfig,
  setNicConfig,
  handleChangeNicConfigStrength,
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
